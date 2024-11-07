import { MDXRenderer } from "gatsby-plugin-mdx";
import React, { Fragment } from "react";
import "./intro.css";
import profile_img from "../images/profile_img.png";

//component to render intro
export const Intro = ({ data }) => {
  if (data) {
    const image = profile_img;

    return (
      <div className="top-intro">
        <div className="profileImage">
          <img src={profile_img} alt="intro" className="profile-pic" />
        </div>
        <div>
          <div className="titles">
            <div>
              {" "}
              <span className="fname">{data?.frontmatter?.name[0]}</span>
              <span className="name">
                {data?.frontmatter?.name.substring(1)}
              </span>
            </div>
            <div className="title-profession">({data?.frontmatter?.title})</div>
          </div>
          <div className="description">
            <MDXRenderer>{data?.body}</MDXRenderer>
          </div>
        </div>
      </div>
    );
  } else return <></>;
};
