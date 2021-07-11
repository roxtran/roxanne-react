// import components
import Nav from './components/Nav'
import Hero from './components/Hero'
import Skills from './components/Skills'
// import About from './components/About'
// import Contact from './components/Contact'

// import styles
import './styles/_variables.css'
import GlobalStyle from './styles/GlobalStyle'

// Animation
import { AnimatePresence } from 'framer-motion'

// Lazy loading
import { lazy, Suspense } from 'react'
const Projects = lazy(() => import('./components/Projects'))
const About = lazy(() => import('./components/About'))
const Contact = lazy(() => import('./components/Contact'))
const FooterBG = lazy(() =>
  import('./components/Contact').then((module) => ({
    default: module.FooterBG,
  }))
)

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
          <Suspense fallback={<div>Loading...</div>}>
            <About />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Contact />
          </Suspense>
        </main>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <FooterBG />
      </Suspense>
    </AnimatePresence>
  )
}

export default App
