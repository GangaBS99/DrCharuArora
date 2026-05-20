import './ClinicalProcess.css'

function ClinicalProcess() {
  return (
    <section className="clinical-process">
      <div className="clinical-process-inner">
        <h2 className="clinical-process-title">
          The Clinical Process:<br />
          Uncover. Correct. <em>Restore.</em>
        </h2>
        <p className="clinical-process-desc">
          Three movements — not steps in a checklist, but a continuous clinical process built around the three most overlooked root patterns: disordered breathing, disrupted sleep and circadian misalignment.
        </p>

        <div className="clinical-steps">
          <div className="clinical-step">
            <h3 className="clinical-step-title">Uncover</h3>
            <p className="clinical-step-subtitle">Read what your body is saying</p>
            <ul className="clinical-step-list">
              <li>Diagnostics relevant to your condition</li>
              <li>Breathing pattern and nervous system assessment</li>
              <li>Sleep architecture and circadian mapping</li>
              <li>HRV and autonomic state baseline</li>
            </ul>
          </div>
          <div className="clinical-step">
            <h3 className="clinical-step-title">Correct</h3>
            <p className="clinical-step-subtitle">Find what is driving it</p>
            <ul className="clinical-step-list">
              <li>Cross-system pattern analysis</li>
              <li>Breathing corrected via pranayama</li>
              <li>Sleep architecture restructuring</li>
              <li>Circadian realignment</li>
            </ul>
          </div>
          <div className="clinical-step">
            <h3 className="clinical-step-title">Restore</h3>
            <p className="clinical-step-subtitle">Rebuild your body's capacity</p>
            <ul className="clinical-step-list">
              <li>Clinical pranayama for your condition</li>
              <li>Yoga therapy as physiological intervention</li>
              <li>Circadian reset across light, meals and sleep</li>
              <li>Metabolic and hormonal recalibration</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClinicalProcess
