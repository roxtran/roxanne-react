import React from 'react'
import styled from 'styled-components'
import circle1 from '../img/circle1.png'
import { motion } from 'framer-motion'
import { slideUp, circle1Amin } from './animation'

const Hero = () => {
  return (
    <StyledHero id='hero'>
      <HeroHeader className='hidden'>
        <motion.h3 variants={slideUp}>
          Roxanne<span>.</span>
        </motion.h3>
        <motion.a
          variants={slideUp}
          href='mailto:tran.rox@gmail.com?subject=Info'
        >
          Let's Start a Project
        </motion.a>
      </HeroHeader>
      <div className='hide'>
        <motion.h1 variants={slideUp} initial='hidden' animate='show'>
          Full Stack
        </motion.h1>
      </div>
      <div className='hide'>
        <motion.h1 variants={slideUp} initial='hidden' animate='show'>
          Digital Designer
        </motion.h1>
      </div>
      <div className='hide'>
        <motion.h1 variants={slideUp} initial='hidden' animate='show'>
          & Developer
        </motion.h1>
      </div>
      <motion.img
        variants={circle1Amin}
        initial='hidden'
        animate='show'
        src={circle1}
        alt='circle1'
      />
    </StyledHero>
  )
}

const StyledHero = styled.div`
  position: relative;
  width: 100%;
  min-height: 92vh;
  margin-top: -220px;
  /* padding-top: 58px; */
  /* h1 {
    max-width: 480px;
  } */
  img {
    z-index: -1;
    max-width: 500px;
    position: absolute;
    top: 27%;
    right: 0%;
  }

  @media (max-width: 1024px) {
    min-height: 100vh;
    margin-top: -60px;
    img {
      max-width: 120%;
    }
  }
`
const HeroHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 13.5rem;
`

export default Hero
