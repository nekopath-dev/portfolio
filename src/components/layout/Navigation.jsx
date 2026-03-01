import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import './Navigation.css';

const Navigation = ({ activeSection, setActiveSection, isAppLoaded }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = (id) => {
    setActiveSection(id);
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <motion.div
        className="navbar-container"
        initial={{ opacity: 0, y: -72 }}
        animate={isAppLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: -72 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="navbar-logo" onClick={() => handleLinkClick('hero')}>
          <div className="logo-icon-wrapper">
            <img src="/face.png" alt="Tanasuke" className="nav-avatar" />
          </div>
          <span className="logo-text">Tanasuke</span>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-links desktop-only">
          {navLinks.map((link) => (
            <button
              key={link.id}
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              onClick={() => handleLinkClick(link.id)}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="mobile-only hamburger" onClick={toggleMenu}>
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                className={`mobile-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={() => handleLinkClick(link.id)}
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
