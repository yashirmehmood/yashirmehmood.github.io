import React, { useState, useEffect } from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";

export default function Greeting(props) {
  const theme = props.theme;
  const roles = greeting.roles || [];
  const [roleIndex, setRoleIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (roles.length === 0) return;
    const cycle = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setVisible(true);
      }, 400);
    }, 2800);
    return () => clearInterval(cycle);
  }, [roles.length]);

  return (
    <Fade bottom duration={1500} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <p className="greeting-badge" style={{ color: theme.imageHighlight }}>
                <span className="badge-dot" style={{ background: theme.imageHighlight }} />
                Available for opportunities
              </p>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              {roles.length > 0 && (
                <div className="role-cycle-wrapper">
                  <span
                    className={`role-cycle-text ${visible ? "role-visible" : "role-hidden"}`}
                    style={{ color: theme.imageHighlight }}
                  >
                    {roles[roleIndex]}
                  </span>
                </div>
              )}
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <SocialMedia theme={theme} />
              <div className="greeting-btn-row">
                <a
                  className="greeting-btn greeting-btn-primary"
                  href={greeting.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: theme.imageHighlight,
                    color: theme.dark,
                    border: `2px solid ${theme.imageHighlight}`,
                  }}
                >
                  Download CV
                </a>
                <a
                  className="greeting-btn greeting-btn-outline"
                  href="/contact"
                  style={{
                    color: theme.imageHighlight,
                    border: `2px solid ${theme.imageHighlight}`,
                  }}
                >
                  Contact Me
                </a>
                <a
                  className="greeting-btn greeting-btn-ghost"
                  href={greeting.githubProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: theme.secondaryText,
                    border: `2px solid ${theme.compImgHighlight}`,
                  }}
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
