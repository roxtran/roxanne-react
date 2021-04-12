import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Projects from './components/Projects'
import Skills from './components/Skills'
import styled from 'styled-components'
import GlobalStyle from './components/GlobalStyle'
import { motion } from 'framer-motion'
import { pageAnimation } from './components/animation'

function App() {
  return (
    <>
      <GlobalStyle />
      <motion.div
        className='container'
        // variants={pageAnimation}
        // initial='hidden'
        // animate='show'
      >
        <Nav />
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </motion.div>
      <FooterBG />
    </>
  )
}

const FooterBG = styled.div`
  width: 100%;
  background: #bae8e8;
  height: 1070px;
  margin-top: -1070px;

  @media (max-width: 1000px) {
    height: 1400px;
    margin-top: -1400px;
  }

  @media (max-width: 800px) {
    height: 1100px;
    margin-top: -1100px;
  }

  @media (max-width: 540px) {
    height: 1350px;
    margin-top: -1350px;
  }

  @media (max-width: 320px) {
    height: 1500px;
    margin-top: -1500px;
  }
`

export default App
