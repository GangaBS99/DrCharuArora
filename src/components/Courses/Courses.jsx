import './Courses.css'

const courses = [
  {
    level: 'Foundation',
    title: 'Hormones, Energy & the Stress Response',
    description:
      'How your hormonal system drives daily energy, mood, weight and resilience — and how chronic stress quietly dismantles it. The first layer of your body\'s operating system.',
  },
  {
    level: 'Intermediate',
    title: 'Breathwork as Medicine',
    description:
      'The science and clinical practice of pranayama — how specific breath techniques activate the vagus nerve, shift the nervous system, and measurably change your biology. With practical protocols for daily use.',
  },
  {
    level: 'Applied',
    title: 'Preventive Health & Longevity',
    description:
      'Building long-term health intelligence — what diagnostics to track, what inputs to optimise, and how to apply the gut–brain axis, circadian biology and longevity science before symptoms appear.',
  },
]

const deskArticles = [
  {
    category: 'Gut Health',
    title: 'What your gut is telling your immune system — and your hormones',
    readTime: '5 min read',
  },
  {
    category: 'Breathwork',
    title: 'One breath technique that measurably shifts your nervous system',
    readTime: '4 min read',
  },
  {
    category: 'Diagnosis',
    title: 'Normal labs, abnormal life: when your reports are not the full story',
    readTime: '6 min read',
  },
]

function Courses() {
  return (
    <section className="courses-section" id="courses">
     

      <div className="courses-desk">
        <p className="courses-desk-sequence">
          From awareness to application. Each course standalone, or as a sequence.
        </p>

        <div className="courses-desk-content">
          <p className="courses-desk-label">From the Desk</p>
          <h2 className="courses-desk-title">
            Rethinking health, one layer at a <em>time.</em>
          </h2>

          <article className="courses-featured-card">
            <p className="courses-featured-label">Featured</p>
            <h3 className="courses-featured-title">
              Why your cortisol pattern matters more than your cholesterol
            </h3>
            <p className="courses-featured-desc">
              Medicine has spent decades perfecting the lipid panel. But the stress hormone that drives inflammation, weight, immunity and sleep is barely tested. This is what we&apos;re missing — and why it costs us.
            </p>

            <div className="courses-articles-grid">
              {deskArticles.map((article) => (
                <article className="courses-article-card" key={article.title}>
                  <p className="courses-article-category">{article.category}</p>
                  <h4 className="courses-article-title">{article.title}</h4>
                  <p className="courses-article-read">{article.readTime}</p>
                </article>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Courses
