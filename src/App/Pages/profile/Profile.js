import React , {useState , useEffect} from 'react';
import styled from 'styled-components';
import {useThemeToggler} from "../../Shared/Context/ThemeToggle";
import { CSSTransition } from 'react-transition-group'
import {HiOutlineMail} from 'react-icons/hi';
import {BsFacebook} from "react-icons/bs";
import {AiFillGithub} from 'react-icons/ai';
import Display from "../../Assets/profile.png"


function Profile() {
    const {theme} = useThemeToggler();

    return (
        <>
  
        <Section id ="about">
            <Description >
                <Img color={theme.secondary} src={Display}></Img>
                <Name>
                    <p style={{textAlign:"center"}}><strong>Tan Heng Sheng</strong></p>   
                    <Icons>
                        <Icon color={"#171515"} href="mailto:hshengtan1999@gmail.com" target="_blank"><HiOutlineMail size={20}/></Icon> 
                        <Icon color={"#4267B2"} href="https://www.facebook.com/" target="_blank"><BsFacebook size={20}/></Icon> 
                        <Icon color={"#171515"} href="https://github.com/tehckosong" target="_blank"><AiFillGithub size={20} /></Icon>
                    </Icons>
                </Name>
            </Description>
        </Section>

                            
        <Section>
            <Header color={theme.secondary}>About Me.</Header>
            <Paragraph line={1.55}>
               <p>Graduated with a diploma in information technology from Ngee Ann Polytechnic, during the course of my studies and internship i have been exposed to many new kind of 
                technology such as AI and RPA, gained insighful knowledge on how large scale web applications operate behind the scenes.</p>
                <p>I enjoy pushing myself out of my comfort-zone and challenging myself to do better and improve.</p> <p> I am hardworking and an versatile team player, determined to make a positive 
                impact wherever i go. I strive to better myself as a developer, currently proactive looking for opportunity to gain relavant work experience.</p>
            
            </Paragraph>
        </Section>
             

        <Section>
            <Header color={theme.secondary}>Education</Header>
            <Paragraph>
               <p> <strong>2016 - 2019 </strong>FairField Methodist Secondary </p>
               <p> <strong>2016 - 2019 </strong>Ngee Ann Polytechnic </p>
               <p> <strong>2016 - 2019 </strong>Singapore Armed Forces </p>
            </Paragraph>
        </Section>

        <Section>
            <Header color={theme.secondary}> Skills </Header>
            <Paragraph>
               <p>Familiar in using <strong>MERN</strong> stack to build single-page application</p>
               
               <p> <strong>Languages</strong> : Javascript, Java , C++ ,SQL</p> 

               <p><strong>Web Tech</strong>:  Reactjs, HTML, CSS, BootStrap, ES6, JQuery, Nodejs, Expressjs</p>
               <p><strong>Databases</strong>: MongoDB , MySQL</p> 
            </Paragraph>
        </Section>

        <Section>
            <Header color={theme.secondary}>Work Experience</Header>
                <Paragraph>
                    <p>CrimsonLogic GeTs Asia <br></br>
                        Software Development Intern
                    </p>
                    <p><strong>September 2018 - March 2019</strong></p>
                </Paragraph>
        </Section>
    </>
    )
}

export default Profile

const Section = styled.section `
    margin-top : 3rem;

    &.modal-enter {
        opacity: 0;
        transform: translateY(500px);
    }
    &.modal-enter-active {
        opacity: 1;
        transform: translateY(0px);
        transition: opacity 0.5s , transform 0.5s linear;
    }
    &.modal-exit {
        opacity: 1;
    }
    &.modal-exit-active {
        opacity: 0;
        transform: translateY(500px);
        transition: transform 0.5s , opacity 0.5s;
    }
`

const Description = styled.div `
    display: flex;
    justify-content:space-evenly;
    align-items:center;
    max-width: 25rem;

    @media (max-width: 475px) {
        flex-direction: column;
    }
`
const Icon = styled.a`
    margin: 5px 7px;
    color : ${props => props.color || "white"};
    @media (max-width: 475px) {
        text-align:center;
    }
`

const Icons = styled.div `
    @media (max-width: 475px) {
        text-align:center;
    }
`
const Header = styled.h1`
    text-decoration: underline;
    text-decoration-color: ${props => props.color || "white"};
    margin-bottom :1rem;
`

const Img = styled.img `

    border-style:outset;
    border: 3px solid ${props => props.color || "white"};
    border-radius:50%;
    height:7.4rem;

`
const Paragraph = styled.p `
    line-height : ${props => props.line || "1.4"};
    padding-left : 1rem;
`
const Name = styled(Paragraph) `
    font-weight:600;
    font-size:30px;
`