import React from 'react'
import styled from 'styled-components'
import circle2 from '../img/circle2.webp'
import ReactFramer from '../img/react-framer.jpg'
import MusicPlayer from '../img/music-player.webp'
import WooCommerce from '../img/woocommerce.webp'
import LandingPlage from '../img/landing-page.webp'
import RestaurantApp from '../img/restaurant-app.webp'

import { motion } from 'framer-motion'
import { slideUp } from '../animation'
import { useScroll } from './useScroll'

const Projects = () => {
  const [element, controls] = useScroll()
  return (
    <StyledProjects
      id='projects'
      variants={slideUp}
      initial='hidden'
      animate={controls}
      ref={element}
    >
      <h2>Some of my projects</h2>
      <ProjectsGrid>
        <div className='card'>
          <a
            href='https://capture-framer.netlify.app'
            target='_blank'
            rel='noreferrer'
          >
            <div className='img-cover'>
              <h3>React with Framer</h3>
            </div>
            <img src={ReactFramer} alt='React Framer' />
          </a>
        </div>
        <div className='card'>
          <a
            href='https://rox-react-player.netlify.app'
            target='_blank'
            rel='noreferrer'
          >
            <div className='img-cover'>
              <h3>Music Player App</h3>
            </div>
            <img src={MusicPlayer} alt='Music Player App' />
          </a>
        </div>
        <div className='card'>
          <a href='http://rhemaworld.com' target='_blank' rel='noreferrer'>
            <div className='img-cover'>
              <h3>WooCommerce</h3>
            </div>
            <img src={WooCommerce} alt='WooCommerce' />
          </a>
        </div>
        <div className='card'>
          <a href='https://rhemacanada.ca' target='_blank' rel='noreferrer'>
            <div className='img-cover'>
              <h3>Landing Page</h3>
            </div>
            <img src={LandingPlage} alt='Landing Page' />
          </a>
        </div>
        <div className='card'>
          <a
            href='https://macopolo.herokuapp.com'
            target='_blank'
            rel='noreferrer'
          >
            <div className='img-cover'>
              <h3>Restaurant App</h3>
            </div>
            <img src={RestaurantApp} alt='Restaurant App' />
          </a>
        </div>
      </ProjectsGrid>
      <ImgBG>
        <img src={circle2} alt='circle2' />
      </ImgBG>
    </StyledProjects>
  )
}

const StyledProjects = styled(motion.div)`
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

  .card {
    position: relative;
  }

  .card:nth-child(even) {
    margin-top: 3.75rem;
    @media (max-width: 670px) {
      margin-top: 0;
    }
  }

  a {
    color: white;

    .img-cover {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 465px;
      background: linear-gradient(
        rgba(29, 38, 113, 0.9),
        rgba(195, 55, 100, 0.9)
      );

      &:hover {
        box-shadow: rgba(99, 99, 99, 0.9) 0 2px 12px 0px;
        opacity: 0.5;
        h3 {
          opacity: 0;
        }
      }
    }
    img {
      width: 100%;
      height: 465px;
      object-fit: cover;
    }
  }
`

export default Projects
