import React , {Suspense} from 'react'
import { BrowserRouter  as Router , Route, Routes } from "react-router-dom"
import GlobalStyle from "./GlobalStyles"
import { ThemeProvider } from 'styled-components';
import Navbar from "./Shared/Components/navbar/Navbar"
import { useThemeToggler } from './Shared/Context/ThemeToggle';
import 'bootstrap/dist/css/bootstrap.min.css';
const Main = React.lazy(() => import("./Pages/Main"));
const NotFound = React.lazy(() => import("./Pages/NotFound/NotFound"));
const App = () => {

    const {toggle, theme} = useThemeToggler()
    return(
    <>
        <ThemeProvider theme={theme}>    
        <GlobalStyle/>
        <Router>
        <Navbar/>
        <Suspense fallback={<div className='meow'></div>} >
            <Routes>
                <Route path="/"  element={<Main/>}/>
                <Route path='*' element={<NotFound />} />  {/*404 error*/}
            </Routes>
        </Suspense>
        </Router>
        </ThemeProvider>
    </>
    )
};
  
  export default App;
  