import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import Card from '../ui/Card';
import Chip from '../ui/Chip';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'HIT Metaverse - VIRTUAL OPEN CAMPUS',
            description: '大学公認のメタバースサークルを設立し、毎年600名以上を動員するバーチャルオープンキャンパスを主催。clusterを活用したステージ企画やキャンパスツアーを実施。',
            tags: ['Leadership', 'Event Planning', 'cluster', 'VR'],
            link: '#',
            featured: true,
        },
        {
            id: 2,
            title: 'Irodori - AI Wallpaper App',
            description: '法人登記前の「Fuwalief」という名義で、Claude Codeを活用して開発した生成AI壁紙アプリ。ユーザーの好みに合わせたアートワークを生成。現在クローズドベータテスト中。',
            tags: ['AI', 'App Development', 'Claude', 'Fuwalief'],
            link: '#',
            featured: false,
        },
        {
            id: 3,
            title: '猫神様の言うとおり',
            description: '2025年8月にサポーターズ主催ハッカソンにて2名で開発した自己啓発型Androidアプリ。Google Playにてリリース済み。',
            tags: ['Android', 'Kotlin', 'Hackathon'],
            link: '#',
            featured: false,
        },
        {
            id: 4,
            title: 'MVSIA',
            description: 'メタバースの音楽ライブを盛り上げる団体の広報担当として、ポスター作成や広報デザインを担当。',
            tags: ['Design', 'PR', 'Metaverse'],
            link: '#',
            featured: false,
        }
    ];

    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Projects & Works</h2>

                    <div className="projects-grid">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={project.featured ? 'project-card-wrapper featured' : 'project-card-wrapper'}
                            >
                                <Card className="project-card" hoverable={true}>
                                    <div className="project-content">
                                        <div className="project-header">
                                            <h3 className="project-title">{project.title}</h3>
                                            <div className="project-links">
                                                {/* Example icons, functional links can be added later */}
                                                <a href={project.link} target="_blank" rel="noreferrer"><FiExternalLink /></a>
                                            </div>
                                        </div>

                                        <p className="project-description">{project.description}</p>

                                        <div className="project-tags">
                                            {project.tags.map(tag => (
                                                <Chip key={tag} label={tag} className="project-tag" />
                                            ))}
                                        </div>
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

export default Projects;
