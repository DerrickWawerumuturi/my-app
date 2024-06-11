import React from "react";
import "../../styles/header/header.css";
import { FaVolumeMute } from "react-icons/fa";
import { AiFillSound } from "react-icons/ai";


function Header({handleMouseOver, toogleSound, isChecked}) {


    return (
        <div className="header-container">
            <div className="header-content">
                <div className="header-title">
                    <h1>Muturi</h1>
                </div>
                <div className="header-lists">
                    <ul className="header-items" >
                        <li id="info" onMouseOver={handleMouseOver} >About</li>
                        <li id="info" onMouseOver={handleMouseOver}>Services</li>
                        <li id="info" onMouseOver={handleMouseOver}>Resume</li>
                        <li id="info" onMouseOver={handleMouseOver}>Blog</li>
                        <button onClick={toogleSound}>{isChecked ? <AiFillSound /> : <FaVolumeMute />}</button>
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default Header;