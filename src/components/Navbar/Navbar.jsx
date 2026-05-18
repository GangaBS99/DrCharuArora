import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="nav-logo">DR. CHARU ARORA</a>
      <div className="nav-row">
        <ul className="nav-links">
          <li><a href="#system">The System</a></li>
          <li><a href="#who-its-for">Who it's for</a></li>
          <li><a href="#health-check">Health Check</a></li>
          <li><a href="#evidence">Evidence</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#insights">Insights</a></li>
        </ul>
        <button className="nav-cta">Book an Appointment</button>
      </div>
    </nav>
  )
}

export default Navbar
