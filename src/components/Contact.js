import React from 'react'
import styled from 'styled-components'
import consult from '../img/consult.gif'
import design from '../img/design.gif'
import circle3 from '../img/circle3.png'

const Contact = () => {
  return (
    <StyledContact id='contact'>
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
        <Card href='mailto:tran.rox@gmail.com?subject=Consulting'>
          <img src={consult} alt='consulting' />
          <h4>Consulting</h4>
          <p>
            Consulting for companies with an existing team. Helping to improve
            existing products and brands.
          </p>
        </Card>
        <Card href='mailto:tran.rox@gmail.com?subject=Design Concept'>
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
    </StyledContact>
  )
}

const StyledContact = styled.div`
  background: #bae8e8;
  height: 1070px;
  position: relative;
  h2 {
    max-width: 440px;
    padding-top: 10rem;
  }

  @media (max-width: 670px) {
    height: 100%;
  }
`
const ImgBG = styled.div`
  position: absolute;
  top: -7%;
  right: -9%;

  @media (max-width: 670px) {
    top: -10%;
  }

  img {
    max-width: 350px;
  }
`

const Cards = styled.div`
  display: flex;
  margin-top: 11rem;
  justify-content: flex-start;
  flex-wrap: wrap;
`

const Card = styled.a`
  background: white;
  width: 250px;
  height: 100%;
  margin-right: 4.5rem;
  padding: 2rem;
  cursor: pointer;
  text-decoration: none;

  @media (max-width: 670px) {
    margin-right: 0rem;
    margin-bottom: 4rem;
    width: 90%;
  }

  img {
    max-width: 36px;
    margin-bottom: 3rem;
  }
  h4 {
    margin-bottom: 2rem;
    color: #272343;
  }
  p {
    margin-bottom: 1rem;
    font-size: 0.9rem;
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
  bottom: 12rem;
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

export default Contact
