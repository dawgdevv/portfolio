import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

function Navbar({ activeSection, onNavClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "hero", label: "Introduction" },
    { id: "tech", label: "Technologies" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
  ];

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center ">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="backdrop-blur-md bg-white/10 border border-white/20 shadow-lg rounded-2xl "
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-center">
            {/* Desktop menu */}
            <div className="hidden md:flex space-x-4 relative">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => onNavClick(item.id)}
                  className={`relative z-10 px-3 py-1.5 rounded-full text-xl font-medium transition-colors ${
                    activeSection === item.id
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-emerald-400 p-2 rounded-full"
              >
                {!isOpen ? (
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute top-full left-0 right-0 mt-1 bg-gray-900/90 backdrop-blur-md rounded-2xl border border-gray-800 shadow-lg"
            >
              <div className="px-2 pt-2 pb-2 space-y-1">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => onNavClick(item.id)}
                    className={`text-left block px-3 py-2 rounded-lg text-sm font-medium w-full transition-colors ${
                      activeSection === item.id
                        ? "bg-purple-600/20 text-white"
                        : "text-gray-300 hover:text-white"
                    }`}
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}

Navbar.propTypes = {
  activeSection: PropTypes.string.isRequired,
  onNavClick: PropTypes.func.isRequired,
};

export default Navbar;
