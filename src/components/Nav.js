import React from 'react'
import { Link as LinkS } from 'react-scroll'
import styled from 'styled-components'
// Animation
import { motion } from 'framer-motion'
import { navAnim, navlinkAnim } from '../styles/animation'

const Nav = () => {
  return (
    <StyledNav variants={navAnim} initial='hidden' animate='show'>
      <ul>
        <motion.li variants={navlinkAnim}>
          <Scroll
            to='skills'
            smooth={true}
            duration={700}
            spy={true}
            exact='true'
            offset={-125}
          >
            What I Do
          </Scroll>
        </motion.li>
        <motion.li variants={navlinkAnim}>
          <Scroll
            to='projects'
            smooth={true}
            duration={700}
            spy={true}
            exact='true'
            offset={-125}
          >
            Projects
          </Scroll>
        </motion.li>
        <motion.li variants={navlinkAnim}>
          <Scroll
            to='about'
            smooth={true}
            duration={700}
            spy={true}
            exact='true'
            offset={-165}
          >
            About Me
          </Scroll>
        </motion.li>
        <motion.li variants={navlinkAnim}>
          <Scroll
            to='contact'
            smooth={true}
            duration={700}
            spy={true}
            exact='true'
            offset={5}
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

const StyledNav = styled(motion.nav)`
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

  @media screen and (max-width: 1700px) {
    top: 40px;
    ul {
      margin-top: 40px;
    }
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
`

export default Nav
