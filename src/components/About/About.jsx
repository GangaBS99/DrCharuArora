import './About.css'
import aboutImg from '../../assets/image (2).png'

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-hero">
        <div className="about-hero-content">
          <div className="about-label">
       
            About
          </div>
          <h2 className="about-title">
            She built the system she needed as a <em>patient</em>
          </h2>
          <span className="about-title-line" aria-hidden="true" />

          <div className="about-intro">
            <p>
              Dr. Charu Arora is an integrative medicine physician and the creator of Bio-Integrative Health Systems, a clinical framework that bridges modern diagnostics with breathwork, yoga therapy and circadian health to address the root causes of chronic disease.
            </p>
            <p>
              Her path into integrative medicine began not in a lecture hall, but in her own recovery. Following surgery, Dr. Arora found that despite the procedure going well, her body wasn&apos;t bouncing back the way medicine said it should. It was in that gap between clinical success and lived experience that she turned to yoga. What began as a personal search for recovery became a revelation.
            </p>
            <p>
              That experience compelled her to learn yoga formally, qualify as a Certified Clinical Yoga Therapist and begin teaching it to patients navigating their own recoveries. Over time, the question she kept returning to was the same one her patients were asking: why does no one put this together? Bio-Integrative Health Systems is her answer.
            </p>
          </div>

          <span className="about-content-line" aria-hidden="true" />
        </div>

        <div className="about-hero-image-wrap">
          <img
            className="about-hero-image"
            src={aboutImg}
            alt="Dr. Charu Arora"
          />
        </div>
      </div>

      <div className="about-story">
        <p>
          Dr. Charu Arora trained within modern medicine and spent years noticing what it couldn&apos;t explain. Patients with clean labs who felt broken. Bodies that defied their diagnostics. A persistent gap between what medicine measured and what people actually experienced.
        </p>
        <p>
          After her own surgery, her recovery didn&apos;t follow the script. The procedure went well. The labs looked fine. But her body told a different story. She turned to yoga out of genuine necessity and what happened surprised her. Her sleep changed. Her energy shifted. Her body began to recover in ways conventional care alone hadn&apos;t managed.
        </p>
        <p>
          That experience compelled her to study yoga formally, qualify as a Certified Clinical Yoga Therapist and begin teaching it to patients. The question she kept returning to was the same one her patients were asking: why does no one put this together? Bio-Integrative Health Systems is her answer.
        </p>

        <p className="about-pull-quote">
          <span className="about-pull-label">Pull quote:</span>{' '}
          &ldquo;I didn&apos;t discover integrative medicine in a journal. I discovered it in my own recovery and then spent time finding the science that explained what I had already felt.&rdquo;
        </p>
      </div>

      <div className="about-qualifications">
        <h3 className="about-qualifications-title">Qualifications</h3>
        <span className="about-qualifications-divider" aria-hidden="true" />

        <div className="about-qualifications-grid">
          <div className="about-qualifications-years">
            <p className="about-years-number">
              <span className="about-years-num">15</span>
              <span className="about-years-plus">+</span>
            </p>
            <p className="about-years-text">
              years across clinical care, healthcare delivery, medtech and integrative wellness
            </p>
          </div>

          <div className="about-qualifications-list">
            <p className="about-qual-gold">
              <strong>MBBS</strong> · Gold Medal, Cardiology Diploma
            </p>
            <p><strong>MBA</strong> — ISB Hyderabad</p>
            <p><strong>Certified Clinical Yoga Therapist</strong></p>
            <p>
              <strong>Clinical Fellowship in Research &amp; Statistics</strong>
              <br />
              — American Association of Yoga &amp; Medicine (AAYM)
            </p>
            <p className="about-creator">
              <span className="about-qual-gold-label">Creator of</span>
              <br />
              <strong>Bio-Integrative Health Systems framework</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
