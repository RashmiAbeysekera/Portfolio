import PageContainer from './PageContainer'
import { profile } from '../../data/profile'

function SiteFooter() {
  return (
    <footer className="site-footer">
      <PageContainer>
        <div className="footer-layout">
          <span>Rashmi Abeysekera · Information Technology · University of Moratuwa</span>
          <div>
            <a href={profile.githubUrl} target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={`mailto:${profile.email}`}>Email</a>
            <a href="#hero">Back to top ↑</a>
          </div>
        </div>
      </PageContainer>
    </footer>
  )
}

export default SiteFooter
