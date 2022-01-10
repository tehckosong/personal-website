import { createGlobalStyle } from "styled-components";


const GlobalStyle =  createGlobalStyle `
    html , body ,#root  {
        height:100%;
    }

    body {
        margin:0 auto;
        background-color: ${({ theme }) => theme.background};
        color : ${({ theme }) => theme.text};
        font-family : ${({ theme }) => theme.font};
    }
    p {
        color : color : ${({ theme }) => theme.text};
        font-weight: 400;
    }
    h1{
        font-size :22px;
        font-weight:600;
    }
    button{
        outline:none;
        border:none;
        cursor:pointer;
        border-radius:5px;

    }
    a , a:hover{
        cursor:pointer;
        outline:none;
        text-decoration: none;
        color: inherit;
    }


` 
export default GlobalStyle