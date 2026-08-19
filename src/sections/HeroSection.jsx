import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'
import portrait from '../assets/rashmi-portrait.jpg'
import PageContainer from '../components/layout/PageContainer'
import { heroReveal, heroTransition } from '../animations/motionPresets'
import { profile } from '../data/profile'
import useReducedMotion from '../hooks/useReducedMotion'

function HeroSection() {
  const prefersReducedMotion = useReducedMotion()
  const [focusIndex, setFocusIndex] = useState(0)

  useEffect(() => {
    if (prefersReducedMotion) return undefined

    const intervalId = window.setInterval(() => {
      setFocusIndex((currentIndex) => (currentIndex + 1) % profile.buildFocus.length)
    }, 3200)

    return () => window.clearInterval(intervalId)
  }, [prefersReducedMotion])

  const revealInitial = prefersReducedMotion ? 'visible' : 'hidden'

  return (
    <section
      className="relative isolate min-h-[100svh] overflow-hidden border-b border-[var(--color-line)]"
      id="hero"
      aria-labelledby="hero-title"
    >
      <div className="hero-grid" aria-hidden="true" />
      <PageContainer className="relative flex min-h-[100svh] items-center pb-16 pt-28 sm:pb-20 lg:pt-32">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.92fr)] lg:gap-20">
          <div className="max-w-3xl">
            <motion.div
              className="mb-6 flex flex-wrap items-center gap-3 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-[var(--color-ink-muted)]"
              initial={revealInitial}
              animate="visible"
              variants={heroReveal}
              transition={{ ...heroTransition, delay: 0.05 }}
            >
              <span className="status-dot" aria-hidden="true" />
              {profile.status}
            </motion.div>

            <motion.p
              className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-accent)]"
              initial={revealInitial}
              animate="visible"
              variants={heroReveal}
              transition={{ ...heroTransition, delay: 0.12 }}
            >
              {profile.program} · {profile.university}
            </motion.p>

            <motion.h1
              className="max-w-4xl text-5xl font-extrabold leading-[0.96] tracking-[-0.055em] text-[var(--color-ink)] sm:text-7xl lg:text-[clamp(4.5rem,8vw,7.5rem)]"
              id="hero-title"
              initial={revealInitial}
              animate="visible"
              variants={heroReveal}
              transition={{ ...heroTransition, delay: 0.2 }}
            >
              Rashmi
              <span className="block text-[var(--color-accent)]">Abeysekera</span>
            </motion.h1>

            <motion.p
              className="mt-8 max-w-2xl text-base leading-8 text-[var(--color-ink-muted)] sm:text-lg"
              initial={revealInitial}
              animate="visible"
              variants={heroReveal}
              transition={{ ...heroTransition, delay: 0.3 }}
            >
              {profile.intro}
            </motion.p>

            <motion.div
              className="mt-8 min-h-16 font-mono text-sm leading-7 text-[var(--color-ink-muted)] sm:text-base"
              initial={revealInitial}
              animate="visible"
              variants={heroReveal}
              transition={{ ...heroTransition, delay: 0.4 }}
              aria-live={prefersReducedMotion ? 'off' : 'polite'}
            >
              <span className="text-[var(--color-ink-subtle)]">I build </span>
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  className="inline-block text-[var(--color-ink)]"
                  key={profile.buildFocus[focusIndex]}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                  {profile.buildFocus[focusIndex]}
                </motion.span>
              </AnimatePresence>
              <span className="text-[var(--color-accent)]">.</span>
            </motion.div>

            <motion.div
              className="mt-8 flex flex-col gap-3 sm:flex-row"
              initial={revealInitial}
              animate="visible"
              variants={heroReveal}
              transition={{ ...heroTransition, delay: 0.5 }}
            >
              <a className="hero-button hero-button-primary" href="#projects">
                View selected projects
                <span aria-hidden="true">↗</span>
              </a>
              <a
                className="hero-button hero-button-secondary"
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                Visit GitHub
                <span aria-hidden="true">↗</span>
              </a>
            </motion.div>
          </div>

          <motion.div
            className="hero-profile-panel"
            initial={revealInitial}
            animate="visible"
            variants={heroReveal}
            transition={{ ...heroTransition, delay: 0.35 }}
            aria-label="Technical focus areas"
          >
            <figure className="hero-portrait">
              <img
                className="hero-portrait-image"
                src={portrait}
                alt="Rashmi Abeysekera"
                width="600"
                height="800"
                fetchPriority="high"
                decoding="async"
              />
              <figcaption>
                <span>Rashmi Abeysekera</span>
                <span>IT undergraduate · UoM</span>
              </figcaption>
            </figure>
            <div className="flex items-center justify-between border-b border-[var(--color-line)] pb-4 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-[var(--color-ink-subtle)]">
              <span>build_profile</span>
              <span className="text-[var(--color-accent)]">01 / 04</span>
            </div>
            <div className="relative mt-7 space-y-5">
              {profile.interests.map((interest, index) => (
                <div className="hero-focus-row" key={interest}>
                  <span className="font-mono text-xs text-[var(--color-ink-subtle)]">0{index + 1}</span>
                  <span>{interest}</span>
                  <span className="hero-focus-line" aria-hidden="true" />
                </div>
              ))}
            </div>
            <div className="mt-10 border-t border-[var(--color-line)] pt-4 font-mono text-xs leading-6 text-[var(--color-ink-subtle)]">
              <span className="text-[var(--color-accent)]">//</span> practical systems,
              <br />
              thoughtful interfaces
            </div>
          </motion.div>
        </div>

        <motion.a
          className="absolute bottom-6 left-5 flex items-center gap-3 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-[var(--color-ink-subtle)] sm:left-8 lg:left-12"
          href="#about"
          initial={revealInitial}
          animate="visible"
          variants={heroReveal}
          transition={{ ...heroTransition, delay: 0.8 }}
        >
          <span className="scroll-line" aria-hidden="true" />
          Scroll to explore
        </motion.a>
      </PageContainer>
    </section>
  )
}

export default HeroSection
