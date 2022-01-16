import React , {useState , useRef , useEffect } from 'react'
import styled  from 'styled-components'
import Navlink from '../navlink/Navlink'
import {FiBluetooth, FiMoon} from "react-icons/fi"
import {GiHamburgerMenu} from 'react-icons/gi'
import {BsCloudSun} from 'react-icons/bs'
import {useThemeToggler} from '../../Context/ThemeToggle'
    
function Navbar() {
    const blur = useRef();
    const IconRotate = useRef();
    const [Count, setCount] = useState(1);
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

    const rotate = () => {
        IconRotate.current.style.transform = `rotate(${180 * Count}deg)`;
        setCount(Count + 1)    
        if(Count > 20) {
            setCount(1)
        }
    }

    const BtnToggle = () => {
        IconRotate.current.click();
        Toggle()
    }

    useEffect(() => {

        document.addEventListener("mousedown", handleClick);

        return () => {
          document.removeEventListener("mousedown", handleClick); 
        };
      }, []);
    
    return (
        <Nav >
            <NavItem>
                <Container><Logo href="/">Welcome</Logo></Container>
                <NavItems>
                    <Navlink/>
                </NavItems>  

                <Container>
                    <Button  onClick={BtnToggle} color={theme.reverse}> 
                        <IconContainer ref={IconRotate} onClick={rotate} >
                            <Icon className='sun'><BsCloudSun size={20}/></Icon>
                            <Icon className='moon'><FiMoon size={20}/></Icon>
                        </IconContainer>
                    </Button>

                    <div ref={blur} style={{position:'relative'}}>
                        <Menu onClick={MenuToggle}><GiHamburgerMenu /></Menu>
                        {enable ?  (<Dropdown ><Navlink /></Dropdown>)  : "" }
                    </div>

                </Container>

            </NavItem>
        </Nav>
    )
}


export default Navbar
const IconContainer = styled.div ` 
    position:relative;
    display:flex;
    flex-direction:column;
    width: 100%;
    margin-top:40px;
    transition: transform 0.5s;
    align-items:center;
    justify-content:center;

`
const Icon = styled.div `
    padding:10px 0 10px 0;
    transition : transform 0.5s;
    color: ${props => props.color || "white"};

    &.moon {
        transform: scale(-1, -1); 
    }


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
    background-color: var(--main-bg-color);
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
    position:relative;
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

`

