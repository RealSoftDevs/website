import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    id: 1,
    icon: '🏥',
    title: 'Comprehensive Coverage',
    description: 'We offer a wide range of insurance plans to cover all your health needs.',
  },
  {
    id: 2,
    icon: '⏰',
    title: '24/7 Support',
    description: 'Our support team is available round the clock to assist you.',
  },
  {
    id: 3,
    icon: '💳',
    title: 'Affordable Plans',
    description: 'Get the best insurance plans at competitive prices.',
  },
  {
    id: 4,
    icon: '👨‍👩‍👧‍👦',
    title: 'Family Packages',
    description: 'Special packages designed for families to ensure everyone is covered.',
  },
];

const KeyFeatures = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 text-center mb-8">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300 hover:shadow-xl"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;