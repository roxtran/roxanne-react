import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Nav from './components/Nav'
// import Projects from './components/Projects'
import Skills from './components/Skills'
import './styles/_variables.css'
import GlobalStyle, { FooterBG } from './styles/GlobalStyle'
// Lazy loading
import { Suspense, lazy } from 'react'
// Animation
import { motion } from 'framer-motion'
import { pageAnimation } from './styles/animation'

const Projects = lazy(() => import('./components/Projects'))

function App() {
  return (
    <>
      <GlobalStyle />
      <motion.div
        className='container'
        variants={pageAnimation}
        initial='hidden'
        animate='show'
      >
        <header>
          <Nav />
        </header>
        <main>
          <Hero />
          <Skills />
          {/* <Projects /> */}
          <Suspense fallback={<div>Loading...</div>}>
            <Projects />
          </Suspense>
          <About />
          <Contact />
        </main>
      </motion.div>
      <FooterBG />
    </>
  )
}

export default App
