import React, {useEffect} from "react";
import "../../styles/Footer/footer.css";

function Footer(props) { 
    useEffect(() => {
        if (props.theme === '#171C28') {
            document.getElementById("footer").style.backgroundColor = '#1B252D';
        } else {
            document.getElementById("footer").style.backgroundColor = '#D0E8F7';
        }
    })

    const date = new Date()
    return (
        <footer >
            <div className="footer-container" id="footer">
                <div className="footer-about">
                    <h2>Derrick Muturi</h2>
                    <p>Thanks for reading!</p>
                    <p className="copyright">@ {date.getFullYear()} present Derrick Muturi. All Rights Reserved</p>
                </div>

                <div className="footer-subjects">
                    <div className="footer-tutorials">
                        <h3>Tutorials</h3>
                        <div className="langs">
                            <div className="space">React</div>
                            <div className="space">Node</div>
                            <div className="css">CSS</div>
                            <div className="space">Sass</div>
                        </div>

                    </div>

                    <div className="footer-links">
                        <h3>Links</h3>
                        <div className="socials"><a href="https://github.com/DerrickWawerumuturi">Github </a></div>
                        <div className="socials"><a href="wawerumuturi57@gmail.com">Contact </a></div>
                        <div className="socials"><a href="www.divnkedin.com/in/derrick-muturi">linkedIn</a></div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
