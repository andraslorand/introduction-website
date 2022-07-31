import {createGlobalStyle} from "styled-components"
export const GlobalStyle= createGlobalStyle`
    :root{
        color:${({theme})=>theme.colors.color}
        background-color:${({theme})=>theme.colors.background}
    }
    .navbar{
        background-color:${({theme})=>theme.colors.navbar}
    }
    .nav-item:hover{
        background-color: #${({theme})=>theme.colors.hover}
      }
`;

