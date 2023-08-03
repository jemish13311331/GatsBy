import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React, { Fragment } from "react";
import "./intro.css";
import { Avatar, Space } from "antd";

//component to render intro
export const Intro = ({ data }) => {
  if (data) {
    const image = getImage(data?.frontmatter?.img1);

    return (
      <div className="top-intro">
        <div className="profileImage">
          <Avatar
            size={192}
            icon={
              <GatsbyImage
                image={image}
                alt="intro"
                style={{ height: 200, width: 200 }}
                loading="lazy"
              />
            }
          />
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
            <div>({data?.frontmatter?.title})</div>
          </div>
          <div className="description">
            <MDXRenderer>{data?.body}</MDXRenderer>
          </div>
        </div>
      </div>
    );
  } else return <></>;
};
