import { motion } from 'motion/react'
import { useState } from 'react'

function ActivityItem({ activity, index, prefersReducedMotion }) {
  const [isActive, setIsActive] = useState(false)
  const side = index % 2 === 0 ? 'activity-item-left' : 'activity-item-right'

  return (
    <motion.article
      className={`activity-item ${side}`}
      initial={prefersReducedMotion ? 'visible' : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.55, delay: index * 0.025, ease: [0.22, 1, 0.36, 1] }}
      onViewportEnter={() => setIsActive(true)}
    >
      <div className={`activity-node ${isActive ? 'activity-node-active' : ''}`} aria-hidden="true" />
      <div className="activity-content">
        <span className={`activity-index ${isActive ? 'activity-index-active' : ''}`} aria-hidden="true">0{index + 1}</span>
        <div className="activity-date">{activity.date}</div>
        <h3>{activity.title}</h3>
        {activity.result && <p className="activity-result">{activity.result}</p>}
        {activity.role && <p className="activity-role">{activity.role}</p>}
        {activity.team && <p className="activity-secondary">{activity.team}</p>}
        {activity.organization && <p className="activity-secondary">{activity.organization}</p>}
        {activity.contribution && <p className="activity-description">{activity.contribution}</p>}
        <span className="activity-category">{activity.category}</span>
      </div>
    </motion.article>
  )
}

export default ActivityItem
