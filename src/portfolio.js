/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Yashar's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Yashar Mahmood Lashkar Portfolio",
    type: "website",
    url: "http://yasharmahmoodlashkar.com/",
  },
};

//Home Page
const greeting = {
  title: "Yashar Mahmood Lashkar",
  logo_name: "YasharMahmoodLashkar",
  nickname: "yash",
  subTitle:
    "Software Engineer specializing in Android Automotive · VR/AR · Backend Systems. 6+ years shipping production software across Germany and Pakistan.",
  resumeLink: "/docs/Software_Developer_CV.pdf",
  githubProfile: "https://github.com/yashirmehmood",
  roles: [
    "Android Automotive Developer",
    "VR / AR Game Developer",
    "Backend Engineer",
    "M.Sc. @ TU Chemnitz",
  ],
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/yashirmehmood",
  // linkedin: "https://www.linkedin.com/in/yashar-mahmood-911230b1/",
  // gmail: "yashirbajwa1464@gmail.com",
  // facebook: "https://www.facebook.com/yashar.bajwa/",
  // twitter: "https://twitter.com/yashir_bajwa",
  // instagram: "https://www.instagram.com/yasharbajwa/"

  {
    name: "Github",
    link: "https://github.com/yashirmehmood",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/yashar-mahmood-911230b1/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:yashirbajwa1464@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/yashir_bajwa",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/yashar.bajwa/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/yasharbajwa/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Backend & API Engineering",
      fileName: "BackendImg",
      skills: [
        "⚡ Designing scalable backend systems using C#, Python, and Ruby",
        "⚡ Building RESTful APIs and integrating distributed services",
        "⚡ Developing backend pipelines using FastAPI, Flask, and Rails",
      ],
      softwareSkills: [
        {
          skillName: "C#",
          fontAwesomeClassname: "devicon:csharp",
          style: { color: "#68217A" },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos-python",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "Ruby on Rails",
          fontAwesomeClassname: "logos:rails",
          style: { backgroundColor: "white", color: "#CC0000" },
        },
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: { color: "#009688" },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: { backgroundColor: "white", color: "#000000" },
        },
        {
          skillName: "REST APIs",
          fontAwesomeClassname: "mdi:api",
          style: { color: "#4CAF50" },
        },
        {
          skillName: "gRPC",
          fontAwesomeClassname: "simple-icons:google",
          style: { color: "#4285F4" },
        },
      ],
    },

    {
      title: "Android & Embedded Systems",
      fileName: "AndroidImg",
      skills: [
        "⚡ Developing Android Automotive applications using Kotlin & Java",
        "⚡ Integrating real-time vehicle data (CAN bus) and backend APIs",
        "⚡ Designing modular architectures using MVVM, Clean Architecture & Dagger-2",
        "⚡ Implementing inter-process communication using AIDL and Intents",
        "⚡ Building real-time features like wake-word detection, noise cancellation, and speech-to-text",
        "⚡ Using WorkManager, producer-consumer patterns, and async processing for background tasks",
        "⚡ Handling REST APIs, Protobuf (gRPC), and Ktor-based networking layers",
      ],
      softwareSkills: [
        {
          skillName: "Kotlin",
          fontAwesomeClassname: "logos:kotlin",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "Android",
          fontAwesomeClassname: "logos:android-icon",
          style: { color: "#3DDC84" },
        },
        {
          skillName: "Dagger 2",
          fontAwesomeClassname: "mdi:dependency",
          style: { color: "#F57C00" },
        },
        {
          skillName: "AIDL",
          fontAwesomeClassname: "mdi:connection",
          style: { color: "#607D8B" },
        },
        {
          skillName: "Ktor",
          fontAwesomeClassname: "simple-icons:ktor",
          style: { color: "#0095D5" },
        },
        {
          skillName: "Protobuf",
          fontAwesomeClassname: "simple-icons:protocolsdotio",
          style: { color: "#3367D6" },
        },
        {
          skillName: "MVVM",
          fontAwesomeClassname: "mdi:layers",
          style: { color: "#FF9800" },
        },
      ],
    },

    {
      title: "Real-Time Systems & Simulation",
      fileName: "UnityImg",
      skills: [
        "⚡ Developed VR, AR, XR, 3D and 2D applications across Oculus, HTC Vive, Android, iOS, Windows",
        "⚡ Built immersive environments with terrain systems, lighting, shaders, and optimized rendering pipelines",
        "⚡ Engineered multiplayer systems using UNET and custom TCP/UDP networking with low-latency sync",
        "⚡ Designed gameplay systems, physics interactions, and real-time simulation logic",
        "⚡ Diagnosed ANR/crash issues and improved performance using profiling and optimization techniques",
        "⚡ Integrated SDKs for analytics, monetization (ads, IAP), and third-party services",
        "⚡ Collaborated with 3D artists to integrate assets, animations, and shaders into real-time systems",
        "⚡ Managed cross-platform builds and deployment across mobile, PC, and standalone VR devices",
      ],
      softwareSkills: [
        {
          skillName: "Unity3D",
          fontAwesomeClassname: "logos:unity",
          style: { backgroundColor: "white", color: "#000000" },
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "devicon:csharp",
          style: { color: "#68217A" },
        },
        {
          skillName: "VR/AR/XR",
          fontAwesomeClassname: "mdi:virtual-reality",
          style: { color: "#9C27B0" },
        },
        {
          skillName: "Multiplayer",
          fontAwesomeClassname: "mdi:lan-connect",
          style: { color: "#2196F3" },
        },
        {
          skillName: "Networking (TCP/UDP)",
          fontAwesomeClassname: "mdi:lan",
          style: { color: "#4CAF50" },
        },
        {
          skillName: "Performance Optimization",
          fontAwesomeClassname: "mdi:speedometer",
          style: { color: "#FF5722" },
        },
      ],
    },

    {
      title: "Data & Integration Systems",
      fileName: "DataImg",
      skills: [
        "⚡ Building data pipelines, ETL processes, and backend processing systems",
        "⚡ Working with structured data, SQL databases, and API integrations",
        "⚡ Applying machine learning models and data analysis techniques",
      ],
      softwareSkills: [
        {
          skillName: "SQL",
          fontAwesomeClassname: "carbon:sql",
          style: { color: "#336791" },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "logos:postgresql",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: { color: "#013243" },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: { color: "#150458" },
        },
        {
          skillName: "Scikit-learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: { color: "#F7931E" },
        },
        {
          skillName: "Matplotlib",
          fontAwesomeClassname: "mdi:chart-bar",
          style: { color: "#11557C" },
        },
        {
          skillName: "Seaborn",
          fontAwesomeClassname: "simple-icons:python",
          style: { color: "#F7931E" },
        },
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "logos:tensorflow",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "MuleSoft",
          fontAwesomeClassname: "simple-icons:mulesoft",
          style: { color: "#00A1E0" },
        },
      ],
    },

    {
      title: "Tools & DevOps",
      fileName: "DevOpsImg",
      skills: [
        "⚡ Containerizing applications and managing CI/CD pipelines",
        "⚡ Working with Git workflows in Linux environments",
        "⚡ API testing, debugging, and system monitoring",
      ],
      softwareSkills: [
        {
          skillName: "Docker",
          fontAwesomeClassname: "logos:docker-icon",
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "logos:git-icon",
        },
        {
          skillName: "GitLab",
          fontAwesomeClassname: "simple-icons:gitlab",
          style: { color: "#FC6D26" },
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "simple-icons:jenkins",
          style: { color: "#D24939" },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "logos:linux-tux",
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: { color: "#FF6C37" },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/yashirmehmood/",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/yashirbajwa",
    },
    {
      siteName: "Tableau",
      iconifyClassname: "simple-icons:tableau",
      style: {
        color: "#E97627",
      },
      profileLink: "https://public.tableau.com/app/profile/yashar.mahmood/",
    },
    {
      siteName: "Salesforce Trailblazer",
      iconifyClassname: "simple-icons:salesforce",
      style: {
        color: "#00A1E0",
      },
      profileLink: "https://www.salesforce.com/trailblazer/yashirbajwa",
    },
    {
      siteName: "DataCamp",
      iconifyClassname: "simple-icons:datacamp",
      style: {
        color: "#03EF62",
      },
      profileLink: "https://www.datacamp.com/portfolio/YasharMahmoodLashkar",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Technische Universität Chemnitz",
      subtitle: "M.Sc. Automotive Software Engineering",
      logo_path: "tu_chemnitz_logo.png",
      alt_name: "TU Chemnitz",
      duration: "2022 - 2026",
      Grade: "2.3",
      descriptions: [
        "⚡ Specialized in automotive software systems, real-time applications, and embedded system architectures",
        "⚡ Focus on backend integration, distributed systems, and data-driven automotive applications",
        "⚡ Master thesis in collaboration with Mercedes-Benz AG on Android Automotive and real-time vehicle data systems",
      ],
      website_link: "https://www.tu-chemnitz.de/",
    },
    {
      title: "International Islamic University Islamabad",
      subtitle: "B.Sc. Software Engineering",
      logo_path: "iiui_logo.png",
      alt_name: "IIUI Islamabad",
      duration: "2011 - 2015",
      Grade: "1.7",
      descriptions: [
        "⚡ Built strong foundations in software engineering, object-oriented programming, and system design",
        "⚡ Developed desktop-based fingerprint and signature verification system using C# and image processing",
        "⚡ Gained early experience in application development, algorithms, and database systems",
      ],
      website_link: "https://www.iiu.edu.pk/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Transatlantic AI Hackathon",
      subtitle: "- GABA Southern California",
      logo_path: "gaba_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/112bLgL4CjDuR76fTXAq9D8DGELRwmaaj/view?usp=sharing",
      alt_name: "GABA",
      color_code: "#0A66C2",
    },
    {
      title: "WorldInnovationDay Hack 2022",
      subtitle: "- Hackmakers (Badgr)",
      logo_path: "hackmakers_logo.jpg",
      certificate_link:
        "https://api.au.badgr.io/public/assertions/I2Tl0HS7S_eLxNvlFaT8rA",
      alt_name: "Hackmakers",
      color_code: "#FF6F00",
    },
    {
      title: "Data Visualization with Power BI",
      subtitle: "- DataCamp",
      logo_path: "datacamp_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1m4NtUkWtqGjWHYwFrkDjnzltdCEXFKdY/view?usp=sharing",
      alt_name: "DataCamp",
      color_code: "#03EF62",
    },
    {
      title: "Introduction to DAX in Power BI",
      subtitle: "- DataCamp",
      logo_path: "datacamp_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1OsfMdEz1t5o6b4a8K5g61sEK3gcmnSC4/view?usp=sharing",
      alt_name: "DataCamp",
      color_code: "#03EF62",
    },
    {
      title: "Introduction to Power BI",
      subtitle: "- DataCamp",
      logo_path: "datacamp_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1OsfMdEz1t5o6b4a8K5g61sEK3gcmnSC4/view?usp=sharing",
      alt_name: "DataCamp",
      color_code: "#03EF62",
    },
    {
      title: "Reshaping Data with Pandas",
      subtitle: "- DataCamp",
      logo_path: "datacamp_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/16LI9ifIPcJrP4KK7YVWlZj5jdadHZAum/view?usp=sharing",
      alt_name: "DataCamp",
      color_code: "#03EF62",
    },
    {
      title: "Cleaning Data in Python",
      subtitle: "- DataCamp",
      logo_path: "datacamp_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/166THs66CnDcYI0ExlqV2YmJKaaQJ__fn/view?usp=sharing",
      alt_name: "DataCamp",
      color_code: "#03EF62",
    },
    {
      title: "Introduction to Data Visualization with Matplotlib",
      subtitle: "- DataCamp",
      logo_path: "datacamp_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1vxB_HRWXLkHV1Ql1CW4e1QNfuQGtk6Y6/view?usp=sharing",
      alt_name: "DataCamp",
      color_code: "#03EF62",
    },
    {
      title: "Intermediate Importing Data in Python",
      subtitle: "- DataCamp",
      logo_path: "datacamp_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1BeKqwUbDS6OuJugV54K_WXrGVPoty20u/view?usp=sharing",
      alt_name: "DataCamp",
      color_code: "#03EF62",
    },
    {
      title: "Introduction to Importing Data in Python",
      subtitle: "- DataCamp",
      logo_path: "datacamp_logo.png",
      certificate_link:
        "https://www.datacamp.com/statement-of-accomplishment/course/b7e52f3ffa5af623625444a42fbd36b5f4019634",
      alt_name: "DataCamp",
      color_code: "#03EF62",
    },
    {
      title: "Programming Essentials in Python",
      subtitle: "- Cisco Networking Academy",
      logo_path: "cisco_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1lkPbgm6WXusSCAdLXs18CMYGZsHoozn0/view?usp=sharing",
      alt_name: "Cisco",
      color_code: "#1BA0D7",
    },
    {
      title: "Sustainable Supply Chain Deephack",
      subtitle: "- Ultrahack",
      logo_path: "ultrahack_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/17hPYOqr8I8LKMcYOCPLhlURLDWiZRoJB/view?usp=sharing",
      alt_name: "Ultrahack",
      color_code: "#6A1B9A",
    },
    {
      title: "FormulaAI Hack 2022",
      subtitle: "- Hackmakers (Badgr)",
      logo_path: "hackmakers_logo.jpg",
      certificate_link:
        "https://api.au.badgr.io/public/assertions/y4EOOU7qT0yvZwoz45VzpQ",
      alt_name: "Hackmakers",
      color_code: "#FF6F00",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Student Jobs, and Volunteership",
  description:
    "I have worked with leading companies and startups as a developer in Android, ML, VR, and full-stack technologies. I am also passionate about mentoring, contributing to open-source communities, and participating in educational initiatives.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Master Thesis – Android Developer",
          company: "Mercedes-Benz AG",
          company_url: "https://www.mercedes-benz.com/",
          logo_path: "mercedes_logo.png",
          duration: "Mar 2025 – Nov 2025",
          location: "Stuttgart, Germany",
          description:
            "Thesis: \"Design and Implementation of a Visual Overlay System for Mitigating Motion Sickness in Automotive Displays\" (Infotainment & CarIT Security). Developed an Android Automotive application using Kotlin, Coroutines, and Flow with a strong focus on performance, stability, and clean architecture. Implemented real-time data processing pipelines connected to vehicle signals and external data sources via structured APIs. Integrated low-level vehicle and hardware-related data (e.g., CAN bus signals). Collaborated with UX/UI designers to deliver intuitive interfaces for large infotainment displays.",
          color: "#000000",
        },
        {
          title: "Mandatory Internship – Android Automotive Developer",
          company: "AUDI AG",
          company_url: "https://www.audi.com/",
          logo_path: "audi_logo.png",
          duration: "Apr 2024 – Sep 2024",
          location: "Ingolstadt, Germany",
          description:
            "Built Android applications using Java and Kotlin with a FastAPI (Python) backend on Azure Cloud. Implemented gRPC and REST APIs, integrated wake word detection and speech-to-text translation features, and designed AIDL interfaces for inter-process communication within Android Automotive OS. Ensured reliability through code reviews, unit testing, and CI/CD workflows.",
          color: "#000000",
        },
        {
          title: "Research Assistant - Unity(C#) Developer",
          company: "Technische Universität Chemnitz",
          company_url: "https://www.tu-chemnitz.de/",
          logo_path: "tu_chemnitz_logo.png",
          duration: "Oct 2023 – Feb 2026",
          location: "Chemnitz, Germany",
          description:
            "Developed data-driven applications combining Python and Unity3D for real-time data analysis and visualization. Designed and implemented data pipelines using FastAPI and Python. Built and evaluated ML models for predictive analysis and data insights. Developed REST APIs to enable integration between data systems and applications.",
          color: "#000000",
        },
        {
          title: "Student Assistant – Ruby on Rails Developer",
          company: "Fraunhofer IMW",
          company_url: "https://www.imw.fraunhofer.de/",
          logo_path: "fraunhofer-logo.png",
          duration: "Mar 2023 – Mar 2024",
          location: "Leipzig, Germany",
          description:
            "Developed backend services and automation scripts using Ruby on Rails. Built and maintained RESTful APIs, refactored backend logic, optimized SQL queries, and supported testing, deployment, and monitoring via GitLab CI/CD in Linux environments.",
          color: "#000000",
        },
        {
          title: "Student Assistant – Full Stack Developer (Backend Focus)",
          company: "Fraunhofer IVV",
          company_url: "https://www.ivv.fraunhofer.de/",
          logo_path: "fraunhofer-logo.png",
          duration: "Jun 2022 – Jan 2023",
          location: "Dresden, Germany",
          description:
            "Developed backend services using Python and Flask for internal research platforms. Implemented RESTful APIs, integrated them with frontend interfaces, improved backend performance, and used Docker, Jenkins, and GitHub CI/CD pipelines for automated testing and deployment.",
          color: "#000000",
        },
        {
          title: "Senior 3D & VR Game Developer - Unity Developer",
          company: "Abstron Pvt. Ltd",
          company_url: "https://abstron.com/",
          logo_path: "abstron-logo.png",
          duration: "Aug 2017 – Mar 2022",
          location: "Lahore, Pakistan",
          description:
            "Developed Mixed Reality and VR experiences for Meta Quest devices with spatial interactions and real-time object spawning. Optimized performance for standalone and mobile VR devices. Built multiplayer environments, implemented interaction systems, physics-based mechanics, and collaborated with designers and clients for gameplay refinement.",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Data Analyst | Machine Learning Learner",
          company: "ICodeGuru, USA",
          company_url: "https://icode.guru/",
          logo_path: "icodeguru_logo.png",
          duration: "Aug 2020 – Mar 2022",
          location: "Remote",
          description:
            "Worked on data analysis and machine learning projects under mentorship from Silicon Valley experts. Built and evaluated ML models using scikit-learn, PyTorch, Keras, TensorFlow, and OpenCV. Participated in international coding hackathons. Performed data transformation from local databases to Salesforce and AWS via Mulesoft and delivered presentations on authentication, authorization, and dashboards.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Games Portfolio
const gameProjects = {
  title: "Games Portfolio",
  subtitle: "18+ Shipped Titles · Oculus / HTC Vive / Pico / Android / iOS / PC",
  description:
    "Senior Unity Developer with 5+ years shipping commercial VR, AR, and 3D games across Meta Quest, HTC Vive, Pico, Android, iOS, and PC platforms.",
  pdfLink: "/docs/GamesPortfolio_Yashar.pdf",
  sections: [
    {
      title: "VR / AR / XR Games",
      projects: [
        {
          title: "CricVRX — VR Cricket",
          platforms: ["Oculus Quest", "HTC Vive", "Android"],
          description:
            "A full-featured VR cricket game with realistic batting mechanics, immersive stadium environments, and global leaderboards. Published on the Oculus Store, Steam, and Google Play.",
          links: [
            { label: "Website", url: "https://www.cricvrx.com/" },
            { label: "Oculus Store", url: "https://www.oculus.com/experiences/quest/6015235845168476/" },
            { label: "Steam", url: "https://store.steampowered.com/app/1109550/CricVRX__VR_Cricket/" },
            { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.skippy.cricket.cricvrx.tv&hl=en-US" },
            { label: "Video", url: "https://www.youtube.com/watch?v=9TIfksibM4E&t=3s" },
          ],
        },
        {
          title: "TeamVRX Multiplayer — Pack of 4 Games",
          platforms: ["Oculus Quest"],
          description:
            "Real-time online multiplayer VR pack featuring four distinct games: Shooting, Boxing, Gladiator Sword Fighting, and Sky Walk, each with custom physics and network synchronization.",
          links: [
            { label: "Video", url: "https://m.facebook.com/watch/?v=273356017720928" },
          ],
        },
        {
          title: "MotoVRX — VR Motorcycle Racing",
          platforms: ["Oculus Quest", "HTC Vive", "Android TV", "Android"],
          description:
            "High-speed VR motorcycle racing with realistic physics, multiple track environments, and an Android TV version for big-screen play. Available on Google Play and Android TV store.",
          links: [
            { label: "Website", url: "http://www.motovrx.com/motovrx-tv.html" },
            { label: "Video", url: "https://www.youtube.com/watch?v=93LOB3ZvDgE" },
            { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.motovrx.bike.racing" },
          ],
        },
        {
          title: "The Last Day on Tower — Multiplayer",
          platforms: ["Oculus Quest", "HTC Vive"],
          description:
            "Multiplayer VR tower defence game with two distinct game versions. Features real-time co-op gameplay, enemy wave mechanics, and immersive environmental storytelling.",
          links: [
            { label: "Video", url: "https://www.facebook.com/watch/?v=1478815432241978" },
            { label: "Meta Store", url: "https://www.meta.com/de-de/experiences/last-day-on-tower-fps-shooting/5028142377270647/" },
            { label: "ALTLAB", url: "https://www.altlabvr.com/last-day-on-tower-action-shooting-game" },
          ],
        },
        {
          title: "Thunder Gladiator — Sword Fighting Game",
          platforms: ["Oculus Quest", "Pico VR"],
          description:
            "Train with bows, spears, swords, and shields before facing gladiators in intense arena battles. Fight through waves of enemies and rescue the king in an action-packed story mode.",
          links: [
            { label: "Video", url: "https://www.youtube.com/watch?v=5neQb8YVfOk&t=2s" },
            { label: "Pico Store", url: "https://store-global.picoxr.com/global/detail/1/7363969157290819590" },
            { label: "Meta Store", url: "https://www.meta.com/de-de/experiences/thunder-gladiator-sword-fightinggame/7734850893256565/" },
            { label: "ALTLAB", url: "https://www.altlabvr.com/thunder-gladiator-fighting-game" },
          ],
        },
        {
          title: "PunchVRX — Boxing Game",
          platforms: ["Oculus Quest", "Pico VR"],
          description:
            "Fight your way to boxing glory with immersive gameplay, strategic attacks, and powerful defenses. Train, compete with friends, and master the ring in this evolving boxing experience.",
          links: [
            { label: "Video", url: "https://www.youtube.com/watch?v=GRrzS8OOj4U" },
            { label: "Pico Store", url: "https://store-global.picoxr.com/global/detail/1/7363218063971434501" },
            { label: "Meta Store", url: "https://www.meta.com/de-de/experiences/punchvrx-boxing/5569437649741106/" },
            { label: "SideQuest", url: "https://sidequestvr.com/app/10408/punchvrx-boxing" },
          ],
        },
        {
          title: "Real Dinosaur Roller Coaster VR",
          platforms: ["Android (VR Cardboard)"],
          description:
            "Immersive VR roller coaster experience set in a prehistoric dinosaur environment, optimized for Google Cardboard and mobile VR headsets.",
          links: [
            { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.at.real.rollercoaster" },
          ],
        },
        {
          title: "VR Games Store — Games & Demos",
          platforms: ["Android (VR Cardboard)"],
          description:
            "An all-in-one VR Games Store app where users can browse, choose, and install a variety of VR games and demo experiences across multiple genres.",
          links: [
            { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.at.vr.appstore&hl=en-US" },
          ],
        },
        {
          title: "Death Sky Walk — VR Box",
          platforms: ["Android (VR Cardboard)"],
          description:
            "Vertigo-inducing VR experience simulating a high-rise rope walk across city skyscrapers. Built for maximum immersion with spatial audio and head-tracking.",
          links: [
            { label: "ApkPure", url: "https://apkpure.com/death-sky-walk-vr-box-app/com.rope.crossing.adventures.city.vr/download" },
          ],
        },
        {
          title: "Remote VRX",
          platforms: ["Android TV"],
          description:
            "VR controller and remote companion app enabling users to navigate VR content and TV interfaces through an intuitive mobile control surface.",
          links: [
            { label: "ApkPure", url: "https://apkpure.com/remote-vrx-tv-remote-app/com.remote.vrx.tv.vr.controller" },
          ],
        },
      ],
    },
    {
      title: "Android Games",
      projects: [
        {
          title: "Hungary Crocodile Attack 3D",
          platforms: ["Android"],
          description:
            "Action simulation game featuring realistic crocodile attack mechanics and open-world river environments.",
          links: [
            { label: "ApkPure", url: "https://apkpure.com/hungry-crocodile-attack-3d-cr/com.lf.crocodile.attack.free.apps" },
          ],
        },
        {
          title: "Real Jungle Animal Hunting",
          platforms: ["Android"],
          description:
            "First-person hunting simulation set in dense jungle environments with diverse wildlife AI and realistic ballistics. 10M+ downloads.",
          links: [
            { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.amech.hunting.jungle.animals" },
            { label: "ApkPure", url: "https://apkpure.com/real-jungle-animals-hunting/com.amech.hunting.jungle.animals" },
          ],
        },
        {
          title: "Jet Air Strike: Action Game 3D",
          platforms: ["Android"],
          description:
            "Fast-paced aerial combat game with multiple jet aircraft, mission-based gameplay, and explosive 3D environments. 5M+ downloads.",
          links: [
            { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.skippy.jet.air.strike.mission.tv" },
          ],
        },
        {
          title: "Mountain Sniper Shooting FPS",
          platforms: ["Android"],
          description:
            "Long-range FPS sniper game set in mountainous terrain with wind physics, realistic scopes, and challenging target scenarios. 10M+ downloads.",
          links: [
            { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.skippy.mountain.sniper.shooting" },
          ],
        },
        {
          title: "Rural Farming Tractor Game",
          platforms: ["Android"],
          description:
            "Open-world farming simulation with realistic tractor controls, crop mechanics, and rural countryside environments. 10M+ downloads.",
          links: [
            { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.absm.rural.farming.tractor.sim" },
          ],
        },
        {
          title: "Golf Legends — Professional Play",
          platforms: ["Android"],
          description:
            "Precision golf simulation featuring multiple championship courses, realistic swing physics, and career mode progression.",
          links: [
            { label: "ApkPure", url: "https://apkpure.com/golf-legends/com.generagames.golf.legends" },
          ],
        },
        {
          title: "Tourist Adventure Bus",
          platforms: ["Android"],
          description:
            "Bus driving simulation through scenic mountain and snow routes with realistic driving mechanics and passenger management. 5M+ downloads.",
          links: [
            { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.vg.offroadtouristbusdriver&hl=en" },
          ],
        },
        {
          title: "Bumper Cars Demolition 2018",
          platforms: ["Android"],
          description:
            "Superhero-themed bumper car demolition derby with physics-based collision mechanics and multiple arena environments.",
          links: [
            { label: "ApkPure", url: "https://apkpure.com/bumper-cars-demolition-2018-superhero-driving3d/com.superheroz.bumpercars.crash.race.superhero.dodgingcars.driving.fun" },
          ],
        },
      ],
    },
  ],
};

// Experience Letters
const experienceLetters = [
  {
    company: "Mercedes-Benz AG",
    role: "Master Thesis – Android Developer",
    duration: "Mar 2025 – Nov 2025",
    logo_path: "mercedes_logo.png",
    file: "/docs/experience-letters/Mercedes_Benz_Experience_Letter.pdf",
  },
  {
    company: "AUDI AG",
    role: "Mandatory Internship – Android Developer",
    duration: "Apr 2024 – Sep 2024",
    logo_path: "audi_logo.png",
    file: "/docs/experience-letters/Audi_Experience_Letter.pdf",
  },
  {
    company: "Fraunhofer IMW",
    role: "Student Assistant – Ruby on Rails Developer",
    duration: "Mar 2023 – Mar 2024",
    logo_path: "fraunhofer-logo.png",
    file: "/docs/experience-letters/Fraunhofer_IMW_Experience_Letter.pdf",
  },
  {
    company: "Fraunhofer IVV",
    role: "Student Assistant – Full Stack Developer",
    duration: "Jun 2022 – Jan 2023",
    logo_path: "fraunhofer-logo.png",
    file: "/docs/experience-letters/Fraunhofer_IVV_Experience_Letter.pdf",
  },
  {
    company: "TU Chemnitz",
    role: "Research Assistant – Unity Developer",
    duration: "Oct 2023 – Mar 2026",
    logo_path: "tu_chemnitz_logo.png",
    file: "/docs/experience-letters/TU_Chemnitz_Reference_Letter.pdf",
  },
  {
    company: "Absologix",
    role: "Software Developer",
    duration: "",
    logo_path: null,
    file: "/docs/experience-letters/Absologix_Experience_Letter.pdf",
  },
  {
    company: "Abstron Pvt. Ltd",
    role: "Senior Unity Developer",
    duration: "Aug 2017 – Mar 2022",
    logo_path: "abstron-logo.png",
    file: "/docs/experience-letters/Abstron_Experience_Letter.pdf",
  },
];

// Academic Transcripts
const transcripts = [
  {
    title: "M.Sc. Automotive Software Engineering",
    university: "Technische Universität Chemnitz",
    file: "/docs/transcripts/Transcript_Masters.pdf",
  },
  {
    title: "B.Sc. Software Engineering",
    university: "International Islamic University Islamabad",
    file: "/docs/transcripts/Transcript_Bachelors.pdf",
  },
];

// Featured Research (home page highlight cards)
const featuredWork = [
  {
    type: "Master Thesis",
    badge: "Research · 2025",
    title: "Visual Overlay System for Motion Sickness Mitigation",
    company: "Mercedes-Benz AG",
    department: "Infotainment & CarIT Security",
    location: "Stuttgart, Germany",
    period: "Mar 2025 – Nov 2025",
    description:
      "Designed and developed an Android Automotive application that uses adaptive visual overlays to reduce motion sickness in rear-seat passengers. The system processes real-time vehicle data signals and dynamically adjusts display parameters, combining low-level platform integration with research-driven UX.",
    tags: ["Android Automotive OS", "Kotlin", "Coroutines & Flow", "Real-time Vehicle Data", "MVVM / Clean Arch", "UX Research"],
    link: "/experience",
    accentColor: "#38BDF8",
  },
  {
    type: "Mandatory Internship",
    badge: "Industry · 2024",
    title: "Android Automotive Developer",
    company: "AUDI AG",
    department: "Digital Solutions & Connected Services",
    location: "Ingolstadt, Germany",
    period: "Apr 2024 – Sep 2024",
    description:
      "Built production-grade Android Automotive applications integrating voice-interaction features including wake-word detection and speech-to-text translation. Designed inter-process communication interfaces within Android Automotive OS and connected them to cloud backend services on Azure.",
    tags: ["Android Automotive OS", "Kotlin / Java", "gRPC", "AIDL", "FastAPI", "Azure Cloud", "CI/CD"],
    link: "/experience",
    accentColor: "#F59E0B",
  },
];

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I build projects spanning Android Automotive applications, VR/3D experiences, full-stack web platforms, and data-driven machine learning solutions. My work combines real-time systems, cloud integration, and AI models to deliver practical and interactive applications.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "yashar_picture.png",
    description:
      "I’m open to collaboration and mentoring on Android Automotive, Unity/VR, Full-Stack Development, Machine Learning, AI, Cloud, and Open-Source projects. Reach out via social media or email, I typically respond within 24 hours.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Pfaffenwaldring 48F, Stuttgart",
    locality: "Stuttgart",
    country: "Germany",
    region: "Baden Württemberg",
    postalCode: "70569",
    streetAddress: "Pfaffenhof",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://share.google/PJtN5rh4O0x2pi38B",
  },
  phoneSection: {
    title: "Mobile",
    subtitle: "+4915906847990",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  featuredWork,
  projectsHeader,
  gameProjects,
  experienceLetters,
  transcripts,
  contactPageData,
};
