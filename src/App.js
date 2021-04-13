import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Nav from './components/Nav'
// import Projects from './components/Projects'
import Skills from './components/Skills'
import './_variables.css'
import GlobalStyle, { FooterBG } from './components/GlobalStyle'

import { Suspense, lazy } from 'react'
const Projects = lazy(() => import('./components/Projects'))
// import { motion } from 'framer-motion'
// import { pageAnimation } from './components/animation'

function App() {
  return (
    <>
      <GlobalStyle />
      <div className='container'>
        <Nav />
        <Hero />
        <Skills />
        {/* <Projects /> */}
        <Suspense fallback={<div>Loading...</div>}>
          <Projects />
        </Suspense>
        <About />
        <Contact />
      </div>
      <FooterBG />
    </>
  )
}

export default App
