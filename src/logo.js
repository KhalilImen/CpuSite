import React from "react";
import Cpulogo from "./Cpulogo.png";
import Rectangle from "./Rectangle.png";
import { Link } from "react-router-dom";

import "./style.css";

function Logoright() {
  return (
    <div className="navbar">
      <div className="bg-shape">
        <Link to="/another-page">
          <img className="imm1" src={Cpulogo} alt="" />
        </Link>
      </div>
    </div>
  );
}

export default Logoright;
