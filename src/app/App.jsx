import SiteNavigation from '../components/layout/SiteNavigation'
import PageTransition from '../components/layout/PageTransition'
import HeroSection from '../sections/HeroSection'
import AboutSection from '../sections/AboutSection'
import ProjectsSection from '../sections/ProjectsSection'
import SkillsSection from '../sections/SkillsSection'
import ContactSection from '../sections/ContactSection'
import EducationSection from '../sections/EducationSection'
import BeyondClassroomSection from '../sections/BeyondClassroomSection'
import GithubSection from '../sections/GithubSection'
import SiteFooter from '../components/layout/SiteFooter'
import HealthcareMonitoringSystem from '../pages/HealthcareMonitoringSystem'
import SevenSkin from '../pages/SevenSkin'
import ResQAI from '../pages/ResQAI'
import SheRest from '../pages/SheRest'
import RepoPilot from '../pages/RepoPilot'

function App() {
  const currentPath = window.location.pathname.replace(/\/+$/, '') || '/'
  const isRepoPilotProject = currentPath === '/projects/repopilot'
  const isHealthcareProject = currentPath === '/projects/healthcare-monitoring-system'
  const isSevenSkinProject = currentPath === '/projects/7skin'
  const isResQAIProject = currentPath === '/projects/resqai'
  const isSheRestProject = currentPath === '/projects/sherest'

  return (
    <div className="min-h-screen bg-[var(--color-canvas)] text-[var(--color-ink)]">
      <SiteNavigation />
      <PageTransition>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        {isRepoPilotProject ? (
          <main id="main-content"><RepoPilot /></main>
        ) : isHealthcareProject ? (
          <main id="main-content"><HealthcareMonitoringSystem /></main>
        ) : isSevenSkinProject ? (
          <main id="main-content"><SevenSkin /></main>
        ) : isResQAIProject ? (
          <main id="main-content"><ResQAI /></main>
        ) : isSheRestProject ? (
          <main id="main-content"><SheRest /></main>
        ) : (
          <main id="main-content">
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <SkillsSection />
            <EducationSection />
            <BeyondClassroomSection />
            <GithubSection />
            <ContactSection />
          </main>
        )}
        <SiteFooter />
      </PageTransition>
    </div>
  )
}

export default App
