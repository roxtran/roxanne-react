import React from 'react'
import styled from 'styled-components'
// import { Link as LinkS } from 'react-scroll'

const Nav = () => {
  return (
    <StyledNav>
      <ul>
        <li>Digital Designer & Developer</li>
        <li>Completed Projects</li>
        <li>About Me</li>
        <li>Consulting & Concepts</li>
      </ul>
    </StyledNav>
  )
}

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
`

export default Nav
