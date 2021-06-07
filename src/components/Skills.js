import React from 'react'
import styled from 'styled-components'
//animation
import { useScroll } from '../utils/useScroll'
import { motion } from 'framer-motion'
import { container, slideRight, slideLeft } from '../styles/animation'

const Skills = () => {
  const [element, controls] = useScroll()
  return (
    <StyledSkills
      id='skills'
      variants={container}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      <div className='hide-overflow header-wrapper'>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.4,
            delay: 1.2
          }}
        >
          Multidisciplinary digital designer & developer
        </motion.h2>
      </div>
      <SkillsGrid
        variants={container}
        initial='hidden'
        animate={controls}
        exit='exit'
        ref={element}
      >
        <motion.h3 variants={slideRight}>User Interface</motion.h3>
        <motion.p variants={slideLeft}>
          Creating beautiful interface for products that not only look good but
          are functional.
        </motion.p>
        <motion.h3 variants={slideRight}>User Experience</motion.h3>
        <motion.p variants={slideLeft}>
          Tackling each project with a user focused mindset. User testing to
          promote accessibility and a better User Experience.
        </motion.p>
        <motion.h3 variants={slideRight} className='highlight'>
          Front-End
        </motion.h3>
        <motion.p variants={slideLeft}>
          Taking beautiful designs and building them into responsive and
          functional websites. Using a CMS for easier web maintenance.
        </motion.p>
        <motion.h3 variants={slideRight}>Consulting</motion.h3>
        <motion.p variants={slideLeft}>
          Consulting for companies with an existing team. Helping to improve
          existing products and brands.
        </motion.p>
      </SkillsGrid>
    </StyledSkills>
  )
}

const StyledSkills = styled(motion.section)`
  margin-bottom: 150px;
`

const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 0.6fr 1fr;
  grid-row-gap: 3.75rem;
  grid-column-gap: 1rem;

  @media screen and (max-width: 670px) {
    grid-template-columns: 1fr;
    grid-row-gap: 1rem;

    p {
      margin-bottom: 2rem;
    }
    p:last-child {
      margin-bottom: 0;
    }
  }
`

export default Skills
