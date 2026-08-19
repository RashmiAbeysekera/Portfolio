import { motion } from 'motion/react'
import PageContainer from '../components/layout/PageContainer'
import { profile } from '../data/profile'
import { heroReveal, heroTransition } from '../animations/motionPresets'
import useReducedMotion from '../hooks/useReducedMotion'

function GithubSection() {
  const prefersReducedMotion = useReducedMotion()
  const initial = prefersReducedMotion ? 'visible' : 'hidden'

  return (
    <section className="portfolio-section" id="github" aria-labelledby="github-title">
      <PageContainer>
        <div className="github-layout">
          <div>
            <motion.p className="section-kicker" initial={initial} whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={heroReveal} transition={heroTransition}>
              06 / GitHub activity
            </motion.p>
            <motion.h2 className="section-title" id="github-title" initial={initial} whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={heroReveal} transition={{ ...heroTransition, delay: 0.08 }}>
              Follow the work in public.
            </motion.h2>
          </div>
          <motion.div className="github-copy" initial={initial} whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={heroReveal} transition={{ ...heroTransition, delay: 0.14 }}>
            <p>Browse Rashmi&apos;s public repositories and coding activity on GitHub.</p>
            <a className="project-link" href={profile.githubUrl} target="_blank" rel="noreferrer">View GitHub profile <span aria-hidden="true">↗</span></a>
          </motion.div>
        </div>
      </PageContainer>
    </section>
  )
}

export default GithubSection
