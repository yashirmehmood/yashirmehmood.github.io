# Yashar Mahmood Lashkar — Portfolio Website

Personal portfolio website built with React. Live at **[yashirmehmood.github.io](https://yashirmehmood.github.io)**.

---

## About

Software Engineer with 6+ years of experience in Android Automotive, backend systems, VR/AR game development, and data-driven applications. M.Sc. Automotive Software Engineering at TU Chemnitz (2022–2026). Master thesis at Mercedes-Benz AG.

---

## Tech Stack

- **Framework:** React 16 (Create React App)
- **PDF viewer:** react-pdf
- **Animations:** react-reveal
- **Deployment:** GitHub Pages (`main` branch, root)

---

## Project Structure

```
src/
  portfolio.js          ← All content data (skills, experience, projects, etc.)
  components/
    gameProjectCard/    ← Games portfolio card component
  pages/
    projects/           ← Projects + Games Portfolio section
    experience/         ← Experience + Experience Letters section
    education/          ← Education + Transcripts section
    resume/             ← Resume PDF viewer
public/
  docs/
    experience-letters/ ← Official reference letters (Mercedes-Benz, AUDI, Fraunhofer, etc.)
    certificates/       ← Course & hackathon certificates
    transcripts/        ← Academic transcripts (B.Sc. + M.Sc.)
```

---

## Running Locally

> **Note:** npm run scripts are broken on this machine due to a npm path issue. Use the direct node commands below instead.

```bash
# Install dependencies
npm install

# Start development server
node ./node_modules/react-scripts/bin/react-scripts.js --openssl-legacy-provider start

# Build for production
node ./node_modules/react-scripts/bin/react-scripts.js --openssl-legacy-provider build
```

---

## Deployment

The built files live at the root of `main`. After building, copy build output to root and push:

```bash
robocopy build . /E
git add .
git commit -m "Deploy: update built site"
git push origin master:main
```

GitHub Pages serves `index.html` from the root of `main` at **https://yashirmehmood.github.io**.

---

## Sections

- **Home** — Introduction, skills overview
- **Experience** — Work history + downloadable experience letters
- **Education** — Degrees, academic transcripts, certifications
- **Projects** — Open-source projects + full Games Portfolio (18 shipped titles)
- **Resume** — Inline PDF viewer + download

---

## Contact

- Email: yashirbajwa1464@gmail.com
- LinkedIn: [yashar-mahmood-911230b1](https://www.linkedin.com/in/yashar-mahmood-911230b1/)
- GitHub: [yashirmehmood](https://github.com/yashirmehmood)
