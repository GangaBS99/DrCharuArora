import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="nav-top">
        <a href="#home" className="nav-logo">DR. CHARU ARORA</a>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
        </button>
      </div>
      <div className={`nav-row ${menuOpen ? 'active' : ''}`}>
        <ul className="nav-links">
          <li><a href="#system" onClick={() => setMenuOpen(false)}>The System</a></li>
          <li><a href="#who-its-for" onClick={() => setMenuOpen(false)}>Who it's for</a></li>
          <li><a href="#health-check" onClick={() => setMenuOpen(false)}>Health Check</a></li>
          <li><a href="#evidence" onClick={() => setMenuOpen(false)}>Evidence</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#insights" onClick={() => setMenuOpen(false)}>Insights</a></li>
        </ul>
        <button className="nav-cta">Book an Appointment</button>
      </div>
    </nav>
  )
}

export default Navbar
