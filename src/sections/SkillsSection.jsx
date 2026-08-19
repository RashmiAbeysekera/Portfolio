import { motion } from 'motion/react'
import PageContainer from '../components/layout/PageContainer'
import { heroReveal, heroTransition } from '../animations/motionPresets'
import { skillGroups } from '../data/skills'
import useReducedMotion from '../hooks/useReducedMotion'

function SkillsSection() {
  const prefersReducedMotion = useReducedMotion()
  const initial = prefersReducedMotion ? 'visible' : 'hidden'

  return (
    <section className="portfolio-section" id="skills" aria-labelledby="skills-title">
      <PageContainer>
        <div className="section-intro">
          <motion.p
            className="section-kicker"
            initial={initial}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={heroReveal}
            transition={heroTransition}
          >
            03 / Technical skills
          </motion.p>
          <motion.h2
            className="section-title"
            id="skills-title"
            initial={initial}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={heroReveal}
            transition={{ ...heroTransition, delay: 0.08 }}
          >
            Tools I use to move from idea to working software.
          </motion.h2>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <motion.article
              className="skill-group"
              key={group.label}
              initial={initial}
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={heroReveal}
              transition={{ ...heroTransition, delay: index * 0.08 }}
            >
              <div className="skill-group-heading">
                <span className="skill-index">{group.index}</span>
                <h3>{group.label}</h3>
              </div>
              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </PageContainer>
    </section>
  )
}

export default SkillsSection
