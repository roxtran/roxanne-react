import React from 'react'
import styled from 'styled-components'
// import circle1w from '../img/circle1.webp'
import circle1 from '../img/circle1a.png'
// Animation
import { motion } from 'framer-motion'
import { container, slideUp, circleAnim } from '../styles/animation'

const Hero = () => {
  return (
    <StyledHero
      id='hero'
      variants={container}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      <HeroHeader className='hide-overflow'>
        {/* <motion.picture variants={circleAnim}>
          <source srcSet={circle1w} type='image/webp' />
          <source srcSet={circle1} type='image/jpeg' />
          <img src={circle1} alt='circle1' />
        </motion.picture> */}
        <motion.img variants={circleAnim} src={circle1} alt='circle1' />{' '}
        <motion.h3 variants={slideUp}>
          Roxanne<span className='highlight'>.</span>
        </motion.h3>
        <motion.a
          variants={slideUp}
          href='mailto:tran.rox@gmail.com?subject=Info'
          target='_blank'
          rel='noreferrer'
        >
          Let's Start a Project
        </motion.a>
      </HeroHeader>
      <div className='hide-overflow'>
        <motion.h1 variants={slideUp}>Full Stack</motion.h1>
      </div>
      <div className='hide-overflow'>
        <motion.h1 variants={slideUp}>Digital Designer</motion.h1>
      </div>
      <div className='hide-overflow'>
        <motion.h1 variants={slideUp}>& Developer</motion.h1>
      </div>
    </StyledHero>
  )
}

const StyledHero = styled(motion.section)`
  position: relative;
  width: 100%;
  min-height: 88vh;
  margin-top: -215px;
  max-width: 90vw;
  img {
    z-index: -1;
    max-width: 500px;
    position: absolute;
    top: 27%;
    right: 0%;
  }

  @media screen and (max-width: 1024px) {
    min-height: 90vh;
    margin-top: 5%;
    img {
      max-width: 120%;
    }
  }

  @media screen and (max-width: 650px) {
    min-height: 86vh;
    img {
      max-width: 100%;
    }
  }
`

const HeroHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 22.5vh;

  @media screen and (max-width: 1024px) {
    margin-bottom: 30vh;
  }
`

export default Hero
