import React from 'react'
import styled from 'styled-components'
// import assets
import circle2 from '../img/circle2a.png'
import circle2w from '../img/circle2.webp'
import ReactFramerw from '../img/react-framer.webp'
import ReactFramer from '../img/react-framer.jpg'
import MusicPlayerw from '../img/music-player.webp'
import MusicPlayer from '../img/music-player.jpg'
import RhemaOnlinew from '../img/rhemaonline.webp'
import RhemaOnline from '../img/rhemaonline.jpg'
import RhemaCanadaw from '../img/rhemacanada.webp'
import RhemaCanada from '../img/rhemacanada.jpg'
import RestaurantAppw from '../img/restaurant-app.webp'
import RestaurantApp from '../img/restaurant-app.jpg'
import KingsCollegeTutoringw from '../img/kingscollegetutoring.webp'
import KingsCollegeTutoring from '../img/kingscollegetutoring.jpg'
import KingsCollegePSCw from '../img/kingscollegepsc.webp'
import KingsCollegePSC from '../img/kingscollegepsc.jpg'
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
              <h3>React Framer</h3>
            </div>
            <picture>
              <source srcSet={ReactFramerw} type='image/webp' />
              <source srcSet={ReactFramer} type='image/jpeg' />
              <img src={ReactFramer} alt='React Framer' />
            </picture>
          </a>
        </motion.div>
        <motion.div variants={slideLeft} className='card'>
          <a
            href='https://rox-react-player.netlify.app'
            target='_blank'
            rel='noreferrer'
          >
            <div className='img-overlay'>
              <h3>Music Player</h3>
            </div>
            <picture>
              <source srcSet={MusicPlayerw} type='image/webp' />
              <source srcSet={MusicPlayer} type='image/jpeg' />
              <img src={MusicPlayer} alt='Music Player' />
            </picture>
          </a>
        </motion.div>
        <motion.div variants={slideRight} className='card'>
          <a
            href='https://rhemaonline.vercel.app'
            target='_blank'
            rel='noreferrer'
          >
            <div className='img-overlay'>
              <h3>Rhema Online</h3>
            </div>
            <picture>
              <source srcSet={RhemaOnlinew} type='image/webp' />
              <source srcSet={RhemaOnline} type='image/jpeg' />
              <img src={RhemaOnline} alt='Rhema Online' />
            </picture>
          </a>
        </motion.div>
        <motion.div variants={slideLeft} className='card'>
          <a href='https://rhemacanada.ca' target='_blank' rel='noreferrer'>
            <div className='img-overlay'>
              <h3>Rhema Canada</h3>
            </div>
            <picture>
              <source srcSet={RhemaCanadaw} type='image/webp' />
              <source srcSet={RhemaCanada} type='image/jpeg' />
              <img src={RhemaCanada} alt='Rhema Canada' />
            </picture>
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
            <picture>
              <source srcSet={RestaurantAppw} type='image/webp' />
              <source srcSet={RestaurantApp} type='image/jpeg' />
              <img src={RestaurantApp} alt='Restaurant App' />
            </picture>
          </a>
        </motion.div>{' '}
        <motion.div variants={slideLeft} className='card'>
          <a
            href='https://kingscollegetutoring.org'
            target='_blank'
            rel='noreferrer'
          >
            <div className='img-overlay'>
              <h3>King's College Tutoring</h3>
            </div>
            <picture>
              <source srcSet={KingsCollegeTutoringw} type='image/webp' />
              <source srcSet={KingsCollegeTutoring} type='image/jpeg' />
              <img src={KingsCollegeTutoring} alt='React Framer' />
            </picture>
          </a>
        </motion.div>
        <motion.div variants={slideRight} className='card'>
          <a href='https://kingscollegepsc.ca' target='_blank' rel='noreferrer'>
            <div className='img-overlay'>
              <h3>King's College PSC</h3>
            </div>
            <picture>
              <source srcSet={KingsCollegePSCw} type='image/webp' />
              <source srcSet={KingsCollegePSC} type='image/jpeg' />
              <img src={KingsCollegePSC} alt='Music Player App' />
            </picture>
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
        <picture>
          <source srcSet={circle2w} type='image/webp' />
          <source srcSet={circle2} type='image/jpeg' />
          <img src={circle2} alt='circle2' />
        </picture>
      </ImgBG>
    </StyledProjects>
  )
}

const StyledProjects = styled(motion.section)`
  margin-bottom: 150px;
  position: relative;
  max-width: 90vw;
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
  overflow-x: hidden;

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
