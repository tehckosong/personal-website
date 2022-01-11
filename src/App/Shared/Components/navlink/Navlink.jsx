import React , {useState , useRef}from 'react'
import styled from 'styled-components'
import Modal from '../ContactModel/Modal'
import {Link} from 'react-router-dom'
function Navlink(props) {
    const [OpenModal, setOpenModal] = useState(false)

    const ToggleModal = (event) => {
        event.preventDefault()
        setOpenModal(!OpenModal)
    }

    return (
        <>
        <Items>
            <Item href="#about">About</Item>
        </Items>
        <Items>
            <Link to="/contact"><Item className="contact" onClick={ToggleModal}>Contact Me</Item></Link>
            {<Modal show={OpenModal} onCancel={ToggleModal} />}
        </Items>
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