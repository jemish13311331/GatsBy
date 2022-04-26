import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import * as React from "react";

const BlogPost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.img1);
  return (
    <div pageTitle="Super Cool Blog Posts">
      <b> {data?.mdx?.frontmatter?.title}</b>
      <div>{data?.mdx?.frontmatter?.date}</div>
      <GatsbyImage image={image} alt="img" />
      <div>
        Description:
        <MDXRenderer>{data?.mdx?.body}</MDXRenderer>
      </div>
    </div>
  );
};
export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        date
        img1 {
          childImageSharp {
            gatsbyImageData(
              width: 200
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`;

export default BlogPost;
