import React from 'react';
import { motion } from 'framer-motion';
import { FiBook, FiAward, FiStar } from 'react-icons/fi';
import Card from '../ui/Card';
import Timeline from '../ui/Timeline';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">About Me</h2>

                    <div className="about-grid">
                        <div className="about-text-content">
                            <motion.img
                                src="/profile.png"
                                alt="Profile"
                                className="about-profile-img"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            />
                            <p className="about-description">
                                私は現在、広島工業大学 情報学部 情報コミュニケーション学科に在籍しており、
                                来る2026年4月より<strong>法政大学大学院 情報科学研究科</strong>へ進学予定です。<br /><br />
                                大学入学時にVRソーシャルサークル「HIT Metaverse」を自ら設立し、代表として数多くのイベント企画や組織運営を経験しました。
                                また、Google AI Student Ambassador としての活動を通じ、リーダーシップや最新AI技術の活用にも関心を深めています。
                            </p>
                        </div>

                        <div className="about-cards-container">
                            <Card className="about-card" hoverable={true}>
                                <FiBook className="about-card-icon" />
                                <h3>Education</h3>
                                <p>
                                    <strong>法政大学大学院</strong><br />情報科学研究科 (2026.04~)<br /><br />
                                    <strong>広島工業大学</strong><br />情報コミュニケーション学科
                                </p>
                            </Card>

                            <Card className="about-card" hoverable={true}>
                                <FiAward className="about-card-icon" />
                                <h3>Ambassador</h3>
                                <p>
                                    <strong>Google AI Student Ambassador</strong><br />
                                    Lead Ambassador<br />
                                    <span className="highlight-text">Weekly Challenge MVP 獲得</span>
                                </p>
                            </Card>

                            <Card className="about-card" hoverable={true}>
                                <FiStar className="about-card-icon" />
                                <h3>Leadership</h3>
                                <p>
                                    <strong>HIT Metaverse</strong> 代表<br />
                                    40名規模のサークル設立・運営<br />
                                    VIRTUAL OPEN CAMPUS主催 (600名動員)
                                </p>
                            </Card>
                        </div>
                    </div>

                    <motion.div
                        className="timeline-section-wrapper"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <h3 className="timeline-section-title">History</h3>
                        <Timeline />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
