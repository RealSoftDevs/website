import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', query: '' });
  const [lastSubmittedData, setLastSubmittedData] = useState(null); // Store last submitted data

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the current form data is the same as the last submitted data
    if (JSON.stringify(formData) === JSON.stringify(lastSubmittedData)) {
      alert('No changes detected. Please modify your message before submitting again.');
      return;
    }

    // Send email using EmailJS
    emailjs.send(
      'service_w6usfsu', // Replace with your service ID
      'template_e50qbnb', // Replace with your template ID
      formData,
      '3LyNi24Vlr8J9gCCR' // Replace with your user ID
    )
    .then((response) => {
      alert('Your message has been sent!');
      setLastSubmittedData(formData); // Store the last submitted data
      setFormData({ name: '', email: '', phone: '', query: '' }); // Reset form
    }, (error) => {
      alert('Failed to send the message, please try again.');
      console.error('EmailJS error:', error);
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto p-4">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 text-center mb-8">
          Contact Us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Get in Touch</h2>
            <p className="text-gray-700 mb-4">
              Have questions or need assistance? Reach out to us!
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  name="query"
                  placeholder="Your Message"
                  value={formData.query}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  rows="5"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 w-full"
              >
                Send Message
              </button>
            </form>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Office</h2>
            <p className="text-gray-700 mb-4">
              112 Building, 5th floor, Workcell<br />
              Amritsar, Punjab
            </p>
            <p className="text-gray-700 mb-4">
              Email: support@insurancebaazaar.com<br />
              Phone: <br />
                     +919877858551 <br />
                     +919877832535 <br />
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactUs;