import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

function Navbar({ activeSection, onNavClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "hero", label: "Introduction" },

    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
  ];

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="bg-white border-2 border-white hover:border-black shadow-neo dark:bg-zinc-900 relative max-w-4xl"
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Desktop menu */}
            <div className="hidden md:flex space-x-2 relative">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => onNavClick(item.id)}
                  className={`relative z-10 px-4 py-2 text-sm font-bold uppercase tracking-wider border-2 border-white hover:border-black transition-all ${
                    activeSection === item.id
                      ? "bg-accent-color text-white shadow-neo-sm"
                      : "bg-white text-black hover:bg-gray-100 hover:shadow-neo-sm"
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-white text-black border-2 border-white hover:border-black p-2 shadow-neo-sm active:translate-y-1 active:shadow-none transition-all"
              >
                {!isOpen ? (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                      strokeWidth={3}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                      strokeWidth={3}
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
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t-2 border-white hover:border-black bg-white"
            >
              <div className="p-4 space-y-3">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => {
                      onNavClick(item.id);
                      setIsOpen(false);
                    }}
                    className={`block w-full text-center px-4 py-3 text-sm font-bold uppercase border-2 border-white hover:border-black transition-all ${
                      activeSection === item.id
                        ? "bg-accent-color text-white shadow-neo-sm"
                        : "bg-white text-black shadow-neo-sm hover:translate-x-1"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
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
