import React from 'react'
import styled from 'styled-components'

import { motion } from 'framer-motion'
import { fade } from '../animation'
import { useScroll } from './useScroll'

const About = () => {
  const [element, controls] = useScroll()
  return (
    <StyledAbout
      id='about'
      variants={fade}
      initial='hidden'
      animate={controls}
      ref={element}
    >
      <h2>About Me</h2>
      <p>
        Hi, my name is Roxanne Tran. I am a full stack designer and developer,
        currently, working remotely for clients around the world.
        <br />
        <br />I focus on working with growing startups to increase their results
        by either working with their brand/product directly or via consulting
        with their existing team.
      </p>
    </StyledAbout>
  )
}

const StyledAbout = styled(motion.div)`
  position: relative;
  display: grid;
  grid-template-columns: 0.6fr 1fr;
  margin-bottom: 150px;

  @media (max-width: 670px) {
    grid-template-columns: 1fr;
    margin-bottom: 220px;
  }

  p {
    font-size: 1.1rem;
  }
`

export default About
