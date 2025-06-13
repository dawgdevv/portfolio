import DTIX from "../assets/DTIX.png";
import UberClone from "../assets/uber.png";
import DecentralizedDrive from "../assets/drive.png";
import ReditAnalysis from "../assets/reddit.png";
import BACIP from "../assets/bacip.png";
import BlogApp from "../assets/blog.png";
import GoalFlowApp from "../assets/goalflow.png";
export const HERO_CONTENT = `
Highly motivated **Software Developer** specializing in building **scalable web applications** and exploring **decentralized systems** and **Data Enginnering**. Proficient across the **MERN stack (MongoDB, Express.js, React, Node.js)**, with hands-on experience in **Java, Python, Javascript, Apache Kafka, Spark, and Ethereum smart contracts**. My work involves architecting robust solutions, writing **clean, efficient code**, and optimizing system performance, demonstrated through different projects. I thrive on solving complex Problems and am dedicated to continuous learning to deliver high-impact results.
`;

export const EXPERIENCES = [
  {
    year: "March 2025 - May 2025",
    role: "Full Stack Development Intern",
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
  {
    year: "May 2024-July 2024",
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
  {
    name: "BACIP",
    description:
      "Blockchain Academic Credential Interoperability Protocol - A full-stack application for issuing, verifying, and managing academic credentials on the blockchain. Features include degree issuance by institutions, instant verification by employers, credential management by students, and tamper-proof record keeping on Polygon blockchain.",
    liveLink: "", // Add your deployment URL if available
    githubLink: "https://github.com/dawgdevv/BACIP", // Update with correct GitHub path
    videoLink: "", // Add demo video link if available
    image: BACIP, // Update with your image reference
  },
  {
    name: "BlogSphere",
    description:
      "A modern full-stack blogging platform where users can create, read, update, and delete blog posts, comment, and interact with others. Features include JWT authentication, AI-powered writing assistant (grammar, enhancement, tone), a gamified streak and level system with badges, a streak dashboard with activity heatmap, and a responsive, minimal UI. Built with React, Node.js, Express, and MongoDB.",
    liveLink: "https://blog-app-henna-three.vercel.app/",
    githubLink: "https://github.com/dawgdevv/Blog_app",
    videoLink:
      "https://www.loom.com/share/ee2bef4333c343d984cf6917c8c8d7d0?sid=cfc7e595-0132-45d6-ac32-6d8c37d5c2e6",
    image: BlogApp,
  },
  {
    name: "GoalFlow",
    description:
      "A comprehensive full-stack goal achievement platform that transforms dreams into reality through systematic goal setting, action planning, and progress tracking. Features include goal management with priority levels and deadlines, action plan creation with task breakdown, interactive horizontal scrolling task selector, real-time progress visualization, comprehensive dashboard with statistics, JWT authentication with protected routes, and a modern dark UI optimized for productivity. Built with React 18, Node.js, Express, MongoDB, and Tailwind CSS.",
    liveLink: "https://taskapp-blue.vercel.app/",
    githubLink: "https://github.com/dawgdevv/Task_board",
    videoLink:
      "https://www.loom.com/share/1127c4cf417344c684a496ffdc381ad6?sid=d4337315-99e0-40c7-9a8a-dbfc68a3c3b4",
    image: GoalFlowApp, // You'll need to add this image import
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
];

export const CONTACT = {
  address: "Jaipur, Rajasthan, India",
  phoneNo: "+91 6376438732",
  email: "nishantrajcs26@gmail.com",
  eduemail: "nishantraj@jklu.edu.in",
};
