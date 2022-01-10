
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App/App.jsx"
import createGlobalStyle from "./App/GlobalStyles"
import {ThemeTogglerProvider} from './App/Shared/Context/ThemeToggle'
ReactDOM.render(

    <ThemeTogglerProvider>
        <App/>
    </ThemeTogglerProvider>
    
    , 
document.getElementById('root'));
