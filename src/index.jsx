
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App/App.jsx"
import createGlobalStyle from "./App/GlobalStyles"
import {ThemeTogglerProvider} from './App/Shared/Context/ThemeToggle'
import { ModalProvider } from './App/Shared/Context/ModalToggle'
ReactDOM.render(

    <ThemeTogglerProvider>
        <ModalProvider>
        <App/>
        </ModalProvider>
    </ThemeTogglerProvider>  
    , 
document.getElementById('root'));
