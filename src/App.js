import About from './components/About'
import Footer from './components/Footer'
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
        variants={pageAnimation}
        initial='hidden'
        animate='show'
      >
        <Nav />
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Footer />
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
`

export default App
