import PageContainer from '../components/layout/PageContainer'
import { profile } from '../data/profile'

function ContactSection() {
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
            <div className="contact-links">
              <a href={`mailto:${profile.email}`}>{profile.email} <span aria-hidden="true">↗</span></a>
              <a href={profile.githubUrl} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
              <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  )
}

export default ContactSection