import React, { useState } from 'react';
import axios from 'axios';

const FloatingActionButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    query: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate email
    if (!formData.email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
    }

    // Validate phone number
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required.';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits and indian number only';
    }

    // Validate query (at least 20 words)
    if (!formData.query) {
      newErrors.query = 'Query is required.';
    } else if (formData.query.split(/\s+/).length < 20) {
      newErrors.query = 'Query must contain at least 20 words.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

	const handleSubmit = async (e) => {
	  e.preventDefault();
	  if (validateForm()) {
		try {
		  const response = await axios.post('http://localhost:5000/api/submit-contact', formData);
		  alert(response.data.message); // Show success message
		  setFormData({ name: '', email: '', phone: '', query: '' }); // Reset form
		  setIsModalOpen(false); // Close modal (for FloatingActionButton)
		} catch (error) {
		  alert('Failed to send message. Please try again.');
		}
	  }
	};


  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center space-x-2 text-sm md:text-base"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 md:h-5 md:w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          <span className="hidden md:inline">Ask aw Query</span>
        </button>
      </div><div className="fixed bottom-8 left-8">
         <div  >
                  <a href="https://wa.me/+919876832535?text=" target="_blank">
                    <img src={'images/wicon.png'} width="60" alt="aaa" />
                  </a>
          </div>
      </div>


      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Ask a Query</h2>
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
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Query *</label>
                <textarea
                  name="query"
                  placeholder="Your Query (at least 20 words)"
                  value={formData.query}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  rows="5"
                  required
                />
                {errors.query && <p className="text-red-500 text-sm mt-1">{errors.query}</p>}
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingActionButton;