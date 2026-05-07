import React from 'react';
import { motion } from 'framer-motion';
import { SiGithub, SiX, SiZenn } from 'react-icons/si';
import { FiBookOpen } from 'react-icons/fi';
import Card from '../ui/Card';
import Timeline from '../ui/Timeline';
import './About.css';

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
                                <span className="material-symbols-outlined notranslate " translate="no">verified</span>
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
                                <a href="https://zenn.dev/lamne" target="_blank" rel="noopener noreferrer" className="profile-link" title="Zenn">
                                    <SiZenn size={20} />
                                </a>
                                <a href="https://note.com/lamne_blog" target="_blank" rel="noopener noreferrer" className="profile-link" title="Note">
                                    <FiBookOpen size={20} />
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Content */}
                    <div className="about-content">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="section-title">自己紹介</h2>
                            <p className="about-text">
                                大学を卒業し、現在は<strong>法政大学大学院 情報科学研究科</strong>に所属しています。<br /><br />
                                学部時代にはVRソーシャルサークル「HIT Metaverse」を自ら設立し、代表として数多くのイベント企画や組織運営を経験しました。
                                また、Google AI Student Ambassador としての活動を通じ、リーダーシップや最新AI技術の活用にも関心を深めています。
                            </p>
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
                                    <span className="material-symbols-outlined notranslate " translate="no" translate="no">school</span>
                                </div>
                                <h4 className="role-title">大学院生</h4>
                                <p className="role-org">法政大学大学院</p>
                                <p className="role-desc">情報科学研究科にて、高度な情報技術の学習と研究活動に従事しています。</p>
                            </div>

                            <div className="role-card red">
                                <div className="role-icon-wrapper">
                                    <span className="material-symbols-outlined notranslate " translate="no" translate="no">military_tech</span>
                                </div>
                                <h4 className="role-title">学生コミュニティアンバサダー</h4>
                                <p className="role-org">Google AI</p>
                                <p className="role-desc">2026年4月より活動中。以前はLead AmbassadorとしてWeekly Challenge MVPを獲得するなどAIコミュニティを牽引。</p>
                            </div>

                            <div className="role-card yellow">
                                <div className="role-icon-wrapper">
                                    <span className="material-symbols-outlined notranslate " translate="no" translate="no">groups</span>
                                </div>
                                <h4 className="role-title">サークル設立・代表</h4>
                                <p className="role-org">HIT Metaverse</p>
                                <p className="role-desc">40名規模のVRサークルを設立・運営。VIRTUAL OPEN CAMPUSでは600名の動員を達成。</p>
                            </div>

                            <div className="role-card green">
                                <div className="role-icon-wrapper">
                                    <span className="material-symbols-outlined notranslate " translate="no" translate="no">code_blocks</span>
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
