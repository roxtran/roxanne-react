import React from 'react'
import styled from 'styled-components'
import circle2 from '../img/circle2.png'
import TodoApp from '../img/exported/todo-app.png'
import MusicPlayer from '../img/exported/music-player.png'
import WooCommerce from '../img/exported/woo-commerce.png'
import LandingPlage from '../img/exported/landing-page.png'
import RestaurantApp from '../img/exported/restaurant-app.png'

const Projects = () => {
  return (
    <StyledProjects id='projects'>
      <h2>Some of my favorite projects</h2>
      <ProjectsGrid>
        <a href='https://rtodoapp.netlify.app' target='_blank' rel='noreferrer'>
          <img src={TodoApp} alt='Todo App' />
          <h3>Todo App</h3>
        </a>
        <a
          href='https://rox-react-player.netlify.app'
          target='_blank'
          rel='noreferrer'
        >
          <img src={MusicPlayer} alt='Music Player App' />
          <h3>Music Player App</h3>
        </a>
        <a href='http://rhemaworld.com' target='_blank' rel='noreferrer'>
          <img src={WooCommerce} alt='WooCommerce' />
          <h3>WooCommerce</h3>
        </a>
        <a href='https://rhemacanada.ca' target='_blank' rel='noreferrer'>
          <img src={LandingPlage} alt='Landing Page' />
          <h3>Landing Page</h3>
        </a>
        <a
          href='https://macopolo.herokuapp.com'
          target='_blank'
          rel='noreferrer'
        >
          <img src={RestaurantApp} alt='Restaurant App' />
          <h3>Restaurant App</h3>
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
  img {
    max-width: 200px;
  }
`

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 3.75rem;

  @media (max-width: 670px) {
    grid-template-columns: 1fr;
    grid-row-gap: 3.75rem;
  }

  a {
    color: white;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    &:hover {
      color: var(--yellow);
    }
    img {
      max-width: 100%;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }
  }

  a:nth-child(odd) {
    margin-top: -3.75rem;
    @media (max-width: 670px) {
      margin-top: 0;
    }
  }

  a:nth-child(even) {
    margin-top: 3.75rem;
    @media (max-width: 670px) {
      margin-top: 0;
    }
  }

  a:last-child {
    margin-top: 0;
  }

  h3 {
    position: absolute;
  }
`

export default Projects
