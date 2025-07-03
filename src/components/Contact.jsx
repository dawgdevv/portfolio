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
      className="bg-black backdrop-blur-md rounded-2xl border border-gray-800 p-6 w-full max-w-4xl mx-4 relative"
    >
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors"
      >
        <X className="h-6 w-6" />
      </button>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Contact Form */}
        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-emerald-400 mb-2">
              Get in Touch
            </h2>
            <p className="text-gray-400 text-sm">
              Have a question or want to work together? Drop me a message!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 h-32 resize-none"
                placeholder="Your message here..."
                required
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
              className={`w-full py-2 rounded-lg bg-emerald-500 text-white font-medium 
                ${
                  isLoading
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:bg-emerald-600"
                }`}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </motion.button>

            {status.message && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`text-sm ${
                  status.type === "success"
                    ? "text-emerald-400"
                    : "text-red-400"
                }`}
              >
                {status.message}
              </motion.p>
            )}
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-emerald-400 mb-2">
              Contact Info
            </h2>
            <p className="text-gray-400 text-sm">
              Feel free to reach out through any of these channels.
            </p>
          </div>

          <div className="space-y-3">
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center space-x-3 text-gray-300"
            >
              <MapPin className="h-5 w-5 text-emerald-400" />
              <p className="text-sm">{CONTACT.address}</p>
            </motion.div>

            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center space-x-3 text-gray-300"
            >
              <Phone className="h-5 w-5 text-emerald-400" />
              <p className="text-sm">{CONTACT.phoneNo}</p>
            </motion.div>

            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center space-x-3 text-gray-300"
            >
              <Mail className="h-5 w-5 text-emerald-400" />
              <p className="text-sm">{CONTACT.email}</p>
            </motion.div>

            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center space-x-3 text-gray-300"
            >
              <Mail className="h-5 w-5 text-emerald-400" />
              <p className="text-sm">{CONTACT.eduemail}</p>
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
