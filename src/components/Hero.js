import React from 'react'
import styled from 'styled-components'
import circle1 from '../img/circle1.png'

const Hero = () => {
  return (
    <StyledHero id='hero'>
      <HeroHeader>
        <h3>
          Roxanne<span>.</span>
        </h3>
        <a href='mailto:tran.rox@gmail.com?subject=Info'>
          Let's Start a Project
        </a>
      </HeroHeader>
      <h1>Full Stack Digital Designer & Developer</h1>
      <img src={circle1} alt='circle1' />
    </StyledHero>
  )
}

const StyledHero = styled.div`
  position: relative;
  width: 100%;
  min-height: 89vh;
  margin-top: -230px;
  /* padding-top: 58px; */
  h1 {
    max-width: 480px;
  }
  img {
    z-index: -1;
    max-width: 500px;
    position: absolute;
    top: 27%;
    right: 0;
  }

  @media (max-width: 1000px) {
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
`

export default Hero
