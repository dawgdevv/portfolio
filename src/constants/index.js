import DTIX from "../assets/DTIX.png";
import ReditAnalysis from "../assets/reddit.png";
import BACIP from "../assets/bacip.png";
import PROBE from "../assets/probe.png";
import Fourows from "../assets/4rows.png";


export const EXPERIENCES = [
  {
    "year": "Feb 2026 - Present",
    "role": "Full Stack Engineer - (Internship)",
    "company": "Figmenta",
    "location": "Milan, Italy (Remote)",
    "description": "Designed and implemented a secure Role-Based Access Control (RBAC) system and Admin Workspace to manage moderation, signals, and analytics workflows across a fashion intelligence platform covering 200+ brands. Built scalable REST APIs, database schemas, and end-to-end features enabling brand analytics, cross-brand comparison, and fashion trend signaling for a production platform.",
    "technologies": [
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Express.js",
      "React.js",
      "PostgreSQL",
      "REST APIs",
      "Supabase"
    ]
  },
  {
    year: "July 2025 - Present",
    role: "Full Stack Developer - (Internship)",
    company: "Bitwrap Technologies",
    location: "Ambala Haryana, India",
    description: `Developing and integrating end-to-end features for business use cases, driving both frontend and backend development and Ensuring system performance and security through adherence to best practices and robust architectural design.`,
    technologies: [
      "JavaScript",
      "Node.js",
      "Express.js",
      "React.js",
      "MongoDB",
      "tailwind CSS",
      "PostgreSQL",
    ],
  },
  {
    year: "March 2025 - May 2025",
    role: "Full Stack Developer - (Intership)",
    company: "Frantiger Business Consulting",
    location: "Bangalore, Karnataka, India",
    description: `I worked in team of three on revamping a core website for them using the MERN stack. My responsibilities included developing a user-friendly interface, implementing secure authentication, and ensuring seamless data flow between the front-end and back-end. I also integrated third-party APIs for enhanced functionality and optimized the application for performance and scalability.`,
    technologies: [
      "JavaScript",
      "Node.js",
      "Express.js",
      "React.js",
      "MongoDB",
      "tailwind CSS",
      "PostgreSQL",
    ],
  },
];

export const PROJECTS = [
  {
    name: "Probe - (Open Source API Testing Tool)",
    description:
      "A fast, lightweight API test runner for the command line and web, allowing users to define tests in YAML and track results over time.",
    longDescription:
      "Probe is a comprehensive tool for API testing that bridges the gap between CLI automation and visual management. It features a high-performance Go-based runner that executes declarative YAML test suites, coupled with an embedded React 19 web dashboard for organizing projects, viewing run history, and analyzing detailed assertion results. It ships as a single binary with zero external dependencies.",
    technologies: [
      "Go (Golang)",
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS 4",
      "SQLite",
      "Cobra",
      "Gin",
      "TanStack Query",
    ],
    features: [
      "Dual interface: CLI for CI/CD & Web Dashboard for analysis",
      "Declarative YAML test syntax with environment substitution",
      "Advanced JSON path assertions & validation",
      "Embedded single-binary architecture (Client + Server)",
      "Persistent run history and project organization",
    ],
    liveLink: "", // Run locally via `probe serve`
    githubLink: "https://github.com/dawgdevv/probe",
    videoLink: "",
    image: PROBE, // Refers to 'docs/screenshots/dashboard.png' or 'web/public/probe.svg'
  },
  {
    name: "Four-in-a-Row",
    description:
      "A full-stack implementation of the classic Connect Four game featuring a React client with canvas graphics and a Go backend.",
    longDescription:
      "This repository hosts a complete client-server implementation of the Four-in-a-Row game. The client is built with React and Vite, utilizing Konva for high-performance canvas rendering and Framer Motion for smooth visual effects. The backend is powered by Go, designed to handle game logic and state management efficiently.",
    technologies: [
      "React.js",
      "Vite",
      "TypeScript",
      "Konva (Canvas)",
      "Framer Motion",
      "Zustand",
      "Go (Golang)",
    ],
    features: [
      "Interactive Konva canvas-based game board",
      "Real-time game state management with Zustand",
      "Smooth animations using Framer Motion",
      "Client-server architecture",
      "Scalable Go backend structure",
    ],
    liveLink: "https://4-rows-game.vercel.app/", // No public live link found in the provided files
    githubLink: "https://github.com/dawgdevv/4_rows_game",
    videoLink: "",
    image: Fourows, // Refers to 'client_side/image.png' in the repo
  },
  {
    name: "DTIX",
    description:
      "A user-friendly platform for booking tickets to various events, featuring authentication, seat selection, and secure payments.",
    longDescription:
      "A user-friendly platform for booking tickets to various events. Features include user authentication, event browsing, seat selection, secure payments, and booking history.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe API",
      "JWT",
    ],
    features: [
      "User authentication and profile management",
      "Event browsing and filtering",
      "Interactive seat selection",
      "Secure payment processing",
      "Booking history and ticket management",
    ],
    liveLink: "https://ticket-booking-app-c64o.vercel.app/",
    githubLink: "https://github.com/dawgdevv/Ticket_Booking_app",
    videoLink: "https://youtu.be/sD0PZ-AFGTo",
    image: DTIX,
  },

  {
    name: "Real time Reddit analysis",
    description:
      "Engineered an end-to-end, real-time big data pipeline to analyze Reddit subreddit activity using Apache Kafka, Spark, and MongoDB.",
    longDescription:
      "Engineered an end-to-end, real-time big data pipeline to analyze Reddit subreddit activity. The system ingests live post data using Python (PRAW) and streams it via a fault-tolerant 3-broker Apache Kafka cluster. Apache Spark Structured Streaming consumes these topics, performing sentiment analysis on post descriptions and comments using NLTK (VADER). Spark aggregates key metrics like average votes, average comments, post counts, and average sentiment per subreddit. Processed data and aggregations are persisted into MongoDB Atlas collections for dashboard consumption and simultaneously written to Parquet files for archival. A dynamic Dash/Plotly dashboard visualizes these real-time analytics, showcasing live trends and subreddit comparisons.",
    technologies: [
      "Python",
      "Apache Kafka",
      "Apache Spark",
      "MongoDB Atlas",
      "NLTK",
      "Dash/Plotly",
      "Parquet",
    ],
    features: [
      "Real-time data ingestion from Reddit API",
      "Fault-tolerant Kafka streaming architecture",
      "Sentiment analysis of posts and comments",
      "Live metrics aggregation with Spark Streaming",
      "Interactive dashboard for trend visualization",
    ],
    liveLink: "https://rabda.onrender.com/",
    githubLink: "https://github.com/dawgdevv/Real_time_reddit_analysis",
    videoLink: "",
    image: ReditAnalysis,
  },

  {
    name: "Blockchain Academic Credential Interoperability Protocol",
    description:
      "Blockchain Academic Credential Interoperability Protocol - A full-stack application for issuing, verifying, and managing academic credentials on the blockchain.",
    longDescription:
      "Blockchain Academic Credential Interoperability Protocol - A full-stack application for issuing, verifying, and managing academic credentials on the blockchain. Features include degree issuance by institutions, instant verification by employers, credential management by students, and tamper-proof record keeping on Polygon blockchain.",
    technologies: [
      "React.js",
      "Node.js",
      "Polygon",
      "Solidity",
      "IPFS",
      "Express.js",
      "MongoDB",
    ],
    features: [
      "Secure credential issuance by verified institutions",
      "Instant verification by employers and third parties",
      "Student credential management portal",
      "Tamper-proof blockchain storage",
      "Interoperability between educational systems",
    ],
    liveLink: "",
    githubLink: "https://github.com/dawgdevv/BACIP",
    videoLink: "",
    image: BACIP,
  },




];

export const OPENSOURCE = [
  {
    org: "OpenSSF",
    project: "gittuf",
    description: "gittuf is a platform-agnostic Git security system",
    links: [
      "https://github.com/gittuf/gittuf/pull/1305#event-25185296641",
      "https://github.com/gittuf/gittuf/pull/1317#event-25079047386",
      "https://github.com/gittuf/gittuf/pull/1294#event-24853947514"
    ],
  },
];
