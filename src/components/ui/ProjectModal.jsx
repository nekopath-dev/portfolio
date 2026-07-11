import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiExternalLink } from 'react-icons/fi';
import Chip from './Chip';
import './ProjectModal.css';

const ProjectModal = ({ project, isOpen, onClose }) => {
    // Prevent background scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen || !project) return null;

    const { details } = project;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="modal-overlay" onClick={onClose}>
                    <motion.div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.3, type: 'spring', damping: 25, stiffness: 300 }}
                    >
                        <button className="modal-close-btn" onClick={onClose}>
                            <FiX size={24} />
                        </button>

                        <div className="modal-scroll-area">
                            {details?.images && details.images.length > 0 && (
                                <div className="modal-hero-image">
                                    <img src={details.images[0]} alt={project.title} />
                                </div>
                            )}

                            <div className="modal-header-section">
                                <h2 className="modal-title">{project.title}</h2>
                                <div className="modal-tags">
                                    {project.tags.map(tag => (
                                        <Chip key={tag} label={tag} className="project-tag" />
                                    ))}
                                </div>
                            </div>

                            <div className="modal-body-section">
                                {details?.eventInfo && (
                                    <div className="detail-block">
                                        <h3>コンテスト・イベント情報</h3>
                                        <p>{details.eventInfo}</p>
                                    </div>
                                )}

                                {details?.collaborators && (
                                    <div className="detail-block">
                                        <h3>共同制作者</h3>
                                        <p>{details.collaborators}</p>
                                    </div>
                                )}

                                {details?.background && (
                                    <div className="detail-block">
                                        <h3>開発背景</h3>
                                        {details.background.split('\n').map((line, i) => (
                                            <p key={i}>{line}</p>
                                        ))}
                                    </div>
                                )}

                                {details?.tools && details.tools.length > 0 && (
                                    <div className="detail-block">
                                        <h3>使用ツール・技術</h3>
                                        <ul>
                                            {details.tools.map((tool, i) => (
                                                <li key={i}>{tool}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {details?.flow && details.flow.length > 0 && (
                                    <div className="detail-block">
                                        <h3>プログラムフロー・仕様</h3>
                                        <ol>
                                            {details.flow.map((step, i) => (
                                                <li key={i}>{step}</li>
                                            ))}
                                        </ol>
                                    </div>
                                )}

                                {details?.impressions && (
                                    <div className="detail-block">
                                        <h3>感想</h3>
                                        {details.impressions.split('\n').map((line, i) => (
                                            <p key={i}>{line}</p>
                                        ))}
                                    </div>
                                )}

                                {details?.future && (
                                    <div className="detail-block">
                                        <h3>その後・将来</h3>
                                        {details.future.split('\n').map((line, i) => (
                                            <p key={i}>{line}</p>
                                        ))}
                                    </div>
                                )}

                                {details?.links && details.links.length > 0 && (
                                    <div className="detail-block links-block">
                                        <h3>関連リンク</h3>
                                        <ul>
                                            {details.links.map((linkItem, i) => (
                                                <li key={i}>
                                                    <a href={linkItem.url} target="_blank" rel="noreferrer" className="modal-link">
                                                        <FiExternalLink />
                                                        <span>{linkItem.title || linkItem.url}</span>
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
