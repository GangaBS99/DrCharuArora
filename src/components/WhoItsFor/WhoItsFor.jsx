import './WhoItsFor.css'

const individualItems = [
  'Hormonal imbalance: PCOD, thyroid, weight',
  'Gut issues: IBS, bloating, dysbiosis',
  'Autoimmune conditions',
  'Sleep that doesn\'t restore you',
  'Anxiety or a nervous system that won\'t settle',
  'Fatigue that rest doesn\'t fix',
  'Recovery after surgery, chemotherapy or radiation',
  'Hypertension, diabetes, asthma, migraine',
  'Normal labs. Abnormal life.',
]

const referralItems = [
  'Complex multi-system presentations',
  'Post-procedure recovery support',
  'Burnout, fatigue and chronic stress',
  'Practitioners wanting clinical breathwork training',
  'Clinics building an integrative care offering',
]

const partnershipItems = [
  'Co-management of complex patients',
  'Integrative second opinions',
  'Clinical breathwork training for practitioners',
  'Speaking and education for clinical teams',
]

function WhoItsFor() {
  return (
    <section className="who-section" id="who-its-for">
      <div className="who-header">
        <div className="who-label">
        
          Who It&apos;s For
        </div>
        <h2 className="who-title">
          Built for those where standard care has <em>reached its ceiling.</em>
        </h2>
        <p className="who-intro">
          Bio-Integrative Health Systems is what becomes possible when conventional medicine&apos;s tools have been applied and the patient still isn&apos;t well. That gap is real. And it is addressable.
        </p>
      </div>

      <div className="who-columns">
        <article className="who-col">
          <p className="who-col-label">For Individuals</p>
          <h3 className="who-col-title">When the system has run out of answers</h3>
          <p className="who-col-body">
            You may be experiencing one or several of these and finding that each specialist addresses their slice without anyone looking at the whole picture.
          </p>
          <ul className="who-col-list">
            {individualItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <blockquote className="who-quote">
            You are not imagining it. You are living in a gap that standard medicine hasn&apos;t been designed to fill — yet.
          </blockquote>
         
        </article>

        <article className="who-col">
          <p className="who-col-label">For Clinicians &amp; Clinics</p>
          <h3 className="who-col-title">When patients need a deeper lens</h3>
          <p className="who-col-body">
            Complex presentations without a clear primary diagnosis. Patients cycling through referrals without resolution. Bio-Integrative Health Systems offers an evidence-based integrative framework alongside conventional care.
          </p>
          <p className="who-col-sublabel">Patients suited for referral:</p>
          <ul className="who-col-list">
            {referralItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="who-col-sublabel">Clinical partnership includes:</p>
          <ul className="who-col-list">
            {partnershipItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}

export default WhoItsFor
