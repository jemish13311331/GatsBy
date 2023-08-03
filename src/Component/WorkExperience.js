import React from "react";
import "./workexperience.css";
import { Timeline } from "antd";

//component to render workexperience
export const WorkExperience = ({ data }) => {
  function GenerationOfTimeLineContent() {
    let array = [];
    data?.frontmatter?.experience?.map((val, index) => {
      array.push({
        color: "purple",
        label: val?.duration,
        children: (
          <div>
            <div>{val.name}</div>

            <div></div>
            <div>{val.organization}</div>
          </div>
        ),
      });
    });
    console.log(array);
    return array.reverse();
  }
  return (
    <div className="wexperience-box">
      <div className="title">
        <div className="line">
          <hr />
        </div>
        <div>Work Experience</div>
        <div className="line">
          <hr />
        </div>
      </div>
      <div className="wbox">
        <Timeline mode="left" items={GenerationOfTimeLineContent()} />
      </div>
    </div>
  );
};
