import React from "react";
import "./workexperience.css";

//component to render workexperience
export const WorkExperience = ({ data }) => {
  return (
    <div className="wexperience-box">
      <div className="title">Experience</div>
      {data?.frontmatter?.experience?.map((val, index) => {
        return (
          <div className="experience-box" key={index}>
            <table className="experience-table">
              <tbody>
                <tr>
                  <td>Organization:</td>
                  <td>{val?.organization}</td>
                </tr>
                <tr>
                  <td>Position:</td>
                  <td>{val?.name}</td>
                </tr>
                <tr>
                  <td>Job Title:</td>
                  <td>{val?.title}</td>
                </tr>
                <tr>
                  <td>Duration: </td>
                  <td>{val?.duration}</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
};
