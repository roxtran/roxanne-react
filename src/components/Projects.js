import React from 'react'
import styled from 'styled-components'
import WebDesign from '../img/web-design.png'
import MobileApp from '../img/mobile-app-design.png'
import Wireframe from '../img/wireframe-case-study.png'
import UX from '../img/ux-case-study.png'
import Photography from '../img/photography.png'
import circle2 from '../img/circle2.png'

const Projects = () => {
  return (
    <StyledProjects>
      <h2>Some of my favorite projects</h2>
      <ProjectsGrid>
        <a href='/#'>
          <img src={WebDesign} alt='Web Design' />
          <h3>Web Design</h3>
        </a>
        <a href='/#'>
          <img src={MobileApp} alt='Mobile App Design' />
          <h3>Mobile App Design</h3>
        </a>
        <a href='/#'>
          <img src={Wireframe} alt='Wireframe Case Study' />
          <h3>Wireframe Case Study</h3>
        </a>
        <a href='/#'>
          <img src={UX} alt='' />
          <h3>UX Case Study</h3>
        </a>
        <a href='/#'>
          <img src={Photography} alt='' />
          <h3>Photography</h3>
        </a>
      </ProjectsGrid>
      <ImgBG>
        <img src={circle2} alt='circle2' />
      </ImgBG>
    </StyledProjects>
  )
}

const StyledProjects = styled.div`
  margin-bottom: 150px;
  position: relative;
`

const ImgBG = styled.div`
  z-index: -1;
  position: absolute;
  left: -18%;
  top: 58%;
`

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 3.75rem;

  a {
    color: white;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    &:hover {
      box-shadow: 1px;
    }
    img {
      max-width: 100%;
    }
  }

  a:nth-child(odd) {
    margin-top: -3.75rem;
  }

  a:nth-child(even) {
    margin-top: 3.75rem;
  }

  a:last-child {
    margin-top: 0;
  }

  h3 {
    position: absolute;
  }
`

export default Projects
