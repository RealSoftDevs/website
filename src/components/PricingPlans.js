import React from 'react';

const plans = [
  {
    id: 1,
    name: 'Basic Plan',
    price: '₹1000/month',
    features: ['Coverage for basic health needs', '24/7 Customer Support', 'Free Checkups'],
  },
  {
    id: 2,
    name: 'Premium Plan',
    price: '₹2000/month',
    features: ['Comprehensive coverage', '24/7 Customer Support', 'Free Checkups', 'Dental Care'],
  },
  {
    id: 3,
    name: 'Family Plan',
    price: '₹2500/month',
    features: ['Coverage for entire family', '24/7 Customer Support', 'Free Checkups', 'Dental Care'],
  },
];

const PricingPlans = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div key={plan.id} className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-4xl font-semibold mb-4">{plan.price}</p>
              <ul className="mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="text-gray-700 mb-2">
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;