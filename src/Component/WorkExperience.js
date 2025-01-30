import React from "react";
import "./workexperience.css";
import { Timeline } from "antd";
import company from "../images/simform.webp";
import { RocketFilled } from "@ant-design/icons";
import compnay1 from "../../details/img/arizona-state-sun-devils-round-slimline-lighted-wall-sign-560943.webp";

//component to render workexperience
export const WorkExperience = ({ data }) => {
  function GenerationOfTimeLineContent() {
    let array = [];
    data?.frontmatter?.experience?.map((val, index) => {
      array.push({
        color: "rgb(27, 20, 46)",
        label: val?.duration,
        children: (
          <div className="company-description">
            <div>
              <a href={val?.href} target="blank">
                <img
                  src={
                    val?.organization == "Arizona StateUniversity (EPICs)"
                      ? compnay1
                      : company
                  }
                  className="company-logo"
                />
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
