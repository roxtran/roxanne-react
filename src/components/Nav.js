import React from 'react'
import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'
import { motion } from 'framer-motion'
import { slideUp, fade } from './animation'

const Nav = () => {
  return (
    <StyledNav>
      <ul>
        <motion.li variants={slideUp}>
          <Scroll
            to='hero'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-55}
          >
            Digital Designer & Developer
          </Scroll>
        </motion.li>
        <motion.li variants={slideUp}>
          <Scroll
            to='projects'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-55}
          >
            Completed Projects
          </Scroll>
        </motion.li>
        <motion.li variants={slideUp}>
          <Scroll
            to='about'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-55}
          >
            About Me
          </Scroll>
        </motion.li>
        <motion.li variants={slideUp}>
          <Scroll
            to='consult'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={90}
          >
            Consulting & Concepts
          </Scroll>
        </motion.li>
      </ul>
    </StyledNav>
  )
}

const Scroll = styled(LinkS)`
  color: #272343;
  cursor: pointer;
  &:hover {
    color: #ffd803;
  }
  &.active {
    color: #ffd803;
  }
`

const StyledNav = styled.nav`
  width: 300px;
  margin-left: -300px;
  position: sticky;
  top: 60px;
  z-index: 9;
  font-size: 1.1rem;
  font-weight: bold;

  ul {
    margin-top: 60px;
    list-style: none;
  }

  li {
    margin: 2rem 0rem;
  }

  @media (max-width: 1500px) {
    top: 40px;
    ul {
      margin-top: 40px;
    }
  }

  @media (max-width: 1000px) {
    display: none;
  }
`

export default Nav
