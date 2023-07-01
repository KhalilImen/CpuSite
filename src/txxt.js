import React from "react";
import "./style.css";
import phone from "./phone.png";
function Text() {
  return (
    <div className="txt11">
      <div className="who">
        WHO ARE WE?
      </div>
      <div className="info">
        <h4>
        CPU-ISIMM is a non-profit cultural and scientific club that combines education and innovation. It was founded in 2020 by a group of students from the Electronics and Computer Science department at ISIMM.
        The club aims to promote scientific and technological culture while fostering learning and innovation. It provides a platform for students to exchange ideas and develop skills in the fields of electronics, computer science, and information technology. The club organizes various events such as conferences, workshops, training sessions, competitions, and collaborative projects
      </h4>
      </div>
      <img className="img4" src={phone} alt="" />
    </div>
  );
}
export default Text;
