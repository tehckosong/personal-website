import { createGlobalStyle } from "styled-components";


const GlobalStyle =  createGlobalStyle `
    html , body ,#root  {
        height:100%;
        --main-bg-color: ${({ theme }) => theme.background};
        --main-text-color :  ${({ theme }) => theme.text};
        --main-sec-color :${({ theme }) => theme.secondary};
        --main-dropd-color : ${({ theme }) => theme.dropdown};
        --main-rev-color :${({ theme }) => theme.reverse};
        --main-header-color :${({ theme }) => theme.header};
    }

    body {
        margin:0 auto;
        background-color: var(--main-bg-color);
        color : var(--main-text-color);
        font-family : ${({ theme }) => theme.font};
    }
    p {
        color :  var(--main-text-color);
        font-weight: 400;
    }
    h1{
        font-size :23px;
        font-weight:600;
    }
    h2{
        font-size:18px;
    }
    p{
        font-size:16px;
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