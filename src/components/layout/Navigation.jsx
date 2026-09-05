import React, { useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import './Navigation.css';

const Navigation = ({ isAppLoaded = true }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home', exact: true },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactClick = () => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 250);
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <motion.div
        className="navbar-container"
        initial={{ opacity: 0, y: -72 }}
        animate={isAppLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: -72 }}
        transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
      >
        <div className="navbar-logo" onClick={handleLogoClick}>
          <div className="logo-icon-wrapper">
            <img src="/face.png" alt="Tanasuke" className="nav-avatar" />
          </div>
          <span className="logo-text">Tanasuke</span>
        </div>

        {/* Desktop Menu - M3 Pill Navigation */}
        <div className="navbar-links desktop-only">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.exact}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="m3-active-indicator"
                      className="m3-pill-active-bg"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}

          <button
            type="button"
            className="nav-link nav-contact-btn"
            onClick={handleContactClick}
          >
            Contact
          </button>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="mobile-only hamburger" onClick={toggleMenu} aria-label="Menu Toggle">
          {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.exact}
                className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <button
              type="button"
              className="mobile-link text-left"
              onClick={handleContactClick}
            >
              Contact
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
