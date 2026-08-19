import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'
import PageContainer from './PageContainer'
import { menuPanel } from '../../animations/motionPresets'
import { navigationItems } from '../../data/navigation'
import useReducedMotion from '../../hooks/useReducedMotion'

function SiteNavigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 24)
    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })

    return () => window.removeEventListener('scroll', updateScrollState)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('main section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-35% 0px -55% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!menuOpen) return undefined

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  const handleNavigation = (event, href) => {
    if (!href.startsWith('#')) return

    const target = document.querySelector(href)
    if (!target) return

    event.preventDefault()
    const top = target.getBoundingClientRect().top + window.scrollY - 88
    window.scrollTo({ top, behavior: prefersReducedMotion ? 'auto' : 'smooth' })
    window.history.replaceState(null, '', href)
    setMenuOpen(false)
  }

  return (
    <motion.header
      animate={{ backgroundColor: isScrolled ? 'rgba(10, 13, 18, 0.84)' : 'rgba(10, 13, 18, 0)' }}
      className="fixed inset-x-0 top-0 z-50 border-b border-transparent backdrop-blur-md"
      transition={{ duration: prefersReducedMotion ? 0 : 0.25, ease: 'easeOut' }}
    >
      <PageContainer>
        <nav className="flex h-[72px] items-center justify-between" aria-label="Primary navigation">
          <a
            className="font-mono text-sm font-semibold tracking-[0.08em] text-[var(--color-ink)] transition-colors hover:text-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
            href="#hero"
          >
            rashmi<span className="text-[var(--color-accent)]">.</span>dev
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navigationItems.map((item) => (
              <a
                className="text-sm font-medium text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-ink)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
                data-active={activeSection === item.href.slice(1)}
                href={item.href}
                key={item.label}
                onClick={(event) => handleNavigation(event, item.href)}
              >
                {item.label}
              </a>
            ))}
            <span className="status-badge" aria-label="Available for internship">
              <span className="status-dot" aria-hidden="true" />
              Available for internship
            </span>
          </div>

          <button
            className="rounded-md p-2 text-[var(--color-ink)] transition-colors hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] md:hidden"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
          >
            <span className="block h-px w-5 bg-current" />
            <span className="mt-1.5 block h-px w-5 bg-current" />
            <span className="mt-1.5 block h-px w-5 bg-current" />
          </button>
        </nav>

        <AnimatePresence initial={false}>
          {menuOpen && (
          <motion.div
            className="border-t border-[var(--color-line)] py-4 md:hidden"
            id="mobile-navigation"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuPanel}
            transition={{ duration: prefersReducedMotion ? 0 : 0.22, ease: 'easeOut' }}
          >
            <div className="flex flex-col gap-1">
              {navigationItems.map((item) => (
                <a
                  className="rounded-md px-3 py-2 text-sm text-[var(--color-ink-muted)] transition-colors hover:bg-white/5 hover:text-[var(--color-ink)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
                  data-active={activeSection === item.href.slice(1)}
                  href={item.href}
                  key={item.label}
                  onClick={(event) => handleNavigation(event, item.href)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
          )}
        </AnimatePresence>
      </PageContainer>
    </motion.header>
  )
}

export default SiteNavigation
