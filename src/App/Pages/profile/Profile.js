import React , {useState , useEffect} from 'react';
import styled from 'styled-components';
import {useThemeToggler} from "../../Shared/Context/ThemeToggle";
import {HiOutlineMail} from 'react-icons/hi';
import {BsFacebook} from "react-icons/bs";
import {AiFillGithub} from 'react-icons/ai';
import Display from "../../Assets/profile.png"
import {Card} from 'react-bootstrap'

function Profile() {
    return (
        <>
        <Section id ="about">
            <AboutCard>  
            <Description >
                <Img src={Display}></Img>
                <Detail>
                    <Name><strong>Tan Heng Sheng</strong></Name> 
                    <Icons>
                        <Icon  href="mailto:hshengtan1999@gmail.com" target="_blank"><HiOutlineMail size={20}/></Icon> 
                        <Icon color={"#1C6DD0"} href="https://www.facebook.com/" target="_blank"><BsFacebook size={20}/></Icon> 
                        <Icon  href="https://github.com/tehckosong" target="_blank"><AiFillGithub size={20} /></Icon>
                    </Icons>
                </Detail>
            </Description>
            </AboutCard>
        </Section>         
        <Section>
            <Header>About Me.</Header>
            <Paragraph line={1.55}>
                <p> Graduated with a diploma in information technology from Ngee Ann Polytechnic. 
                Aspiring to be a front-end developer, processes knowledge in <a href="#skills">front-end</a> web development and an understanding of UI/UX to build friendly web interface.
                </p>
                <p>Beyond that, i am a adventurous and spontaneous individual, always willing to take risks and try new things. 
                I enjoy pushing myself out of my comfort-zone and challenging myself to do better and improve as an individual.
                </p>
                Determined to make an impact wherever i go, striving to be a better than yesterday.
                Currently proactively looking for opportunity to gain working experience in this field.
            </Paragraph>
        </Section>
             
        <Section>
            <Header>My Life</Header>
            <Row >
                <Paragraph className='year'>Apr 2016 - May 2019</Paragraph>
                <Paragraph>
                    <h2><strong> Ngee Ann Polytechnic</strong></h2>
                    <p>Graduated with a diploma in information technology.         
                     Specialized in mobile buisness application   
                    </p>                
                </Paragraph>
            </Row>
            <Row >
                <Paragraph className='year'>Oct 2019 - Oct 2021</Paragraph>
                <Paragraph>
                    <h2><strong>Republic Of Singapore Air Forces</strong></h2>
                    <p>Served on a force protection squadron responsible for security of the base</p>
                    <p>Part of a  4 man task force responsible of an island, conducting patrols. </p>
                </Paragraph>
            </Row>        
        </Section>

        <Section id="skills">
            <Header > Skills </Header>

                <Row >
                    <Paragraph className='skill'><h2><strong>Languages: </strong></h2></Paragraph>
                    <Paragraph>
                        Javascript | Java | C++ | SQL
                    </Paragraph>
                </Row>
                <Row >
                    <Paragraph className='skill'><h2><strong>Web Tech: </strong></h2></Paragraph>
                    <Paragraph>
                        React | Next | HTML | CSS | BootStrap | ES6<br></br>Nodejs | Expressjs | Webpack 
                    </Paragraph>
                </Row>
                <Row >
                    <Paragraph className='skill'><h2><strong>Databases: </strong></h2></Paragraph>
                    <Paragraph>
                         MongoDB | MySQL
                    </Paragraph>
                </Row>
                <p> Familiar in using <strong>MERN</strong> stack to build single-page application</p>
        </Section>

        <Section>
            <Header >Work Experience</Header>
                <Row >
                    <Paragraph className='year'>Sept 2018 - Mar 2019</Paragraph>
                    <Paragraph>
                        <h2> <strong>Sofware Engineer intern, CrimsonLogic GeTs asia</strong></h2>
                        <p>
                             Interned at Global eTrade Services(GeTs), a CrimsonLogic subisdiary company.
                        </p>
                        <p> Worked on automating various 
                            buisness processes by combining NLP and RPA, to extract data and using it to automate task.
                        </p>
                    </Paragraph>
                </Row>
                <Row >
                    <Paragraph className='year'>Mar 2017 - Apr 2017</Paragraph>
                    <Paragraph>
                        <h2><strong>Sales Representative, Grab Holdings Inc, Singapore</strong></h2>
                        <p> 
                            Worked as an on the ground agent, travelling around singapore promoting Grab's third-party ride-hailing platform to 
                            taxi and private-hire drivers.
                        </p> 
                        <p>
                            Assisted them on the platform onboarding process while resolving any inquiries they might face.
                        </p>
                    </Paragraph>
                </Row>
        </Section>
    </>
    )
}

export default Profile
const AboutCard = styled(Card)`
    background-color: var(--main-sec-color);
    box-shadow: -2px 3px 3px 0px rgba(0,0,0,0.35);
    padding: 0.5rem 10px;
    border-radius:15px;
    border:none;
    width:100%;
    @media (max-width: 475px) {
        padding: 0.8rem 10px;
    }

    &:before{
        filter: blur(1px);
    }
`
const Row = styled.div `
    display:flex;
    @media (max-width: 500px) {
        flex-direction: column;
        
    }
`
const Section = styled.section `
    margin-top : 3rem;
    animation: 0.5s ease-in slideInFromLeft;
    @keyframes slideInFromLeft {
        0% {
            opacity:0.3;
          transform: translateY(-50px);
        }
        100% {
            opacity:1;
          transform: translateX(0);
        }
      }
`

const Description = styled.div `
    display: flex;
    justify-content:space-evenly;
    align-items:center;
    max-width: 25rem;

    @media (max-width: 350px) {
        flex-direction:column;
    }

`
const Icon = styled.a`
    margin: 5px 7px;
    color : ${props => props.color || "var(--main-text-color)"};    
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
    max-width:max-content;
    border-radius:3px;
    padding:3px 20px 3px 5px;
    background-color : var(--main-header-color);
    text-decoration:none;
    margin-bottom :1rem;
    font-size:24px;
`

const Img = styled.img `
    border: 4px solid white;
    border-radius:50%;
    height:7.4rem;
    @media (max-width: 475px) {
        height:5.5rem;
    }
`
const Paragraph = styled.p `
    line-height : ${props => props.line || "1.4"};
    padding-left : 0.3rem;

    &.year{
        margin-bottom:1rem;
        min-width:7.3rem;
        margin-right:2rem;
        border-right: 2px solid var(--main-text-color);
        @media (max-width: 500px) {
            border-right:none;
            border-left: 2px solid var(--main-text-color);
        }
    }

    &.skill{
        margin-bottom:1rem;
        min-width:7rem;
        margin-right:2rem;
    }

`
const Detail = styled(Paragraph) `
    font-weight:600;
    font-size:30px;
`

const Name = styled.h1 `
    text-align:center;
    font-size:27px;
    @media (max-width: 475px) {
        font-size:19.5px;
    }

`