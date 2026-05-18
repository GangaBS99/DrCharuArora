import './TheSystem.css'

function TheSystem() {
  return (
    <section className="system-section" id="system">
      <p className="system-label">How Bio-Integrative Health Systems Works</p>
      <h2 className="system-title">THE <span className="gold">SYSTEM</span></h2>
      <p className="system-body">
        Your body is not a collection of separate parts. Your gut affects your mood. Your sleep affects your hormones. Your stress affects your immunity. Most medicine treats these separately. The Bio-Integrative Health System treats them together, because that is how the body actually works.
      </p>

      <div className="pillars-box">
       <div className='pillar-title-box'>
         <h3 className="pillars-title">Three Clinical Pillars</h3>
        <p className="pillars-desc">
          Each pillar is a complete science in itself. Together they address what no single specialist can address alone.
        </p>
       </div>

        <div className="pillars-grid">
          <div className="pillar-card">
            <h4 className="pillar-name">Yoga and Pranayama</h4>
            <p className="pillar-body">
              Used clinically, yoga and pranayama are precise physiological interventions. Specific breathwork techniques activate the vagus nerve, reduce oxidative stress, regulate the gut-brain axis and drive neuroplasticity. Yoga asanas work on the musculoskeletal, endocrine and nervous systems simultaneously. Relaxation techniques move the body out of chronic activation into the state where healing happens.
            </p>
          </div>
          <div className="pillar-card">
            <h4 className="pillar-name">Sleep</h4>
            <p className="pillar-body">
              Sleep is when your body repairs tissue, regulates hormones and clears metabolic waste from the brain. When sleep architecture is disrupted, even if hours are adequate, none of this happens fully. Most chronic conditions are made worse by poor sleep. Many are partially caused by it. We assess sleep deeply, find what is disrupting it and rebuild it as a clinical priority.
            </p>
          </div>
          <div className="pillar-card">
            <h4 className="pillar-name">Circadian Rhythms</h4>
            <p className="pillar-body">
              Your body runs on a 24-hour internal clock that governs hormone release, immunity, digestion and cell repair. When your lifestyle drifts out of sync with that clock, the consequences show up as hormonal imbalance, weight gain, gut issues and metabolic disease. Circadian medicine finds exactly where that misalignment is happening and corrects it.
            </p>
          </div>
        </div>
      </div>
      <div className="pillars-together">
        <h3 className="pillars-together-title">How the Three Pillars Work Together</h3>
        <p className="pillars-together-body">
          No chronic condition lives in one pillar alone. A patient with autoimmunity is not just dealing with an immune problem. Their sleep is disrupted, their circadian rhythm is off, their nervous system is in chronic activation. Bio-Integrative Health Systems applies all three pillars together, prescribed precisely to your pattern.
        </p>
      </div>
    </section>
  )
}

export default TheSystem
