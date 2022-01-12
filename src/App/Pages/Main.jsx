import React, {useState} from 'react'
import styled from 'styled-components'
const Profile = React.lazy(() => import("./profile/Profile"))
const Footer = React.lazy(() => import('../Shared/Components/footer/Footer'))
import Modal from '../Shared/Components/ContactModel/Modal'
import {Routes ,Route} from "react-router-dom"
import {useNavigate} from 'react-router-dom'

function Main() {
  const navigate = useNavigate();
  const navigateBack = () => {
    navigate("/")
  }
    return (
        <>
        
          <MainWrapper>
            <Profile/>
            <Routes>
              <Route path="/contact" element={<Modal show={true} onCancel={navigateBack}/>} />
            </Routes>

          </MainWrapper> 
          <Footer/>
         
        </>
       
    )
}

export default Main


const MainWrapper = styled.main `
    margin:5rem auto 0 auto;
    padding: 0 2rem 0 2rem;
    max-width:620px;
`