export const heroReveal = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
}

export const heroTransition = {
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1],
}

export const pageLoad = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const pageLoadTransition = {
  duration: 0.45,
  ease: 'easeOut',
}

export const menuPanel = {
  closed: { opacity: 0, height: 0 },
  open: { opacity: 1, height: 'auto' },
}
