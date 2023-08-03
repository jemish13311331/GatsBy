import { graphql, navigate, useStaticQuery } from "gatsby";
import React, { useEffect, useRef, useState } from "react";
import Helmet from "react-helmet";
import { Education } from "../Component/Education";
import { Intro } from "../Component/Intro";
import { Projects } from "../Component/Projects";
import { Skills } from "../Component/Skills";
import { WorkExperience } from "../Component/WorkExperience";
import "./index.css";
import InstagramOutlined from "@ant-design/icons/lib/icons/InstagramOutlined";
import LinkedinOutlined from "@ant-design/icons/lib/icons/LinkedinOutlined";
import GithubOutlined from "@ant-design/icons/lib/icons/GithubOutlined";
import Typed from "typed.js";
import MailOutlined from "@ant-design/icons/lib/icons/MailOutlined";
import Icon from "@ant-design/icons/lib/components/Icon";
import MenuOutlined from "@ant-design/icons/lib/icons/MenuOutlined";
import { Menu } from "antd";

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
  function sentoMail() {
    window.location = "mailto:italiyajemish99@gmail.com";
  }

  function sendToGitHub() {
    navigate("https://github.com/jemish-i-simformsolutions?tab=repositories");
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
        </div>
        <div className="menu">
          <MenuOutlined onClick={() => setDisplayMenu(!displayMenu)} />
          {displayMenu ? (
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
            >
              <Menu.Item onClick={() => toggleButtonClicked("education")}>
                Education
              </Menu.Item>
              <Menu.Item onClick={() => toggleButtonClicked("experience")}>
                Experience
              </Menu.Item>
              <Menu.Item onClick={() => toggleButtonClicked("skills")}>
                skills
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
            style={{ fontSize: "30px", color: "purple" }}
          />
          <LinkedinOutlined
            onClick={() =>
              navigate("https://www.linkedin.com/in/jemish-italiya-2644591b5/")
            }
            style={{ fontSize: "30px", color: "purple" }}
          />
          <GithubOutlined
            onClick={() => sendToGitHub()}
            style={{ fontSize: "30px", color: "purple" }}
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
