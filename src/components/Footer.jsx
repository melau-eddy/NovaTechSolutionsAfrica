import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const [showArrow, setShowArrow] = useState(false);

  // Show the arrow when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top when the arrow is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-10 relative">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Services Section */}
        <div>
          <h2 className="font-bold text-xl mb-4 text-fuchsia-400">
            Our Services
          </h2>
          <ul className="space-y-2">
            {[
              {
                id: "WebDevelopment",
                name: "WebDevelopment",
                link: "web-development",
              },
              {
                id: "CloudComputing",
                name: "CloudComputing",
                link: "cloud-computing",
              },
              {
                id: "ItConsulting",
                name: "ITConsulting",
                link: "it-consulting",
              },
              {
                id: "DigitalMarketing ",
                name: "DigitalMarketing",
                link: "digital-marketing",
              },
              {
                id: "MobileAppDevelopment",
                name: "MobileDevelopment",
                link: "mobile-development",
              },
              {
                id: "RecuritmentServices",
                name: "RecruitmentServices",
                link: "recruitment-services",
              },
              {
                id: "HrServices",
                name: "HrServices",
                link: "hr-services",
              },
            ].map((service, index) => (
              <motion.li
                key={service.name}
                className="hover:text-fuchsia-600 transition duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <a href={service.link}>{service.name}</a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* About Us Section */}
        <div>
          <h2 className="font-bold text-xl mb-4 text-fuchsia-400">About Us</h2>
          <motion.p
            className="text-sm mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            We always strive to provide high-quality guidance for all our clients,
            helping them grow their businesses successfully.
          </motion.p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h2 className="font-bold text-xl mb-4 text-fuchsia-400">
            Quick Links
          </h2>
          <ul className="space-y-2">
            {["Home", "About", "Contact", "Services"].map((link, index) => (
              <motion.li
                key={link}
                className="hover:text-fuchsia-600 transition duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
              >
                <a href={`#${link.toLowerCase()}`}>{link}</a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="font-bold text-xl mb-4 text-fuchsia-400">
            Contact Us
          </h2>
          <ul className="space-y-4">
            {[
              { label: "Mobile", value: "+2547123456789", icon: "faPhone" },
              {
                label: "Email",
                value: "Example@gmail.com",
                icon: "faEnvelope",
              },
              {
                label: "Address",
                value: "Nairobi, Kenya",
                icon: "faMapMarkerAlt",
              },
            ].map((contact, index) => (
              <motion.li
                key={contact.label}
                className="flex items-start space-x-4 p-2 bg-gray-800 rounded-lg shadow-md hover:bg-fuchsia-600 hover:text-white transition duration-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <FontAwesomeIcon
                  icon={
                    require(`@fortawesome/free-solid-svg-icons`)[contact.icon]
                  }
                  className="text-fuchsia-400 text-lg mt-1"
                />
                <div>
                  <p className="font-semibold">{contact.label}:</p>
                  <p className="text-sm">{contact.value}</p>
                </div>
              </motion.li>
            ))}
          </ul>

          {/* Social Media Icons */}
          <div className="mt-6 flex space-x-4">
            <motion.a
              href="https://www.linkedin.com/in/genius-okwemba-897076298/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-fuchsia-400 text-2xl hover:text-fuchsia-600 transition duration-300"
              />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/your-instagram-profile"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-fuchsia-400 text-2xl hover:text-fuchsia-600 transition duration-300"
              />
            </motion.a>
            <motion.a
              href="https://twitter.com/your-twitter-profile"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-fuchsia-400 text-2xl hover:text-fuchsia-600 transition duration-300"
              />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center">
        <motion.p
          className="text-sm text-fuchsia-200"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          &copy; {new Date().getFullYear()} Nova Tech Solutions Africa. All rights
          reserved.
        </motion.p>
      </div>

      {/* Scroll to Top Arrow */}
      {showArrow && (
        <motion.div
          className="fixed bottom-8 right-12 bg-fuchsia-600 text-white px-3 py-2 rounded-full shadow-lg cursor-pointer"
          onClick={scrollToTop}
          whileHover={{ scale: 1.2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </motion.div>
      )}
    </footer>
  );
};

export default Footer;