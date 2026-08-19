import { motion } from 'motion/react'
import { useState } from 'react'
import PageContainer from '../components/layout/PageContainer'
import { heroReveal, heroTransition } from '../animations/motionPresets'
import { skillGroups } from '../data/skills'
import useReducedMotion from '../hooks/useReducedMotion'

function SkillsSection() {
  const prefersReducedMotion = useReducedMotion()
  const initial = prefersReducedMotion ? 'visible' : 'hidden'
  const [selectedGroup, setSelectedGroup] = useState(0)
  const activeGroup = skillGroups[selectedGroup]

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

        <div className="skills-studio">
          <motion.div
            className="skills-rail"
            initial={initial}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={heroReveal}
            transition={heroTransition}
          >
            <p className="skills-rail-label">Toolkit / 04</p>
            {skillGroups.map((group, index) => (
              <button
                className={selectedGroup === index ? 'skills-rail-button skills-rail-button-active' : 'skills-rail-button'}
                key={group.label}
                type="button"
                onClick={() => setSelectedGroup(index)}
                aria-pressed={selectedGroup === index}
              >
                <span>{group.index}</span>
                {group.label}
              </button>
            ))}
            <p className="skills-rail-note">Select a layer<br />to explore the stack.</p>
          </motion.div>

          <motion.div
            className="skills-constellation"
            initial={initial}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={heroReveal}
            transition={{ ...heroTransition, delay: 0.12 }}
          >
            <div className="skills-constellation-orbit orbit-one" aria-hidden="true" />
            <div className="skills-constellation-orbit orbit-two" aria-hidden="true" />
            <div className="skills-core">
              <span>Selected layer</span>
              <strong>{activeGroup.label}</strong>
              <small>{activeGroup.skills.length} technologies</small>
            </div>
            <motion.div
              className="skills-cloud"
              key={activeGroup.label}
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.3, ease: 'easeOut' }}
            >
              {activeGroup.skills.map((skill, index) => (
                <span className={`skill-cloud-item skill-cloud-item-${index % 5}`} key={skill}>
                  {skill}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </PageContainer>
    </section>
  )
}

export default SkillsSection
