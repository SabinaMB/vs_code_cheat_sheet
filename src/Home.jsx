import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">

      <header>
      <h1 className="main-title">VS Code Cheat Sheet</h1>
        <p className="sub-title">
          Your guide to Visual Studio Code keyboard shortcuts
        </p>
      </header>

      <div className="content">
      
      <h3 className="section-title">
      Choose your platform to view shortcuts:
      </h3>

      <div className="homepage-options">
        <Link to="/windows" className="shortcut-button">
          Windows shortcut
        </Link>
        <Link to="/mac" className="shortcut-button">
          Mac shortcut
        </Link>
        </div>
        
      </div>

    </div>

  );
}

export default Home;
