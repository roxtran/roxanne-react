import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Projects from './components/Projects'
import Skills from './components/Skills'
import styled from 'styled-components'

function App() {
  return (
    <>
      <div className='container'>
        <Nav />
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Footer />
      </div>
      <FooterBG />
    </>
  )
}

const FooterBG = styled.div`
  width: 100%;
  background: #bae8e8;
  height: 1070px;
  margin-top: -1070px;
`

export default App
