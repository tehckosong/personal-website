import React , {useState , useEffect , useRef} from 'react'
import ReactDom from "react-dom"
import { CSSTransition } from 'react-transition-group'
import Backdrop from './Backdrop'
import {Form, Spinner} from "react-bootstrap"
import styled from 'styled-components'
import {AiOutlineClose} from 'react-icons/ai'
import axios from "axios"
import { Validate_Email , Validate_Min } from '../validator/Validator'

const ContactOverlay = (props) => { 
    const exit = useRef()
    const [enabled , setEnable] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error , setError] = useState([{value: null , isValid : false}]);
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
            res.data.status < 400 ?  exit.current.click() : setLoading(false)
        }).catch(err => setError(prev => [{...prev, value:err.message ,  isValid : true}]) )
        
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
        <ContactForm onSubmit={SubmitForm}>
            <Button ref={exit} onClick={props.onCancel}><AiOutlineClose size={20}/></Button>
            <FormGroup  controlId="Name" >
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" onChange={handleName} required className="shadow-sm"/>
            </FormGroup>
            <FormGroup  controlId="Contact-No">
                <Form.Label>Contact No </Form.Label>
                <Form.Control type="number" onChange={handleContact} className="shadow-sm" />
            </FormGroup>
            <FormGroup  controlId="Email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" onChange={handleEmail} required className="shadow-sm"/>
            </FormGroup>
            <FormGroup className="message" controlId="Message">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" onChange={handleMessage} className="shadow-sm"/>
            </FormGroup>
            <Submit  type="submit" disabled={!enabled} >Submit</Submit>
            {error[0].isValid  ? <p style={{textAlign:"center"}}>{error[0].value}</p> :  ""}
            {loading ? <Spinner style={{margin:"0 auto 10px auto" , }} animation="border" role="status"/> : ""}
        </ContactForm>
        </>
    )

    return ReactDom.createPortal(content , document.getElementById("modal"))
}
function Modal(props) {
    return (
        <>
        {props.show && <Backdrop onClick={props.onCancel}/>}
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
    animation: 0.5s ease-in-out slideInFromBottom;
    @keyframes slideInFromBottom {
        0% {
            opacity:0.3;
          transform: translateY(300px);
        }
        100% {
        opacity:1;
          transform: translateX(0);
        }
      }

    
`
const FormGroup = styled(Form.Group) `
    padding: 1rem 2rem 1rem 2rem;
    width : 95%;

    @media (max-width: 800px) {
        padding:0.5rem 1rem 0.5rem  1rem;
        width : 100%;
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