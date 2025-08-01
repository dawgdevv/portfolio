import DTIX from "../assets/DTIX.png";
import UberClone from "../assets/uber.png";
import DecentralizedDrive from "../assets/drive.png";
import ReditAnalysis from "../assets/reddit.png";
import BACIP from "../assets/bacip.png";
import BlogApp from "../assets/blog.png";
import GoalFlowApp from "../assets/goalflow.png";
export const HERO_CONTENT = `
I mostly work with JavaScript, Node.js, React, and all the tools that go into building modern full-stack applications. I'm particularly interested in everything related to tech I genuinely enjoy building websites, systems, and tinkering with new technologies.

I adapt quickly to different stacks, but I have a soft spot for web3 and am a big fan of decentralization. I'm also a Linux enthusiast and use Ubuntu as my daily driver.

Most of my days revolve around solving LeetCode problems, building things from scratch, and constantly thinking about how little I know. That’s really it I just love building stuff. Nothing more to it.
`;

export const EXPERIENCES = [
  {
    year: "July 2025 - Present",
    role: "Full Stack Developer(Internship)",
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
    role: "Full Stack Development(Intership)",
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
    name: "Decentralized Drive",
    description:
      "A decentralized file storage system built with Ethereum smart contracts and React, leveraging IPFS for secure file storage.",
    longDescription:
      "A decentralized file storage system built with Ethereum smart contracts and React. Key features include decentralized file storage using IPFS, file upload and management through Ethereum smart contracts, support for various file types, and secure access control using blockchain authentication.",
    technologies: [
      "React.js",
      "Ethereum",
      "Solidity",
      "IPFS",
      "Web3.js",
      "Metamask",
    ],
    features: [
      "Decentralized file storage using IPFS",
      "Blockchain-based access control",
      "Support for various file types",
      "Secure authentication via Metamask",
      "File sharing capabilities",
    ],
    liveLink: "https://decentralized-drive-phi.vercel.app/",
    githubLink: "https://github.com/dawgdevv/Decentralized_Drive",
    videoLink: "",
    image: DecentralizedDrive,
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
    name: "BACIP",
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

  {
    name: "BlogSphere",
    description:
      "A modern full-stack blogging platform with AI-powered writing assistance, gamification, and interactive features.",
    longDescription:
      "A modern full-stack blogging platform where users can create, read, update, and delete blog posts, comment, and interact with others. Features include JWT authentication, AI-powered writing assistant (grammar, enhancement, tone), a gamified streak and level system with badges, a streak dashboard with activity heatmap, and a responsive, minimal UI. Built with React, Node.js, Express, and MongoDB.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "AI APIs",
      "Tailwind CSS",
    ],
    features: [
      "Complete CRUD operations for blog posts",
      "AI-powered writing assistant",
      "Gamified streak and level system with badges",
      "Activity heatmap dashboard",
      "Secure JWT authentication",
    ],
    liveLink: "https://blog-app-henna-three.vercel.app/",
    githubLink: "https://github.com/dawgdevv/Blog_app",
    videoLink:
      "https://www.loom.com/share/ee2bef4333c343d984cf6917c8c8d7d0?sid=cfc7e595-0132-45d6-ac32-6d8c37d5c2e6",
    image: BlogApp,
  },

  {
    name: "Taskly",
    description:
      "A comprehensive full-stack goal achievement platform with systematic goal setting, action planning, and progress tracking.",
    longDescription:
      "A comprehensive full-stack goal achievement platform that transforms dreams into reality through systematic goal setting, action planning, and progress tracking. Features include goal management with priority levels and deadlines, action plan creation with task breakdown, interactive horizontal scrolling task selector, real-time progress visualization, comprehensive dashboard with statistics, JWT authentication with protected routes, and a modern dark UI optimized for productivity. Built with React 18, Node.js, Express, MongoDB, and Tailwind CSS.",
    technologies: [
      "Reactjs",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
    ],
    features: [
      "Goal management with priority levels and deadlines",
      "Action plan creation with task breakdown",
      "Interactive horizontal scrolling task selector",
      "Real-time progress visualization",
      "Comprehensive statistics dashboard",
    ],
    liveLink: "https://taskapp-blue.vercel.app/",
    githubLink: "https://github.com/dawgdevv/Task_board",
    videoLink:
      "https://www.loom.com/share/1127c4cf417344c684a496ffdc381ad6?sid=d4337315-99e0-40c7-9a8a-dbfc68a3c3b4",
    image: GoalFlowApp,
  },

  {
    name: "Uber Clone",
    description:
      "A comprehensive ride-hailing application with features for both users and captains, including booking, tracking, and ride management.",
    longDescription:
      "A comprehensive ride-hailing application with features for both users and captains, including registration, login, profile management, ride booking, fare calculation, live tracking, and ride management.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Google Maps API",
      "Socket.io",
      "JWT",
    ],
    features: [
      "User and driver registration/authentication",
      "Real-time ride booking and tracking",
      "Dynamic fare calculation",
      "Profile and ride history management",
      "In-app navigation and communication",
    ],
    liveLink: "https://full-stack-uber.vercel.app/",
    githubLink: "https://github.com/dawgdevv/Full_stack_uber",
    videoLink: "",
    image: UberClone,
  },
];

export const GITHUB_CONFIG = {
  username: "dawgdevv",
  showContributions: true,
  showRepos: true,
  repoCount: 6,
};

export const CONTACT = {
  address: "Jaipur, Rajasthan, India",
  phoneNo: "+91 6376438732",
  email: "nishantrajcs26@gmail.com",
  eduemail: "nishantraj@jklu.edu.in",
};
