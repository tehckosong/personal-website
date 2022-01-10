import React from 'react'
import ReactDOM from 'react-dom';
import styled from 'styled-components'
function Backdrop(props) {
    return ReactDOM.createPortal(
        <BackDrop onClick={props.onClick}/> , 
        document.getElementById("back-drop")
    )
}

export default Backdrop

 
const BackDrop = styled.div `
    position:fixed;
    top:0 ;
    left:0 ;
    width:100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.75);
    z-index: 10;

`