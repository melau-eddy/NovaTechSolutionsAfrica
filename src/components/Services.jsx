import React from "react";
import { motion } from "framer-motion";
import WebIcon from "@mui/icons-material/Web";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CampaignIcon from "@mui/icons-material/Campaign";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import SearchIcon from "@mui/icons-material/Search";
import CloudIcon from "@mui/icons-material/Cloud";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  return (
    <div id="it-services" className="py-20 bg-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Our Services</h2>
        <p className="text-lg mt-4">
          We offer a variety of services to help your business succeed
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Service Card 1 */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => navigate("/web-development")}
        >
          <div className="flex justify-center mb-4">
            <WebIcon style={{ fontSize: 96, color: "#1976d2" }} />
          </div>
          <h3 className="text-2xl font-bold">Web Development</h3>
          <p className="mt-4 text-gray-600">
            Building responsive, high-quality websites
          </p>
        </motion.div>

        {/* Service Card 2 */}
        <motion.div
          className="bg-white p-6 rounded-lg cursor-pointer shadow-lg text-center transition-transform duration-300 transform hover:scale-105"
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.05 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onClick={() => navigate("/cloud-computing")}
        >
          <div className="flex justify-center mb-4">
            <CloudIcon style={{ fontSize: 96, color: "#9c27b0" }} />
          </div>
          <h3 className="text-2xl font-bold">Cloud Computing</h3>
          <p className="mt-4 text-gray-600 cursor-pointer">
            Creating intuitive and beautiful user interfaces
          </p>
        </motion.div>

        {/* Service Card 3 */}
        <motion.div
          className="bg-white p-6 cursor-pointer rounded-lg shadow-lg text-center transition-transform duration-300 transform hover:scale-105"
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.05 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onClick={() => navigate("/it-consulting")}
        >
          <div className="flex justify-center mb-4">
            <BusinessCenterIcon style={{ fontSize: 96, color: "#ff9800" }} />
          </div>
          <h3 className="text-2xl font-bold">IT Consulting</h3>
          <p className="mt-4 text-gray-600">
            Providing expert advice to improve your business
          </p>
        </motion.div>

        {/* Service Card 4 */}
        <motion.div
          className="bg-white p-6 rounded-lg cursor-pointer shadow-lg text-center transition-transform duration-300 transform hover:scale-105"
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.05 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          onClick={() => navigate("/digital-marketing")}
        >
          <div className="flex justify-center mb-4">
            <CampaignIcon style={{ fontSize: 96, color: "#f44336" }} />
          </div>
          <h3 className="text-2xl font-bold">Digital Marketing</h3>
          <p className="mt-4 text-gray-600">
            Strategies to enhance your online presence
          </p>
        </motion.div>

        {/* Service Card 5 */}
        <motion.div
          className="bg-white p-6 rounded-lg cursor-pointer shadow-lg text-center transition-transform duration-300 transform hover:scale-105"
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.05 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onClick={() => navigate("/mobile-development")}
        >
          <div className="flex justify-center mb-4">
            <MobileFriendlyIcon style={{ fontSize: 96, color: "#4caf50" }} />
          </div>
          <h3 className="text-2xl font-bold">Mobile App Development</h3>
          <p className="mt-4 text-gray-600">
            Creating seamless mobile experiences
          </p>
        </motion.div>

        {/* Service Card 6 */}
        <motion.div
          className="bg-white p-6 cursor-pointer rounded-lg shadow-lg text-center transition-transform duration-300 transform hover:scale-105"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          onClick={() => navigate("/recruitment-services")}
        >
          <div className="flex justify-center mb-4">
            <SearchIcon style={{ fontSize: 96, color: "#607d8b" }} />
          </div>
          <h3 className="text-2xl font-bold">Recruitment Services</h3>
          <p className="mt-4 text-gray-600">
            Optimizing your website for search engines
          </p>
        </motion.div>
      </div>
    </div>
  );
};
export default Services;
