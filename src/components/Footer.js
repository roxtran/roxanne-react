import React from 'react'
import styled from 'styled-components'
import consult from '../img/consulting.png'
import design from '../img/design.png'
import circle3 from '../img/circle3.png'

const Footer = () => {
  return (
    <StyledFooter id='consult'>
      <Social>
        <h3>Social</h3>
        <ul>
          <li>
            <a href='/#'>Linkedin</a>
          </li>
          <li>
            <a href='/#'>Facebook</a>
          </li>
          <li>
            <a href='/#'>Instagram</a>
          </li>
          <li>
            <a href='/#'>Pinterest</a>
          </li>
        </ul>
      </Social>

      <h2>
        Working with growing startups to increase results. Start a Project
        Today.
      </h2>
      <a href='mailto:tran.rox@gmail.com?subject=Info'>
        Let's talk about your product
      </a>
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
    padding-top: 11rem;
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
  margin-top: 11rem;
  justify-content: flex-start;
`

const Card = styled.a`
  background: white;
  width: 270px;
  height: 100%;
  margin-right: 4rem;
  padding: 2rem;
  cursor: pointer;
  img {
    margin-bottom: 3rem;
  }
  h4 {
    margin-bottom: 2rem;
    color: #272343;
  }
  p {
    margin-bottom: 1rem;
    font-size: 1rem;
    color: #2d334a;
    font-weight: normal;
  }

  &:hover {
    background: #ffd803;
  }
`

const Social = styled.div`
  width: 300px;
  margin-left: -300px;
  position: absolute;
  bottom: 10rem;
  ul {
    list-style: none;
  }
  li {
    margin: 2rem 0rem;
  }
  a {
    text-decoration: none;
    color: #272343;
    &:hover {
      color: #ffd803;
    }
  }
`

export default Footer
