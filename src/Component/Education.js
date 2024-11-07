import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import { BankFilled } from "@ant-design/icons";
import "./education.css";

//component to render educations
export const Education = ({ data }) => {
  return (
    <div className="education">
      <div className="title">
        <div className="line">
          <hr />
        </div>
        <div>
          {" "}
          <BankFilled />
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
                  <a href={val?.frontmatter?.href} target="blank">
                    <GatsbyImage
                      image={getImage(val?.frontmatter?.img1)}
                      alt="Hello Images"
                      style={{
                        width: 70,
                        height: 70,
                        borderRadius: "50%",
                      }}
                    />
                  </a>
                </div>
                <div className="details">
                  <div>
                    <i>{val?.frontmatter?.title}</i>
                  </div>
                  <div>{val?.frontmatter?.name}</div>
                  <div className="title2"> {val?.frontmatter?.date}</div>
                  <div className="title2">
                    {val?.frontmatter?.degree || val?.frontmatter?.major
                      ? "Degree/Major: " +
                        (val?.frontmatter?.degree || val?.frontmatter?.major)
                      : ""}
                  </div>
                  <div className="title2">{val?.frontmatter?.percentage}</div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
