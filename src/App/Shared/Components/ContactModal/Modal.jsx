import React , {useState , useEffect , useRef} from 'react'
import ReactDom from "react-dom"
import Backdrop from './Backdrop'
import {Form, Spinner, FloatingLabel} from "react-bootstrap"
import styled from 'styled-components'
import {AiOutlineClose} from 'react-icons/ai'
import axios from "axios"
import { Validate_Email , Validate_Min } from '../validator/Validator'
import {motion ,AnimatePresence} from "framer-motion"

const ContactOverlay = (props) => { 
    const exit = useRef()
    const [enabled , setEnable] = useState(false);
    const [loading, setLoading] = useState(false);
    const [Name, setName] = useState([{value: null , isValid : false }]);
    const [Contact, setContact] = useState([{value:null , isValid : false }]);
    const [Email, setEmail] = useState([{value: null , isValid : false }]);
    const [Message, setMessage] = useState([{value: null , isValid : false }]);
    const SubmitForm = (event) => {
        event.preventDefault();
        const form = {
            Name : Name[0].value,
            Contact : Contact[0].value,
            Email : Email[0].value,
            Message : Message[0].value,
        }
        setLoading(true)
        axios.post(process.env.EMAILER, form).then(res => {
            if(res.data.status < 400) {
                setLoading(false);
                props.setMessage(prev => [{...prev, value:"Success",  isValid : true}])
                props.onCancel()
            }
            else {
                props.setMessage(prev => [{...prev, value:"Error" ,  isValid : true}])
            }
        }).catch(err =>  {
            props.setMessage(prev => [{...prev, value:"Error" ,  isValid : true}])
            console.log(err)
            setLoading(false);
        } )
        
    }


    const handleName = (e) => {
        setName(prev => [{...prev , value:e.target.value , isValid :(Validate_Min(1,e.target.value))}])
    }

    const handleContact = (e) => {
        setContact(prev => [{...prev , value:e.target.value , isValid :(Validate_Min(8 , e.target.value))}])
    }

    const handleEmail = (e) => {
        setEmail(prev => [{...prev , value:e.target.value , isValid :(Validate_Email(e.target.value))}])
    }

    const handleMessage = (e) => {
       setMessage(prev => [{...prev , value: e.target.value , isValid :(Validate_Min(1,e.target.value))}])
    }

    
    useEffect(() => {
        if(Name[0].isValid && Contact[0].isValid && Email[0].isValid && Message[0].isValid) {
            setEnable(true)
        }
        else setEnable(false);
    }, [handleEmail, handleContact , handleMessage , handleName])

      

    const content = (
        <>
        <ContactForm  as={motion.form} initial="hidden" animate="visible" exit="out" variants={list} onSubmit={SubmitForm}>
            <h1>Contact Me</h1>
            <FormGroup  controlId="Name" >
                <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
                    <FormControl type="text" onChange={handleName}  className="shadow-sm"/>
                </FloatingLabel>
            </FormGroup>
            <FormGroup  controlId="Contact-No">
                <FloatingLabel controlId="floatingInput" label="Contact No" className="mb-3">
                    <FormControl type="number" onChange={handleContact} className="shadow-sm" />
                </FloatingLabel>
            </FormGroup>
            <FormGroup  controlId="Email">
                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                    <FormControl type="email"  onChange={handleEmail}  className="shadow-sm"/>
                </FloatingLabel>
            </FormGroup>
            <FormGroup className="message" controlId="Message">
                <FloatingLabel controlId="floatingInput" label="Message" className="mb-3">
                    <Form.Control as="textarea" onChange={handleMessage} className="shadow-sm"/>
                </FloatingLabel>
            </FormGroup>
            {loading ? <Spinner style={{margin:"0 auto 10px auto"}} animation="border" role="status"/> : (<Submit  type="submit" disabled={!enabled}>Submit</Submit>)}
        </ContactForm>
        </>
    )

    return ReactDom.createPortal(content , document.getElementById("modal"))
}
function Modal(props) {
    return (
        <>
        {props.show && <Backdrop onClick={props.onCancel}/> }
        <ContactOverlay {...props} />

        </>
    )
}

export default Modal



const ContactForm = styled(Form) `  
    font-size:1rem;
    z-index: 100;
    position: fixed;
    top: 12vh;
    left: 30%;
    width: 40%;
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 8px;
    color:black;
    display:flex;
    flex-direction:column;
    @media (max-width: 800px) {
        width:70%;
        left:15%;
        top:10%;
    }

    
      >h1{
        padding: 1rem 2rem 1rem 2rem;
        font-size:clamp(24px, 3vw ,30px)
      }

`
const FormGroup = styled(Form.Group) `
    padding: 1rem 2rem 1rem 2rem;
    width : 95%;
    @media (max-width: 800px) {
        padding:0.5rem 1rem 0.5rem  1rem;
    }
`

const Button = styled.button `
    position:absolute;
    right:3px;
    top:5px;
`

const Submit = styled.button`
    margin: 0 auto;
    margin-bottom:1rem;
    border-radius:5px;
    background-color:#009DAE;
`

const FormControl = styled(Form.Control)`
    border:none;
    border-bottom: 1px solid lightgrey;
`

        
const list = {
    visible: { 
        opacity: 1 ,
        y:0,
        transition: {
            duration : 0.5,

        }
    },
    hidden: { 
        opacity: 0,
        y:"-100vh",
        
    },
    out : {
        opacity:0,
        y:"-100vh",
        transition: {
            duration : 0.3,
        }
    }
  }