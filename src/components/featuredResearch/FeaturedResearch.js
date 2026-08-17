import React from "react";
import "./FeaturedResearch.css";
import { featuredWork } from "../../portfolio";
import { Fade } from "react-reveal";

export default function FeaturedResearch({ theme }) {
  return (
    <div className="featured-research-section">
      <Fade bottom duration={1500} distance="30px">
        <div className="featured-research-header">
          <h2 className="featured-research-title" style={{ color: theme.text }}>
            Featured Research & Industry Work
          </h2>
          <p className="featured-research-sub" style={{ color: theme.secondaryText }}>
            Highlights from my M.Sc. thesis and mandatory internship in the German automotive industry
          </p>
        </div>
      </Fade>
      <div className="featured-research-grid">
        {featuredWork.map((item, i) => (
          <Fade bottom duration={1500} distance="30px" delay={i * 200} key={i}>
            <div
              className="research-card"
              style={{
                background: theme.highlight,
                borderLeft: `4px solid ${item.accentColor}`,
              }}
            >
              <div className="research-card-top">
                <span
                  className="research-type-badge"
                  style={{ color: item.accentColor, background: `${item.accentColor}18` }}
                >
                  {item.type}
                </span>
                <span className="research-period" style={{ color: theme.secondaryText }}>
                  {item.period}
                </span>
              </div>
              <h3 className="research-card-title" style={{ color: theme.text }}>
                {item.title}
              </h3>
              <div className="research-card-company" style={{ color: item.accentColor }}>
                {item.company}
                <span style={{ color: theme.secondaryText }}> · {item.department}</span>
              </div>
              <p className="research-card-desc" style={{ color: theme.secondaryText }}>
                {item.description}
              </p>
              <div className="research-tags">
                {item.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="research-tag"
                    style={{
                      color: theme.text,
                      background: theme.compImgHighlight,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={item.link}
                className="research-card-link"
                style={{ color: item.accentColor }}
              >
                View Full Experience →
              </a>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
}
