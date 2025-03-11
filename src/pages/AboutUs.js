import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto p-4">
        {/* Logo Placeholder */}
        <div className="flex justify-center rounded-full  mb-8">
          <img
            src="images/logo.png"
            alt="Insurance Baazaar Logo"
            className="h-21"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 text-center mb-8">
          About Insurance Baazaar
        </h1>

        {/* Company Overview */}
        <div className="text-lg text-gray-700 mb-12">
          <p className="mb-4">
            At <strong>Insurance Baazaar</strong>, we have been revolutionizing the health insurance landscape for the past three years. Founded with a vision to make health insurance accessible, transparent, and customer-centric, we have grown into a trusted name in the industry. Our mission is to empower individuals and families with the right health insurance solutions, ensuring peace of mind and financial security in times of medical need.
          </p>
          <p className="mb-4">
            Over the past three years, we have served thousands of satisfied customers, partnered with leading insurance providers, and introduced innovative digital tools to make buying and managing insurance policies seamless and hassle-free.
          </p>
        </div>

        {/* Mission, Vision, and Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Mission</h2>
            <p className="text-gray-700">
              To provide affordable and comprehensive health insurance solutions that empower individuals and families to lead healthier, more secure lives.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Vision</h2>
            <p className="text-gray-700">
              To make health insurance accessible to every individual, ensuring a healthier and more secure future for all.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Values</h2>
            <p className="text-gray-700">
              <strong>Transparency</strong>, <strong>Innovation</strong>, <strong>Customer-Centricity</strong>, and <strong>Reliability</strong>.
            </p>
          </div>
        </div>



        {/* Why Choose Us Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-blue-600 text-center mb-8">Why Choose Insurance Baazaar?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-blue-600 mb-4">3 Years of Trust</h3>
              <p className="text-gray-700">A proven track record of reliability and customer satisfaction.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Wide Range of Plans</h3>
              <p className="text-gray-700">Tailored solutions for individuals, families, and businesses.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Easy Claims Process</h3>
              <p className="text-gray-700">Quick and transparent claim settlements.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-blue-600 mb-4">24/7 Support</h3>
              <p className="text-gray-700">Dedicated customer service to assist you anytime.</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUs;