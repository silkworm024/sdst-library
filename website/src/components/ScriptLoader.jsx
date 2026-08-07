import { useState } from "react";

async function fetchScript(slug) {
  const pageTitle = `Scriptapedia/${slug}`;

  const url =
    "https://en.wikibooks.org/w/api.php?" +
    new URLSearchParams({
      action: "parse",
      page: pageTitle,
      format: "json",
      formatversion: "2",
      prop: "text",
      origin: "*",
    });

  const response = await fetch(url);
  const data = await response.json();

  if (data.error) {
    throw new Error(data.error.info);
  }

  return data.parse.text;
}

export default function ScriptLoader({ slug }) {
  const [html, setHtml] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);

  async function handleClick() {
    setLoading(true);

    try {
      const script = await fetchScript(slug);
      setHtml(script);
      setLoaded(true);
    } catch (err) {
      setHtml(`<p style="color:red;">${err.message}</p>`);
      setLoaded(true);
    }

    setLoading(false);
  }

  return (
    <div>
      {!loaded && (
        <button onClick={handleClick}>
          {slug}
        </button>
      )}

      {loading && <p>Loading...</p>}

      {html && (
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
      )}
    </div>
  );
}




