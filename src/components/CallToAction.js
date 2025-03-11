import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const CallToAction = () => {
  return (
    <div className="bg-gradient-to-r from-blue-800 to-blue-900 py-16">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          Ready to Get Started?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-white mb-8"
        >
          Join thousands of satisfied customers and secure your health today.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-4"
        >

          {/* Link to the Contact Us page */}
          <Link
            to="/contact-us"
            className="bg-transparent border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-800 transition duration-300"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default CallToAction;