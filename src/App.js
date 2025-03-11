import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import HealthInsurance from './pages/HealthInsurance';
import QueryForm from './pages/QueryForm'; // Import the QueryForm component
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/health-insurance" element={<HealthInsurance />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <QueryForm /> {/* Add the QueryForm component here */}
      <Footer />
    </Router>
  );
};

export default App;