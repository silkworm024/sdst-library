import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BrowsePage from './pages/BrowsePage'
import SubmitPage from './pages/SubmitPage'
import './App.css'

function App() {
  return (
    <BrowserRouter basename="/sdst-library">
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/browse" element={<BrowsePage />} />
          <Route path="/submit" element={<SubmitPage />} />
          <Route path="/wiki" element={<WikiPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
