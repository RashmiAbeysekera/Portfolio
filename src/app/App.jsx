import SiteNavigation from '../components/layout/SiteNavigation'
import PageTransition from '../components/layout/PageTransition'
import HeroSection from '../sections/HeroSection'
import AboutSection from '../sections/AboutSection'
import ProjectsSection from '../sections/ProjectsSection'
import SkillsSection from '../sections/SkillsSection'
import ContactSection from '../sections/ContactSection'
import EducationSection from '../sections/EducationSection'
import LeadershipSection from '../sections/LeadershipSection'
import GithubSection from '../sections/GithubSection'
import SiteFooter from '../components/layout/SiteFooter'

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-canvas)] text-[var(--color-ink)]">
      <SiteNavigation />
      <PageTransition>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <main id="main-content">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <EducationSection />
          <LeadershipSection />
          <GithubSection />
          <ContactSection />
        </main>
        <SiteFooter />
      </PageTransition>
    </div>
  )
}

export default App
