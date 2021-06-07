import { motion } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
// animation
import { useScroll } from '../utils/useScroll'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import { container, slideRight, slideLeft } from '../styles/animation'

gsap.registerPlugin(TextPlugin)

const About = () => {
  const [element, controls] = useScroll()

  const boxRef = useRef(null)
  const hiRef = useRef(null)
  const textRef = useRef(null)
  const cursorRef = useRef(null)

  const words = [
    'Roxanne Tran.',
    'a digital designer.',
    'a web developer.',
    'a photographer.'
  ]

  useEffect(() => {
    gsap.to(cursorRef.current, { opacity: 0, ease: 'power2.inOut', repeat: -1 })

    let boxTL = gsap.timeline()

    boxTL
      .to(boxRef.current, {
        duration: 1,
        width: '3.85rem',
        delay: 1,
        ease: 'power4.inOut'
      })
      .from(hiRef.current, {
        duration: 1,
        y: '20px',
        ease: 'power3.out',
        delay: 0.5,
        onComplete: () => masterTL.play()
      })
      .to(boxRef.current, {
        duration: 1,
        height: '1.6rem',
        ease: 'elastic.out'
      })
      .to(boxRef.current, {
        duration: 2.6,
        autoAlpha: 0.4,
        yoyo: true,
        repeat: -1,
        ease: "rough({template: none.out, strength:1,points:20, taper:'none', randomize: true, clamp: false})"
      })

    let masterTL = gsap.timeline({ repeat: -1 }).pause()

    words.forEach((word) => {
      let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 })

      tl.to(textRef.current, { duration: 2, text: word })
      masterTL.add(tl)
    }) // eslint-disable-next-line
  }, [])

  return (
    <StyledAbout
      id='about'
      variants={container}
      initial='hidden'
      animate={controls}
      exit='exit'
      ref={element}
    >
      <div className='header-wrapper'>
        <motion.h2 variants={slideRight}>About Me</motion.h2>
      </div>
      <motion.div
        variants={container}
        initial='hidden'
        animate={controls}
        exit='exit'
      >
        <motion.p variants={slideLeft} className='anim-text'>
          <span ref={boxRef} className='box'></span>
          <span ref={hiRef} className='hi'>
            Hi, I'm{' '}
          </span>
          <span ref={textRef} className='text'></span>
          <span ref={cursorRef} className='cursor'>
            _
          </span>
        </motion.p>
        <motion.p variants={slideLeft}>
          Currently, I work remotely for clients around the world.
        </motion.p>
        <motion.p variants={slideLeft}>
          I focus on working with growing startups to increase their results by
          either working with their brand/product directly or via consulting
          with their existing team.
        </motion.p>
      </motion.div>
    </StyledAbout>
  )
}

const StyledAbout = styled(motion.section)`
  position: relative;
  display: grid;
  grid-template-columns: 0.6fr 1fr;
  margin-bottom: 150px;

  p {
    margin-bottom: 1rem;
  }

  .anim-text {
    position: relative;
    font-weight: bold;
    font-style: italic;
    overflow: hidden;
  }

  .box {
    position: absolute;
    bottom: 0;
    display: inline-block;
    background-color: var(--yellow);
    /* width: 50px; */
    height: 2px;
    z-index: -1;
  }

  .hi {
    /* color: #fff; */
    display: inline-block;
    margin: 0 0.4rem;
    text-shadow: -2px 0px 5px rgba(0, 0, 0, 0.15);
  }

  @media screen and (max-width: 670px) {
    grid-template-columns: 1fr;
    margin-bottom: 220px;
  }

  p {
    font-size: 1.1rem;
  }
`

export default About
