import './EvidenceBase.css'

const evidenceCards = [
  {
    title: 'The Gut-Brain Axis',
    items: [
      {
        heading: 'The Microbiome-Mind Connection',
        body: 'The gut produces more than 90% of the body\'s serotonin and contains 500 million enteric neurons connected to the brain via the vagus nerve. Long-term meditators show significantly richer gut microbiota linked to lower rates of cardiovascular disease and depression.',
        citation: 'General Psychiatry, 2023 · Nature Reviews Gastroenterology, 2022',
      },
      {
        heading: 'Stress, the Gut and Autoimmunity',
        body: 'Chronic psychological stress increases intestinal permeability, allowing bacterial endotoxins into systemic circulation and triggering immune activation. Gut repair is inseparable from stress management in autoimmune care.',
        citation: 'Brain, Behavior, and Immunity, 2023',
      },
    ],
  },
  {
    title: 'Longevity Science',
    items: [
      {
        heading: 'Yoga and Telomere Length',
        body: 'Nobel laureate Elizabeth Blackburn\'s research at UCLA demonstrated a 43% increase in telomerase activity after 8 weeks of yogic meditation, with a dose-response relationship confirmed with years of practice.',
        citation: 'Lavretsky et al., UCLA, 2013 · Psychoneuroendocrinology, 2017',
      },
      {
        heading: 'Circadian Disruption and Metabolic Disease',
        body: 'Misalignment of behavioural rhythms with the internal circadian clock through irregular sleep, late eating or artificial light is now recognised as an independent risk factor for metabolic syndrome, diabetes and cardiovascular disease.',
        citation: 'The Lancet, 2023 · Cell Metabolism, 2022',
      },
    ],
  },
]

const clinicalObservations = [
  {
    condition: 'Hypertension',
    duration: '12 weeks',
    outcome: 'Blood pressure reduced from 158 to 140 mmHg. Physician reduced medication dose by 50%.',
  },
  {
    condition: 'Hypertension',
    duration: '10 weeks',
    outcome: 'Blood pressure reduced from 152 to 136 mmHg. HRV and sleep quality improved.',
  },
  {
    condition: 'Post-COVID Pulmonary Fibrosis',
    duration: '8 weeks',
    outcome: 'Oxygen saturation improved from 92% to 96%. Breathlessness on exertion significantly reduced.',
  },
  {
    condition: 'Post-COVID Pulmonary Fibrosis',
    duration: '10 weeks',
    outcome: 'Oxygen saturation improved from 94% to 97%. Patient returned to full-time work.',
  },
  {
    condition: 'Type 2 Diabetes',
    duration: '12 weeks',
    outcome: 'HbA1c reduced. Medication reviewed by treating physician.',
  },
  {
    condition: 'Anxiety and Depression (active cancer treatment)',
    duration: '10 weeks',
    outcome: 'Severity reduced from severe to mild. Patient resumed part-time work. Oncologist noted improved chemotherapy tolerance.',
  },
  {
    condition: 'Systemic Lupus Erythematosus',
    duration: '12 weeks',
    outcome: 'Fatigue reduced. Steroid dose tapered by rheumatologist. Quality of life improvement sustained at 3-month follow-up.',
  },
  {
    condition: 'Asthma',
    duration: '10 weeks',
    outcome: 'Rescue inhaler use reduced. Peak flow variability improved.',
  },
]

function EvidenceBase() {
  return (
    <section className="evidence-section" id="evidence">
      <div className="evidence-header">
        <div className="evidence-label">
      
          The Evidence Base
        </div>
        <h2 className="evidence-title">
          The science behind
          <br />
          <span className="evidence-title-accent">Bio-Integrative</span> Health.
        </h2>
        <p className="evidence-intro">
          Bio-Integrative Health Systems is not a philosophy. It is a clinical framework built on peer-reviewed research. The practices it uses have measurable, published outcomes.
        </p>
      </div>

      <div className="evidence-cards">
        {evidenceCards.map((card) => (
          <article className="evidence-card" key={card.title}>
            <div className="evidence-card-pill">{card.title}</div>
            <div className="evidence-card-body">
              {card.items.map((item) => (
                <p className="evidence-card-text" key={item.heading}>
                  <strong>{item.heading}</strong> {item.body} {item.citation}
                </p>
              ))}
            </div>
            <span className="evidence-card-line" aria-hidden="true" />
          </article>
        ))}
      </div>

      <div className="evidence-clinical">
        <h2 className="evidence-clinical-title">Clinical Observations</h2>
        <p className="evidence-clinical-intro">
          <span className="evidence-clinical-intro-label">Intro:</span>{' '}
          The following are anonymised observations from Dr. Arora&apos;s routine virtual clinical practice between 2020 and 2025. These are preliminary signals from real patients, not a controlled study. They are shared here in the interest of transparency and to illustrate the range of conditions where yoga therapy has produced measurable improvements alongside conventional medical care.
        </p>

        <div className="evidence-table" role="table">
          <div className="evidence-table-row evidence-table-header" role="row">
            <div className="evidence-table-cell" role="columnheader">Condition</div>
            <div className="evidence-table-cell" role="columnheader">Duration</div>
            <div className="evidence-table-cell evidence-table-cell-outcome" role="columnheader">Key Outcome</div>
          </div>
          {clinicalObservations.map((row) => (
            <div className="evidence-table-row" role="row" key={`${row.condition}-${row.duration}-${row.outcome}`}>
              <div className="evidence-table-cell evidence-table-cell-condition" role="cell">{row.condition}</div>
              <div className="evidence-table-cell" role="cell">{row.duration}</div>
              <div className="evidence-table-cell evidence-table-cell-outcome" role="cell">{row.outcome}</div>
            </div>
          ))}
        </div>

        <div className="evidence-footnote">
          <span className="evidence-footnote-line" aria-hidden="true" />
          <p className="evidence-footnote-text">
            <span className="evidence-footnote-label">Footnote:</span>{' '}
            All observations are anonymised. No control arm. Submitted as preliminary clinical signal only.
          </p>
        </div>
      </div>
    </section>
  )
}

export default EvidenceBase
