// import components
import Nav from './components/Nav'
import Hero from './components/Hero'
// import styles
import './styles/_variables.css'
import GlobalStyle, { FooterBG } from './styles/GlobalStyle'
// Animation
import { AnimatePresence } from 'framer-motion'
// import Lazy loading
import { lazy, Suspense } from 'react'
const Skills = lazy(() => import('./components/Skills'))
const Projects = lazy(() => import('./components/Projects'))
const About = lazy(() => import('./components/About'))
const Contact = lazy(() => import('./components/Contact'))

function App() {
  return (
    <AnimatePresence>
      <GlobalStyle />
      <div className='container'>
        <Nav />
        <main>
          <Hero />
          {/* <Projects /> */}
          <Suspense fallback={<div>Loading...</div>}>
            <Skills />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Projects />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <About />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Contact />
          </Suspense>
        </main>
      </div>
      <FooterBG />
    </AnimatePresence>
  )
}

export default App
