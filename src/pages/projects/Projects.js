import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import GameProjectCard from "../../components/gameProjectCard/GameProjectCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { greeting, projectsHeader, gameProjects } from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="repo-cards-div-main">
          {ProjectsData.data.map((repo) => {
            return <GithubRepoCard repo={repo} theme={theme} key={repo.id} />;
          })}
        </div>
        <Button
          text={"More Projects"}
          className="project-button"
          href={greeting.githubProfile}
          newTab={true}
          theme={theme}
        />

        {/* Games Portfolio Section */}
        <Fade bottom duration={2000} distance="40px">
          <div className="games-portfolio-section">
            <div className="games-portfolio-header">
              <h2 className="games-portfolio-title" style={{ color: theme.text }}>
                {gameProjects.title}
              </h2>
              <p className="games-portfolio-subtitle" style={{ color: theme.imageHighlight }}>
                {gameProjects.subtitle}
              </p>
              <p className="games-portfolio-desc" style={{ color: theme.secondaryText }}>
                {gameProjects.description}
              </p>
              <a
                href={gameProjects.pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                className="games-pdf-btn"
                style={{ borderColor: theme.imageHighlight, color: theme.imageHighlight }}
              >
                <span role="img" aria-label="document">📄</span> Download Full Games Portfolio PDF
              </a>
            </div>

            {gameProjects.sections.map((section, si) => (
              <div key={si} className="games-section">
                <h3 className="games-section-title" style={{ color: theme.text }}>
                  {section.title}
                </h3>
                <div className="games-cards-grid">
                  {section.projects.map((project, pi) => (
                    <GameProjectCard
                      key={pi}
                      project={project}
                      theme={theme}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Fade>

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
