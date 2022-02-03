import React , {useState , useRef , useEffect } from 'react'
import styled  from 'styled-components'
import Navlink from '../navlink/Navlink'
import {FiMoon} from "react-icons/fi"
import {IoMdClose} from 'react-icons/io'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BsCloudSun} from 'react-icons/bs'
import {useThemeToggler} from '../../Context/ThemeToggle'
import {motion , AnimatePresence} from 'framer-motion'
function Navbar() {
    const blur = useRef();
    const {Toggle ,dark , theme } = useThemeToggler()
    const [enable , setEnable] = useState(false)

        
    const variants ={
        initial : {opacity:0 , y:10 , x:-10, rotate: -90},
        animate : {opacity:1 ,  y:0 , x:0 , rotate: 0},
        exit : {opacity:0,rotate:90,y:20 ,x:20},
        transition : {type: "ease" , duration:0.2}
    }

    const handleClick = (e) => { //clicking outside closes the dropdow
        if(blur.current.contains(e.target)) return ; //do nothing when clicking inside 
        setEnable(false)
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClick);
        return () => {
          document.removeEventListener("mousedown", handleClick); 
        };
      }, []);

      
    return (
        <Nav>
            <NavItem>
                <div className='d-flex'><Logo href="/">Welcome</Logo></div>
                <div className='nav_links'>
                    <Navlink/>
                </div>  
                <div className='d-flex'>
                    <Button  onClick={Toggle} color={theme.reverse}> 
                    <AnimatePresence exitBeforeEnter initial={false}>
                            {dark ? 
                                <Icon key="1" className='sun'
                                variants={variants}
                                initial="initial"
                                animate="animate"
                                exit = "exit"
                                transition="transition"
                                ><BsCloudSun size={20}/></Icon> 
                                    : 
                                <Icon key="2" className='moon'
                                variants={variants}
                                initial="initial"
                                animate="animate"
                                exit = "exit"
                                transition="transition"
                                ><FiMoon size={20}/></Icon>
                            }
                    </AnimatePresence>
                    </Button>
                    
                    <div ref={blur} style={{position:'relative'}}>
                        <Menu onClick={() => setEnable(!enable)}>
                        <AnimatePresence exitBeforeEnter initial={false}>
                            {enable ? 
                            <motion.div 
                                key="1"
                                style={{zIndex:4 , position:"fixed"}}
                                transition={{duration : 0.2}} 
                                initial={{opacity: 0}} 
                                animate={{rotate: 90 , opacity: 1}} 
                                exit={{opacity : 0 , rotate: 0 }}>
                            <IoMdClose  size={25} style={{zIndex:5}}/></motion.div>:
                            <motion.div                       
                                key="2"
                                style={{zIndex:4}}
                                transition={{duration : 0.1}} 
                                initial={{opacity: 0 , y:10}} 
                                animate={{y:0 , opacity: 1}} 
                                exit={{opacity : 0}}>
                            <GiHamburgerMenu/></motion.div>}
                        </AnimatePresence>
                        </Menu>
                        <AnimatePresence exitBeforeEnter initial={false} layout>
                        {enable ?  (<Dropdown initial={{x:250}} animate={{x:0}} exit={{x:250}} transition={{type:"tween"}} layout><Navlink/></Dropdown>)  : "" }
                        </AnimatePresence>
                    </div>
                </div>
            </NavItem>
        </Nav>
    )
}


export default Navbar

const Dropdown = styled(motion.div) `
position: fixed;
top:0px;
bottom:0px;
right:0;
width:250px;
border-top-left-radius: 2px;
background-color:white;
color:black;
z-index:3;
box-shadow: -15px 0px 17px -7px rgba(0,0,0,0.1);
@media (min-width: 800px) {
    display:none;
}
@media (max-width: 430px) {
    width:180px;

}


`

const Icon = styled(motion.div) `
position:relative;
margin-top:30px;
padding-bottom:30px;
`

const Nav = styled.div `
    position:relative;
    z-index:2;
    top:0;
    width: 100%;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    box-shadow: 0 6px 6px 0 rgba(0,0,0,.04);
    background-color: var(--main-bg-color);
    transition : height 2s;

    .nav_links {
        @media (max-width: 800px) {
            display:none;
        }
    }
`

const NavItem = styled.div `
    width: 720px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:1rem 1rem 1rem 1rem;
`

const Logo = styled.a `
    font-size:2rem;
    font-weight:700;
    overflow: hidden;
    white-space: nowrap;
    width: 7ch;
    animation: typing 1.2s steps(7) forwards;
    @keyframes typing {
        from { width: 0 }
        to { width: 100% }
}
`
export const Button = styled.button `
    border-radius : 5px;
    background-color: ${props => props.color || "white"};
    display:flex;
    height:2.8rem;
    width:2.8rem;
    margin:10px;
    align-items:center;
    justify-content:center;
    margin: 0 4px 0 4px;
    box-shadow: 0px 5px 12px 0px rgba(0,0,0,0.2);
    overflow:hidden;
    &:active{
        border-style:inset;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
    }
`


const Menu = styled(Button) `
    @media (min-width: 800px) {
        display:none;
    }

`






/*
    display:flex;
    flex-direction:column;
    position: absolute;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    right:7px;
    width:12rem;
    top:64px;
    border-radius:5px;
    font-size:15px;
    z-index:20;
    background-color: var(--main-dropd-color);
    border: 1px solid #6c757d;
    @media (min-width: 800px) {
        display:none;
    }

    &:before{
        position: absolute;
        top: -5px;
        right:5px;
        display: inline-block;
        border-right: 7px solid transparent;
        border-bottom: 7px solid #6c757d;
        border-left: 7px solid transparent;
        border-bottom-color: var(--main-dropd-color);
        content: '';
    }

    animation: 0.25s ease-in slideInFromTop;
    @keyframes slideInFromTop {
        0% {
            opacity:0.5;
            transform: translateY(-10px);
        }
        100% {
            opacity:1;
            transform: translateX(0);
        }
      }
      */