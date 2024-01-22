import React from "react";
import "./Footer.css";
import githubIcon from "../assets/Github.png"

const Footer = () => {
return (
    <footer>
        <div className="footer-container">
         
          
          <span className="created-by">
             <p>&copy; {new Date().getFullYear()} Created by: Anna, Antonio, Naeem, Sabina</p>
             <a href="https://github.com/AnnaShazk/vs_code_cheat_sheet" target="_blank" rel="noopener noreferrer">
               
             <img src={githubIcon} alt="GitHub Icon" 
             className="github-icon" />
             </a>
             </span>

        </div>
        </footer>
)
}

export default Footer;