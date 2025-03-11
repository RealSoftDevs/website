import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Hardeep Singh',
    comment: 'Great service! The insurance plans are affordable and comprehensive.',
    image: '',
  },
  {
    id: 2,
    name: 'Ritu aggarwal',
    comment: 'I highly recommend this company. Their support team is amazing!',
    image: 'https://i.pravatar.cc/150?img=2',
  },
  {
    id: 3,
    name: 'Lakhwinder singh',
    comment: 'Switching to this insurance was the best decision I made.',
    image: '',
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{testimonial.name}</h3>
              <p className="text-gray-700">{testimonial.comment}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;