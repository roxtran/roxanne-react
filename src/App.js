// import components
import Nav from './components/Nav'
import Hero from './components/Hero'
// import styles
import './styles/_variables.css'
// Animation
import { AnimatePresence } from 'framer-motion'
// import Lazy loading
import { lazy, Suspense } from 'react'
const GlobalStyle = lazy(() => import('./styles/GlobalStyle'))
const Skills = lazy(() => import('./components/Skills'))
const Projects = lazy(() => import('./components/Projects'))
const About = lazy(() => import('./components/About'))
const Contact = lazy(() => import('./components/Contact'))
const FooterBG = lazy(() =>
  import('./styles/GlobalStyle').then((module) => ({
    default: module.FooterBG,
  }))
)

function App() {
  return (
    <AnimatePresence>
      <Suspense fallback={<div>Loading...</div>}>
        <GlobalStyle />
      </Suspense>
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
      <Suspense fallback={<div>Loading...</div>}>
        <FooterBG />
      </Suspense>
    </AnimatePresence>
  )
}

export default App
