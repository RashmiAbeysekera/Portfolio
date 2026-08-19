import { motion } from 'motion/react'
import ActivityItem from './ActivityItem'

function ActivityTimeline({ activities, prefersReducedMotion }) {
  return (
    <div className="activity-path-stage">
      <svg className="activity-curved-path" viewBox="0 0 100 900" preserveAspectRatio="none" aria-hidden="true">
        <path
          className="activity-path-track"
          d="M50 0 C28 80 72 135 50 220 S28 360 50 450 S72 590 50 680 S28 820 50 900"
        />
        <motion.path
          className="activity-path-progress"
          d="M50 0 C28 80 72 135 50 220 S28 360 50 450 S72 590 50 680 S28 820 50 900"
          initial={{ pathLength: prefersReducedMotion ? 1 : 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: prefersReducedMotion ? 0 : 1.8, ease: 'easeInOut' }}
        />
      </svg>
      {activities.map((activity, index) => (
        <ActivityItem
          activity={activity}
          index={index}
          key={`${activity.date}-${activity.title}`}
          prefersReducedMotion={prefersReducedMotion}
        />
      ))}
    </div>
  )
}

export default ActivityTimeline
