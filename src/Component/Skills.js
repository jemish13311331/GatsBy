import React from "react";
import "./skills.css";
import { SettingFilled } from "@ant-design/icons";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import img5 from "../images/img5.png";
import img6 from "../images/img6.png";
import img7 from "../images/img7.webp";
import img8 from "../images/img8.png";
import img9 from "../images/img9.png";
import img10 from "../images/img10.png";
import img11 from "../images/img11.png";
import img12 from "../images/img12.png";
import img13 from "../images/img13.png";
import img14 from "../images/img14.png";
import img15 from "../images/img15.png";
import img16 from "../images/img16.png";

//component to render skills
export const Skills = ({ data }) => {
  const imgDictionary = {
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
  };
  const skillTable = () => {
    return Object.keys(imgDictionary).map((val, index) => (
      <div>
        <div>
          <img src={imgDictionary[val]} className="skill-image" />
        </div>
      </div>
    ));
  };
  return (
    <div className="skills">
      <div className="title">
        <div className="line">
          <hr />
        </div>
        <div>
          {" "}
          <SettingFilled style={{ marginRight: 5 }} />
          Skills
        </div>
        <div className="line">
          <hr />
        </div>
      </div>
      <div className="skills-logo">{skillTable()}</div>
    </div>
  );
};
