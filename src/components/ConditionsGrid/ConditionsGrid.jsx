import './ConditionsGrid.css'

const conditions = [
  { title: 'Sleep Issues', desc: 'Onset, Quality, Unrefreshing rest' },
  { title: 'Gut Health', desc: 'IBS, Bloating, Dysbiosis, Reflux' },
  { title: 'Hormonal', desc: 'PCOD, thyroid, weight, mood' },
  { title: 'Autoimmune', desc: 'Inflammatory, immune dysregulation' },
  { title: 'Hypertension', desc: 'Stress-driven, metabolic origin' },
  { title: 'Diabetes', desc: 'Type 2, pre-diabetes, insulin resistance' },
  { title: 'Asthma', desc: 'Airway, nervous system, breathwork intervention' },
  { title: 'Migraine', desc: 'Trigger mapping, stress physiology' },
  { title: 'Anxiety', desc: 'Chronic worry, nervous system dysregulation' },
  { title: 'Post-Procedure QoL', desc: 'Post-surgery, chemotherapy, radiation' },
  { title: 'Fatigue', desc: 'Chronic, adrenal, post-viral' },
]

function ConditionsGrid() {
  return (
    <section className="conditions-section">
      <h2 className="conditions-title">Conditions addressed</h2>
      <div className="conditions-grid">
        {conditions.map((item, i) => (
          <div className="condition-card" key={i}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="conditions-quote">
        <p>"Normal labs. Abnormal life." — This is where the real work begins.</p>
      </div>
    </section>
  )
}

export default ConditionsGrid
