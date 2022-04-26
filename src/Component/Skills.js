import React from "react";
import "./skills.css";

export const Skills = ({ data }) => {
  return (
    <div className="skills">
      <div className="title">Skills</div>
      <div>
        <ul>
          {" "}
          {data?.frontmatter?.skills?.map((val, index) => {
            return <li key={index}>{val}</li>;
          })}
        </ul>
      </div>
      {console.log(data)}
    </div>
  );
};
