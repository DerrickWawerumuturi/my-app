import React from "react";
import "../../styles/Hero/Hero.css";
import myImage from "../../images/derrick muturi profile.jpg";
import Button from '@mui/material/Button';



// function cutText(text) {

// }

function Hero() {
    return (
        <div className="hero-container">
            <div className="hero-section">
                <div className="hero-text">
                    <h2> ⸻ Hello</h2>
                    <h3>I'm <span>Derrick</span> Muturi</h3>
                    <p className="hero-brief">This is Derrick Muturi, a software Engineer and Web developer
                        located in Nairobi, Kenya
                    </p>
                </div>
                
                <div className="hero-image">
                    <img src={myImage} alt="Derrick Muturi" height="300" width="300"/>
                </div>
            </div>
        <Button variant="contained" className="blog-link">I also write sometimes</Button>
        </div>
    )
}

export default Hero;