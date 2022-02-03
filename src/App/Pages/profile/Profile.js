import React , {useState} from 'react';
import styled from 'styled-components';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFacebook} from "react-icons/bs";
import {AiFillGithub} from 'react-icons/ai';
import Display from "../../Assets/profile.png";
import Photo from "../../Assets/foto.jpg"
import {motion} from "framer-motion"

function Profile() {

    const container = {
        hidden: { opacity: 0 },
        show: {opacity: 1, transition: {staggerChildren: 0.3}}
        }

    const item = {
        hidden: { opacity: 0 , x: -20},
        show: { opacity: 1 , x:0 }
      }

    return (
        <motion.div variants={container} initial="hidden" animate="show" >
            <Section className="Head" variants={item}>
                <div className='description'>
                    <div className='d-flex flex-column'>
                        <h1 style={{fontSize:"50px"}}>Tan Heng Sheng</h1>
                        <div className='d-flex' >
                            <a  className="icon" href="mailto:hshengtan1999@gmail.com" target="_blank"><HiOutlineMail size={20}/></a> 
                            <a className="icon" color={"#1C6DD0"} href="https://www.facebook.com" target="_blank"><BsFacebook size={20}/></a> 
                            <a className="icon" href="https://github.com/tehckosong" target="_blank"><AiFillGithub size={20} /></a>
                        </div>
                    </div>
                </div>
            </Section>

            <Section className='About' id="about" variants={item} >
                <h1 className='header_bg'>About Me</h1>
                <p> Graduated with a diploma in information technology from Ngee Ann Polytechnic. Aspiring to be a front-end developer, processes knowledge in front-end web development and an understanding of UI/UX to build friendly web interface.</p>
                <br></br>
                <p>Beyond that, i am a adventurous and spontaneous individual, always willing to take risks and try new things. I enjoy pushing myself out of my comfort-zone and challenging myself to do better and improve as an individual.</p>
                <br></br>
                <p>Determined to make an impact wherever i go, striving to be a better than yesterday. Currently proactively looking for opportunity to gain working experience in this field.</p>
            </Section>

            <Section  id="work" variants={item}>
                <h1 className='header_bg'>Work Experience</h1>

                <div className='flex' >
                    <div className='date'><p>Sept 2018 <span>-</span> Mar 2019</p></div>
                    <ul>
                        <h2 className='header'><strong>Sofware Engineer intern, CrimsonLogic GeTs asia</strong></h2>
                        <li>Interned at Global eTrade Services(GeTs), a CrimsonLogic subisdiary company.</li>
                        <br></br>
                        <li>Worked on automating various buisness processes by combining NLP and RPA, to extract data and using it to automate task.</li>
                    </ul>
                </div>

                <div className='flex'>
                    <div className='date'><p>Sept 2018 <span>-</span> Mar 2019</p></div>
                    <ul>
                        <h2 className='header'><strong>Sales Representative, Grab Holdings Inc, Singapore</strong></h2>
                        <li>Worked as an on the ground agent, travelling around singapore promoting Grab's third-party ride-hailing platform to taxi and private-hire drivers.</li>
                        <br></br>
                        <li>Assisted them on the platform onboarding process while resolving any inquiries they might face.</li>
                    </ul>
                </div>
            </Section>

            <Section className='Skills' variants={item}>
                <h1 className='header_bg'>Skills</h1>
                <div className='flex'>
                    <h2 className='title'><strong>Programming Languages: </strong></h2>
                    <p>Javascript(ES6) | HTML | CSS | SQL | JAVA | C++ </p>
                </div>
                <div className='flex'>
                    <h2 className='title'><strong>Libraries and Frameworks: </strong></h2>
                    <p> React | Next | BootStrap | ES6<br></br>Nodejs | Express </p>
                </div>
                <div className='flex'>
                    <h2 className='title'><strong>Tools and Platforms: </strong></h2>
                    <p> Git | Webpack | Firebase </p>
                </div>
                <div className='flex'>
                    <h2 className='title'><strong>Databases: </strong></h2>
                    <p> MongoDB | MySQL</p>
                </div>

            </Section>

            <Section className='Life' variants={item}>
                <h1 className='header_bg'>My Life</h1>
                <div className='flex'>
                    <div className='date'><p>Apr 2016 <span>-</span> May 2019</p></div>
                    <ul>
                        <h2 className='header'><strong>Ngee Ann Polytechnic</strong></h2>
                        <li>Graduated with a diploma in information technology</li>
                        <br></br>
                        <li>Specialized in mobile buisness application</li>  
                    </ul>
                </div>
                <div className='flex'>
                    <div className='date'><p>Oct 2019 <span>-</span> Oct 2021</p></div>
                    <ul>
                        <h2 className='header'><strong>Republic Of Singapore Air Forces</strong></h2>
                        <li>Served on a force protection squadron responsible for security of the base</li>  
                        <br></br>
                        <li>Part of a  4 man task force responsible of an island, conducting patrols. </li>
                    </ul>
                </div>
            </Section>
        </motion.div>
    )
}

export default Profile
const Section = styled(motion.section)`
    margin-top:4rem;



    .icon{
        padding-left:0.5rem;
        padding-right:0.5rem;
    }
    &.Head{
        display:flex;
    }
    .header{
        transform: translateX(-30px);
    }

    .header_bg {
        text-decoration: underline;
        max-width:max-content;
        border-radius:3px;
        padding:3px 20px 3px 5px;
        background-color : var(--main-header-color);
        text-decoration:none;
        margin-bottom :2rem;
        font-size:24px;
    }
    .description{
        display: flex;
        justify-content:space-evenly;
        align-items:center;
        max-width: 27rem;

        @media (max-width: 500px) {
            justify-content:center;
            align-items:center;
            flex-direction:column;
        }
    }
    .date{
        margin-bottom:1rem;
        min-width:7rem;
        max-width:7.5rem;
        margin-right:2rem;
        text-aligh:left;
        border-right: 2px solid var(--main-border-color);
        @media (max-width: 500px) {
            border-right:none;
            border-left: 2px solid var(--main-border-color);
            max-width:none;
        }
        
        >p{
            margin-left:0.5rem;
        
        }
    }

    .title{
        width:17ch;
        @media (max-width: 500px) {
            width:max-content;
        }
    }
    .flex {
        margin-bottom:2rem;
        display:flex;
        @media (max-width: 500px) {
            flex-direction:column
        }
    }

    p{
        margin:0;
        vertical-align: middle;
        line-height: 1.65;
    }


`

const Img = styled.img`

    border:10px solid white;
    clip-path:circle(40%);
    height:7.4rem;
    @media (max-width: 425px) {
        height:6rem;
        margin:0;
        justify-content:center;
        align-items:center;
        flex-direction:column;
    }

`


