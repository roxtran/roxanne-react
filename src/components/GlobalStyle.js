import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all 0.4s ease-out;
  }

  body {
    background: var(--white);
    color: var(--textColor);
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
  }

  .container {
    margin: 0 auto;
    max-width: 1100px;
    padding-left: 300px;

    @media (max-width: 1024px) {
      padding: 5rem 2rem 0rem 2rem;
    }
  }

  h1, h2, h3, h4 {
    color: var(--headingColor);
  }

  h1 {
    font-size: 3.75rem;
    line-height: 1.3;

    @media (max-width: 1000px) {
      font-size: 2.5rem;
    }
  }

  h2 {
    font-size: 2rem;
    line-height: 1.3;
    margin-bottom: 5rem;

    @media (max-width: 1000px) {
      font-size: 1.65rem;
    }
  }

  h3 {
    font-size: 1.5rem;

    @media (max-width: 1000px) {
      font-size: 1.25rem;
    }

    @media (max-width: 320px) {
      font-size: 1rem;
    }
  }

  h4 {
    font-size: 1.1rem;
  }

  a {
    color: var(--yellow);
    font-size: 1rem;
    font-weight: bold;

    &:hover {
      color: var(--headingColor);
    }

    @media (max-width: 320px) {
      font-size: 1rem;
    }
  }

  span {
    color: var(--yellow);
  }

  p {
    line-height: 1.45;
  }

  .hide {
    overflow: hidden;
  }
`
export const FooterBG = styled.div`
  width: 100%;
  background: var(--mint);
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
    height: 1250px;
    margin-top: -1250px;
  }

  @media (max-width: 320px) {
    height: 1500px;
    margin-top: -1500px;
  }
`

export default GlobalStyle
