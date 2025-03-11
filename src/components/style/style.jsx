import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: "Roboto", sans-serif;
    background: linear-gradient(to right, #00b4db, #0083b0);
    color: #333;
    line-height: 1.6;
}
`