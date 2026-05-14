import './HowItWorks.css'

function HowItWorks() {
  return (
    <section className="how-section">
      <div className="how-header">
        <div className="how-label"><span className="label-line"></span> HOW IT WORKS</div>
        <h2 className="how-headline">Uncover. Correct. <em>Restore.</em></h2>
        <p className="how-body">
          When you come to a doctor with hypertension, most give you a tablet. When you come with thyroid issues, you get thyroxine. The prescription is right. But you're still not well. That's because the tablet treats the condition, not the reason you got it in the first place. Bio-Integrative Health Systems looks for what's driving it and addresses that instead.
        </p>
      </div>

      <div className="how-steps">
        <div className="step-card">
          <p className="step-number">01 &nbsp;Uncover</p>
          <h3 className="step-title">Read what your body is saying</h3>
          <p className="step-desc">
            Relevant diagnostics, breathing assessment, sleep architecture and nervous system mapping to reveal what routine tests miss.
          </p>
        </div>

        <div className="step-card">
          <p className="step-number">02 &nbsp;Correct</p>
          <h3 className="step-title">Find what is driving it</h3>
          <p className="step-desc">
            Linking findings across biology, breath, sleep and lifestyle to identify the real root, not just the loudest symptom.
          </p>
        </div>

        <div className="step-card">
          <p className="step-number">03 &nbsp;Restore</p>
          <h3 className="step-title">Rebuild your body's capacity</h3>
          <p className="step-desc">
            Clinical breathwork, yoga therapy, sleep restructuring and medical protocols working together to restore self-regulation.
          </p>
        </div>
      </div>

      <button className="how-cta">Explore the system</button>
    </section>
  )
}

export default HowItWorks
