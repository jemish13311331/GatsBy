import React from "react";
import "./skills.css";

//component to render skills
export const Skills = ({ data }) => {
  return (
    <div className="skills">
      <div className="title">
        <div className="line">
          <hr />
        </div>
        <div>Skills</div>
        <div className="line">
          <hr />
        </div>
      </div>
      <div>
        <ul>
          {" "}
          {data?.frontmatter?.skills?.map((val, index) => {
            return <li key={index}>{val}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
