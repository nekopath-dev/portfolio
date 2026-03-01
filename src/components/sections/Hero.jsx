import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            {/* Background Blur Orbs */}
            <div className="aurora-container">
                <div className="aurora aurora-1"></div>
                <div className="aurora aurora-2"></div>
            </div>

            <div className="container hero-content">
                <motion.div
                    className="hero-avatar-wrapper"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="hero-avatar-inner">
                        <img src="/avatar.png" alt="Tanasuke Avatar" className="hero-avatar" />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                    className="hero-text-wrapper"
                >
                    <h1 className="hero-title">
                        <span className="gemini-spark" title="Gemini AI inspired design">こんにちは</span>、<span className="text-gradient font-medium">タナスケです。</span>
                    </h1>

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
            </div>
        </section>
    );
};

export default Hero;
