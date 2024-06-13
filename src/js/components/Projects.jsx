import React from "react";
import "../../styles/Projects/projects.css"
import voicebot from "../../images/voice-bot.jpg";
import telbot from "../../images/telegram-bot.jpg";

function Projects() {

    return (
        <div className="projects-container">
            <div className="project-heading">
                <h2>FEATURED PROJECTS</h2>
            </div>

            <div className="projects-list">

                <div className="proj p01">

                    <div className="images">
                        <img src={voicebot} alt="voicebot" width="200" height="200"></img>
                    </div>

                    <div className="text-container">
                        <h3>Gary</h3>
                        <p>Gary is an automated AI voice assistant bulid using node js and Google cloud NLP </p>
                        <button >Express</button>
                        <button>Google API</button>
                        <button>CSS</button>
                    </div>
                </div>

                <div className="proj p02">
                    <div className="images">
                        <img src={telbot} alt="telegrambot" width="200" height="180"></img>
                    </div>

                    <div className="text-container">
                        <h3>TLEGR</h3>
                        <p>Telegram bot created that mocks user interactions on telegram </p>
                        <button >React</button>
                        <button >Js</button>
                        <button >HMTL</button>
                        <button >CSS</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Projects;
/**
 * Projects are:
 *
 * 01. AI-voice bot
 * 02. Telegram bot
 */
