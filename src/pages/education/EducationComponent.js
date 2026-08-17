import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import EducationImg from "./EducationImg";
import { competitiveSites, certifications, transcripts } from "../../portfolio";
import "./EducationComponent.css";
import { Fade } from "react-reveal";

class Education extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="education-main">
        <Header theme={this.props.theme} />
        <div className="basic-education">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              <div className="heading-img-div">
                <EducationImg theme={theme} />
              </div>
              <div className="heading-text-div">
                <h1 className="heading-text" style={{ color: theme.text }}>
                  Education
                </h1>
                <h3 className="heading-sub-text" style={{ color: theme.text }}>
                  Basic Qualification and Certifications
                </h3>
                <CompetitiveSites logos={competitiveSites.competitiveSites} />
              </div>
            </div>
          </Fade>
          <Educations theme={this.props.theme} />

          {/* Transcripts Section */}
          <Fade bottom duration={2000} distance="40px">
            <div className="transcripts-section">
              <h2 className="transcripts-title" style={{ color: theme.text }}>
                Academic Transcripts
              </h2>
              <div className="transcripts-grid">
                {transcripts.map((t, i) => (
                  <a
                    key={i}
                    href={t.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transcript-card"
                    style={{
                      background: theme.highlight,
                      borderColor: theme.imageHighlight,
                    }}
                  >
                    <span className="transcript-icon" role="img" aria-label="graduation cap">🎓</span>
                    <div className="transcript-info">
                      <div className="transcript-degree" style={{ color: theme.text }}>
                        {t.title}
                      </div>
                      <div className="transcript-uni" style={{ color: theme.secondaryText }}>
                        {t.university}
                      </div>
                    </div>
                    <span className="transcript-action" style={{ color: theme.imageHighlight }}>
                      View PDF →
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </Fade>

          {certifications.certifications.length > 0 ? (
            <Certifications theme={this.props.theme} />
          ) : null}
        </div>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Education;
