import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <h3 className="title">
        Visual Studio Code keyboard shortcut reference sheet for your platform
      </h3>
      <div className="homepage-options">
        <Link to="/windows" className="shortcut-button">
          Windows ShortCut
        </Link>
        <Link to="/mac" className="shortcut-button">
          Mac ShortCut
        </Link>
      </div>
    </div>
  );
}

export default Home;
