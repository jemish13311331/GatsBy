import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import "./education.css";

//component to render educations
export const Education = ({ data }) => {
  return (
    <div className="education">
      <div className="title">
        <div className="line">
          <hr />
        </div>
        <div>Education</div>
        <div className="line">
          <hr />
        </div>
      </div>
      <div>
        {data?.allMdx?.nodes
          ?.filter((val) => val?.frontmatter?.percentage !== null)
          ?.reverse()
          .map((val, index) => {
            return (
              <div className="main-block" key={index}>
                <div className="img1">
                  <GatsbyImage
                    image={getImage(val?.frontmatter?.img1)}
                    alt="Hello Images"
                    style={{
                      width: 70,
                      height: 70,
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <div className="details">
                  <div>
                    <b>{val?.frontmatter?.title}</b>
                  </div>
                  <div>{val?.frontmatter?.name}</div>
                  <div>{val?.frontmatter?.date}</div>
                  <div>
                    {val?.frontmatter?.degree || val?.frontmatter?.major
                      ? "Degree/Major: " +
                        (val?.frontmatter?.degree || val?.frontmatter?.major)
                      : ""}
                  </div>
                  <div>{val?.frontmatter?.percentage}</div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
