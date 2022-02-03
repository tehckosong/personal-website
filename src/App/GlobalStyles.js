import { createGlobalStyle } from "styled-components";
import { useThemeToggler } from "./Shared/Context/ThemeToggle";
const GlobalStyle =  createGlobalStyle `
    #root , html , body {
        height:100%;
        --main-bg-color: ${({ theme }) => theme.background};
        --main-text-color :  ${({ theme }) => theme.text};
        --main-sec-color :${({ theme }) => theme.secondary};
        --main-dropd-color : ${({ theme }) => theme.dropdown};
        --main-rev-color :${({ theme }) => theme.reverse};
        --main-header-color :${({ theme }) => theme.header};
        --main-border-color :${({ theme }) => theme.border};
    }

    body {
        margin:0 auto;
        color : var(--main-text-color);
        background-color: var(--main-bg-color);
        font-family : ${({ theme }) => theme.font};
    }
    p {
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

    ::placeholder {
        color:grey;
    }

    textarea:focus, input:focus{
        outline:none;
        border-bottom:1px solid lightgrey;
    }

    html {
        scrollbar-width: thin;
        scrollbar-color: lightgrey;
      }
      body::-webkit-scrollbar {
        width: 12px;
      }
      body::-webkit-scrollbar-track {
        background: var(--main-bg-color);
      }
      body::-webkit-scrollbar-thumb {
        background-color: grey;
        border: 3px solid var(--main-bg-color);
        border-radius: 10px;
      }

    li {
        list-style-type: circle;
    }

    p span {
        display:block;
        text-align:left;

        @media (max-width: 500px) {
            display:inline-block;
        }
    }

` 
export default GlobalStyle


