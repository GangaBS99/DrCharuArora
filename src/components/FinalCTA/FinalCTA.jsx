import './FinalCTA.css'

function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="health-check-box">
        <h2 className="health-check-title">
          Not sure where <span className="highlight">to start?</span>
        </h2>
        <p className="health-check-desc">
          Answer 12 simple questions about how you feel day to day. Get a snapshot of which areas may need attention across energy, sleep and daily rhythms.
        </p>
        <div className="health-check-stats">
          <div className="stat-item">
            <div className="stat-circle">12</div>
            <span className="stat-label">Questions</span>
          </div>
          <div className="stat-connector"></div>
          <div className="stat-item">
            <div className="stat-circle">3</div>
            <span className="stat-label">Health areas</span>
          </div>
          <div className="stat-connector"></div>
          <div className="stat-item">
            <div className="stat-circle">3</div>
            <span className="stat-label">Minutes</span>
          </div>
        </div>
        <button className="health-check-btn">TAKE THE FREE HEALTH &nbsp;→</button>
      </div>

      <div className="final-closing">
        <h2 className="final-cta-headline">
          You don't need more <em>treatment plans.</em>
        </h2>
        <p className="final-subtext">You need a new lens.</p>
        <p className="final-links">
          Begin with Bio-Integrative Health Systems · Understand the system first
        </p>
      </div>
    </section>
  )
}

export default FinalCTA
