import React from "react";
import "./GameProjectCard.css";

const platformColors = {
  "Oculus Quest": "#1C1C1E",
  "HTC Vive": "#00A3E0",
  "Android": "#3DDC84",
  "Android TV": "#00897B",
  "Android (VR Cardboard)": "#FF9800",
  "Pico VR": "#2979FF",
  "iOS": "#888888",
  "PC": "#0078D4",
};

const linkIcons = {
  Website: "🌐",
  "Meta Store": "🥽",
  "Oculus Store": "🥽",
  Steam: "🎮",
  "Google Play": "▶",
  "Pico Store": "🕹",
  SideQuest: "🔗",
  Video: "▶",
  ApkPure: "📦",
  Softonic: "🔗",
  "Android TV": "📺",
  ALTLAB: "🔗",
};

function GameProjectCard({ project, theme }) {
  return (
    <div className="game-project-card" style={{ background: theme.highlight, borderColor: theme.imageHighlight }}>
      <h3 className="game-project-title" style={{ color: theme.text }}>
        {project.title}
      </h3>
      <div className="game-project-platforms">
        {project.platforms.map((platform, i) => (
          <span
            key={i}
            className="platform-badge"
            style={{ background: platformColors[platform] || "#555" }}
          >
            {platform}
          </span>
        ))}
      </div>
      <p className="game-project-description" style={{ color: theme.secondaryText }}>
        {project.description}
      </p>
      <div className="game-project-links">
        {project.links.map((link, i) => (
          <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="game-link-btn"
            style={{ borderColor: theme.imageHighlight, color: theme.imageHighlight }}
          >
            {linkIcons[link.label] || "🔗"} {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default GameProjectCard;
