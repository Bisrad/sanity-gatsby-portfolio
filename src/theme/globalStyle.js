import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Kodchasan:400,700');

  html {
    background-color: #11202E;
    color: #06BDD6;
  }  

  body {
    padding: 0;
    margin: 0;
    font-family: 'Jost', sans-serif;
  }
  a {
    text-decoration: none;
  }
  ul {
    margin: 0 auto;
    list-style-type: none;
  }
`;