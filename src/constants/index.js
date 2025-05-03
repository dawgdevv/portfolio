import DTIX from "../assets/DTIX.png";
import UberClone from "../assets/uber.png";
import DecentralizedDrive from "../assets/drive.png";
import ReditAnalysis from "../assets/reddit.png";
export const HERO_CONTENT = `
Highly motivated **Software Developer** specializing in building **scalable web applications** and exploring **decentralized systems** and **Data Enginnering*. Proficient across the **MERN stack (MongoDB, Express.js, React, Node.js)**, with hands-on experience in **Java, Python, Javascript, Apache Kafka, Spark, and Ethereum smart contracts**. My work involves architecting robust solutions, writing **clean, efficient code**, and optimizing system performance, demonstrated through different projects. I thrive on solving complex Problems and am dedicated to continuous learning to deliver high-impact results.
`;

export const EXPERIENCES = [
  {
    year: "2024",
    role: "Software Development Intern",
    company: "Aunwesha Knowledge Technologies Private Limited",
    location: "Kolkata, India",
    description: `Focused on creating low-cost techniques for data extraction and analysis from CAD files. Responsibilities included extracting data from AutoCAD files using various OCR tools, developing a Java application for document search using Apache Lucene, solving data extraction issues, exporting data to Excel for integration, and designing a user-friendly GUI for easier data extraction from DWG files.`,
    technologies: [
      "Java",
      "Apache Lucene",
      "OCR.space",
      "Aspose.CAD",
      "Cloud OCR",
      "Excel",
    ],
  },
  {
    year: "March 2025 - Present",
    role: "Full Stack Development Intern",
    company: "Frantiger Business Consulting (P) Ltd.",
    location: "Bangalore, Karnataka, India",
    description: `Currently working on a Project where i am assiting founder to build web tools for simplyfying their workflow.`,
    technologies: [
      "JavaScript",
      "Node.js",
      "Express.js",
      "React.js",
      "MongoDB",
      "tailwind CSS",
      "vite",
    ],
  },
];

export const PROJECTS = [
  {
    name: "DTIX",
    description:
      "A user-friendly platform for booking tickets to various events. Features include user authentication, event browsing, seat selection, secure payments, and booking history.",
    liveLink: "https://ticket-booking-app-c64o.vercel.app/",
    githubLink: "https://github.com/dawgdevv/Ticket_Booking_app",
    videoLink: "https://youtu.be/sD0PZ-AFGTo",
    image: DTIX,
  },
  {
    name: "Uber Clone",
    description:
      "A comprehensive ride-hailing application with features for both users and captains, including registration, login, profile management, ride booking, fare calculation, live tracking, and ride management.",
    liveLink: "https://full-stack-uber.vercel.app/",
    githubLink: "https://github.com/dawgdevv/Full_stack_uber",
    videoLink: "",
    image: UberClone,
  },
  {
    name: "Decentralized Drive",
    description:
      "A decentralized file storage system built with Ethereum smart contracts and React. Key features include decentralized file storage using IPFS, file upload and management through Ethereum smart contracts, support for various file types, and secure access control using blockchain authentication.",
    liveLink: "https://decentralized-drive-phi.vercel.app/",
    githubLink: "https://github.com/dawgdevv/Decentralized_Drive",
    videoLink: "",
    image: DecentralizedDrive,
  },
  {
    name: "Real time Reddit analysis",
    description:
      "Engineered an end-to-end, real-time big data pipeline to analyze Reddit subreddit activity. The system ingests live post data using Python (PRAW) and streams it via a fault-tolerant 3-broker Apache Kafka cluster. Apache Spark Structured Streaming consumes these topics, performing sentiment analysis on post descriptions and comments using NLTK (VADER). Spark aggregates key metrics like average votes, average comments, post counts, and average sentiment per subreddit. Processed data and aggregations are persisted into MongoDB Atlas collections for dashboard consumption and simultaneously written to Parquet files for archival. A dynamic Dash/Plotly dashboard visualizes these real-time analytics, showcasing live trends and subreddit comparisons.",
    liveLink: "https://rabda.onrender.com/",
    githubLink: "https://github.com/dawgdevv/Real_time_reddit_analysis",
    videoLink: "",
    image: ReditAnalysis,
  },
];

export const CONTACT = {
  address: "Jaipur, Rajasthan, India",
  phoneNo: "+91 6376438732",
  email: "nishantrajcs26@gmail.com",
  eduemail: "nishantraj@jklu.edu.in",
};
