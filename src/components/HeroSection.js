import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-center bg-gradient-to-r from-blue-600 to-blue-800">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('images/homepage.jpeg')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-white px-4"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Your Health, Our Priority
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          At <strong>Insurance Baazaar</strong>, we provide comprehensive health insurance plans designed to protect you and your loved ones. With over <strong>3 years of trusted service</strong>, we offer tailored solutions for individuals, families, and businesses. Let us help you secure a healthier future today.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link
            to="contact-us"
            className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition duration-300"
          >
            Get a Free Quote
          </Link>
          <Link
            to="health-insurance"
            className="bg-transparent border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-800 transition duration-300"
          >

            Explore Plans
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;