import React , {Suspense , useState} from 'react'
import { BrowserRouter  as Router , Route, Routes } from "react-router-dom"
import GlobalStyle from "./GlobalStyles"
import { ThemeProvider } from 'styled-components';
import Navbar from "./Shared/Components/navbar/Navbar"
import { useThemeToggler } from './Shared/Context/ThemeToggle';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Spinner} from 'react-bootstrap'
const Main = React.lazy(() => import("./Pages/Main"));
const NotFound = React.lazy(() => import("./Pages/NotFound/NotFound"));
const App = () => {
    const {toggle, theme} = useThemeToggler()

    return(
    <>
        <ThemeProvider theme={theme}>    
        <GlobalStyle/>
        <Router>
        <Suspense fallback={<div className='d-flex justify-content-center align-items-center vh-100'><Spinner animation="border" variant="warning"/></div>}>
            <Navbar/>
            <Routes>
                <Route exact path="/*"  element={<Main/>}/>
                <Route exact path="/hehehe"  element={<div>apple</div>}/>
                <Route path='*' element={<NotFound />} /> 
            </Routes>
        </Suspense>
        </Router>
        </ThemeProvider>
    </>
    )
};
  
  export default App;
  