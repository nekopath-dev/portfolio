import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import './Hero.css';

// 4 Icons representing identity and Google colors (2 on left, 2 on right)
const horizontalIcons = [
    {
        id: "dev",
        icon: "code",
        side: "left",
        level: "outer", // 一番左
        color: "#4285F4", // Google Blue
        bgGlow: "rgba(66, 133, 244, 0.35)",
        delay: 0.05,
        title: "Engineering"
    },
    {
        id: "ai",
        icon: "auto_awesome",
        side: "left",
        level: "inner", // アバターのすぐ左
        color: "#EA4335", // Google Red
        bgGlow: "rgba(234, 67, 53, 0.35)",
        delay: 0.12,
        title: "Google AI"
    },
    {
        id: "design",
        icon: "palette",
        side: "right",
        level: "inner", // アバターのすぐ右
        color: "#FBBC05", // Google Yellow
        bgGlow: "rgba(251, 188, 5, 0.35)",
        delay: 0.12,
        title: "Design"
    },
    {
        id: "metaverse",
        icon: "rocket_launch",
        side: "right",
        level: "outer", // 一番右
        color: "#34A853", // Google Green
        bgGlow: "rgba(52, 168, 83, 0.35)",
        delay: 0.05,
        title: "Metaverse & Innovation"
    }
];

// Helper to calculate target horizontal offset from center
const getTargetX = (item, isMobile) => {
    const innerDist = isMobile ? 66 : 108;
    const outerDist = isMobile ? 120 : 180;
    const dist = item.level === "inner" ? innerDist : outerDist;
    return item.side === "left" ? -dist : dist;
};

// Module-level flag so opening animation plays only once per session
let hasPlayedOpeningAnimation = false;

const Hero = ({ onAnimationComplete }) => {
    const isReturning = hasPlayedOpeningAnimation;
    const fullText = "Hello, I'm Tanasuke.";
    const [typedText, setTypedText] = useState("");
    const iconControls = useAnimation();
    const glyphControls = useAnimation();
    const ringControls = useAnimation();
    const avatarControls = useAnimation();
    const [animationDone, setAnimationDone] = useState(isReturning);

    // Keep the latest callback without retriggering the animation effect
    const onAnimationCompleteRef = useRef(onAnimationComplete);
    useEffect(() => {
        onAnimationCompleteRef.current = onAnimationComplete;
    }, [onAnimationComplete]);

    useEffect(() => {
        if (hasPlayedOpeningAnimation) {
            setAnimationDone(true);
            onAnimationCompleteRef.current?.();
            return;
        }

        const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;

        const sequence = async () => {
            // 1. Initial short pause with avatar appearing in center
            await new Promise(resolve => setTimeout(resolve, 400));

            // 2. Explode icons out horizontally to form a straight row
            await Promise.all([
                iconControls.start(i => ({
                    opacity: 1,
                    x: getTargetX(horizontalIcons[i], isMobile),
                    y: 0,
                    scale: 1,
                    transition: {
                        type: "spring",
                        stiffness: 280,
                        damping: 20,
                        delay: horizontalIcons[i].delay
                    }
                })),
                glyphControls.start(i => ({
                    scale: [0.3, 1.2, 1],
                    rotate: [horizontalIcons[i].side === "left" ? -35 : 35, 0],
                    transition: {
                        duration: 0.45,
                        delay: horizontalIcons[i].delay + 0.05,
                        ease: "easeOut"
                    }
                }))
            ]);

            // 3. Forming Animation (Holds & forms for ~1 second with Google-style pulse & micro-motion)
            await Promise.all([
                ringControls.start(i => ({
                    scale: [0.8, 1.35, 1],
                    opacity: [0.2, 0.85, 0.4],
                    transition: {
                        duration: 1.0,
                        ease: "easeInOut"
                    }
                })),
                glyphControls.start(i => ({
                    scale: [1, 1.15, 1],
                    filter: [
                        `drop-shadow(0 0 2px ${horizontalIcons[i].color})`,
                        `drop-shadow(0 0 10px ${horizontalIcons[i].color})`,
                        `drop-shadow(0 0 3px ${horizontalIcons[i].color})`
                    ],
                    transition: {
                        duration: 1.0,
                        ease: "easeInOut"
                    }
                }))
            ]);

            // 4. Implode icons back into avatar center (Google Account style collapse)
            await iconControls.start(i => ({
                opacity: 0,
                x: 0,
                y: 0,
                scale: 0.2,
                transition: {
                    duration: 0.35,
                    ease: [0.4, 0, 0.2, 1],
                    delay: horizontalIcons[i].level === "outer" ? 0 : 0.08
                }
            }));

            // Avatar absorbs icons with a subtle spring bounce
            await avatarControls.start({
                scale: [1.15, 1.22, 1.15],
                transition: { duration: 0.25, ease: "easeOut" }
            });

            // 5. Move Avatar up to standard position
            await avatarControls.start({
                y: 0,
                scale: 1,
                transition: { duration: 0.75, ease: [0.2, 0, 0, 1] }
            });

            hasPlayedOpeningAnimation = true;
            setAnimationDone(true);
            onAnimationCompleteRef.current?.();
        };

        sequence();
    }, [iconControls, glyphControls, ringControls, avatarControls]);

    // Start typing animation only AFTER the opening finishes
    useEffect(() => {
        if (!animationDone) return;

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
    const navigate = useNavigate();

    return (
        <section id="hero" className="hero-section">
            {/* Background Blur Orbs */}
            <div className="aurora-container">
                <div className="aurora aurora-1"></div>
                <div className="aurora aurora-2"></div>
            </div>

            <div className="container hero-content">
                {/* Profile Avatar and Horizontal Icons Center Stage */}
                <motion.div
                    style={{ position: 'relative', zIndex: 20 }}
                    initial={isReturning ? { y: 0, scale: 1 } : { y: "22vh", scale: 1.15 }}
                    animate={avatarControls}
                    className="hero-avatar-center-stage"
                >
                    {/* Horizontal 4 Icons (Left 2, Right 2) - Only on first visit */}
                    {!isReturning && horizontalIcons.map((item, index) => (
                        <motion.div
                            key={item.id}
                            custom={index}
                            animate={iconControls}
                            initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                            className={`opening-h-icon opening-h-icon-${item.level} opening-h-icon-${item.side}`}
                            style={{
                                borderColor: `${item.color}50`,
                                boxShadow: `0 4px 20px ${item.bgGlow}`
                            }}
                            title={item.title}
                        >
                            {/* Forming Pulse Ring */}
                            <motion.div
                                className="opening-icon-ring"
                                custom={index}
                                animate={ringControls}
                                initial={{ opacity: 0, scale: 0.8 }}
                                style={{ borderColor: item.color }}
                            />

                            {/* Material Symbol with Glow Formation */}
                            <motion.span
                                className="material-symbols-outlined notranslate opening-icon-glyph"
                                custom={index}
                                animate={glyphControls}
                                initial={{ scale: 0.4 }}
                                style={{ color: item.color }}
                                translate="no"
                            >
                                {item.icon}
                            </motion.span>
                        </motion.div>
                    ))}

                    <motion.div
                        className="hero-avatar-wrapper"
                        initial={{ opacity: isReturning ? 1 : 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: isReturning ? 0 : 0.6 }}
                    >
                        <div className="hero-avatar-inner">
                            <img src="/face.png" alt="Tanasuke Avatar" className="hero-avatar" />
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={isReturning ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    animate={animationDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: isReturning ? 0.3 : 0.8, ease: "easeOut" }}
                    className="hero-text-wrapper"
                >
                    <div
                        className="hero-search-bar"
                        onClick={() => window.open("https://www.google.com/search?q=Tanasuke", "_blank")}
                        style={{ cursor: "pointer" }}
                        title="Googleで「Tanasuke」を検索"
                    >
                        <span className="material-symbols-outlined notranslate" translate="no">search</span>

                        <h1 className="hero-title">
                            <span className="google-gradient-text">{typedText}</span>
                            <span className="typing-cursor"></span>
                        </h1>

                        <div className="search-icons-right">
                            <span className="material-symbols-outlined notranslate" translate="no" title="音声検索">mic</span>
                            <span className="material-symbols-outlined notranslate" translate="no" title="画像検索">center_focus_strong</span>
                        </div>
                    </div>

                    <div className="hero-cta-group">
                        <motion.button
                            className="hero-cta secondary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => {
                                e.stopPropagation();
                                navigate('/projects');
                            }}
                        >
                            <span className="material-symbols-outlined notranslate" translate="no">visibility</span>
                            <span>作品を見る</span>
                        </motion.button>

                        <motion.button
                            className="hero-cta secondary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => {
                                e.stopPropagation();
                                navigate('/about');
                            }}
                        >
                            <span className="material-symbols-outlined notranslate" translate="no">description</span>
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
                onClick={() => document.getElementById('home-about')?.scrollIntoView({ behavior: 'smooth' })}
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
                <span className="material-symbols-outlined notranslate" translate="no">keyboard_arrow_down</span>
            </motion.div>
        </section>
    );
};

export default Hero;
