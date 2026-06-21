import './HookSection.css'

const voices = [
  "My doctor says everything looks fine but I feel terrible.",
  "I've been on medication for years. Nothing is actually getting better.",
  "I've seen five specialists. Each treats their part. Nobody looks at the whole picture.",
  "My reports are normal but I haven't felt normal in years.",
  "I know something is wrong. I just can't get anyone to find it.",
]

function HookSection() {
  return (
    <section className="hook-section">
      <div className="hook-intro">
        <div className="hook-content">
          <p className="hook-label">NON-TREATABLE DISEASES CAN BE TREATED</p>
          <h2 className="hook-title">
            You've seen the specialists.<br />
            Done the tests.<br />
            Still not satisfied with the treatment.
          </h2>
          <p className="hook-body">
            Standard tests miss more than they catch. Bio-Integrative Health Systems looks deeper and finds the real reason you're not well.
          </p>
          <a className="hook-cta" href="#health-check">Take the free health check-up</a>
        </div>

        <div className="hook-video" aria-label="Bio-Integrative Health Systems video">
          <iframe
            src="https://www.youtube.com/embed/Bn2BranXqEs"
            title="Bio-Integrative Health Systems video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>

      <div className="patient-voices">
        {voices.map((voice, i) => (
          <div className="voice-card" key={i}>
            <span className="quote-mark"></span>
            <p>{voice}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HookSection
