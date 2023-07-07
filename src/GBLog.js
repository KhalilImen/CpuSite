import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Gb() {
  return (
    <div className="gbl">
      <div className="gb">
        <Link to="/" className="link">go back</Link>
      </div>
      <div className="log">
        <Link to="/another-page" className="link">login</Link>
      </div>
    </div>
  );
}

export default Gb;
