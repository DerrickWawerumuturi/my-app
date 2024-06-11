import React from "react";
import "../../styles/About/about.css";
import {
    FaReact,
    IoLogoJavascript,
    IoLogoHtml5,
    FaCss3,
    IoLogoSass,
    FaNode,
    SiFlask,
    SiMysql,
    BiLogoPostgresql,
} from "./icons";

function About({handleMouseOver}) {

    return (
        <div className="about-section">

            <div className="about-title">
                <h2>About</h2>
            </div>
            <div  className="about-text">
                <p>
                    I ain't gonna lie, I don't have those cinderella stories
                    of how I have been programming since I don't know 9 or that
                    I saw Mark Zuckerberg and said that I want to be like him(no offence),
                    I just love coding, I love that I can create whatever I want by just talking
                    with a computer.I love the daily failures and those short bursts of adrenaline after
                    fixing a bug.Most importantly, I like the fact that I can tell stories my own way
                    using program.That's me.
                </p>
                <p>
                    Enought with the TED talks, through programming, I have been able to work on
                    project leveraging my technicall skills and exprertise to develop cool and inovative
                    software solultions and web apps.So what are those technical skills:
                </p>
            </div>
            <div className="about-skills">
                <h3>FrontEnd</h3>
                    <ul> 
                        <li onMouseOver={handleMouseOver}><FaReact /> React</li>
                        <li onMouseOver={handleMouseOver}><IoLogoJavascript />Javascript</li>
                        <li onMouseOver={handleMouseOver}><IoLogoHtml5 />HTML</li>
                        <li onMouseOver={handleMouseOver}><FaCss3 />  CSS</li>
                        <li onMouseOver={handleMouseOver}><IoLogoSass />Sass</li>
                    </ul>

                <h4>Backend</h4>
                    <ul>
                        <li onMouseOver={handleMouseOver}><FaNode /> Node.js</li>
                        <li onMouseOver={handleMouseOver}><SiFlask/>Flask</li>  
                    </ul>
                    
                <h5>Databases</h5>
                    <ul>
                        <li onMouseOver={handleMouseOver}><SiMysql />Mysql</li>
                        <li onMouseOver={handleMouseOver}><BiLogoPostgresql />Postgres</li>
                    </ul>
            </div>
        </div>
    )
}

export default About;