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

    @media screen and (max-width: 1128px) {
      padding: 0rem 5%;
    }
  }

  h1 {
    font-size: 3.75rem;
    line-height: 1.3;
    color: var(--headingColor);

    @media screen and (max-width: 1000px) {
      font-size: 2.5rem;
    }
  }

  h2 {
    font-size: 2rem;
    line-height: 1.3;
    margin-bottom: 4.5rem;
    color: var(--headingColor);

    @media screen and (max-width: 1000px) {
      font-size: 1.65rem;
    }

    @media screen and (max-width: 640px) {
      margin-bottom: 2.5rem;
    }
  }

  h3 {
    font-size: 1.5rem;

    @media screen and (max-width: 1000px) {
      font-size: 1.25rem;
    }

    @media screen and (max-width: 320px) {
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

    @media screen and (max-width: 320px) {
      font-size: 1rem;
    }
  }

  span.highlight {
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

  @media screen and (max-width: 690px) {
    height: 1300px;
    margin-top: -1300px;
  }

  @media screen and (max-width: 400px) {
    height: 1350px;
    margin-top: -1350px;
  }
`

export default GlobalStyle
