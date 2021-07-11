// import components
import Nav from './components/Nav'
import Hero from './components/Hero'
<<<<<<< Updated upstream
=======
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'

import Loader from 'react-loader-spinner'

>>>>>>> Stashed changes
// import styles
import './styles/_variables.css'
// Animation
<<<<<<< Updated upstream
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
=======
// import { AnimatePresence } from 'framer-motion'

// Lazy loading
import { lazy, Suspense, useState } from 'react'
const Projects = lazy(() => import('./components/Projects'))
const AnimatePresence = lazy(() =>
  import('framer-motion').then((module) => ({
    default: module.AnimatePresence,
>>>>>>> Stashed changes
  }))
)

function App() {
  return (
<<<<<<< Updated upstream
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
=======
    <Suspense
      fallback={
        <Loader
          type='ThreeDots'
          color='var(--headingColor)'
          height={100}
          width={100}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100vw',
            height: '100vh',
            // margin: 'auto',
          }}
          timeout={3000} //3 secs
        />
      }
    >
      <AnimatePresence>
        <GlobalStyle />
        <div className='container'>
          <Nav />
          <main>
            <Hero />
            <Skills />
            {/* <Projects /> */}
            <Suspense
              fallback={
                <Loader
                  type='ThreeDots'
                  color='var(--headingColor)'
                  height={100}
                  width={100}
                  // style={{
                  //   display: 'flex',
                  //   justifyContent: 'center',
                  //   alignItems: 'center',
                  // }}
                  timeout={3000} //3 secs
                />
              }
            >
              <Projects />
            </Suspense>
            <About />
            <Contact />
          </main>
        </div>
        <FooterBG />
      </AnimatePresence>
    </Suspense>
>>>>>>> Stashed changes
  )
}

export default App
