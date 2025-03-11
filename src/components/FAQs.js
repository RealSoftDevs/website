import React, { useState } from 'react';

const faqs = [
  {
    id: 1,
    question: 'What is covered under the Basic Plan?',
    answer: 'The Basic Plan covers essential health needs, including doctor visits and emergency care.',
  },
  {
    id: 2,
    question: 'Can I switch plans later?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time.',
  },
  {
    id: 3,
    question: 'How do I file a claim?',
    answer: 'You can file a claim online through your account or contact our support team.',
  },
];

const FAQs = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleAnswer = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-white p-6 rounded-lg shadow-md">
              <button
                onClick={() => toggleAnswer(faq.id)}
                className="w-full flex justify-between items-center text-left"
              >
                <h3 className="text-xl font-semibold">{faq.question}</h3>
                <span className="text-blue-600 text-2xl">
                  {activeId === faq.id ? '-' : '+'}
                </span>
              </button>
              {activeId === faq.id && (
                <p className="mt-4 text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;