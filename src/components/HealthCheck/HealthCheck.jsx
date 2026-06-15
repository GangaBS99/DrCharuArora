import { useEffect, useMemo, useRef, useState } from 'react'
import './HealthCheck.css'

const questionnaireSections = [
  {
    title: 'Energy and Stress',
    questionIds: ['q1', 'q2'],
    maxScore: 6,
    questions: [
      {
        id: 'q1',
        number: 'Q1.',
        text: 'How is your energy most days?',
        options: [
          'Very good — I feel energetic and alert',
          'Okay — manageable but not great',
          'Poor — I feel tired most of the time',
          'Very poor — I am exhausted almost every day',
        ],
      },
      {
        id: 'q2',
        number: 'Q2.',
        text: 'How often do you feel stressed, anxious or overwhelmed?',
        options: [
          'Rarely or never',
          'Occasionally',
          'Often',
          'Almost all the time',
        ],
      },
    ],
  },
  {
    title: 'Sleep',
    questionIds: ['q3', 'q4', 'q5', 'q6'],
    maxScore: 12,
    questions: [
      {
        id: 'q3',
        number: 'Q3.',
        text: 'How well do you recover after a demanding day?',
        options: [
          'Very well — I bounce back quickly',
          'Fairly well — takes a day or so',
          'Poorly — I stay depleted for days',
          'I rarely feel I have recovered',
        ],
      },
      {
        id: 'q4',
        number: 'Q4.',
        text: 'How often do you experience physical symptoms of stress such as tension, headaches or gut discomfort?',
        options: [
          'Rarely or never',
          'Occasionally',
          'Often',
          'Almost daily',
        ],
      },
      {
        id: 'q5',
        number: 'Q5.',
        text: 'How would you rate the quality of your sleep?',
        options: [
          'Very good',
          'Fairly good',
          'Poor',
          'Very poor',
        ],
      },
      {
        id: 'q6',
        number: 'Q6.',
        text: 'How often do you have trouble falling or staying asleep?',
        options: [
          'Rarely or never',
          'Occasionally',
          'Often',
          'Almost every night',
        ],
      },
    ],
  },
  {
    title: 'Daily Rhythms and Lifestyle',
    questionIds: ['q7', 'q8', 'q9', 'q10', 'q11', 'q12'],
    maxScore: 18,
    questions: [
      {
        id: 'q7',
        number: 'Q7.',
        text: 'How do you feel when you wake up in the morning?',
        options: [
          'Refreshed and ready',
          'Okay — takes a while to get going',
          'Tired — like I have not slept enough',
          'Exhausted — sleep does not restore me',
        ],
      },
      {
        id: 'q8',
        number: 'Q8.',
        text: 'How often does poor sleep affect your mood or concentration the next day?',
        options: [
          'Rarely or never',
          'Occasionally',
          'Often',
          'Almost always',
        ],
      },
      {
        id: 'q9',
        number: 'Q9.',
        text: 'How consistent are your daily routines — sleep time, meal times, wake time?',
        options: [
          'Very consistent — same time most days',
          'Fairly consistent',
          'Inconsistent — it varies a lot',
          'No routine — completely irregular',
        ],
      },
      {
        id: 'q10',
        number: 'Q10.',
        text: 'How often do you eat late at night, within 2 hours of sleeping?',
        options: [
          'Rarely or never',
          'Occasionally',
          'Often',
          'Almost every night',
        ],
      },
      {
        id: 'q11',
        number: 'Q11.',
        text: 'How much screen time do you have in the hour before bed?',
        options: [
          'Less than 15 minutes',
          'Around 30 minutes',
          'Around an hour',
          'More than an hour most nights',
        ],
      },
      {
        id: 'q12',
        number: 'Q12.',
        text: 'How would you rate your overall lifestyle — movement, nutrition, stress management?',
        options: [
          'Very healthy — I am consistent',
          'Fairly healthy — room for improvement',
          'Not great — I know things need to change',
          'Poor — my lifestyle is significantly affecting my health',
        ],
      },
    ],
  },
]

const allQuestions = questionnaireSections.flatMap((section) => section.questions)

const initialAnswers = Object.fromEntries(
  allQuestions.map((question) => [question.id, null])
)

function computeResults(answers) {
  const categories = questionnaireSections.map((section) => {
    const score = section.questionIds.reduce((sum, id) => sum + answers[id], 0)
    const status = getCategoryStatus(score, section.maxScore)

    return {
      title: section.title,
      score,
      maxScore: section.maxScore,
      ...status,
    }
  })

  const overallScore = Math.round(
    categories.reduce((sum, category) => sum + category.score, 0) / categories.length
  )
  const overallMax = Math.round(
    categories.reduce((sum, category) => sum + category.maxScore, 0) / categories.length
  )
  const overall = getOverallStatus(overallScore)

  return { categories, overallScore, overallMax, overall }
}

function getCategoryStatus(score, maxScore) {
  const ratio = score / maxScore

  if (ratio <= 0.45) {
    return {
      label: 'Good',
      description: 'Good — this area appears well managed',
      color: '#8bc34a',
    }
  }

  if (ratio <= 0.75) {
    return {
      label: 'Moderate',
      description: 'Moderate — some attention may be beneficial',
      color: '#e6b422',
    }
  }

  return {
    label: 'Needs Attention',
    description: 'Needs Attention — this area may be significantly affecting your health',
    color: '#e05a4a',
  }
}

function getOverallStatus(averageScore) {
  if (averageScore <= 5) {
    return { label: 'Good', badge: 'Well Managed', color: '#8bc34a' }
  }

  if (averageScore <= 10) {
    return { label: 'Moderate', badge: 'To Improve', color: '#8bc34a' }
  }

  return { label: 'Needs Attention', badge: 'Take Action', color: '#e05a4a' }
}

function SemiCircleGauge({ score, maxScore, color }) {
  const radius = 88
  const circumference = Math.PI * radius
  const fillRatio = 1 - Math.min(score / maxScore, 1)
  const dashOffset = circumference * fillRatio

  return (
    <svg className="health-gauge-main-svg" viewBox="0 0 220 130" aria-hidden="true">
      <path
        d="M 22 110 A 88 88 0 0 1 198 110"
        fill="none"
        stroke="#e4e6ea"
        strokeWidth="14"
        strokeLinecap="round"
      />
      <path
        d="M 22 110 A 88 88 0 0 1 198 110"
        fill="none"
        stroke={color}
        strokeWidth="14"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={dashOffset}
      />
      <circle cx="110" cy="22" r="7" fill={color} />
    </svg>
  )
}

function MiniGauge({ score, maxScore, color }) {
  const radius = 26
  const circumference = 2 * Math.PI * radius
  const fillRatio = Math.min(score / maxScore, 1)
  const dashOffset = circumference * (1 - fillRatio * 0.72)

  return (
    <svg className="health-gauge-mini-svg" viewBox="0 0 64 64" aria-hidden="true">
      <circle
        cx="32"
        cy="32"
        r={radius}
        fill="none"
        stroke="#ececec"
        strokeWidth="5"
      />
      <circle
        cx="32"
        cy="32"
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={dashOffset}
        transform="rotate(-90 32 32)"
      />
      <text x="32" y="36" textAnchor="middle" className="health-gauge-mini-text">
        {score}
      </text>
    </svg>
  )
}

function QuestionCard({ question, answers, onAnswerChange }) {
  const selected = answers[question.id]

  return (
    <div className="health-question-card">
      <div className="health-question-header">
        <span className="health-question-number">{question.number}</span>
        <p className="health-question-text">{question.text}</p>
      </div>
      <div className="health-options" role="radiogroup" aria-label={question.text}>
        {question.options.map((option, index) => {
          const inputId = `${question.id}-${index}`
          const isChecked = selected === index

          return (
            <label
              className={`health-option ${isChecked ? 'selected' : ''}`}
              htmlFor={inputId}
              key={option}
            >
              <input
                type="radio"
                id={inputId}
                name={question.id}
                value={index}
                checked={isChecked}
                onChange={() => onAnswerChange(question.id, index)}
              />
              <span className="health-option-indicator" aria-hidden="true">
                {isChecked && (
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2.5 6L5 8.5L9.5 3.5"
                      stroke="white"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </span>
              <span className="health-option-text">{option}</span>
            </label>
          )
        })}
      </div>
    </div>
  )
}

function HealthCheck() {
  const [answers, setAnswers] = useState(initialAnswers)
  const resultsRef = useRef(null)
  const wasCompleteRef = useRef(false)

  const handleAnswerChange = (questionId, optionIndex) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }))
  }

  const answeredCount = useMemo(
    () => allQuestions.filter((question) => answers[question.id] !== null).length,
    [answers]
  )

  const isComplete = answeredCount === allQuestions.length

  const results = useMemo(() => {
    if (!isComplete) return null
    return computeResults(answers)
  }, [answers, isComplete])

  useEffect(() => {
    if (isComplete && !wasCompleteRef.current) {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
    wasCompleteRef.current = isComplete
  }, [isComplete])

  return (
    <section className="health-section" id="health-check">
      <div className="health-top">
        <div className="health-badge">Health Check</div>

        <div className="health-header">
          <div className="health-label">Free Health Check</div>
          <p className="health-intro">
            Answer 12 simple questions about how you feel day to day. At the end you will get a snapshot of which areas may need attention across energy, sleep and daily rhythms.
          </p>
          <p className="health-disclaimer">
            <span className="health-disclaimer-label">Disclaimer:</span>{' '}
            This health check is a general screening tool based on standardised health questionnaires. It is not a diagnostic tool and does not constitute medical advice. Results are indicative only. Please consult a qualified healthcare professional before making any changes to your health or treatment.
          </p>
        </div>
      </div>

      <div className="health-lower">
        <p className="health-banner">
          Takes about <em>3 minutes</em> · Free · No <em>sign-up</em> required
        </p>

        <div className="health-form">
          {questionnaireSections.map((section) => (
            <div className="health-form-section" key={section.title}>
              <h2 className="health-section-title">{section.title}</h2>
              <div className="health-questions-grid">
                {section.questions.map((question) => (
                  <QuestionCard
                    key={question.id}
                    question={question}
                    answers={answers}
                    onAnswerChange={handleAnswerChange}
                  />
                ))}
              </div>
            </div>
          ))}

          {!isComplete && (
            <p className="health-results-prompt">
              Answer all 12 questions to see your personalised results.{' '}
              <span className="health-results-progress">({answeredCount}/12 completed)</span>
            </p>
          )}

          {isComplete && results && (
            <div className="health-results" ref={resultsRef}>
              <div className="health-results-main">
                <div className="health-gauge-main-wrap">
                  <SemiCircleGauge
                    score={results.overallScore}
                    maxScore={results.overallMax}
                    color={results.overall.color}
                  />
                  <div className="health-gauge-main-content">
                    <span className="health-gauge-main-score">{results.overallScore}</span>
                    <span className="health-gauge-main-label">{results.overall.label}</span>
                    <span className="health-gauge-main-badge">{results.overall.badge}</span>
                  </div>
                </div>
              </div>

              <div className="health-results-breakdown">
                {results.categories.map((category) => (
                  <article className="health-result-card" key={category.title}>
                    <MiniGauge
                      score={category.score}
                      maxScore={category.maxScore}
                      color={category.color}
                    />
                    <div className="health-result-card-content">
                      <h3 className="health-result-card-title">{category.title}</h3>
                      <p className="health-result-card-desc">{category.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default HealthCheck
