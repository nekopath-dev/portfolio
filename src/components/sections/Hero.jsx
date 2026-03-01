import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
    const fullText = "Hello, I'm Tanasuke.";
    const [typedText, setTypedText] = useState("");
    const controls = useAnimation();
    const [animationDone, setAnimationDone] = useState(false);

    // Array of icons to explode out
    const orbitIcons = [
        { icon: "brush", angle: -30, distance: 120, delay: 0 },
        { icon: "code", angle: 30, distance: 130, delay: 0.1 },
        { icon: "search", angle: 150, distance: 120, delay: 0.2 },
        { icon: "palette", angle: 210, distance: 130, delay: 0.3 }
    ];

    useEffect(() => {
        const sequence = async () => {
            // Wait for initial avatar scale up
            await new Promise(resolve => setTimeout(resolve, 800));

            // Explode out
            await controls.start(i => ({
                opacity: 1,
                x: Math.cos((orbitIcons[i].angle * Math.PI) / 180) * orbitIcons[i].distance,
                y: Math.sin((orbitIcons[i].angle * Math.PI) / 180) * orbitIcons[i].distance,
                scale: 1,
                transition: { type: "spring", stiffness: 200, damping: 15, delay: orbitIcons[i].delay }
            }));

            // Hold briefly
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Implode back in
            await controls.start(i => ({
                opacity: 0,
                x: 0,
                y: 0,
                scale: 0.5,
                transition: { type: "spring", stiffness: 300, damping: 25, delay: orbitIcons[i].delay * 0.5 }
            }));

            setAnimationDone(true);
        };

        sequence();
    }, [controls]);

    // Start typing animation only AFTER the explosion finishes
    useEffect(() => {
        if (!animationDone) return;

        setTypedText(""); // Ensure it starts empty

        const typingInterval = setInterval(() => {
            setTypedText(prev => {
                if (prev.length < fullText.length) {
                    return fullText.slice(0, prev.length + 1);
                }
                clearInterval(typingInterval);
                return prev;
            });
        }, 100);

        return () => clearInterval(typingInterval);
    }, [animationDone]);
    return (
        <section id="hero" className="hero-section">
            {/* Background Blur Orbs */}
            <div className="aurora-container">
                <div className="aurora aurora-1"></div>
                <div className="aurora aurora-2"></div>
            </div>

            <div className="container hero-content">
                {/* Profile Avatar and Orbit Wrapper */}
                <div style={{ position: 'relative' }}>

                    {/* Orbiting Icons */}
                    {orbitIcons.map((item, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            animate={controls}
                            initial={{ opacity: 0, x: 0, y: 0, scale: 0.5 }}
                            className="orbit-icon"
                        >
                            <span className="material-symbols-outlined">{item.icon}</span>
                        </motion.div>
                    ))}

                    <motion.div
                        className="hero-avatar-wrapper"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        style={{ zIndex: 2, position: 'relative' }}
                    >
                        <div className="hero-avatar-inner">
                            <img src="/face.png" alt="Tanasuke Avatar" className="hero-avatar" />
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={animationDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="hero-text-wrapper"
                >
                    <div className="hero-search-bar">
                        <span className="material-symbols-outlined search-icon">search</span>

                        <h1 className="hero-title">
                            <span className="google-gradient-text">{typedText}</span>
                            <span className="typing-cursor"></span>
                        </h1>

                        <div className="search-icons-right">
                            <span className="material-symbols-outlined cursor-pointer hover:text-white transition-colors" title="音声検索">mic</span>
                            <span className="material-symbols-outlined cursor-pointer hover:text-white transition-colors" title="画像検索">center_focus_strong</span>
                        </div>
                    </div>

                    <div className="hero-tags">
                        <span className="hero-tag">クリエイター</span>
                        <span className="hero-tag-dot">•</span>
                        <span className="hero-tag">エンジニア</span>
                        <span className="hero-tag-dot">•</span>
                        <span className="hero-tag">デザイナー</span>
                    </div>

                    <p className="hero-subtitle">
                        機能と美しさを融合させた、モダンなデジタル体験を構築します。MD3の原則に基づき、UIデザインとフロントエンドエンジニアリングに情熱を注いでいます。
                    </p>

                    <div className="hero-cta-group">
                        <motion.button
                            className="hero-cta primary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            <span className="material-symbols-outlined">visibility</span>
                            <span>作品を見る</span>
                        </motion.button>

                        <motion.button
                            className="hero-cta secondary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            <span className="material-symbols-outlined">description</span>
                            <span>経歴を表示</span>
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            <div
                className="scroll-indicator-wrapper"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <div className="scroll-mouse">
                    <motion.div
                        className="scroll-wheel"
                        animate={{ y: [0, 16, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    />
                </div>
                <span className="material-symbols-outlined scroll-arrow">keyboard_arrow_down</span>
            </div>
        </section>
    );
};

export default Hero;
