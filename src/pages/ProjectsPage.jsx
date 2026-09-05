import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData, projectCategories } from '../data/projectsData';
import './ProjectsPage.css';

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category.includes(activeCategory));

  return (
    <motion.div
      className="projects-page"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
    >
      <div className="container">
        <header className="projects-page-header">
          <h1 className="page-title">Projects & Works</h1>
          <p className="page-subtitle">
            AI自動化、Web・Androidアプリケーション、サークル立ち上げからコミュニティ運営までの制作・活動実績です。
          </p>
        </header>

        {/* M3 Filter Chips */}
        <div className="m3-filter-row">
          {projectCategories.map((category) => (
            <button
              key={category}
              type="button"
              className={`m3-chip-filter ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category === 'All' && <span className="material-symbols-outlined notranslate" style={{ fontSize: '18px' }} translate="no">apps</span>}
              {category === 'AI・自動化' && <span className="material-symbols-outlined notranslate" style={{ fontSize: '18px' }} translate="no">smart_toy</span>}
              {category === 'アプリ・開発' && <span className="material-symbols-outlined notranslate" style={{ fontSize: '18px' }} translate="no">code</span>}
              {category === 'コミュニティ・組織' && <span className="material-symbols-outlined notranslate" style={{ fontSize: '18px' }} translate="no">groups</span>}
              <span>{category}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
              >
                <Link to={`/projects/${project.id}`} className="project-card-link">
                  <div className="m3-project-card">
                    <div className="project-media-banner">
                      {project.details?.images ? (
                        <img src={project.details.images[0]} alt={project.title} loading="lazy" />
                      ) : (
                        <div className="project-icon-placeholder" style={{ color: project.accentColor }}>
                          <span className="material-symbols-outlined notranslate" style={{ fontSize: '36px' }} translate="no">
                            {project.icon || 'code'}
                          </span>
                        </div>
                      )}

                      {project.featured && (
                        <div className="project-card-badge">
                          <span className="material-symbols-outlined notranslate" style={{ fontSize: '14px' }} translate="no">star</span>
                          Featured
                        </div>
                      )}
                    </div>

                    <div className="m3-card-body">
                      <h2 className="m3-card-title">{project.title}</h2>
                      <p className="m3-card-desc">{project.description}</p>

                      <div className="m3-card-tags">
                        {project.tags.map((tag) => (
                          <span key={tag} className="m3-card-tag">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="m3-card-footer">
                        <span>ケーススタディを読む</span>
                        <span className="material-symbols-outlined notranslate" translate="no">arrow_forward</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectsPage;
