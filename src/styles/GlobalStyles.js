import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: #1b1b1b;
    font-family: 'Inter', sans-serif;
}

button {
    cursor: pointer;
    font-weight: bold;
    font-size: 1.1.rem;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    transition: all 0.35s ease;
    color: white;
    &:hover {
        background-color: #23d997;
    }
}

h2 {
    font-weight: lighter;
    font-size: 3rem;
}
h3 {
    color: white;
}
h4 {
    font-weight: bold;
}
span {
    color: #23d997;
    font-weight: bold;
}
a {
    font-size: 1.1rem;
    color: white;
    text-decoration: none;
}
p {
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.1rem;
    line-height: 150%;
}`;

export default GlobalStyles;
