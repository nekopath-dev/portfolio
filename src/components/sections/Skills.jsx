import React from 'react';
import { motion } from 'framer-motion';
import Chip from '../ui/Chip';
import Card from '../ui/Card';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: "開発",
            icon: "code",
            skills: ["React", "JavaScript/TypeScript", "Android (Kotlin)", "HTML/CSS", "Python"]
        },
        {
            title: "AI & 機械学習",
            icon: "smart_toy",
            skills: ["Claude Code", "Generative AI", "Cursor", "Git/GitHub", "Vite"]
        },
        {
            title: "デザイン",
            icon: "draw",
            skills: ["UI/UX", "Material Design", "Figma", "Poster Graphic Design"]
        },
        {
            title: "ソフトスキル",
            icon: "groups",
            skills: ["Leadership", "Event Planning", "Public Relations", "Community Management"]
        }
    ];

    return (
        <section id="skills" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">スキル</h2>

                    <div className="skills-grid">
                        {skillCategories.map((category, index) => (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <Card className="skill-card" hoverable={true}>
                                    <div className="skill-header">
                                        <span className="skill-icon material-symbols-outlined">{category.icon}</span>
                                        <h3 className="skill-title">{category.title}</h3>
                                    </div>
                                    <div className="skill-chips">
                                        {category.skills.map(skill => (
                                            <Chip key={skill} label={skill} />
                                        ))}
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
