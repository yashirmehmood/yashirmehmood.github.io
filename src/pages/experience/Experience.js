import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import "./Experience.css";
import { experience, experienceLetters } from "../../portfolio.js";
import { Fade } from "react-reveal";
import ExperienceImg from "./ExperienceImg";

class Experience extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-main">
        <Header theme={theme} />
        <div className="basic-experience">
          <Fade bottom duration={2000} distance="40px">
            <div className="experience-heading-div">
              <div className="experience-heading-img-div">
                <ExperienceImg theme={theme} />
              </div>
              <div className="experience-heading-text-div">
                <h1
                  className="experience-heading-text"
                  style={{ color: theme.text }}
                >
                  {experience.title}
                </h1>
                <h3
                  className="experience-heading-sub-text"
                  style={{ color: theme.text }}
                >
                  {experience["subtitle"]}
                </h3>
                <p
                  className="experience-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {experience["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <ExperienceAccordion sections={experience["sections"]} theme={theme} />

        {/* Experience Letters Section */}
        <Fade bottom duration={2000} distance="40px">
          <div className="experience-letters-section">
            <h2 className="experience-letters-title" style={{ color: theme.text }}>
              Experience Letters & References
            </h2>
            <p className="experience-letters-subtitle" style={{ color: theme.secondaryText }}>
              Official reference letters and employment certificates from all positions
            </p>
            <div className="experience-letters-grid">
              {experienceLetters.map((letter, i) => (
                <a
                  key={i}
                  href={letter.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="experience-letter-card"
                  style={{
                    background: theme.highlight,
                    borderColor: theme.imageHighlight,
                    color: theme.text,
                  }}
                >
                  <div className="letter-card-icon" style={{ color: theme.imageHighlight }}>
                    <span role="img" aria-label="document">📄</span>
                  </div>
                  <div className="letter-card-info">
                    <div className="letter-card-company" style={{ color: theme.text }}>
                      {letter.company}
                    </div>
                    <div className="letter-card-role" style={{ color: theme.secondaryText }}>
                      {letter.role}
                    </div>
                    {letter.duration && (
                      <div className="letter-card-duration" style={{ color: theme.secondaryText }}>
                        {letter.duration}
                      </div>
                    )}
                  </div>
                  <div className="letter-card-action" style={{ color: theme.imageHighlight }}>
                    View →
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Fade>

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Experience;
