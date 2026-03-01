import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiTwitter } from 'react-icons/fi';
// Add SiZenn from simple-icons if you want an exact Zenn icon, for now using a placeholder or text
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="contact-content align-center"
                >
                    <h2 className="section-title">Let's Connect</h2>
                    <p className="contact-description">
                        デザインや開発のご相談、メタバース空間の構築など、<br />
                        お気軽にご連絡ください。
                    </p>

                    <div className="contact-links">
                        <a href="mailto:yousuke.hirayama@example.com" className="contact-button">
                            <FiMail className="contact-icon" />
                            <span>Email Me</span>
                        </a>

                        <a href="https://github.com/" target="_blank" rel="noreferrer" className="contact-social">
                            <FiGithub size={24} />
                        </a>
                        <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="contact-social">
                            <FiTwitter size={24} />
                        </a>
                        <a href="https://zenn.dev/" target="_blank" rel="noreferrer" className="contact-social text-icon">
                            Z
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
