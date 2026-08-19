import { motion } from 'motion/react'
import { useState } from 'react'
import PageContainer from '../components/layout/PageContainer'
import ActivityTimeline from '../components/activities/ActivityTimeline'
import { activities } from '../data/activities'
import useReducedMotion from '../hooks/useReducedMotion'

function BeyondClassroomSection() {
  const prefersReducedMotion = useReducedMotion()
  const [selectedYear, setSelectedYear] = useState('all')
  const years = ['all', '2023', '2024', '2025', '2026']
  const visibleActivities = selectedYear === 'all'
    ? activities
    : activities.filter((activity) => activity.year === selectedYear)
  return (
    <section className="portfolio-section beyond-classroom-section" id="leadership" aria-labelledby="beyond-classroom-title">
      <PageContainer>
        <div className="beyond-classroom-header">
          <div>
            <p className="section-kicker">06 / Beyond the classroom</p>
            <h2 className="section-title" id="beyond-classroom-title">Beyond the classroom</h2>
            <p className="beyond-classroom-subtitle">Competitions, collaboration, volunteering and experiences beyond academics.</p>
          </div>
          <p className="beyond-classroom-stat">09 EXPERIENCES · 2023—2026</p>
        </div>
          <div className="activity-year-switcher" role="tablist" aria-label="Filter experiences by year">
            {years.map((year) => (
              <button
                className={selectedYear === year ? 'activity-year-button activity-year-button-active' : 'activity-year-button'}
                key={year}
                type="button"
                role="tab"
                aria-selected={selectedYear === year}
                onClick={() => setSelectedYear(year)}
              >
                {year === 'all' ? 'All years' : year}
              </button>
            ))}
          </div>
          <motion.div
            key={selectedYear}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.25, ease: 'easeOut' }}
          >
            <ActivityTimeline activities={visibleActivities} prefersReducedMotion={prefersReducedMotion} />
          </motion.div>
      </PageContainer>
    </section>
  )
}

export default BeyondClassroomSection
