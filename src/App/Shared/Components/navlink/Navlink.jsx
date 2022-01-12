import React , {useState , useRef}from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {useModal} from '../../Context/ModalToggle'
function Navlink(props) {
    const {ToggleModal} = useModal();

    return (
        <>
        <Items>
            <Item href="#about">About</Item>
        </Items>
        <Link to="contact">
            <Items>
                <Item>Contact Me</Item>
            </Items>
        </Link> 
        </>
    )
}

export default Navlink

const Items = styled.div `
    display:flex;
    margin: 0 15px 0 15px;
    @media (max-width: 800px) {
        margin: 8px 8px 8px 12px;
        font-weight:600;    
    }
`

const Item = styled.a`
    &:hover {
        transform: scaleX(1.04);
        border-radius:5px;
    }
`