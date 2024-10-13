import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { useRef } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const constraintsRef = useRef(null)

  return (
    <nav className=" bg- mb-20 flex item-center justify-between py-6">
      <motion.div ref={constraintsRef} refclassName="flex flex-shrink-0 items-center">
        <motion.img drag dragConstraints={constraintsRef} className="mx-2 w-10" src={logo} alt="" />
      </motion.div>
      <motion.div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <motion.a whileHover={{ scale: 1.2, rotate: 90 }}
          whileTap={{
            scale: 0.8,
            rotate: 360,
            borderRadius: "100%"
          }} href="https://www.linkedin.com/in/nraj24/?trk=public-profile-join-page" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </motion.a>
        <motion.a whileHover={{ scale: 1.2, rotate: 90 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: "100%"
          }} href="https://github.com/dawgdevv" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </motion.a>
        <motion.a whileHover={{ scale: 1.2, rotate: 90 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: "100%"
          }} href="https://x.com/sfunish" target="_blank" rel="noopener noreferrer">
          <FaSquareXTwitter />
        </motion.a>
        <motion.a whileHover={{ scale: 1.2, rotate: 90 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: "100%"
          }} href="https://www.instagram.com/nish__annt/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </motion.a>
      </motion.div>
    </nav>
  );
}

export default Navbar;
