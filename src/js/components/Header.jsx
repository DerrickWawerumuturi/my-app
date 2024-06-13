import React from "react";
import "../../styles/header/header.css";
import "../../styles/header/animation.css";
import { FaVolumeMute } from "react-icons/fa";
import { AiFillSound } from "react-icons/ai";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

function Header(props) {


    return (
        <div className="header-container">
            <div className="header-content">

                <div className="header-title">
                    <h1>Muturi</h1>
                 </div>
                <div className="header-lists">
                    <ul className="header-items" >
                        <li id="info" onMouseOver={props.handleMouseOver} >About</li>
                        <li id="info" onMouseOver={props.handleMouseOver}>Services</li>
                        <li id="info" onMouseOver={props.handleMouseOver}>Resume</li>
                        <li id="info" onMouseOver={props.handleMouseOver}>Blog</li>
                        <button onClick={props.toogle}>{props.isChecked ? <AiFillSound /> : <FaVolumeMute />}</button>
                        <button onClick={props.handleClick}>{props.icon ? < MdOutlineLightMode/> : < MdDarkMode/>}</button>
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default Header;