import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SiGithub, SiX, SiLinkedin } from 'react-icons/si';
import NoteIcon from '../ui/NoteIcon';
import Timeline from '../ui/Timeline';
import './About.css';

const MotionLink = motion.create(Link);

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="about-grid">

                    {/* Left Sidebar (Sticky) */}
                    <div className="about-sidebar">
                        <motion.div
                            className="profile-card"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="profile-img-container">
                                <img src="/face.png" alt="Profile" className="profile-img" />
                            </div>
                            <h3 className="profile-name">Tanasuke</h3>

                            <div className="profile-badge">
                                <span className="material-symbols-outlined notranslate" translate="no">verified</span>
                                Google AI Student Ambassador
                            </div>

                            <p className="text-center text-[var(--md-sys-color-on-surface-variant)] text-sm mb-6">
                                法政大学大学院<br />
                                情報科学研究科
                            </p>

                            <div className="profile-links">
                                <a href="https://github.com/nekopath-dev" target="_blank" rel="noopener noreferrer" className="profile-link" title="GitHub">
                                    <SiGithub size={20} />
                                </a>
                                <a href="https://x.com/tanasuke_fw" target="_blank" rel="noopener noreferrer" className="profile-link" title="X (Twitter)">
                                    <SiX size={20} />
                                </a>
                                <a href="https://www.linkedin.com/in/tanaka-yosuke/" target="_blank" rel="noopener noreferrer" className="profile-link" title="LinkedIn">
                                    <SiLinkedin size={20} />
                                </a>
                                <a href="https://note.com/lamne_blog" target="_blank" rel="noopener noreferrer" className="profile-link" title="Note">
                                    <NoteIcon size={20} />
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Content */}
                    <div className="about-content">
                        {/* PHILOSOPHY Banner */}
                        <MotionLink
                            to="/philosophy"
                            className="philosophy-banner"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="philosophy-banner-overlay" />
                            <div className="philosophy-banner-content">
                                <span className="philosophy-banner-text">PHILOSOPHY</span>
                                <span className="material-symbols-outlined notranslate philosophy-banner-arrow" translate="no">arrow_forward</span>
                            </div>
                        </MotionLink>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="section-title">自己紹介</h2>
                            <p className="about-text">
                                2003年生まれ。広島工業大学 情報学部 情報コミュニケーション学科から、2026年に<strong>法政大学大学院 情報科学研究科</strong>に進学。現在大学院1年生。<br /><br />
                                学部1年のときに、全国初の大学メタバースサークル（自称）のHIT Metaverseを設立し、VIRTUAL OPEN CAMPUS主催で600名以上の来場者を記録する。<br />
                                その他、全国大学メタバースサークル連盟（現：NUMA）やHIT Effectorという学生団体の設立を行う。<br /><br />
                                現在は生成AIに非常に興味があり、複数の資格を取得。<br />
                                Google AI学生アンバサダーでMVPを受賞したり、Claude Codeを使ったアプリ開発や、OpenClawによる自動化などに挑戦している。
                            </p>

                            <div className="about-traits">
                                <motion.div 
                                    className="trait-item"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                >
                                    <h4 className="trait-title">
                                        <span className="material-symbols-outlined notranslate " translate="no">favorite</span>
                                        価値観
                                    </h4>
                                    <h5 className="trait-subtitle">「後悔のない人生を生きる」「ないものは作ろう」</h5>
                                    <p className="trait-text">
                                        HIT Metaverseの成功を機に、自分に自信がつき、あらゆる選択肢を前にすると「自分の後悔のない選択肢はどれか」で判断をするようになりました。<br />
                                        失敗は成功のもとであると考え、日々様々なことに挑戦をしています。
                                    </p>
                                </motion.div>

                                <motion.div 
                                    className="trait-item"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    <h4 className="trait-title">
                                        <span className="material-symbols-outlined notranslate " translate="no">psychology</span>
                                        性格
                                    </h4>
                                    <h5 className="trait-subtitle">「面倒見の良い」性格です。</h5>
                                    <p className="trait-text">
                                        ただの業務連絡だけでは、メンバーとの信頼は勝ち取れません。<br />
                                        メンバーに積極的に連絡を取り、チームで活動するうえで報連相が滞らないよう、雑談や笑いも交えながら、相談しやすい、話しやすい雰囲気でいるように心がけています。
                                    </p>
                                </motion.div>

                                <motion.div 
                                    className="trait-item"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    <h4 className="trait-title">
                                        <span className="material-symbols-outlined notranslate " translate="no">trending_up</span>
                                        長所
                                    </h4>
                                    <ul className="trait-list">
                                        <li>目標を設定し、実現のために粘り強く頑張れるところ</li>
                                        <li>もしミスをしてしまっても、代替案をすぐに考え、行動するところ</li>
                                        <li>明るい性格で、とにかくなんでも挑戦をしてみるところ</li>
                                    </ul>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Role Cards */}
                        <motion.div
                            className="role-cards"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <div className="role-card"> {/* Default Blue */}
                                <div className="role-icon-wrapper">
                                    <span className="material-symbols-outlined notranslate" translate="no">school</span>
                                </div>
                                <h4 className="role-title">大学院生</h4>
                                <p className="role-org">法政大学大学院</p>
                                <p className="role-desc">情報科学研究科にて、高度な情報技術の学習と研究活動に従事しています。</p>
                            </div>

                            <div className="role-card red">
                                <div className="role-icon-wrapper">
                                    <span className="material-symbols-outlined notranslate" translate="no">military_tech</span>
                                </div>
                                <h4 className="role-title">学生コミュニティアンバサダー</h4>
                                <p className="role-org">Google AI</p>
                                <p className="role-desc">2026年4月より活動中。以前はLead AmbassadorとしてWeekly Challenge MVPを獲得するなどAIコミュニティを牽引。</p>
                            </div>

                            <div className="role-card yellow">
                                <div className="role-icon-wrapper">
                                    <span className="material-symbols-outlined notranslate" translate="no">groups</span>
                                </div>
                                <h4 className="role-title">サークル設立・代表</h4>
                                <p className="role-org">HIT Metaverse</p>
                                <p className="role-desc">40名規模のVRサークルを設立・運営。VIRTUAL OPEN CAMPUSでは600名の動員を達成。</p>
                            </div>

                            <div className="role-card green">
                                <div className="role-icon-wrapper">
                                    <span className="material-symbols-outlined notranslate" translate="no">code_blocks</span>
                                </div>
                                <h4 className="role-title">個人開発</h4>
                                <p className="role-org">Fuwalief / Tanasuke</p>
                                <p className="role-desc">「Irodori」などのアプリケーション開発や、「猫神様」などのゲーム制作を個人で推進中。</p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="timeline-section-wrapper"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h3 className="timeline-section-title">経歴・歴史</h3>
                            <Timeline />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
