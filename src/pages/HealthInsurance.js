import React  from 'react';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
const HealthInsurance = () => {

  const plans = [
    {
      id: 1,
      name: 'Diabetes Safe ',
      desc: 'Diabetics! Star Health brings you Diabetes Safe Insurance Policy that covers not just complications of Diabetes (both Type I and Type II) but also regular hospitalization, Personal Accident and Outpatient Expenses as well!',
      features: ['',],
      image: '/images/image_1.png', // Path to image in the public folder
      pdf: 'https://github.com/Gurkamal13/insurance/raw/main/STAR%20Diabetes-Safe-Brochure.pdf',

    },
    {
      id: 2,
      name: 'Star Cardiac Care ',
      desc: 'Specially designed policy for individuals aged between 7 and 70 years who are diagnosed with cardiac ailments and treated with cardiac surgical intervention.',
      features: ['',],
      image: '/images/image_2.png', // Path to image in the public folder
      pdf: 'https://github.com/Gurkamal13/insurance/raw/main/Star-Cardiac-Care-Brochure_Curved.pdf',

    },
    {
      id: 3,
      name: 'Star Health Assure ',
      desc: 'The Star Health Assure policy is a health insurance plan that covers medical expenses for individuals and families. It can be purchased on an individual or floater basis.',
      features: ['',],
      image: 'images/image_3.png', // Path to image in the public folder
      pdf: 'https://github.com/Gurkamal13/insurance/raw/main/StarHealthAssureInsurancePolicy-Brochure.pdf',
    },
    {
      id: 4,
      name: 'Smart Health Pro',
      desc: 'Smart Health Pro is a pro-customer and flexible policy that offers a vast range of sum insured options between Rs. 5 lakhs and Rs. 1 crore. Smart Health Pro is a unique indemnity health insurance product only available online, which covers expenses incurred on hospitalization due to Illness or...',
      features: ['',],
      image: '/images/image_4.png', // Path to image in the public folder
      pdf: 'https://github.com/Gurkamal13/insurance/raw/main/Brochure_Smart_Health_Pro_V_2_Web_d48ce59a74.pdf',
     },
    {
      id: 5,
      name: 'Star Comprehensive',
      desc: 'A comprehensive health insurance policy refers to an all-inclusive plan that offers broad coverage in medical emergencies with lifetime.',
      features: ['',],
      image: '/images/image_5.png', // Path to image in the public folder
      pdf: 'https://github.com/Gurkamal13/insurance/raw/main/Brochure_Star_Comprehensive_Insurance_Policy_V_15_Web_633bcfcaaf.pdf',
    },
    {
      id: 6,
      name: 'Young Star',
      desc: 'Young Star Insurance Policy is a customisable health plan that provides hospitalisation coverage for people up to the age of 40 years and comes in gold and ....',
      features: ['',],
      image: '/images/image_6.png', // Path to image in the public folder
      pdf: 'https://github.com/Gurkamal13/insurance/raw/main/Brochure_Young_Star_Insurance_Policy_V_9_Web_782fb9d5a9.pdf',
    }
    ,{
      id: 7,
      name: 'Super Star',
      desc: 'Super Star offers up to 21 optional covers, enabling you to customise your policy to meet your specific requirements and preferences.',
      features: ['',],
      image: '/images/image_7.png', // Path to image in the public folder
      pdf: 'https://github.com/Gurkamal13/insurance/raw/main/Brochure_Super_Star Revised.pdf',
    },
  ];


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto p-4">

        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 text-center mb-8">
          Health Insurance Plans
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
             <Link
                   to={{
                     pathname: '/query-form',
                     state: { selectedPlan: plan.name }, // Pass the selected plan name
                   }}
                   className="block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 text-center"
                 >
                  {plan.name}
                 </Link>


              <img
                src={plan.image} // Use the image path from the public folder
                alt={plan.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-1xl font-semibold antialiased md:subpixel-antialiased mb-4">{plan.desc}</p>
                <ul className="mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="text-gray-700 mb-2">
                      {feature}
                    </li>
                  ))}
                </ul>
                {/* Link to the Query Form page with plan data */}

              </div>
                 <div className="p-6">
                      <p className="text-gray-700 mb-4">{plan.details}</p>
                      <a
                        href={plan.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                      >
                        Download PDF
                      </a>
          </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default HealthInsurance;