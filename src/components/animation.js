import { motion } from 'framer-motion'

export const pageAnimation = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5
    }
  }
}

export const slideUp = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 }
  }
}

export const circle1Amin = {
  hidden: { opacity: 0, x: 200 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 2 }
  }
}

export const scale = {
  hidden: { opacity: 0, scale: 0.5 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 }
  }
}
