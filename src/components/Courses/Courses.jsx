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
    category: 'Nervous System',
     url: 'https://medium.com/@charu.ar/youre-not-tired-because-you-re-not-sleeping-enough-f1c960299b55',
    title: 'YOU’RE NOT TIRED BECAUSE YOU’RE NOT SLEEPING ENOUGH.',
    readTime: '6 min read',
  },
  {
    category: 'Chronic Fatigue & Burnout',
    url: 'https://medium.com/@charu.ar/i-was-a-cardiologist-then-i-got-sick-and-medicine-had-no-answer-heres-what-did-289b53328deb',
    title: 'I Was a Cardiologist. Then I Got Sick and Medicine Had No Answer. Here’s What Did.',
    readTime: '3 min read',
  },
  {
    category: 'Root Cause Health',
      url: 'https://medium.com/@charu.ar/theres-a-nerve-in-your-body-that-doctors-almost-never-talk-about-it-might-explain-everything-b1df4f89fb2a',
    title: 'There’s a Nerve in Your Body That Doctors Almost Never Talk About. It Might Explain Everything.',
    readTime: '3 min read',
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
              {deskArticles.map((article) => {
                const Card = article.url ? 'a' : 'article'

                return (
                  <Card
                    className="courses-article-card"
                    href={article.url}
                    key={article.title}
                    rel={article.url ? 'noreferrer' : undefined}
                    target={article.url ? '_blank' : undefined}
                  >
                    <p className="courses-article-category">{article.category}</p>
                    <h4 className="courses-article-title">{article.title}</h4>
                    <p className="courses-article-read">{article.readTime}</p>
                  </Card>
                )
              })}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Courses
