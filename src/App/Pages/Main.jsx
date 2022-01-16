import React, {useState} from 'react'
import styled from 'styled-components'
import Modal from '../Shared/Components/ContactModel/Modal'
import {Routes ,Route} from "react-router-dom"
import {useNavigate} from 'react-router-dom'

const Profile = React.lazy(() => import("./profile/Profile"))
const Footer = React.lazy(() => import('../Shared/Components/footer/Footer'))

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
    margin:3rem auto 0 auto;
    padding: 0 2rem 0 2rem;
    max-width:650px;

`

const pro =styled.div `
    &.modal-enter {
        opacity: 0;
        transform: translateY(500px);
    }
    &.modal-enter-active {
        opacity: 1;
        transform: translateY(0px);
        transition: opacity 0.5s , transform 0.5s linear;
    }
    &.modal-exit {
        opacity: 1;
    }
    &.modal-exit-active {
        opacity: 0;
        transform: translateY(500px);
        transition: transform 0.5s , opacity 0.5s;
    }
`