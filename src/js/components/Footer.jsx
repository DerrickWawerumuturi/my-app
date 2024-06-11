import React from "react";
import "../../styles/Footer/footer.css";

function Footer() {
    const date =  new Date()
    return (
        <footer>
            <div className="footer">
                <h2>Copyright @{date.getFullYear()}</h2>
            </div>
        </footer>
    )
}

export default Footer;