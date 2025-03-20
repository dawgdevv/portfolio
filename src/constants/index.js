import DTIX from "../assets/DTIX.png";
import UberClone from "../assets/uber.png";
import DecentralizedDrive from "../assets/drive.png";

export const HERO_CONTENT = `
I’m a **Software developer** who enjoys building scalable web applications and exploring decentralized technologies. My day-to-day work revolves around writing clean and efficient code, solving algorithmic challenges, and improving system performance. I believe in continuous learning and spend most of my time coding, debugging, or reading up on new technologies. Whether it's building applications or optimizing backend logic, I’m always looking for ways to improve and refine my approach.
`;

export const ABOUT_TEXT = `
Hey, I’m Nishant Raj—a full-stack developer with a growing passion for Web3 technologies. I enjoy building functional, user-friendly applications, from designing frontends with tools like Node.js, Express.js, and EJS to diving into decentralized solutions using Solidity and IPFS.

I focus on writing clean, efficient code to solve real-world problems. Whether it’s creating smart contracts, implementing decentralized identity systems, or working on a Linux-based setup, I approach every challenge with curiosity and a drive to improve.

Outside of coding, I’m honing my skills in data structures, algorithms, and networking, always eager to learn and adapt to new technologies.

If you’re looking for a developer to contribute to your Web3 or full-stack projects, let’s connect and create something meaningful.
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
];

export const CONTACT = {
  address: "Jaipur, Rajasthan, India",
  phoneNo: "+91 6376438732",
  email: "nishantrajcs26@gmail.com",
  eduemail: "nishantraj@jklu.edu.in",
};
