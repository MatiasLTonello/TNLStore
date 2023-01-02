import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root {
    --orange-bg: #541226;
    --orange: #001E3C;
    --magenta: #FF005C;
    --gray-bg: #2b2b2c;
  --btn-gradient: linear-gradient(83deg, #000, #66B2FF);
  --btn-gradient-secondary: linear-gradient(140deg, #3B3022, #3B2329);
  }

  html{
    scroll-behavior: smooth;
  }

    body {
    margin: 0;
    padding: 0;
    background: #001428 ;
    font-family: 'Poppins', sans-serif;
    color: white;
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden
    }

    a {
    text-decoration: none;
    }

    a:visited {
    color: white;
    }

    li {
    list-style: none;
    }

`;
