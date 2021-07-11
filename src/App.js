// import components
import Nav from './components/Nav'
import Hero from './components/Hero'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'

import Loader from 'react-loader-spinner'

// import styles
import './styles/_variables.css'
import GlobalStyle, { FooterBG } from './styles/GlobalStyle'
// Animation
// import { AnimatePresence } from 'framer-motion'

// Lazy loading
import { lazy, Suspense } from 'react'
const Projects = lazy(() => import('./components/Projects'))
const AnimatePresence = lazy(() =>
  import('framer-motion').then((module) => ({
    default: module.AnimatePresence,
  }))
)

function App() {
  return (
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
  )
}

export default App
