import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";
import { FaWhatsapp } from "react-icons/fa";
import backgroundImage1 from "../assets/atw1.webp";
import backgroundImage2 from "../assets/atw2.webp";
import backgroundImage3 from "../assets/atw3.webp";

const Hero = () => {
  const images = [backgroundImage1, backgroundImage2, backgroundImage3];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Box
      id="home"
      sx={{
        position: "relative",
        textAlign: "left",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        backgroundImage: `url(${images[currentImage]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 0.5s ease-in-out",
      }}
    >
      {/* Dark Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
      ></Box>

      {/* Content Section with Glassmorphic Effect */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          p: 4,
          maxWidth: "600px",
          mx: "auto",
          borderRadius: "16px",
          bgcolor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.2)", // Adding more details for the glass effect
        }}
      >
        {/* Main Heading with Animation */}
        <motion.h1
          className="text-5xl md:text-6xl text-white font-bold leading-tight mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Build your software with <br />
          Nova Tech Solutions Africa
        </motion.h1>

        {/* Subheading with Animation */}
        <motion.h2
          className="text-2xl md:text-3xl text-white font-semibold mt-2"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Innovative Software Solutions
        </motion.h2>

        {/* Description Paragraph with Animation */}
        <motion.p
          className="mt-4 text-lg text-white md:text-xl"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          We provide cutting-edge software solutions to help your business
          thrive in the digital world. Our team of experts is dedicated to
          delivering top-notch services tailored to your needs.
        </motion.p>

        {/* Call-to-Action Button with Hover Effect */}
        <motion.a
          href="#it-services"
          className="mt-6 inline-block bg-white text-blue-600 px-8 py-4 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          whileHover={{ scale: 1.1 }}
        >
          Explore Our Services
        </motion.a>

        {/* Additional Information with Hover Effects */}
        <motion.p
          className="mt-4 text-sm md:text-md text-gray-300 hover:text-gray-200 cursor-pointer transition-all duration-200"
          whileHover={{ scale: 1.05 }}
        >
          Learn more about our services and how we can help your business grow.
        </motion.p>
      </Box>

      {/* WhatsApp Chat Support Button */}
      <motion.div
        whileHover={{ x: "-20px" }} // Slide in on hover
        transition={{ duration: 0.3 }}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "-30px", // Half hidden by default
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#25D366",
          color: "white",
          padding: "15px",
          borderRadius: "50%",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          cursor: "pointer",
        }}
        onClick={() => window.open("https://wa.me/+254793814776", "_blank")} // Replace with your WhatsApp number
      >
        <FaWhatsapp size={32} />
      </motion.div>
    </Box>
  );
};

export default Hero;
