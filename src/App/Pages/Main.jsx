import React, {useState , useEffect} from 'react'
import styled from 'styled-components'
import {useNavigate , useLocation} from 'react-router-dom'
import {Routes ,Route} from "react-router-dom"
import Modal from '../Shared/Components/ContactModal/Modal'
import MessageBox from '../Shared/Components/ContactModal/MessageBox'
const Profile = React.lazy(() => import("./profile/Profile"))
const Footer = React.lazy(() => import('./footer/Footer'))
import {AnimatePresence} from 'framer-motion'
function Main() {
  const location = useLocation();
  const navigate = useNavigate();
  const navigateBack = () => {
    navigate("/")
  }
  const [Message , setMessage] = useState([{value: null , isValid : false}]);

    return (
        <>
          <MainContainer>    
              <Profile/>   
              <Footer /> 
          </MainContainer> 

          <AnimatePresence exitBeforeEnter>
            {Message[0].isValid ? <MessageBox Message={Message[0]} setMessage={setMessage}/> : " "}
          </AnimatePresence>

          {/*sub routes*/}
          <AnimatePresence exitBeforeEnter initial={false}>
            <Routes key={location.pathname} location={location}>
                <Route path="contact" element={<Modal show={true} onCancel={navigateBack} setMessage={setMessage} Message={Message}/>} /> 
            </Routes>  
          </AnimatePresence>
        </>
       
    )
}

export default Main

const MainContainer = styled.main `
  position:relative;
  padding: 0 2rem 0 2rem;
  margin 0 auto;
  z-index:1;
  max-width:680px;
`



