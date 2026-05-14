import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="nav-logo">
        DR. CHARU <span>ARORA</span>
      </a>
      <ul className="nav-links">
        <li><a href="#system">The System</a></li>
        <li><a href="#programs">Programs</a></li>
        <li><a href="#who-its-for">Who It's For</a></li>
        <li><a href="#health-check">Health Check</a></li>
        <li><a href="#evidence">Evidence</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#insights">Insights</a></li>
      </ul>
      <button className="nav-cta">Book an Appointment</button>
    </nav>
  )
}

export default Navbar
