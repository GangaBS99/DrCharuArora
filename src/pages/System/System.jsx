import './System.css'

function System() {
  return (
    <div className="system-page">
      {/* Hero */}
      <section className="system-hero">
        <p className="system-label">Bio-Integrative Health Systems</p>
        <h1 className="system-headline">One system. <em>Three lenses.</em></h1>
        <p className="system-body">
          Most health models read one layer — labs, or lifestyle, or psychology. BIHS reads all three simultaneously, because the body doesn't separate them. Your biology shapes your behaviour. Your behaviour reshapes your biology. The loop is the diagnosis — and the loop is where we intervene.
        </p>
      </section>

      {/* Three Lenses */}
      <section className="pillars-section">
        <div className="pillars-grid">
          <div className="pillar-card">
            <h3>BioSignal</h3>
            <p className="pillar-subtitle">What your reports show — and what they hide</p>
            <p>
              The clinical layer. Standard care reads your labs in isolation and against population averages. BioSignal goes further — reading the pattern across markers, tracking what's moving in which direction, and identifying the biological environment driving your symptoms rather than just naming them.
            </p>
            <ul className="pillar-list">
              <li>Advanced panels: hormones, metabolic markers, inflammatory indices</li>
              <li>HRV, cortisol patterns and adrenal function</li>
              <li>Gut microbiome, intestinal permeability and immune markers</li>
              <li>Thyroid, reproductive and cardiometabolic profiling</li>
              <li>Trend reading — not just snapshot values</li>
            </ul>
          </div>
          <div className="pillar-card">
            <h3>LifeField</h3>
            <p className="pillar-subtitle">What your lifestyle is building — or dismantling</p>
            <p>
              The environmental layer. Sleep timing, meal patterns, light exposure, movement load, breath quality, work rhythm — these are not lifestyle choices sitting beside your health. They are primary biological inputs that reshape your hormones, immunity, gut and nervous system every single day. LifeField maps exactly how.
            </p>
            <ul className="pillar-list">
              <li>Sleep architecture, circadian phase and restorative quality</li>
              <li>Nutrition timing, metabolic rhythm and gut load</li>
              <li>Movement type, intensity and recovery balance</li>
              <li>Clinical breathwork baseline — vagal tone, HRV, respiratory patterns</li>
              <li>Environmental stressors — light, screen, travel, work rhythm</li>
            </ul>
          </div>
          <div className="pillar-card">
            <h3>Stress Effect</h3>
            <p className="pillar-subtitle">What stress is doing to your body — right now</p>
            <p>
              The invisible layer. Stress is not a feeling — it is a sustained physiological state that rewires your hormones, suppresses your immune system, damages your gut lining, disrupts your sleep and alters your gene expression. It accumulates silently — often for years before a symptom surfaces. Most medicine doesn't measure this. We do.
            </p>
            <ul className="pillar-list">
              <li>HPA axis dysregulation — the cortisol-hormone-immune cascade</li>
              <li>Autonomic nervous system state — sympathetic dominance and its cost</li>
              <li>Gut-brain axis disruption — how stress reshapes the microbiome</li>
              <li>Emotional regulation patterns</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Clinical Process */}
      <section className="process-section">
        <h2 className="process-title">The Clinical Process: Uncover. Correct. <em>Restore.</em></h2>
        <p className="process-intro">
          Three movements — not steps in a checklist, but a continuous clinical process built around the three most overlooked root patterns: disordered breathing, disrupted sleep and circadian misalignment.
        </p>

        <div className="process-grid">
          <div className="process-card">
            <p className="process-number">01 &nbsp;Uncover</p>
            <h3>Read what your body is saying</h3>
            <ul>
              <li>Diagnostics relevant to your condition</li>
              <li>Breathing pattern and nervous system assessment</li>
              <li>Sleep architecture and circadian mapping</li>
              <li>HRV and autonomic state baseline</li>
            </ul>
          </div>
          <div className="process-card">
            <p className="process-number">02 &nbsp;Correct</p>
            <h3>Find what is driving it</h3>
            <ul>
              <li>Cross-system pattern analysis</li>
              <li>Breathing corrected via pranayama</li>
              <li>Sleep architecture restructuring</li>
              <li>Circadian realignment</li>
            </ul>
          </div>
          <div className="process-card">
            <p className="process-number">03 &nbsp;Restore</p>
            <h3>Rebuild your body's capacity</h3>
            <ul>
              <li>Clinical pranayama for your condition</li>
              <li>Yoga therapy as physiological intervention</li>
              <li>Circadian reset across light, meals and sleep</li>
              <li>Metabolic and hormonal recalibration</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="principles-section">
        <h2 className="principles-title">Core Principles</h2>
        <div className="principles-grid">
          <div className="principle-card">
            <p>
              Health is not complicated. It has been made complicated. It requires two things: discipline in how you live and awareness of how your body responds. The body's self-regulatory system does the rest.
            </p>
          </div>
          <div className="principle-card">
            <p>
              Standard care treats what's loudest. We read what's underneath. A suppressed thyroid, elevated hs-CRP, disrupted cortisol and poor sleep are not separate problems. They are the same pattern through different lenses.
            </p>
          </div>
          <div className="principle-card">
            <p>
              Ancient frameworks are extended diagnostics, not alternatives. Clinical yoga therapy has measurable, peer-reviewed effects on cortisol, HRV and inflammatory markers.
            </p>
          </div>
          <div className="principle-card">
            <p>
              Long-term health is built, not prescribed. The goal of every Bio-Integrative Health Systems protocol is to restore your body's capacity for self-regulation and hand it back to you.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default System
