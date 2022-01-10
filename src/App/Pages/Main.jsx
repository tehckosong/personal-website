import React from 'react'
//import Profile from './profile/Profile'
import styled from 'styled-components'
//import Footer from '../Shared/Components/footer/Footer'
const Profile = React.lazy(() => import("./profile/Profile"))
const Footer = React.lazy(() => import('../Shared/Components/footer/Footer'))
function Main() {
    
    return (
        <>
          <MainWrapper>
            <Profile/>
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