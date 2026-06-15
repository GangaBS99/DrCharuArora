import './Programs.css'

const clinicalPrograms = [
  {
    number: '01.',
    title: 'Autoimmunity Program',
    forItems: [
      'Rheumatoid Arthritis',
      'Lupus',
      'Multiple Sclerosis',
      'Hashimoto\'s',
      'Psoriasis and other autoimmune conditions',
    ],
    description: 'Autoimmune conditions have identifiable triggers: a permeable gut lining, a stress response that has stayed activated too long, a sleep pattern preventing immune regulation and a circadian rhythm dysregulating inflammation. This program works across all three pillars to reduce immune overactivation and rebuild conditions for self-regulation.',
    addresses: [
      'Gut-immune axis repair and intestinal permeability',
      'Inflammatory load assessment',
      'Stress physiology driving immune dysregulation',
      'Sleep as an immune regulatory tool',
      'Pranayama for oxidative stress reduction',
      'Flare management and long-term remission support',
    ],
  },
  {
    number: '02.',
    title: 'Anxiety and Nervous System Program',
    forItems: [
      'Anxiety',
      'Panic',
      'Chronic stress',
      'Burnout',
      'Nervous system dysregulation',
    ],
    description: 'Anxiety is not a mindset problem. It is a nervous system stuck in chronic activation with measurable physiological consequences. This program uses clinical pranayama as a primary intervention alongside sleep restructuring and circadian correction.',
    addresses: [
      'Vagus nerve activation and HRV improvement',
      'Autonomic nervous system regulation',
      'Cortisol and adrenal dysregulation',
      'Neuroplasticity — rewiring chronic stress-response patterns',
      'Sleep architecture support',
      'Gut-brain axis regulation',
    ],
  },
  {
    number: '03.',
    title: 'Hormone Balancing Program',
    forItems: [
      'PCOD',
      'Thyroid dysfunction',
      'Perimenopause',
      'Irregular cycles',
      'Hormonal weight gain',
    ],
    description: 'Hormonal imbalance is almost always the result of multiple systems falling out of balance together: the gut, the stress response, sleep, circadian rhythm and metabolic function. This program addresses the hormonal picture as a whole, not one gland at a time.',
    addresses: [
      'Hormonal profiling across reproductive, thyroid, adrenal and metabolic markers',
      'Gut health and its impact on oestrogen and thyroid regulation',
      'Circadian rhythm and hormonal secretion timing',
      'Pranayama and yoga for endocrine regulation',
      'Sleep and cortisol recalibration',
      'Insulin resistance and metabolic support',
    ],
  },
  {
    number: '04.',
    title: 'Gut Health Program',
    forItems: [
      'IBS',
      'Bloating',
      'Dysbiosis',
      'Leaky gut',
      'Food intolerances',
      'Reflux',
      'Constipation',
    ],
    description: 'The gut produces 90% of the body\'s serotonin and houses 70% of the immune system. When it is disrupted, the consequences are felt far beyond digestion. This program repairs the gut from multiple directions: stress physiology, sleep, breathwork and circadian alignment alongside nutrition.',
    addresses: [
      'Gut microbiome assessment and repair',
      'Intestinal permeability protocol',
      'Gut-brain axis regulation through pranayama',
      'Stress physiology and gut motility',
      'Circadian eating protocols',
      'Food intolerance identification',
    ],
  },
  {
    number: '05.',
    title: 'Diabetes and Metabolic Health Program',
    forItems: [
      'Type 2 diabetes',
      'Pre-diabetes',
      'Insulin resistance',
      'Metabolic syndrome',
    ],
    description: 'Metabolic disease is a whole-body pattern. Circadian misalignment dysregulates insulin secretion. Poor sleep drives insulin resistance. Chronic stress elevates cortisol and directly raises blood glucose. This program addresses the full metabolic pattern using all three pillars.',
    addresses: [
      'Blood glucose regulation and insulin sensitivity',
      'Circadian timing of meals',
      'Sleep and its direct effect on metabolic function',
      'Cortisol and stress-driven blood sugar elevation',
      'Pranayama for oxidative stress and autonomic regulation',
    ],
  },
  {
    number: '06.',
    title: 'Post-Procedure Recovery',
    forItems: [
      'Post-surgery',
      'Post-chemotherapy',
      'Post-radiation',
      'Long-term illness recovery',
    ],
    description: 'Medical procedures save lives. But real recovery — where energy returns, immunity rebuilds and the body feels like itself again — is rarely addressed with the same rigour as the procedure itself. This program works alongside your existing medical team.',
    addresses: [
      'Post-surgical fatigue and recovery mapping',
      'Gut microbiome restoration',
      'Immune system rebuilding',
      'Breathwork for respiratory recovery',
      'Sleep restructuring and circadian reset',
    ],
  },
]

function Programs() {
  return (
    <section className="programs-section" id="programs">
      <div className="programs-header">
        <span className="programs-label">Programs</span>
        <h2 className="programs-title">
          Clinical programs built <em>around your condition</em>
        </h2>
        <p className="programs-desc">
          Every program begins with a full assessment across diagnostics, lifestyle, sleep and circadian mapping. The three pillars are then applied together, prescribed precisely for your pattern. These are clinical protocols, not generic wellness programs.
        </p>
      </div>

      <div className="program-card">
        <h3 className="program-card-title">
          <em>Starting Point</em> — Bio-Integrative Health Assessment
        </h3>
        <p className="program-card-body">
          A comprehensive evaluation across modern diagnostics, standardised questionnaires, breathwork baseline, sleep architecture and circadian rhythm. What comes out is a root-cause priority map showing what is driving your condition and where to begin.
        </p>
        <p className="program-card-body">
          A follow-up consultation is then conducted to go deeper into the highlighted areas. A personalised protocol is designed with specific, actionable interventions across all three pillars: breath & yoga, sleep and circadian rhythm.
        </p>
        <p className="program-includes-label">Includes:</p>
        <ul className="program-includes-list">
          <li>Diagnostics tailored to your condition</li>
          <li>Breathing pattern and nervous system assessment</li>
          <li>HRV baseline</li>
          <li>Sleep architecture review</li>
          <li>Circadian phase mapping</li>
          <li>Standardised clinical questionnaires</li>
          <li>Personalised three-pillar protocol</li>
        </ul>
      </div>

      <div className="programs-grid">
        {clinicalPrograms.map((program) => (
          <article className="program-col" key={program.number}>
            <div className="program-col-header">
              <p className="program-col-number">{program.number}</p>
              <h3 className="program-col-title">{program.title}</h3>
            </div>
            <p className="program-col-label">For:</p>
            <ul className="program-col-list">
              {program.forItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="program-col-desc">{program.description}</p>
            <p className="program-col-label">Addresses:</p>
            <ul className="program-col-list">
              {program.addresses.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="programs-footer">
        <p className="programs-note">
          The above is a selection of some of the available programs. Bio-Integrative Health Systems protocols are available for a wide range of conditions beyond those listed. Please get in touch to discuss your specific situation.
        </p>

        <div className="programs-clinicians">
          <h3 className="programs-clinicians-title">For Clinicians</h3>
          <p className="programs-clinicians-body">
            Clinician Partnership: Co-management of complex cases, clinical breathwork and yoga therapy training, integrative second opinions.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Programs
