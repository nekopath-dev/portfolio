import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            {/* Background Aurora Effect */}
            <div className="aurora-container">
                <div className="aurora aurora-1"></div>
                <div className="aurora aurora-2"></div>
                <div className="aurora aurora-3"></div>
            </div>

            <div className="container hero-content">
                <div className="hero-grid">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="hero-text-wrapper"
                    >
                        <h2 className="hero-greeting">Hello, I'm</h2>
                        <h1 className="hero-title">
                            <span className="text-gradient">Tanasuke</span><br />
                            Creator / Engineer / Designer
                        </h1>
                        <p className="hero-subtitle">
                            Crafting experiences beyond reality, blending technology and creativity.
                        </p>

                        <motion.button
                            className="hero-cta"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            View My Work
                        </motion.button>
                    </motion.div>

                    <motion.div
                        className="hero-avatar-wrapper"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        <img src="/avatar.png" alt="My Avatar" className="hero-avatar" />
                    </motion.div>
                </div>

                <motion.div
                    className="scroll-indicator"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                >
                    <FiArrowDown size={32} />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
