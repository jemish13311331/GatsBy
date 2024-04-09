import React from "react";
import "./workexperience.css";
import { Timeline } from "antd";
import company from "../images/simform.webp";
import { RocketFilled } from "@ant-design/icons";

//component to render workexperience
export const WorkExperience = ({ data }) => {
  function GenerationOfTimeLineContent() {
    let array = [];
    data?.frontmatter?.experience?.map((val, index) => {
      array.push({
        color: "purple",
        label: val?.duration,
        children: (
          <div className="company-description">
            <div>
              <a href="https://www.simform.com/" target="blank">
                <img src={company} className="company-logo" />
              </a>
            </div>
            <div className="company-details">
              <div>{val.name}</div>

              <div>{val.organization}</div>
            </div>
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
        <div>
          <RocketFilled />
        </div>
        <div> Work Experience</div>
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
