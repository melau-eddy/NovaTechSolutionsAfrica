import React from "react";
import { motion } from "framer-motion";
import integrity from "../assets/integrity.webp";
import customer from "../assets/customer.webp";
import respect from "../assets/respect.webp";
import account from "../assets/account.webp";

const About = () => {
  const cardData = [
    {
      title: "Integrity & Honesty",
      description:
        "Honesty is not just a virtue; it’s a fundamental principle that guides every aspect of our operations.",
      image: integrity, // Use a colon here instead of an equals sign
    },
    {
      title: "Customer-Centricity",
      description:
        "We place you at the heart of everything we do, ensuring a seamless and delightful experience at every touchpoint.",
      image: customer,
    },
    {
      title: "Respect & Diversity",
      description:
        "We celebrate diverse perspectives and cultures, making us stronger and more impactful in the global community.",
      image: respect,
    },
    {
      title: "Accountability",
      description:
        "Accountability is key to achieving and maintaining the highest standards of quality.",
      image: account,
    },
  ];

  return (
    <section
      id="about"
      className="relative py-16 cursor-pointer bg-gray-50"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url('https://www.alphatrixx.com/wp-content/uploads/2023/09/our_background_image.jpg')`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-800">
              About Us
            </h2>
            <p className="pb-10 text-center text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              At <strong>NovaTech</strong>, we are more than just a business;
              we are a passionate team dedicated to making a difference. With a
              firm belief in the power of innovation, integrity, and exceptional
              service, we’ve built a company that’s committed to exceeding
              expectations. Over the years, we’ve grown and evolved, but our
              core values have remained unchanged. We pride ourselves on our
              unwavering commitment to quality, our relentless pursuit of
              excellence, and our dedication to building lasting relationships
              with our clients.
            </p>
            <div className="flex justify-center">
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out">
                Learn More
              </button>
            </div>
          </div>
        </section>

        <div>
          <p className="text-5xl font-light text-center mb-12 mt-10 text-indigo-900">
            Our Values
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Image Section */}
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${card.image})` }}
              ></div>

              {/* Content Section */}
              <div className="p-6 bg-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-600 hover:text-white transition-colors duration-500">
                <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
                <p className="text-sm leading-relaxed">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
