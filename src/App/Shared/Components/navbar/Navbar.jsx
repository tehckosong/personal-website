import React , {useState , useRef , useEffect } from 'react'
import styled  from 'styled-components'
import Navlink from '../navlink/Navlink'
import {FiBluetooth, FiMoon} from "react-icons/fi"
import {GiHamburgerMenu} from 'react-icons/gi'
import {BsCloudSun} from 'react-icons/bs'
import {useThemeToggler} from '../../Context/ThemeToggle'
function Navbar() {
    const blur = useRef();
    const {Toggle , theme , dark} = useThemeToggler()
    const [enable , setEnable] = useState(false)


    const MenuToggle =() => {
        setEnable(!enable)
    }

    const handleClick = (e) => { //clicking outside closes the dropdow

        if(blur.current.contains(e.target)){ //do nothing when clicking inside 
            return ;
        }

        setEnable(false)
  
    }


    useEffect(() => {

        document.addEventListener("mousedown", handleClick);

        return () => {
          document.removeEventListener("mousedown", handleClick); 
        };
      }, []);
    
    return (
        <Nav color={theme.background}>
            <NavItem>
                <Container><Logo href="/">Welcome</Logo></Container>
                <NavItems>
                    <Navlink  />
                </NavItems>  
                <Container >

                        <Button color={theme.secondary} onClick={Toggle}> 
                            
                                <Icon className={`icon ${!dark ? "show-moon" : "close-moon"}`}><FiMoon size={20}/></Icon>
                                <Icon className={`icon ${dark ? "show-sun" : "close-sun"}`}><BsCloudSun size={20}/></Icon>
                        </Button>

                    <div ref={blur} style={{position:'relative'}}>
                        <Menu onClick={MenuToggle}><GiHamburgerMenu/></Menu>
                        {enable ?  (<Dropdown color={theme.secondary}><Navlink /></Dropdown>)  : "" }
                    </div>
                </Container>

                

            </NavItem>
        </Nav>
    )
}


export default Navbar

const Icon = styled.div `
    transition : transform 0.5s;


    &.show-moon {
        opacity:1;

    }
    &.close-moon {
        transform: translate(15px, 30px);
        position:absolute;
        opacity:0; 
    }

    &.show-sun {
        opacity:1;

    }
    &.close-sun {
        transform: translate(-30px,30px);
        position:absolute;
        opacity:0;
    }
\
`

const Nav = styled.div `
    position:relative;
    top:0;
    width: 100%;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
    background-color: ${props => props.color || "white"};
    transition : height 2s
`

const NavItem = styled.div `
    width: 720px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:1rem 1rem 1rem 1rem;
`

const Container = styled.div `
    display:flex;
    
`
const Logo = styled.a `
    font-size:25px;
    font-weight:600;
`
export const Button = styled.button `
    outline:none;
    border:none;
    border-radius : 5px;
    background-color: ${props => props.color || "whitesmoke"};
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

//navlink none when less than 800px
const NavItems = styled(Container) ` 
    display:flex;
    @media (max-width: 800px) {
        display:none;
    }
`

const Dropdown = styled(Container) `
    display:flex;
    flex-direction:column;
    position: absolute;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    right:15px;
    width:10rem;
    top:85px;
    border-radius:5px;
    font-size:15px;
    background-color: ${props => props.color || "white"};
    transform: translateY(-1rem);

    @media (min-width: 800px) {
        display:none;
    }

    &:before{
        position: absolute;
        top: -5px;
        right:9px;
        display: inline-block;
        border-right: 7px solid transparent;
        border-bottom: 7px solid #ccc;
        border-left: 7px solid transparent;
        border-bottom-color: ${props => props.color || "white"};
        content: '';
    }
    



`

