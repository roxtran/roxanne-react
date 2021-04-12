import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all 0.4s ease-out;
  }

  body {
    background: #fffffe;
    color: #2d334a;
    font-family: 'Open Sans', sans-serif;
  }

  .container {
    margin: 0 auto;
    max-width: 1100px;
    padding-left: 300px;

    @media (max-width: 1000px) {
      padding: 5rem 2rem 0rem 2rem;
    }
  }

  h1 {
    font-size: 3.75rem;
    line-height: 4.85rem;
    color: #272343;

    @media (max-width: 1000px) {
      font-size: 2.5rem;
      line-height: 3.25rem;
    }
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 5rem;

    @media (max-width: 1000px) {
      font-size: 1.65rem;
      line-height: 2.15rem;
    }
  }

  h3 {
    font-size: 1.5rem;

    @media (max-width: 1000px) {
      font-size: 1.25rem;
    }
  }

  h4 {
    font-size: 1.1rem;
  }

  a {
    color: #ffd803;
    font-size: 1.1rem;
    font-weight: bold;

    &:hover {
      color: #272343;
    }
  }

  span {
    color: #ffd803;
  }

  .hide {
    overflow: hidden;
  }
`

export default GlobalStyle
