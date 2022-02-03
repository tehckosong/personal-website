import React from 'react'
import styled from "styled-components"
import { useThemeToggler } from '../../Shared/Context/ThemeToggle'

function Footer() {
    const {theme} = useThemeToggler();
    return (
        <>
            <Foot color={theme.secondary}>
                <p>@2021. All Rights Reserved</p>
            </Foot>
        </>
    )
}

export default Footer


const Foot = styled.footer `   
    display:flex;
    justify-content: center;
    align-items:flex-end;
    height:20vh;
    font-size:10px;
    color:grey;
`