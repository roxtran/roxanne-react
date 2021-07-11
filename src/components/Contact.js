import React from 'react'
import styled from 'styled-components'
// import assets
import consult from '../img/consult.gif'
import design from '../img/design.gif'
import circle3w from '../img/circle3.webp'
import circle3 from '../img/circle3a.png'
// animation
import { motion } from 'framer-motion'
import { useScroll } from '../utils/useScroll'
import { container, slideUp, slideRight, slideLeft } from '../styles/animation'

const Contact = () => {
  const [element, controls] = useScroll()
  return (
    <StyledContact
      id='contact'
      variants={container}
      initial='hidden'
      animate={controls}
      exit='exit'
      ref={element}
    >
      <div className='header-wrapper'>
        <h2>
          <motion.span variants={slideLeft}>Working with growing</motion.span>{' '}
          <motion.span variants={slideLeft}>
            startups to increase results.
          </motion.span>{' '}
          <motion.span variants={slideLeft}>Start a Project Today.</motion.span>{' '}
        </h2>
      </div>
      <motion.a
        variants={slideLeft}
        href='mailto:tran.rox@gmail.com?subject=Info'
        target='_blank'
        rel='noreferrer'
      >
        Let's talk about your product
      </motion.a>
      <Cards>
        <Card
          variants={slideUp}
          href='mailto:tran.rox@gmail.com?subject=Consulting'
        >
          <img src={consult} alt='consulting' />
          <h4>Consulting</h4>
          <p>
            Consulting for companies with an existing team. Helping to improve
            existing products and brands.
          </p>
        </Card>
        <Card
          variants={slideUp}
          href='mailto:tran.rox@gmail.com?subject=Design Concept'
        >
          <img src={design} alt='design concept' />
          <h4>Try a Design Concept</h4>
          <p>
            Design concepts are great for companies looking to update their
            product on a limited budget.
          </p>
        </Card>
      </Cards>
      <picture>
        <source srcSet={circle3w} type='image/webp' />
        <source srcSet={circle3} type='image/jpeg' />
        <img src={circle3} alt='circle3' className='circle' />
      </picture>
      <Social>
        <motion.h3 variants={slideRight}>Social</motion.h3>
        <ul>
          <motion.li variants={slideRight}>
            <a
              href='https://www.linkedin.com/in/roxtran/'
              target='_blank'
              rel='noreferrer'
            >
              Linkedin
            </a>
          </motion.li>
          <motion.li variants={slideRight}>
            <a
              href='https://www.pinterest.ca/rox127/'
              target='_blank'
              rel='noreferrer'
            >
              Pinterest
            </a>
          </motion.li>
          <motion.li variants={slideRight}>
            <a
              href='https://www.facebook.com/rox127/'
              target='_blank'
              rel='noreferrer'
            >
              Facebook
            </a>
          </motion.li>
          <motion.li variants={slideRight}>
            <a
              href='https://www.instagram.com/rox127/'
              target='_blank'
              rel='noreferrer'
            >
              Instagram
            </a>
          </motion.li>
        </ul>
      </Social>
    </StyledContact>
  )
}

const StyledContact = styled(motion.section)`
  background: var(--mint);
  height: 1070px;
  position: relative;
  max-width: 90vw;

  h2 {
    max-width: 440px;
    padding-top: 10rem;
  }

  img.circle {
    position: absolute;
    top: -7%;
    right: 0;
    max-width: 270px;

    @media screen and (max-width: 670px) {
      top: -10%;
    }
  }

  @media screen and (max-width: 1125px) {
    text-align: center;
    h2 {
      max-width: 75%;
      margin: 0 auto 5rem;
    }
  }

  @media screen and (max-width: 768px) {
    height: 100%;
  }
`

const Cards = styled.div`
  display: flex;
  margin: 10rem 0;
  justify-content: flex-start;
  flex-wrap: wrap;

  @media screen and (max-width: 1125px) {
    justify-content: center;
  }

  @media screen and (max-width: 690px) {
    margin: 5rem 0;
  }
`

const Card = styled(motion.a)`
  background: white;
  width: 250px;
  height: 100%;
  margin-right: 4.5rem;
  padding: 2rem;
  cursor: pointer;
  text-decoration: none;

  @media screen and (max-width: 1125px) {
    margin: 2rem;
  }

  @media screen and (max-width: 320px) {
    margin: 1rem 0;
  }

  img {
    max-width: 36px;
    margin-bottom: 3rem;
  }
  h4 {
    margin-bottom: 2rem;
    color: var(--headingColor);
  }
  p {
    margin-bottom: 1rem;
    font-size: 0.9rem;
    color: var(--textColor);
    font-weight: normal;
  }

  &:hover {
    background: var(--yellow);
  }
`

const Social = styled.div`
  width: 300px;
  margin-left: -300px;
  position: absolute;
  bottom: 14rem;
  ul {
    list-style: none;
  }
  li {
    margin: 2rem 0rem;
  }
  a {
    text-decoration: none;
    color: var(--headingColor);
    &:hover {
      color: var(--yellow);
    }
  }
`

export default Contact
