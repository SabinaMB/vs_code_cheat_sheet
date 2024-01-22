import React from "react";
import "./Footer.css";
import githubIcon from "./assets/Github.png";


const Footer = () => {
return (
    <footer>
        <div className="footer-container">
         
          
          <span className="created-by">
             <p>&copy; {new Date().getFullYear()} Created by: Anna, Antonio, Naeem, Sabina</p>
             <img src={githubIcon} alt="GitHub Icon" className="github-icon" />
             </span>

        </div>
        </footer>
)
}

export default Footer;