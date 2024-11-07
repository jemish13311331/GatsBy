import { graphql, navigate, useStaticQuery } from "gatsby";
import React, { useEffect, useRef, useState } from "react";
import Helmet from "react-helmet";
import { Education } from "../Component/Education";
import { Intro } from "../Component/Intro";
import { Projects } from "../Component/Projects";
import { Skills } from "../Component/Skills";
import { WorkExperience } from "../Component/WorkExperience";
import "./index.css";
import LinkedinOutlined from "@ant-design/icons/lib/icons/LinkedinOutlined";
import GithubOutlined from "@ant-design/icons/lib/icons/GithubOutlined";
import Typed from "typed.js";
import MailOutlined from "@ant-design/icons/lib/icons/MailOutlined";
import { Menu } from "antd";
import MenuFoldOutlined from "@ant-design/icons/lib/icons/MenuFoldOutlined";
import MenuUnfoldOutlined from "@ant-design/icons/lib/icons/MenuUnfoldOutlined";

//component to render file on "/" route
const IndexPage = () => {
  // const [isExperienceVisible, setIsExperienceVisible] = useState(false);
  // const [isEducationVisible, setIsEducationVisible] = useState(false);
  // const [isSkillVisible, setIsSkillVisible] = useState(false);
  // const [isProjectAvailable, setIsProjectAvailable] = useState(false);
  const [loaderFlag, setLoaderFlag] = useState(true);
  const [displayMenu, setDisplayMenu] = useState(false);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);

  //static query to fetch data from markdown file
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
            percentage
            href
            skills
            projects {
              description
              name
              organization
              techstack
            }
            experience {
              name
              organization
              duration
              href
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
  function sentoMail() {
    window.location = "mailto:italiyajemish99@gmail.com";
  }

  function sendToGitHub() {
    window.open("https://github.com/jemish13311331", "_blank");
  }
  useEffect(() => {
    // image2=getImage(data?.allMdx?.nodes?.find(val=>val?.frontmatter?.title=="skills")?.frontmatter?.img1)
    const typed = new Typed(
      ref5.current,
      {
        strings: ["Welcome to the profile of ", "Jemish Italiya"],
        typeSpeed: 50,
      },
      [],
    );

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  setTimeout(() => {
    setLoaderFlag(false);
  }, 4000);

  function toggleButtonClicked(val) {
    if (val == "skills") {
      ref1.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      if (val == "education") {
        ref2.current?.scrollIntoView({ behavior: "smooth" });
      } else {
        if (val == "project") {
          ref3.current?.scrollIntoView({ behavior: "smooth" });
        } else {
          if (val == "experience") {
            ref4.current?.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    }
  }
  if (loaderFlag == true) {
    return (
      <div className="loader">
        <div ref={ref5}></div>
      </div>
    );
  } else {
    return (
      <main>
        <Helmet>
          {" "}
          skills, project, experience, education
          <meta charSet="utf-8" />
          <title>Jemish's Realm</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>

        <div className="features">
          <div
            className="button"
            onClick={() => toggleButtonClicked("education")}
          >
            Education
          </div>
          <div
            className="button"
            onClick={() => toggleButtonClicked("experience")}
          >
            Experience
          </div>
          <div className="button" onClick={() => toggleButtonClicked("skills")}>
            Skills
          </div>
          <div
            className="button"
            onClick={() => toggleButtonClicked("project")}
          >
            Projects
          </div>
          <div className="button">
            <a
              href={`/static/Resume_Jemish.pdf`}
              target="_blank"
              rel="noreferrer"
              id="email"
            >
              Resume
            </a>
          </div>
        </div>
        <div className="menu">
          {displayMenu ? (
            <MenuUnfoldOutlined
              style={{ fontSize: "32px" }}
              onClick={() => setDisplayMenu(!displayMenu)}
            />
          ) : (
            <MenuFoldOutlined
              style={{ fontSize: "32px" }}
              onClick={() => setDisplayMenu(!displayMenu)}
            />
          )}
          {displayMenu ? (
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
            >
              <Menu.Item>
                <a
                  href={`/static/Resume_Jemish.pdf`}
                  target="_blank"
                  rel="noreferrer"
                  id="email"
                >
                  Resume
                </a>
              </Menu.Item>
              <Menu.Item onClick={() => toggleButtonClicked("education")}>
                Education
              </Menu.Item>
              <Menu.Item onClick={() => toggleButtonClicked("experience")}>
                Experience
              </Menu.Item>
              <Menu.Item onClick={() => toggleButtonClicked("skills")}>
                Skills
              </Menu.Item>
              <Menu.Item onClick={() => toggleButtonClicked("project")}>
                Projects
              </Menu.Item>
            </Menu>
          ) : (
            ""
          )}
        </div>
        <div className="top-box">
          <div className="main-box">
            <div className="box1">
              <div className="simple-box">
                <Intro
                  data={data?.allMdx?.nodes?.find(
                    (val) => val?.frontmatter?.title === "FULLSTACK DEVELOPER",
                  )}
                />
              </div>
            </div>
            <div className="feature-description">
              <div className="parentFeature">
                <div className="skill-box" ref={ref1}>
                  <Skills
                    data={data?.allMdx?.nodes?.find(
                      (val) => val?.frontmatter?.skills !== null,
                    )}
                  />
                </div>
                <div ref={ref4} className="workexperience">
                  <WorkExperience
                    data={data?.allMdx?.nodes?.find(
                      (val) => val?.frontmatter?.experience !== null,
                    )}
                  />
                </div>
                <div ref={ref3} className="projects">
                  <Projects
                    data={data?.allMdx?.nodes?.find(
                      (val) => val?.frontmatter?.projects !== null,
                    )}
                  />
                </div>
                <div ref={ref2} className="ebox">
                  <Education data={data} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="icons">
          <MailOutlined
            onClick={() => sentoMail()}
            style={{ fontSize: "30px" }}
          />
          <LinkedinOutlined
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/jemish-italiya/",
                "_blank",
              )
            }
            style={{ fontSize: "30px" }}
          />
          <GithubOutlined
            onClick={() => sendToGitHub()}
            style={{ fontSize: "30px" }}
          />
        </div>
        <div className="email">
          <div>jitaliya@asu.edu</div>
        </div>
      </main>
    );
  }
};

export default IndexPage;
