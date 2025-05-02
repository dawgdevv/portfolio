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
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9, rotate: 360 }}
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-full"
    >
      {theme === "dark" ? (
        <FiSun className="text-lg text-yellow-300" />
      ) : (
        <FiMoon className="text-lg text-blue-500" />
      )}
    </motion.button>
  );
}
