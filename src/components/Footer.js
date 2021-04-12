import React from 'react'
import styled from 'styled-components'
import consult from '../img/consulting.png'
import design from '../img/design.png'
import circle3 from '../img/circle3.png'

const Footer = () => {
  return (
    <StyledFooter>
      <Social>
        <h3>Social</h3>
        <ul>
          <li>Linkedin</li>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Pinterest</li>
        </ul>
      </Social>

      <h2>
        Working with growing startups to increase results. Start a Project
        Today.
      </h2>
      <a href='/#'>Let's talk about your product</a>
      <Cards>
        <Card>
          <img src={consult} alt='consulting' />
          <h4>Consulting</h4>
          <p>
            Consulting for companies with an existing team. Helping to improve
            existing products and brands.
          </p>
        </Card>
        <Card>
          <img src={design} alt='design concept' />
          <h4>Try a Design Concept</h4>
          <p>
            Design concepts are great for companies looking to update their
            product on a limited budget.
          </p>
        </Card>
      </Cards>
      <ImgBG>
        <img src={circle3} alt='circle3' />
      </ImgBG>
    </StyledFooter>
  )
}

const StyledFooter = styled.div`
  background: #bae8e8;
  height: 1070px;
  position: relative;
  h2 {
    max-width: 450px;
    padding-top: 12rem;
  }
  a {
    color: #ffd803;
  }
`
const ImgBG = styled.div`
  position: absolute;
  top: -7%;
  right: -9%;
  img {
    max-width: 400px;
  }
`

const Cards = styled.div`
  display: flex;
  margin-top: 10rem;
  justify-content: flex-start;
`

const Card = styled.div`
  background: white;
  width: 270px;
  height: 100%;
  margin-right: 4rem;
  padding: 2rem;
  img {
    margin-bottom: 3rem;
  }
  h4 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 1rem;
  }
`

const Social = styled.div`
  width: 300px;
  margin-left: -300px;
  position: absolute;
  bottom: 10rem;
  font-size: 1.1rem;
  font-weight: bold;
  ul {
    list-style: none;
  }
  li {
    margin: 2rem 0rem;
  }
`

export default Footer
