import { motion } from 'motion/react'
import PageContainer from '../components/layout/PageContainer'
import { educationItems } from '../data/education'
import { heroReveal, heroTransition } from '../animations/motionPresets'
import useReducedMotion from '../hooks/useReducedMotion'

function EducationSection() {
  const prefersReducedMotion = useReducedMotion()
  const initial = prefersReducedMotion ? 'visible' : 'hidden'

  return (
    <section className="portfolio-section education-section" id="education" aria-labelledby="education-title">
      <PageContainer>
        <div className="section-intro">
          <motion.p className="section-kicker" initial={initial} whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={heroReveal} transition={heroTransition}>
            05 / Education
          </motion.p>
          <motion.h2 className="section-title" id="education-title" initial={initial} whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={heroReveal} transition={{ ...heroTransition, delay: 0.08 }}>
            Academic foundations, presented with clarity.
          </motion.h2>
        </div>
        <div className="education-grid">
          {educationItems.map((entry, index) => (
            <motion.article
              className="education-card"
              key={entry.number}
              initial={initial}
              whileInView="visible"
              viewport={{ once: true, amount: 0.18 }}
              variants={heroReveal}
              transition={{ ...heroTransition, delay: index * 0.08 }}
            >
              <span className="education-number" aria-hidden="true">{entry.number}</span>
              <div className="education-card-meta">
                <span>{entry.date}</span>
                <span>{entry.location}</span>
              </div>
              <h3>{entry.institution}</h3>
              <p className="education-qualification">{entry.qualification}</p>
              {entry.examination && <p className="education-examination">{entry.examination}</p>}
              {entry.description && <p className="education-description">{entry.description}</p>}
              <div className="education-achievements">
                {entry.achievements.map((achievement) => (
                  <span key={achievement}>{achievement}</span>
                ))}
              </div>
              {entry.subjects && (
                <p className="education-subjects">
                  <span>Subjects</span>
                  {entry.subjects}
                </p>
              )}
            </motion.article>
          ))}
        </div>
      </PageContainer>
    </section>
  )
}

export default EducationSection
