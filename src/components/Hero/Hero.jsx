import './Hero.css'
import heroImg from '../../assets/image (2).png'
import bgImg from '../../assets/bg.png'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-subtitle">
          <span className="subtitle-line"></span>
          <div>
            <p>INTEGRATIVE MEDICINE PHYSICIAN</p>
            <p>BREATHWORK &nbsp;• &nbsp;CIRCADIAN HEALTH</p>
          </div>
        </div>

        <h1 className="hero-title">Dr. Charu Arora.</h1>

        <p className="hero-description">
          Treating and preventing autoimmune,<br />
          metabolic and lifestyle disease<br />
          by restoring the biology modern medicine<br />
          overlooks.
        </p>

        <div className="credentials">
          <div className="credential-row">
            <span><span className="dot"></span> MBBS · Gold Medal, Cardiology Diploma</span>
            <span className="divider">|</span>
            <span><span className="dot"></span> MBA — ISB Hyderabad</span>
          </div>
          <div className="credential-row">
            <span><span className="dot"></span> Certified Clinical Yoga Therapist</span>
          </div>
          <div className="credential-fellowship">
            Clinical Fellowship — American Association of Yoga and Medicine (AAYM)
          </div>
        </div>

        <div className="intro-section">
          <p className="intro-text">Introducing &nbsp;Bio-Integrative Health Systems</p>
          <div className="cta-buttons">
            <button className="btn-primary">
              <span>START<br />YOUR<br />JOURNEY</span>
              <span className="arrow">→</span>
            </button>
            <button className="btn-secondary">
              <span>EXPLORE<br />THE<br />SYSTEM</span>
              <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img className="hero-bg" src={bgImg} alt="" />
        <img src={heroImg} alt="Dr. Charu Arora" />
      </div>
    </section>
  )
}

export default Hero
