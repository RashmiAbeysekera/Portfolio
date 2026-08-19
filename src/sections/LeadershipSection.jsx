import { motion } from 'motion/react'
import PageContainer from '../components/layout/PageContainer'
import { heroReveal, heroTransition } from '../animations/motionPresets'
import { leadershipItems } from '../data/leadership'
import useReducedMotion from '../hooks/useReducedMotion'

function LeadershipSection() {
  const prefersReducedMotion = useReducedMotion()
  const initial = prefersReducedMotion ? 'visible' : 'hidden'

  return (
    <section className="portfolio-section" id="leadership" aria-labelledby="leadership-title">
      <PageContainer>
        <div className="section-intro">
          <motion.p className="section-kicker" initial={initial} whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={heroReveal} transition={heroTransition}>
            06 / Leadership & volunteering
          </motion.p>
          <motion.h2 className="section-title" id="leadership-title" initial={initial} whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={heroReveal} transition={{ ...heroTransition, delay: 0.08 }}>
            Contributing beyond the codebase.
          </motion.h2>
        </div>
        <motion.div className="leadership-list" initial={initial} whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={heroReveal} transition={{ ...heroTransition, delay: 0.14 }}>
          {leadershipItems.map((item, index) => (
            <div className="leadership-item" key={item.organization}>
              <span className="leadership-index">0{index + 1}</span>
              <strong>{item.organization}</strong>
              <span>{item.role}</span>
            </div>
          ))}
        </motion.div>
      </PageContainer>
    </section>
  )
}

export default LeadershipSection
