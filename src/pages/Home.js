import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import KeyFeatures from '../components/KeyFeatures';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <KeyFeatures />
      <Testimonials />
      <CallToAction />
    </motion.div>
  );
};

export default Home;