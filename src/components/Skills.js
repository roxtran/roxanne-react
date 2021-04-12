import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { slideUp, fade } from './animation'

const Skills = () => {
  return (
    <StyledSkills id='skills'>
      <motion.h2 variants={slideUp}>
        Multidisciplinary digital designer & developer
      </motion.h2>
      <SkillsGrid>
        <h3>User Interface</h3>
        <p>
          Creating beautiful interface for products that not only look good but
          are functional.
        </p>
        <h3>User Experience</h3>
        <p>
          Tackling each project with a user focused mindset. User testing to
          promote accessibility and a better User Experience.
        </p>
        <h3>
          <span>Front-End</span>
        </h3>
        <p>
          Taking beautiful designs and building them into responsive and
          functional websites. Using a CMS for easier web maintenance.
        </p>
        <h3>Consulting</h3>
        <p>
          Consulting for companies with an existing team. Helping to improve
          existing products and brands.
        </p>
      </SkillsGrid>
    </StyledSkills>
  )
}

const StyledSkills = styled.div`
  margin-bottom: 9.35rem;
`

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1fr;
  grid-row-gap: 4.35rem;
  grid-column-gap: 1rem;

  @media (max-width: 670px) {
    grid-template-columns: 1fr;
    grid-row-gap: 1.25rem;

    p {
      margin-bottom: 3rem;
    }
  }
`

export default Skills
