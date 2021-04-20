import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Nav from './components/Nav'
// import Projects from './components/Projects'
import Skills from './components/Skills'
import './_variables.css'
import GlobalStyle, { FooterBG } from './components/GlobalStyle'
// Lazy loading
import { Suspense, lazy } from 'react'
// Animation
import { motion } from 'framer-motion'
import { pageAnimation } from './animation'


const Projects = lazy(() => import('./components/Projects'))

function App() {
  return (
    <>
      <GlobalStyle />
      <motion.div className='container' variants={pageAnimation} initial='hidden' animate='show'>
        <Nav />
        <Hero />
        <Skills />
        {/* <Projects /> */}
        <Suspense fallback={<div>Loading...</div>}>
          <Projects />
        </Suspense>
        <About />
        <Contact />
      </motion.div>
      <FooterBG />
    </>
  )
}

export default App
