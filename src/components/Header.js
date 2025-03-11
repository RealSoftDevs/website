import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    // Add event listener when the menu is open
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Clean up the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex   items-center">
          <img
            src="images/logo.png" // Replace with your logo path or placeholder
            alt="Insurance Baazaar"
            className="h-10 w-auto "  // Adjust size as needed
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          ref={menuRef}
          className={`md:flex space-x-4 ${isMenuOpen ? 'block' : 'hidden'} mt-4 md:mt-0`}
        >
          <Link to="/" className="block md:inline hover:text-blue-200" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/health-insurance" className="block md:inline hover:text-blue-200" onClick={() => setIsMenuOpen(false)}>
            Health Insurance
          </Link>
          <Link to="/contact-us" className="block md:inline hover:text-blue-200" onClick={() => setIsMenuOpen(false)}>
            Contact Us
          </Link>
          <Link to="/about-us" className="block md:inline hover:text-blue-200" onClick={() => setIsMenuOpen(false)}>
            About Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;