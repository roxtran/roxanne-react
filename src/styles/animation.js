export const navAnim = {
  show: { transition: { staggerChildren: 0.2, delayChildren: 0.8 } }
}

export const navlinkAnim = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 0.4 }
  }
}

export const container = {
  show: { transition: { staggerChildren: 0.2 } }
}

export const slideUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 0.4 }
  },
  exit: { opacity: 0, y: 40, transition: { ease: 'easeInOut', duration: 0.2 } }
}

export const circleAnim = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { ease: 'easeInOut', duration: 0.4 } },
  exit: {
    opacity: 0,
    x: -40,
    transition: { ease: 'easeInOut', duration: 0.2 }
  }
}

export const slideRight = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { ease: 'easeInOut', duration: 0.5 } },
  exit: { opacity: 0, x: -40, transition: { ease: 'easeInOut', duration: 0.2 } }
}

export const slideLeft = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { ease: 'easeInOut', duration: 0.5 } },
  exit: { opacity: 0, x: 40, transition: { ease: 'easeInOut', duration: 0.2 } }
}
