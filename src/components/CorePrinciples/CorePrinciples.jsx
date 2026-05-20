import { useState } from 'react'
import './CorePrinciples.css'

const principles = [
  {
    title: "The body doesn't fail randomly. It adapts — until it can't.",
    titleEm: 'randomly.',
    body: "Health is not complicated. It has been made complicated. It requires two things: discipline in how you live and awareness of how your body responds. The body's self-regulatory system does the rest.",
  },
  {
    title: "Standard care treats what's loudest. We read what's underneath.",
    titleEm: "what's underneath.",
    body: "Standard care treats what's loudest. We read what's underneath. A suppressed thyroid, elevated hs-CRP, disrupted cortisol and poor sleep are not separate problems. They are the same pattern through different lenses.",
  },
  {
    title: 'Ancient frameworks are not alternative. They are extended diagnostics.',
    titleEm: 'extended diagnostics.',
    body: 'Ancient frameworks are extended diagnostics, not alternatives. Clinical yoga therapy has measurable, peer-reviewed effects on cortisol, HRV and inflammatory markers.',
  },
  {
    title: 'Long-term health is built, not prescribed.',
    titleEm: 'not prescribed.',
    body: "Long-term health is built, not prescribed. The goal of every Bio-Integrative Health Systems protocol is to restore your body's capacity for self-regulation and hand it back to you.",
  },
]

function CorePrinciples() {
  const [openPrinciple, setOpenPrinciple] = useState(0)

  return (
    <section className="core-principles-section">
   
      <div className="core-principles">
        {principles.map((p, i) => {
          const isOpen = openPrinciple === i
          const titleParts = p.title.split(p.titleEm)
          return (
            <div
              className={`principle-item ${isOpen ? 'active' : ''}`}
              key={i}
              onClick={() => setOpenPrinciple(isOpen ? -1 : i)}
            >
              <div className="principle-header">
                <span className="principle-number">0{i + 1}</span>
                <h3 className="principle-heading">
                  {titleParts[0]}<em>{p.titleEm}</em>
                </h3>
                <span className="principle-toggle">{isOpen ? '−' : '+'}</span>
              </div>
              {isOpen && (
                <p className="principle-body">{p.body}</p>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default CorePrinciples
