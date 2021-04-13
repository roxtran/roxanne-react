import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Nav from './components/Nav'
// import Projects from './components/Projects'
import Skills from './components/Skills'
import styled from 'styled-components'
import GlobalStyle from './components/GlobalStyle'

import { Suspense, lazy } from 'react'
const Projects = lazy(() => import('./components/Projects'))
// import { motion } from 'framer-motion'
// import { pageAnimation } from './components/animation'

function App() {
  return (
    <>
      <GlobalStyle />
      <div
        className='container'
        // variants={pageAnimation}
        // initial='hidden'
        // animate='show'
      >
        <Nav />
        <Hero />
        <Skills />
        {/* <Projects /> */}
        <Suspense fallback={<div>Loading...</div>}>
          <Projects name={Projects} />
        </Suspense>
        <About />
        <Contact />
      </div>
      <FooterBG />
    </>
  )
}

const FooterBG = styled.div`
  width: 100%;
  background: #bae8e8;
  height: 1070px;
  margin-top: -1070px;

  @media (max-width: 1000px) {
    height: 1400px;
    margin-top: -1400px;
  }

  @media (max-width: 800px) {
    height: 1100px;
    margin-top: -1100px;
  }

  @media (max-width: 540px) {
    height: 1250px;
    margin-top: -1250px;
  }

  @media (max-width: 320px) {
    height: 1500px;
    margin-top: -1500px;
  }
`

export default App
