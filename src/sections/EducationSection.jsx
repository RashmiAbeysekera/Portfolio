import { motion } from 'motion/react'
import PageContainer from '../components/layout/PageContainer'
import { education } from '../data/education'
import { heroReveal, heroTransition } from '../animations/motionPresets'
import useReducedMotion from '../hooks/useReducedMotion'

function EducationSection() {
  const prefersReducedMotion = useReducedMotion()
  const initial = prefersReducedMotion ? 'visible' : 'hidden'

  return (
    <section className="portfolio-section" id="education" aria-labelledby="education-title">
      <PageContainer>
        <div className="section-intro">
          <motion.p className="section-kicker" initial={initial} whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={heroReveal} transition={heroTransition}>
            05 / Education & achievements
          </motion.p>
          <motion.h2 className="section-title" id="education-title" initial={initial} whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={heroReveal} transition={{ ...heroTransition, delay: 0.08 }}>
            Academic foundations, continued through practice.
          </motion.h2>
        </div>
        <div className="education-layout">
          <motion.div className="education-primary" initial={initial} whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={heroReveal} transition={{ ...heroTransition, delay: 0.12 }}>
            <p className="project-type">{education.cohort}</p>
            <h3>{education.institution}</h3>
            <p>{education.degree}</p>
          </motion.div>
          <motion.div className="education-facts" initial={initial} whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={heroReveal} transition={{ ...heroTransition, delay: 0.2 }}>
            <div><strong>{education.currentGpa}</strong><span>Current GPA</span></div>
            <div><strong>{education.deanList}</strong><span>Academic achievement</span></div>
            <div className="education-records">
              <strong>School examination results</strong>
              <ul>
                {education.academicRecords.map((record) => <li key={record}>{record}</li>)}
              </ul>
            </div>
            <ul>{education.activities.map((activity) => <li key={activity}>{activity}</li>)}</ul>
          </motion.div>
        </div>
      </PageContainer>
    </section>
  )
}

export default EducationSection
