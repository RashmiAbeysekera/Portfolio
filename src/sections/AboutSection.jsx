import { motion } from 'motion/react'
import PageContainer from '../components/layout/PageContainer'
import { heroReveal, heroTransition } from '../animations/motionPresets'
import { profile } from '../data/profile'
import useReducedMotion from '../hooks/useReducedMotion'

function AboutSection() {
  const prefersReducedMotion = useReducedMotion()
  const initial = prefersReducedMotion ? 'visible' : 'hidden'

  return (
    <section className="portfolio-section" id="about" aria-labelledby="about-title">
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
            01 / About
          </motion.p>
          <motion.h2
            className="section-title"
            id="about-title"
            initial={initial}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={heroReveal}
            transition={{ ...heroTransition, delay: 0.08 }}
          >
            Building with curiosity, from interface to infrastructure.
          </motion.h2>
        </div>

        <div className="about-layout">
          <motion.div
            className="about-copy"
            initial={initial}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={heroReveal}
            transition={{ ...heroTransition, delay: 0.12 }}
          >
            <p>
              I&apos;m a second-year Information Technology undergraduate at the {profile.university},
              pursuing a {profile.program} as part of Batch &apos;23.
            </p>
            <p>
              My work spans admin dashboards, real-time emergency response platforms, and
              full-stack e-commerce applications. I enjoy understanding how software systems
              work end to end, from an intuitive interface to the services and data behind it.
            </p>
            <p>
              I&apos;m currently looking for a software engineering internship where I can contribute
              to meaningful projects and continue growing as an engineer.
            </p>
          </motion.div>

          <motion.div
            className="about-facts"
            initial={initial}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={heroReveal}
            transition={{ ...heroTransition, delay: 0.2 }}
          >
            <div className="about-fact">
              <span className="about-fact-value">3.76</span>
              <span className="about-fact-label">Current GPA / 4.0</span>
            </div>
            <div className="about-fact">
              <span className="about-fact-value">3.94</span>
              <span className="about-fact-label">Dean&apos;s List · 3rd semester</span>
            </div>
            <div className="about-fact about-fact-wide">
              <span className="about-fact-label">Current focus</span>
              <div className="about-interest-list">
                {profile.interests.map((interest) => (
                  <span key={interest}>{interest}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </PageContainer>
    </section>
  )
}

export default AboutSection
