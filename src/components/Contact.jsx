import { useState } from "react";
import { MapPin, Phone, Mail, X } from "lucide-react";
import { CONTACT } from "../constants/index";
import { motion } from "framer-motion";
import axios from "axios";
import PropTypes from "prop-types";

const Contact = ({ onClose }) => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: "", message: "" });

    try {
      await axios.post(
        "https://backend-portfolio-1-3x6d.onrender.com/send",
        formData
      );
      setStatus({ type: "success", message: "Message sent successfully!" });
      setFormData({ email: "", message: "" });
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch {
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="bg-white dark:bg-zinc-900 rounded-none border-4 border-white hover:border-black shadow-neo-lg p-4 md:p-8 w-full max-w-4xl mx-4 relative"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-black dark:text-white hover:text-red-600 transition-colors border-2 border-transparent hover:border-white hover:border-black p-1"
      >
        <X className="h-8 w-8" />
      </button>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tighter text-black dark:text-white mb-2">
              Get in Touch
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
              Have a question or want to work together? Drop me a message!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-bold uppercase text-black dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 bg-white dark:bg-zinc-800 border-2 border-white hover:border-black text-black dark:text-white placeholder-gray-500 focus:outline-none focus:shadow-neo-sm transition-shadow"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold uppercase text-black dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 bg-white dark:bg-zinc-800 border-2 border-white hover:border-black text-black dark:text-white placeholder-gray-500 focus:outline-none focus:shadow-neo-sm h-32 resize-none transition-shadow"
                placeholder="Your message here..."
                required
              />
            </div>

            <motion.button
              whileHover={{ x: 2, y: 2, boxShadow: "2px 2px 0px 0px #000" }}
              whileTap={{ x: 4, y: 4, boxShadow: "0px 0px 0px 0px #000" }}
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 bg-accent-color text-white font-black uppercase tracking-wider border-2 border-white hover:border-black shadow-neo transition-all
                ${isLoading
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:bg-accent-hover"
                }`}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </motion.button>

            {status.message && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`text-sm font-bold ${status.type === "success"
                  ? "text-green-600"
                  : "text-red-600"
                  }`}
              >
                {status.message}
              </motion.p>
            )}
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-6 pt-2">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tighter text-black dark:text-white mb-2">
              Contact Info
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
              Feel free to reach out through any of these channels.
            </p>
          </div>

          <div className="space-y-4">
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-zinc-800 border-2 border-white hover:border-black shadow-neo-sm"
            >
              <MapPin className="h-6 w-6 text-accent-color" />
              <p className="text-sm font-bold text-black dark:text-white">{CONTACT.address}</p>
            </motion.div>

            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-zinc-800 border-2 border-white hover:border-black shadow-neo-sm"
            >
              <Phone className="h-6 w-6 text-accent-color" />
              <p className="text-sm font-bold text-black dark:text-white">{CONTACT.phoneNo}</p>
            </motion.div>

            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-zinc-800 border-2 border-white hover:border-black shadow-neo-sm"
            >
              <Mail className="h-6 w-6 text-accent-color" />
              <p className="text-sm font-bold text-black dark:text-white">{CONTACT.email}</p>
            </motion.div>

            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-zinc-800 border-2 border-white hover:border-black shadow-neo-sm"
            >
              <Mail className="h-6 w-6 text-accent-color" />
              <p className="text-sm font-bold text-black dark:text-white">{CONTACT.eduemail}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
Contact.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Contact;
