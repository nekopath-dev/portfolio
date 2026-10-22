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
const getTargetX = (item, isMobile, screenWidth = 1200) => {
    if (isMobile) {
        // スマホ画面幅に合わせて安全かつダイナミックに広げる
        const maxOuter = Math.min(150, Math.floor((screenWidth - 64) / 2));
        const inner = Math.floor(maxOuter * 0.54);
        const dist = item.level === "inner" ? inner : maxOuter;
        return item.side === "left" ? -dist : dist;
    }
    // デスクトップ：アバター（直径160px、半径80px）からダイナミックに広げる
    const innerDist = 155;
    const outerDist = 280;
    const dist = item.level === "inner" ? innerDist : outerDist;
    return item.side === "left" ? -dist : dist;
};

// 4つのアイコンのSVG描画コンポーネント（パス形成アニメーション用）
const DevIcon = ({ color, pathControls }) => (
    <svg viewBox="0 0 24 24" className="opening-svg-icon" style={{ filter: `drop-shadow(0 0 6px ${color})` }} fill="none">
        <motion.path
            d="M8 7L3 12L8 17"
            stroke={color}
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={pathControls}
        />
        <motion.path
            d="M16 7L21 12L16 17"
            stroke={color}
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={pathControls}
        />
        <motion.path
            d="M13.5 5.5L10.5 18.5"
            stroke={color}
            strokeWidth="2.4"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={pathControls}
        />
    </svg>
);

const AiIcon = ({ color, pathControls, fillControls }) => (
    <svg viewBox="0 0 24 24" className="opening-svg-icon" style={{ filter: `drop-shadow(0 0 6px ${color})` }} fill="none">
        {/* メインの4角星（輪郭線） */}
        <motion.path
            d="M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z"
            stroke={color}
            strokeWidth="2.0"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={pathControls}
        />
        {/* メイン星の内部の塗り */}
        <motion.path
            d="M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z"
            fill={color}
            initial={{ opacity: 0 }}
            animate={fillControls}
        />
        {/* 右上の小さな星 */}
        <motion.path
            d="M19 3C19 5 17.5 6.5 16 6.5C17.5 6.5 19 8 19 10C19 8 20.5 6.5 22 6.5C20.5 6.5 19 5 19 3Z"
            stroke={color}
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={pathControls}
        />
        {/* 左下の小さな星 */}
        <motion.path
            d="M5 16C5 17.2 4 18.2 3 18.2C4 18.2 5 19.2 5 20.5C5 19.2 6 18.2 7 18.2C6 18.2 5 17.2 5 16Z"
            stroke={color}
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={pathControls}
        />
    </svg>
);

const DesignIcon = ({ color, pathControls, fillControls }) => (
    <svg viewBox="0 0 24 24" className="opening-svg-icon" style={{ filter: `drop-shadow(0 0 6px ${color})` }} fill="none">
        {/* パレット外周 */}
        <motion.path
            d="M12 3C6.5 3 2 7.5 2 13C2 17.5 5.5 21 10 21C11 21 12 20.1 12 19C12 18.5 11.8 18 11.5 17.6C11.2 17.2 11 16.6 11 16C11 14.9 11.9 14 13 14H15C18.3 14 21 11.3 21 8C21 5.2 17 3 12 3Z"
            stroke={color}
            strokeWidth="2.0"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={pathControls}
        />
        {/* 絵の具ドット */}
        <motion.circle cx="6.5" cy="11.5" r="1.8" fill={color} initial={{ opacity: 0, scale: 0 }} animate={fillControls} />
        <motion.circle cx="9.5" cy="7.5" r="1.8" fill={color} initial={{ opacity: 0, scale: 0 }} animate={fillControls} />
        <motion.circle cx="14.5" cy="7.5" r="1.8" fill={color} initial={{ opacity: 0, scale: 0 }} animate={fillControls} />
        <motion.circle cx="17.5" cy="11.5" r="1.8" fill={color} initial={{ opacity: 0, scale: 0 }} animate={fillControls} />
    </svg>
);

const RocketIcon = ({ color, pathControls, fillControls }) => (
    <svg viewBox="0 0 24 24" className="opening-svg-icon" style={{ filter: `drop-shadow(0 0 6px ${color})` }} fill="none">
        {/* ロケット本体 */}
        <motion.path
            d="M12 2.5C12 2.5 7.5 6.5 7.5 12.5C7.5 14.8 8.4 16.6 9.3 17.6L12 16.2L14.7 17.6C15.6 16.6 16.5 14.8 16.5 12.5C16.5 6.5 12 2.5 12 2.5Z"
            stroke={color}
            strokeWidth="2.0"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={pathControls}
        />
        {/* 窓 */}
        <motion.circle
            cx="12" cy="9.5" r="1.8"
            stroke={color}
            strokeWidth="1.6"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={pathControls}
        />
        {/* 翼 */}
        <motion.path
            d="M7.5 13L4.5 16L6.5 18L8.8 16.2"
            stroke={color}
            strokeWidth="2.0"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={pathControls}
        />
        <motion.path
            d="M16.5 13L19.5 16L17.5 18L15.2 16.2"
            stroke={color}
            strokeWidth="2.0"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={pathControls}
        />
        {/* 噴射炎 */}
        <motion.path
            d="M10.8 18L12 21.5L13.2 18"
            stroke={color}
            strokeWidth="2.0"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={pathControls}
        />
        {/* 噴射炎の塗り */}
        <motion.path
            d="M10.8 18L12 21.5L13.2 18Z"
            fill={color}
            initial={{ opacity: 0 }}
            animate={fillControls}
        />
    </svg>
);

const renderOpeningIcon = (id, color, pathControls, fillControls) => {
    switch (id) {
        case "dev":
            return <DevIcon color={color} pathControls={pathControls} />;
        case "ai":
            return <AiIcon color={color} pathControls={pathControls} fillControls={fillControls} />;
        case "design":
            return <DesignIcon color={color} pathControls={pathControls} fillControls={fillControls} />;
        case "metaverse":
            return <RocketIcon color={color} pathControls={pathControls} fillControls={fillControls} />;
        default:
            return null;
    }
};

// Module-level flag so opening animation plays only once per session
let hasPlayedOpeningAnimation = false;

const Hero = ({ onAnimationComplete }) => {
    const isReturning = hasPlayedOpeningAnimation;
    const fullText = "Hello, I'm Tanasuke.";
    const [typedText, setTypedText] = useState("");
    const iconControls = useAnimation();
    const ballControls = useAnimation();
    const plateControls = useAnimation();
    const pathControls = useAnimation();
    const fillControls = useAnimation();
    const ringControls = useAnimation();
    const avatarControls = useAnimation();
    const [animationDone, setAnimationDone] = useState(isReturning);
    const [typingSettled, setTypingSettled] = useState(isReturning);

    // Keep the latest callback without retriggering the animation effect
    const onAnimationCompleteRef = useRef(onAnimationComplete);
    useEffect(() => {
        onAnimationCompleteRef.current = onAnimationComplete;
    }, [onAnimationComplete]);

    useEffect(() => {
        if (hasPlayedOpeningAnimation) {
            setAnimationDone(true);
            setTypingSettled(true);
            onAnimationCompleteRef.current?.();
            return;
        }

        const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
        const isMobile = screenWidth < 640;

        const sequence = async () => {
            // 1. Initial short pause with avatar appearing in center
            await new Promise(resolve => setTimeout(resolve, 400));

            // 2. Pop out colorful solid balls horizontally from avatar center
            await Promise.all([
                iconControls.start(i => ({
                    opacity: 1,
                    x: getTargetX(horizontalIcons[i], isMobile, screenWidth),
                    y: 0,
                    scale: 1,
                    transition: {
                        type: "spring",
                        stiffness: 260,
                        damping: 18,
                        delay: horizontalIcons[i].delay
                    }
                })),
                ballControls.start(i => ({
                    scale: 1,
                    opacity: 1,
                    transition: {
                        duration: 0.35,
                        delay: horizontalIcons[i].delay
                    }
                }))
            ]);

            // 短いタメ（定位置着地）
            await new Promise(resolve => setTimeout(resolve, 80));

            // 3. Forming Animation: 丸い球が弾けて展開し、中からアイコンが形成される！
            await Promise.all([
                // 丸い球がパッと弾けて消える
                ballControls.start(i => ({
                    scale: [1, 1.4, 0],
                    opacity: [1, 0.8, 0],
                    transition: {
                        duration: 0.35,
                        ease: "easeOut"
                    }
                })),
                // 外枠プレートと背景がふわっと出現
                plateControls.start(i => ({
                    opacity: 1,
                    scale: [0.6, 1],
                    transition: {
                        duration: 0.4,
                        ease: [0.16, 1, 0.3, 1]
                    }
                })),
                // 形成を強調する光のリングがフワッと一度だけ広がる
                ringControls.start(i => ({
                    scale: [0.6, 1.3],
                    opacity: [0.9, 0],
                    transition: {
                        duration: 0.5,
                        ease: "easeOut"
                    }
                })),
                // アイコンのストローク（線）がスルスルと描画され、形になる！
                pathControls.start({
                    pathLength: 1,
                    opacity: 1,
                    transition: {
                        duration: 0.55,
                        ease: "easeInOut",
                        delay: 0.05
                    }
                }),
                // アイコンの塗りとアクセントがフワッと灯る
                fillControls.start({
                    opacity: 0.9,
                    scale: 1,
                    transition: {
                        duration: 0.35,
                        ease: "easeOut",
                        delay: 0.35
                    }
                })
            ]);

            // 4. Hold & Showcase (完成したアイコンを美しく見せる時間: 約0.75秒)
            await new Promise(resolve => setTimeout(resolve, 750));

            // 5. Implode / Collapse back into avatar center (中央へ引っ込む！)
            await Promise.all([
                iconControls.start(i => ({
                    opacity: 0,
                    x: 0,
                    y: 0,
                    scale: 0.15,
                    transition: {
                        duration: 0.38,
                        ease: [0.4, 0, 0.2, 1],
                        delay: horizontalIcons[i].level === "outer" ? 0 : 0.07
                    }
                })),
                plateControls.start({
                    opacity: 0,
                    scale: 0.2,
                    transition: { duration: 0.3 }
                }),
                pathControls.start({
                    opacity: 0,
                    transition: { duration: 0.25 }
                }),
                fillControls.start({
                    opacity: 0,
                    transition: { duration: 0.25 }
                })
            ]);

            // 6. Avatar absorbs icons with a subtle spring bounce
            await avatarControls.start({
                scale: [1.15, 1.22, 1.15],
                transition: { duration: 0.25, ease: "easeOut" }
            });

            // 7. Move Avatar up to standard position
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
    }, [iconControls, ballControls, plateControls, pathControls, fillControls, ringControls, avatarControls]);

    // Start typing animation only AFTER the opening finishes
    useEffect(() => {
        if (!animationDone) return;

        const typingInterval = setInterval(() => {
            setTypedText(prev => {
                if (prev.length < fullText.length) {
                    const next = fullText.slice(0, prev.length + 1);
                    if (next.length === fullText.length) {
                        setTypingSettled(true);
                    }
                    return next;
                }
                clearInterval(typingInterval);
                return prev;
            });
        }, 80);

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
                            title={item.title}
                        >
                            {/* 1. 飛び出し時の丸い球（カラーバブル） */}
                            <motion.div
                                className="opening-icon-ball"
                                custom={index}
                                animate={ballControls}
                                initial={{ scale: 0.8, opacity: 1 }}
                                style={{
                                    backgroundColor: item.color,
                                    boxShadow: `0 0 16px ${item.color}, 0 0 32px ${item.bgGlow}`
                                }}
                            />

                            {/* 2. アイコンの背景プレート（丸が弾けた後に現れる） */}
                            <motion.div
                                className="opening-icon-plate"
                                custom={index}
                                animate={plateControls}
                                initial={{ opacity: 0, scale: 0.6 }}
                                style={{
                                    borderColor: `${item.color}80`,
                                    boxShadow: `0 4px 24px ${item.bgGlow}, inset 0 0 14px ${item.color}25`
                                }}
                            />

                            {/* 3. 形成時に広がる光のリング */}
                            <motion.div
                                className="opening-icon-ring"
                                custom={index}
                                animate={ringControls}
                                initial={{ opacity: 0, scale: 0.6 }}
                                style={{ borderColor: item.color }}
                            />

                            {/* 4. アニメーションで形成されるSVGアイコン */}
                            {renderOpeningIcon(item.id, item.color, pathControls, fillControls)}
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
                        <span className="material-symbols-outlined notranslate search-icon" translate="no">search</span>

                        <div className="hero-search-input-area">
                            <h1 className="hero-title">
                                <span className={`google-gradient-text ${isReturning ? 'settled' : typingSettled ? 'flow-settle' : ''}`}>
                                    {typedText}
                                </span>
                                <span className="typing-cursor"></span>
                            </h1>
                        </div>

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
                        <span className="hero-tag">エンジニア</span>
                        <span className="hero-tag-dot">•</span>
                        <span className="hero-tag">PdM</span>
                        <span className="hero-tag-dot">•</span>
                        <span className="hero-tag">クリエイター</span>
                    </div>

                    <p className="hero-subtitle" style={{ display: 'none' }}>
                        人を笑顔にする"面白いもの"を、技術でつくる。エンジニアとして力をつけ、プロダクトマネージャーとして事業を育てることを目指しています。
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
