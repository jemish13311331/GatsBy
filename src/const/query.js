import { graphql } from "gatsby";

export const siteMetadata = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
