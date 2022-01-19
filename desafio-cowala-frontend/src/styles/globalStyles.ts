import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --dark-blue: #0A1633;
    --blue-green:#00D9D0;
    --gray: #EDEDED;
    --white: #FFFFFF;
    --black:#000000;
  }
  *{
  box-sizing: border-box;
  margin: 0;
    padding: 0;
  }
  html, body {
    height: 100vh;
    background: var(--dark-gray);
  }
  h1,h2,h3,h4,h5, p, span, input, a, button, table{
    font-family: 'Roboto', serif;
    color: var(--black)
  }
`;

export default GlobalStyle;
