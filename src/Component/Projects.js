import React, { useEffect, useState } from "react";
import "./projects.css";
// import { GatsbyImage } from "gatsby-plugin-image";
import testing from "../images/unit_test.png";
import ecommerce from "../images/ecommerce-is-booming.png";
import hospital_inventories from "../images/hospital_inventories.png";
import { PieChartFilled } from "@ant-design/icons";
//component to render projects
export const Projects = ({ data }) => {
  const img1 = ecommerce;
  const img2 = testing;
  useEffect(() => {}, []);
  return (
    <div className="project-box">
      <div className="title">
        <div className="line">
          <hr />
        </div>
        <div>
          <PieChartFilled />
        </div>
        <div>Projects</div>
        <div className="line">
          <hr />
        </div>
      </div>
      <div>
        {data?.frontmatter?.projects?.map((val, index) => {
          return (
            <div className="project-list" key={index}>
              <div className="project-item">
                <table className="project-table">
                  <tbody>
                    <tr>
                      <td>{val?.name + " (" + val?.organization + ")"}</td>
                    </tr>
                    <tr>
                      <td className="title2">{val?.description}</td>
                    </tr>
                    <tr>
                      <td className="title2">
                        {" "}
                        {"( " + val?.techstack + " )"}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="project-item">
                <img
                  src={
                    index == 0
                      ? ecommerce
                      : index == 1
                        ? testing
                        : hospital_inventories
                  }
                  height={300}
                  width={400}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
