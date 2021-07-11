// import components
import Nav from './components/Nav'
import Hero from './components/Hero'
import Skills from './components/Skills'
// import About from './components/About'
// import Contact from './components/Contact'

// import Loader
import Loader from './components/Loader'

// import styles
import './styles/_variables.css'
// import { FooterBG } from './styles/GlobalStyle'
// Animation
import { AnimatePresence } from 'framer-motion'

// Lazy loading
import { lazy, Suspense } from 'react'
const Projects = lazy(() => import('./components/Projects'))
const About = lazy(() => import('./components/About'))
const Contact = lazy(() => import('./components/Contact'))
const GlobalStyle = lazy(() => import('./styles/GlobalStyle'))
// const AnimatePresence = lazy(() =>
//   import('framer-motion').then((module) => ({
//     default: module.AnimatePresence,
//   }))
// )
const FooterBG = lazy(() =>
  import('./styles/GlobalStyle').then((module) => ({
    default: module.FooterBG,
  }))
)

function App() {
  return (
    <AnimatePresence>
      <Suspense
        fallback={
          <div align='center'>
            <Loader
              type='Rings'
              color='rgba(45, 51, 74, 60%)'
              height={100}
              width={100}
              // timeout={3000} //3 secs
            />
          </div>
        }
      >
        <GlobalStyle />
      </Suspense>
      <div className='container'>
        <Nav />
        <main>
          <Hero />
          <Skills />
          {/* <Projects /> */}
          <Suspense
            fallback={
              <div align='center'>
                <Loader
                  type='Rings'
                  color='rgba(45, 51, 74, 60%)'
                  height={100}
                  width={100}
                  // timeout={3000} //3 secs
                />
              </div>
            }
          >
            <Projects />
          </Suspense>
          <Suspense
            fallback={
              <div align='center'>
                <Loader
                  type='Rings'
                  color='rgba(45, 51, 74, 60%)'
                  height={100}
                  width={100}
                  // timeout={3000} //3 secs
                />
              </div>
            }
          >
            <About />
          </Suspense>
          <Suspense
            fallback={
              <div align='center'>
                <Loader
                  type='Rings'
                  color='rgba(45, 51, 74, 60%)'
                  height={100}
                  width={100}
                  // timeout={3000} //3 secs
                />
              </div>
            }
          >
            <Contact />
          </Suspense>
        </main>
      </div>
      <Suspense
        fallback={
          <div align='center'>
            <Loader
              type='Rings'
              color='rgba(45, 51, 74, 60%)'
              height={100}
              width={100}
              // timeout={3000} //3 secs
            />
          </div>
        }
      >
        <FooterBG />
      </Suspense>
    </AnimatePresence>
  )
}

export default App
