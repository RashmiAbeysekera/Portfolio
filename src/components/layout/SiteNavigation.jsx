import { useState } from 'react'
import PageContainer from './PageContainer'
import { navigationItems } from '../../data/navigation'

function SiteNavigation() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-transparent transition-colors duration-300">
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
                href={item.href}
                key={item.label}
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

        {menuOpen && (
          <div
            className="border-t border-[var(--color-line)] py-4 md:hidden"
            id="mobile-navigation"
          >
            <div className="flex flex-col gap-1">
              {navigationItems.map((item) => (
                <a
                  className="rounded-md px-3 py-2 text-sm text-[var(--color-ink-muted)] transition-colors hover:bg-white/5 hover:text-[var(--color-ink)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
                  href={item.href}
                  key={item.label}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </PageContainer>
    </header>
  )
}

export default SiteNavigation
