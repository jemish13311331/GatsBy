import React from "react";
import "./projects.css";

//component to render projects
export const Projects = ({ data }) => {
  return (
    <div className="project-box">
      <div className="title">
        <div className="line">
          <hr />
        </div>
        <div>Projects</div>
        <div className="line">
          <hr />
        </div>
      </div>
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
