import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h3>
        Visual Studio Code keyboard shortcut reference sheet for your platform
      </h3>
      <div className="homepage-options">
        <Link to="/windows">Windows ShortCut</Link>
        <Link to="/mac">Mac ShortCut</Link>
      </div>
    </div>
  );
}

export default Home;
