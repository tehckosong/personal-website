import React , {useState , useRef}from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

function Navlink(props) {

    return (
        <>
            <h4 className='menu' style={{position:'absolute', top:30 , left:30}}>Menu</h4>
        <Items>
            <li><a href="#about">About</a></li>
            <li className='work'><a href="#work">Work</a></li>
            <li><Link to="contact">Contact</Link></li>
        </Items>
        </>
    )
}

export default Navlink

const Items = styled.div `
    display:flex;
    flex-direction:column;
    margin:6rem 1rem;
    font-weight:600; 

    li {
        list-style:none;
        font-size:28px;
        margin:10px 10px;
    }
    
    .work{
        display:block;
    }
    li:hover {
        transform: scaleX(1.03);        
    }

    @media (min-width: 800px) {
        display:flex;
        flex-direction:row;
        margin: 0 15px 0 15px;
        
        li {
            font-size:20px;
            margin: 0px 1rem;
        }

        .work{
            display:none;
        }
        
    }

`
