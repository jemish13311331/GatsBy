import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import "./intro.css";

export const Intro = ({ data }) => {
  if (data) {
    const image = getImage(data?.frontmatter?.img1);
    return (
      <div>
        {console.log(data)}
        <div className="profileImage">
          <GatsbyImage
            style={{ borderRadius: "50%", width: 100 }}
            image={image}
            alt="intro"
          />
        </div>
        <div className="title">
          <div> {data?.frontmatter?.name}</div>
          <div>({data?.frontmatter?.title})</div>
        </div>
        <div className="description">
          <MDXRenderer>{data?.body}</MDXRenderer>
        </div>
      </div>
    );
  } else return <></>;
};
