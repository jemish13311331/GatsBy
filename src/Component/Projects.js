import React from "react";
import "./projects.css";

export const Projects = ({ data }) => {
  return (
    <div className="project-box">
      <div className="title">Projects</div>
      <div>
        {data?.frontmatter?.projects?.map((val, index) => {
          return (
            <div key={index}>
              <table className="project-table">
                <tbody>
                  <tr>
                    <td>Project-Name:</td>
                    <td>{val?.name + " (" + val?.organization + ")"}</td>
                  </tr>
                  <tr>
                    <td>Description:</td>
                    <td>{val?.description}</td>
                  </tr>
                  <tr>
                    <td>Tech stack:</td>
                    <td>{val?.techstack}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    </div>
  );
};
