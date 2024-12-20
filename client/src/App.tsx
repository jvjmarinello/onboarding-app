import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Data from './pages/Data';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';
import './App.css'

function App() {
  const [user, setUser] = useState(null)

  return (
    <Router>
      <div>
        {/* Navbar with links for navigation */}
        <nav>
          <Navbar />
        </nav>

        {/* Define the Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/data" element={<Data />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App