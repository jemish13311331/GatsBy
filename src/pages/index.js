import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import { Education } from "../Component/Education";
import { Intro } from "../Component/Intro";
import { Projects } from "../Component/Projects";
import { Skills } from "../Component/Skills";
import { WorkExperience } from "../Component/WorkExperience";
import "./index.css";

// markup
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          body
          frontmatter {
            title
            name
            date
            degree
            major
            percentage
            skills
            projects {
              description
              name
              organization
              techstack
            }
            experience {
              title
              name
              organization
              duration
            }
            img1 {
              childImageSharp {
                gatsbyImageData(height: 100, width: 100)
              }
            }
          }
        }
      }
    }
  `);
  return (
    <main>
      <div className="top-box">
        <div className="main-box">
          <div className="box1">
            {" "}
            <div className="simple-box">
              {console.log(data)}
              <Intro
                data={data?.allMdx?.nodes?.find(
                  (val) => val?.frontmatter?.title === "FULLSTACK DEVELOPER"
                )}
              />
            </div>
            <div className="simple-box">
              <Education data={data} />
            </div>
          </div>
          <div>
            <div className="work-skill-box">
              <div className="workexperience">
                <WorkExperience
                  data={data?.allMdx?.nodes?.find(
                    (val) => val?.frontmatter?.experience !== null
                  )}
                />
              </div>
              <div className="skill-box">
                <Skills
                  data={data?.allMdx?.nodes?.find(
                    (val) => val?.frontmatter?.skills !== null
                  )}
                />
              </div>
            </div>

            <div className="projects">
              <Projects
                data={data?.allMdx?.nodes?.find(
                  (val) => val?.frontmatter?.projects !== null
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
