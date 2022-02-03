import React , {Suspense} from 'react'
import { BrowserRouter  as Router , Route, Routes } from "react-router-dom"
import { ThemeProvider } from 'styled-components';
import { useThemeToggler } from './Shared/Context/ThemeToggle';
import "./font.css"

import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from "./GlobalStyles"

import Navbar from "./Shared/Components/navbar/Navbar"
import Loading from './Loading';
const Main = React.lazy(() => import("./Pages/Main"));
const NotFound = React.lazy(() => import("./Pages/NotFound/NotFound"));



const App = () => {
    const {theme} = useThemeToggler()

    return(
    <>
        <ThemeProvider theme={theme}>    
        <GlobalStyle/>
        <Router>
        <Suspense 
            fallback={
                <div className='d-flex justify-content-center align-items-center vh-100'>
                    <Loading/>
                </div>
            }>
            <Navbar/>
            <Routes>
                <Route exact path="/*"  element={<Main/>}/>
                <Route path='*' element={<NotFound />} /> 
            </Routes>
        </Suspense>
        </Router>
        </ThemeProvider>
    </>
    )
};
  
  export default App;
  