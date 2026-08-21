import { useState } from 'react'
import { motion } from 'motion/react'
import PageContainer from '../components/layout/PageContainer'
import { profile } from '../data/profile'
import useReducedMotion from '../hooks/useReducedMotion'

function ContactSection() {
  const [copied, setCopied] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  const handleCopyEmail = async (event) => {
    event.preventDefault()
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section className="portfolio-section contact-section" id="contact" aria-labelledby="contact-title">
      <PageContainer>
        <div className="contact-layout">
          <div>
            <p className="section-kicker">04 / Contact</p>
            <h2 className="section-title" id="contact-title">Let&apos;s connect.</h2>
          </div>
          <div className="contact-copy">
            <p>
              I&apos;m currently looking for a software engineering internship and would be glad to
              connect about meaningful technical work.
            </p>
            <div className="contact-cards">
              <motion.div
                className="contact-card"
                whileHover={prefersReducedMotion ? undefined : { y: -4 }}
              >
                <span className="contact-card-label">Email</span>
                <span className="contact-card-value">{profile.email}</span>
                <span className="contact-card-footer">
                  <a className="contact-card-link" href={`mailto:${profile.email}`}>
                    Email <span aria-hidden="true">↗</span>
                  </a>
                  <button
                    type="button"
                    className="contact-copy-button"
                    onClick={handleCopyEmail}
                    aria-label="Copy email address to clipboard"
                  >
                    {copied ? 'Copied ✓' : 'Copy'}
                  </button>
                </span>
              </motion.div>

              <motion.a
                className="contact-card"
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                whileHover={prefersReducedMotion ? undefined : { y: -4 }}
              >
                <span className="contact-card-label">GitHub</span>
                <span className="contact-card-value">View public repositories</span>
                <span className="contact-card-footer">
                  <span className="contact-card-arrow" aria-hidden="true">↗</span>
                </span>
              </motion.a>

              <motion.a
                className="contact-card"
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                whileHover={prefersReducedMotion ? undefined : { y: -4 }}
              >
                <span className="contact-card-label">LinkedIn</span>
                <span className="contact-card-value">Connect professionally</span>
                <span className="contact-card-footer">
                  <span className="contact-card-arrow" aria-hidden="true">↗</span>
                </span>
              </motion.a>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  )
}

export default ContactSection