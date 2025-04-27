
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LayoutPortfolio from './layout/Layout_porfolio'
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutPortfolio />} />
      </Routes>
    </Router>
  )
}

export default App
