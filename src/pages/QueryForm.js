import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const QueryForm = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: '',
    query: '',
  });
  const [lastSubmittedData, setLastSubmittedData] = useState(null); // Store last submitted data

  const plans = [
    { value: '', label: 'Select a plan' },
    { value: 'Diabetes Safe', label: 'Diabetes Safe' },
    { value: 'Star Cardiac Care', label: 'Star Cardiac Care' },
    { value: 'Star Health Assure', label: 'Star Health Assure' },
    { value: 'SMART PRO HEALTH PRO', label: 'SMART PRO HEALTH PRO' },
    { value: 'Star Comprehensive', label: 'Star Comprehensive' },
    { value: 'Young Star', label: 'Young Star' },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the current form data is the same as the last submitted data
    if (JSON.stringify(formData) === JSON.stringify(lastSubmittedData)) {
      alert('No changes detected. Please modify your query before submitting again.');
      return;
    }

    // Send email using EmailJS
    emailjs.send(
      'service_w6usfsu', // Replace with your service ID
      'template_xlwfrwl', // Replace with your template ID
      formData,
      '3LyNi24Vlr8J9gCCR' // Replace with your user ID
    )
    .then((response) => {
      alert('Your query has been submitted!');
      setLastSubmittedData(formData); // Store the last submitted data
      setFormData({ name: '', email: '', phone: '', plan: '', query: '' }); // Reset form
      setIsFormOpen(false);
    }, (error) => {
      alert('Failed to submit the query, please try again.');
      console.error('EmailJS error:', error);
    });
  };

  return (
    <div className="fixed bottom-8 right-1 z-50">
      {/* Floating "Ask a Query" button */}
      {!isFormOpen && (
        <motion.button
          onClick={() => setIsFormOpen(true)}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Ask a Query
        </motion.button>
      )}

	  {!isFormOpen && (
                <div  >
                         <a href="https://wa.me/+919877832535?text=">
                           <img src={'images/wicon.png'} width="60" alt="aaa" />
                         </a>
                 </div>
      )}


      {/* Form modal */}
      {isFormOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="bg-white p-6 rounded-lg shadow-lg w-96"
        >
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Ask a Query</h2>
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
              <label className="block text-gray-700 mb-2">Select Plan</label>
              <select
                name="plan"
                value={formData.plan}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              >
                {plans.map((plan) => (
                  <option key={plan.value} value={plan.value}>
                    {plan.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Query</label>
              <textarea
                name="query"
                placeholder="Your Query"
                value={formData.query}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                rows="4"
                required
              />
            </div>
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => setIsFormOpen(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </motion.div>
      )}
    </div>
  );
};

export default QueryForm;