import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';
import './Hero.css';

const Hero = ({ onAnimationComplete, isAppLoaded }) => {
    const fullText = "Hello, I'm Tanasuke.";
    const [typedText, setTypedText] = useState("");
    const controls = useAnimation();
    const avatarControls = useAnimation();
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
            // 1. Avatar starts large and in center (done via initial props)
            await new Promise(resolve => setTimeout(resolve, 500)); // Initial pause

            // 2. Explode icons out
            await controls.start(i => ({
                opacity: 1,
                x: Math.cos((orbitIcons[i].angle * Math.PI) / 180) * orbitIcons[i].distance,
                y: Math.sin((orbitIcons[i].angle * Math.PI) / 180) * orbitIcons[i].distance,
                scale: 1,
                transition: { type: "spring", stiffness: 200, damping: 15, delay: orbitIcons[i].delay }
            }));

            // 3. Hold briefly
            await new Promise(resolve => setTimeout(resolve, 1000));

            // 4. Implode icons back in
            await controls.start(i => ({
                opacity: 0,
                x: 0,
                y: 0,
                scale: 0.5,
                transition: { type: "spring", stiffness: 300, damping: 25, delay: orbitIcons[i].delay * 0.5 }
            }));

            // 5. Move Avatar up to standard position
            await avatarControls.start({
                y: 0,
                scale: 1,
                transition: { duration: 0.8, ease: "easeInOut" }
            });

            setAnimationDone(true);
            if (onAnimationComplete) {
                onAnimationComplete();
            }
        };

        sequence();
    }, [controls, avatarControls]);

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
                <motion.div
                    style={{ position: 'relative', zIndex: 20 }}
                    initial={{ y: "25vh", scale: 1.2 }}
                    animate={avatarControls}
                >
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
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="hero-avatar-inner">
                            <img src="/face.png" alt="Tanasuke Avatar" className="hero-avatar" />
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={animationDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="hero-text-wrapper"
                >
                    <div
                        className="hero-search-bar"
                        onClick={() => window.open("https://www.google.com/search?q=Tanasuke", "_blank")}
                        style={{ cursor: "pointer" }}
                        title="Googleで「Tanasuke」を検索"
                    >
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

                    <div className="hero-cta-group">
                        <motion.button
                            className="hero-cta secondary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => {
                                e.stopPropagation();
                                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            <span className="material-symbols-outlined">visibility</span>
                            <span>作品を見る</span>
                        </motion.button>

                        <motion.button
                            className="hero-cta secondary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => {
                                e.stopPropagation();
                                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            <span className="material-symbols-outlined">description</span>
                            <span>経歴を表示</span>
                        </motion.button>
                    </div>

                    <div className="hero-tags">
                        <span className="hero-tag">クリエイター</span>
                        <span className="hero-tag-dot">•</span>
                        <span className="hero-tag">エンジニア</span>
                        <span className="hero-tag-dot">•</span>
                        <span className="hero-tag">デザイナー</span>
                    </div>

                    <p className="hero-subtitle" style={{ display: 'none' }}>
                        機能と美しさを融合させた、モダンなデジタル体験を構築します。MD3の原則に基づき、UIデザインとフロントエンドエンジニアリングに情熱を注いでいます。
                    </p>
                </motion.div>
            </div>

            <motion.div
                className="scroll-indicator-wrapper"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                initial={{ opacity: 0 }}
                animate={animationDone ? { opacity: 0.6 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                <div className="scroll-mouse">
                    <motion.div
                        className="scroll-wheel"
                        animate={{ y: [0, 16, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    />
                </div>
                <span className="material-symbols-outlined scroll-arrow">keyboard_arrow_down</span>
            </motion.div>
        </section>
    );
};

export default Hero;
