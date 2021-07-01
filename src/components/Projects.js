import React from 'react'
import styled from 'styled-components'
// import assets
import circle2 from '../img/circle2.png'
import ReactFramer from '../img/react-framer.jpg'
import MusicPlayer from '../img/music-player.jpg'
import WooCommerce from '../img/woocommerce.jpg'
import LandingPlage from '../img/landing-page.jpg'
import RestaurantApp from '../img/restaurant-app.jpg'
// animation
import { useScroll } from '../utils/useScroll'
import { motion } from 'framer-motion'
import { container, slideUp, slideRight, slideLeft } from '../styles/animation'

const Projects = () => {
  const [element, controls] = useScroll()
  return (
    <StyledProjects
      id='projects'
      variants={container}
      initial='hidden'
      animate={controls}
      exit='exit'
    >
      <div className='hide-overflow header-wrapper'>
        <motion.h2 variants={slideUp}>Some of my projects</motion.h2>
      </div>
      <ProjectsGrid
        variants={container}
        initial='hidden'
        animate={controls}
        exit='exit'
        ref={element}
      >
        <motion.div variants={slideRight} className='card'>
          <a
            href='https://capture-framer.netlify.app'
            target='_blank'
            rel='noreferrer'
          >
            <div className='img-overlay'>
              <h3>React with Framer</h3>
            </div>
            <img src={ReactFramer} alt='React Framer' />
          </a>
        </motion.div>
        <motion.div variants={slideLeft} className='card'>
          <a
            href='https://rox-react-player.netlify.app'
            target='_blank'
            rel='noreferrer'
          >
            <div className='img-overlay'>
              <h3>Music Player App</h3>
            </div>
            <img src={MusicPlayer} alt='Music Player App' />
          </a>
        </motion.div>
        <motion.div variants={slideRight} className='card'>
          <a href='http://rhemaworld.com' target='_blank' rel='noreferrer'>
            <div className='img-overlay'>
              <h3>WooCommerce</h3>
            </div>
            <img src={WooCommerce} alt='WooCommerce' />
          </a>
        </motion.div>
        <motion.div variants={slideLeft} className='card'>
          <a href='https://rhemacanada.ca' target='_blank' rel='noreferrer'>
            <div className='img-overlay'>
              <h3>Landing Page</h3>
            </div>
            <img src={LandingPlage} alt='Landing Page' />
          </a>
        </motion.div>
        <motion.div variants={slideRight} className='card'>
          <a
            href='https://macopolo.herokuapp.com'
            target='_blank'
            rel='noreferrer'
          >
            <div className='img-overlay'>
              <h3>Restaurant App</h3>
            </div>
            <img src={RestaurantApp} alt='Restaurant App' />
          </a>
        </motion.div>
        <motion.div variants={slideLeft} className='card'>
          <a
            href='https://dribbble.com/roxannetran'
            target='_blank'
            rel='noreferrer'
          >
            <p>View my artwork on dribbble</p>
          </a>
        </motion.div>
      </ProjectsGrid>
      <ImgBG>
        <img src={circle2} alt='circle2' />
      </ImgBG>
    </StyledProjects>
  )
}

const StyledProjects = styled(motion.section)`
  margin-bottom: 150px;
  position: relative;
  max-width: 90vw;
  overflow-x: hidden;
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

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 3.75rem;

  @media screen and (max-width: 670px) {
    grid-template-columns: 1fr;
    grid-row-gap: 3.75rem;
  }

  .card {
    position: relative;
  }

  .card:nth-child(even) {
    margin-top: 3.75rem;
    @media screen and (max-width: 670px) {
      margin-top: 0;
    }
  }

  .card:last-child {
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      color: var(--yellow);
      /* slideUp-decoration: none; */
      &:hover {
        color: var(--headingColor);
      }
    }
  }

  a {
    color: white;

    .img-overlay {
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
