import React , {useEffect , useRef} from 'react';
import ReactDom from "react-dom"
import styled from 'styled-components'
import {RiErrorWarningFill} from 'react-icons/ri'
import {TiTick} from 'react-icons/ti'
import {motion , AnimatePresence} from "framer-motion"
function MessageBox({Message ,setMessage}) {
  useEffect(() => {
    setTimeout(()=> setMessage(prev => [{...prev, value:null ,  isValid : false}]) , 5000)
}, [Message.value])

const list = {
  visible: { opacity: 1, x:0, transition: { duration :0.5, type:"spring",}},

  hidden: { x:300, opacity: 0},

  out : { opacity: 0, x:300,}
}

  const content = (<>
      <Toast initial="hidden" animate="visible" exit="out" variants={list} >
        {Message.value === "Error" ?  
          (<div className='d-flex align-items-center error'><RiErrorWarningFill color="#DA1212" size={25}/><p style={{margin:"0" , padding:"10px 7px" ,fontSize:"13px"}}>Error, Try Again</p></div>)
          : Message.value !== null ? 
          (<div className='d-flex align-items-center success'><TiTick color="var(--main-header-color)" size={30}/><p style={{margin:"0" ,fontSize:"13px", padding:"10px 7px"}}>Thanks for Contacting!</p></div>)
          : ""
        }
      </Toast>
  </>)
  return ReactDom.createPortal(content , document.getElementById("message_box"));

}
export default React.memo(MessageBox);


const Toast = styled(motion.div) `

  z-index:100;
  position:fixed;
  bottom:20px;
  right:0px;
  height:min-content;
  width:max-content;
  background-color:#FFF9F9;
  color:black;
  border-radius:5px;
  box-shadow: -2px 2px 2px 1px rgba(0,0,0,.1);

  .success {
    border-left:10px solid var(--main-header-color);
    border-radius:5px;
  }

  .error {
    border-left:10px solid #DA1212;
    border-radius:5px;
  }


`  
