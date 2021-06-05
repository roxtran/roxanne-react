import { motion } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useScroll } from '../utils/useScroll'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import { slideRight, slideUp } from '../styles/animation'

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
    console.log(cursorRef)

    gsap.to(cursorRef.current, { opacity: 0, ease: 'power2.inOut', repeat: -1 })

    let boxTL = gsap.timeline()

    boxTL
      .to(boxRef.current, {
        duration: 1,
        width: '3.65rem',
        delay: 0.5,
        ease: 'power4.inOut'
      })
      .from(hiRef.current, {
        opacity: 0,
        y: '10px'
      })
      .to(hiRef.current, {
        duration: 1,
        opacity: 1,
        y: '0px',
        ease: 'power3.out',
        delay: 0.5,
        onComplete: () => masterTL.play()
      })
      .to(boxRef.current, {
        duration: 1,
        height: '1.5rem',
        ease: 'elastic.out'
      })
      .to(boxRef.current, {
        duration: 2,
        autoAlpha: 0.5,
        yoyo: true,
        repeat: -1,
        ease: "rough({template: none.out, strength:1,points:20, taper:'none', randomize: true, clamp: false})"
      })

    let masterTL = gsap.timeline({ repeat: -1 }).pause()

    words.forEach((word) => {
      let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 })

      tl.to(textRef.current, { duration: 2, text: word })
      masterTL.add(tl)
    })
  }, [])

  return (
    <StyledAbout
      id='about'
      variants={slideRight}
      initial='hidden'
      animate={controls}
      ref={element}
    >
      <h2>About Me</h2>
      <motion.div variants={slideUp}>
        <p className='anim-text'>
          <span ref={boxRef} className='box'></span>
          <span ref={hiRef} className='hi'>
            Hi, I'm{' '}
          </span>
          <span ref={textRef} className='text'></span>
          <span ref={cursorRef} className='cursor'>
            _
          </span>
        </p>
        <br></br>
        <p>Currently, I am working remotely for clients around the world.</p>
        <br></br>
        <p>
          I focus on working with growing startups to increase their results by
          either working with their brand/product directly or via consulting
          with their existing team.
        </p>
      </motion.div>
    </StyledAbout>
  )
}

const StyledAbout = styled(motion.section)`
  position: relative;
  display: grid;
  grid-template-columns: 0.6fr 1fr;
  margin-bottom: 150px;

  .anim-text {
    position: relative;
    /* display: inline-block; */
    font-weight: bold;
    font-style: italic;
    /* font-size: 1.15rem; */
  }

  .box {
    position: absolute;
    bottom: 0;
    display: inline-block;
    background-color: var(--yellow);
    /* width: 50px; */
    height: 2px;
    left: -4px;
    z-index: -1;
  }

  .hi {
    /* color: #fff; */
    opacity: 0;
    display: inline-block;
    margin-right: 0.4rem;
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
