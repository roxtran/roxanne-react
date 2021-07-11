// import components
import Nav from './components/Nav'
import Hero from './components/Hero'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'

// import styles
import './styles/_variables.css'
import GlobalStyle, { FooterBG } from './styles/GlobalStyle'

// Animation
import { AnimatePresence } from 'framer-motion'

// Lazy loading
import { lazy, Suspense } from 'react'
const Projects = lazy(() => import('./components/Projects'))

function App() {
  return (
    <AnimatePresence>
      <GlobalStyle />
      <div className='container'>
        <Nav />
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
      </div>
      <FooterBG />
    </AnimatePresence>
  )
}

export default App
