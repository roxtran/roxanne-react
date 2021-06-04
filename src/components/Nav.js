import React from 'react'
import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'
import { motion } from 'framer-motion'
import { slideRight } from '../animation'

const Nav = () => {
  return (
    <StyledNav>
      <ul>
        <motion.li variants={slideRight}>
          <Scroll
            to='skills'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-55}
          >
            What I Do
          </Scroll>
        </motion.li>
        <motion.li variants={slideRight}>
          <Scroll
            to='projects'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-55}
          >
            Projects
          </Scroll>
        </motion.li>
        <motion.li variants={slideRight}>
          <Scroll
            to='about'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-125}
          >
            About Me
          </Scroll>
        </motion.li>
        <motion.li variants={slideRight}>
          <Scroll
            to='contact'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={0}
          >
            Contact
          </Scroll>
        </motion.li>
      </ul>
    </StyledNav>
  )
}

const Scroll = styled(LinkS)`
  color: var(--headingColor);
  cursor: pointer;

  &:hover,
  &.active {
    color: var(--yellow);
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

  @media (max-width: 1024px) {
    display: none;
  }
`

export default Nav
