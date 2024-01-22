import React from "react";
import "./Footer.css"


const Footer = () => {
return (
    <footer>
        <div className="footer-container">
         
          
          <span className="created-by">
             <p>&copy; {new Date().getFullYear()} Created by: Anna, Antonio, Naeem, Sabina</p>
             </span>

        </div>
        </footer>
)
}

export default Footer;