import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle(
        "light-theme",
        savedTheme === "light"
      );
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("portfolio-theme", newTheme);
    document.documentElement.classList.toggle(
      "light-theme",
      newTheme === "light"
    );
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1, rotate: 10 }}
      whileTap={{ scale: 0.9, rotate: -10 }}
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 bg-white border-2 border-white hover:border-black shadow-neo p-2 hover:shadow-neo-lg transition-all"
    >
      {theme === "dark" ? (
        <FiSun className="text-xl text-black" />
      ) : (
        <FiMoon className="text-xl text-black" />
      )}
    </motion.button>
  );
}
