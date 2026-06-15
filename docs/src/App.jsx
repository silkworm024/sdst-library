import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BrowsePage from './pages/BrowsePage'
import SubmitPage from './pages/SubmitPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/browse" element={<BrowsePage />} />
          <Route path="/submit" element={<SubmitPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
