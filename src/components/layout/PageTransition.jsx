import { motion } from 'motion/react'
import { pageLoad, pageLoadTransition } from '../../animations/motionPresets'
import useReducedMotion from '../../hooks/useReducedMotion'

function PageTransition({ children }) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      initial={prefersReducedMotion ? 'visible' : 'hidden'}
      animate="visible"
      variants={pageLoad}
      transition={pageLoadTransition}
    >
      {children}
    </motion.div>
  )
}

export default PageTransition