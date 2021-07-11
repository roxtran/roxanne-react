// import components
import Nav from './components/Nav'
import Hero from './components/Hero'
import Skills from './components/Skills'
// import About from './components/About'
// import Contact from './components/Contact'

// import styles
import './styles/_variables.css'
// import GlobalStyle from './styles/GlobalStyle'

// Animation
// import { AnimatePresence } from 'framer-motion'

// Lazy loading
import { lazy, Suspense } from 'react'
const Projects = lazy(() => import('./components/Projects'))
const About = lazy(() => import('./components/About'))
const Contact = lazy(() => import('./components/Contact'))
const GlobalStyle = lazy(() => import('./styles/GlobalStyle'))
const AnimatePresence = lazy(() =>
  import('framer-motion').then((module) => ({
    default: module.AnimatePresence,
  }))
)
const FooterBG = lazy(() =>
  import('./styles/GlobalStyle').then((module) => ({
    default: module.FooterBG,
  }))
)

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AnimatePresence>
        <Suspense fallback={<div>Loading...</div>}>
          <GlobalStyle />
        </Suspense>
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
    </Suspense>
  )
}

export default App
