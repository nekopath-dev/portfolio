import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projectsData';
import { mediaData } from '../data/mediaData';
import Skeleton from '../components/ui/Skeleton';
import MediaCard from '../components/ui/MediaCard';
import MediaModal from '../components/ui/MediaModal';
import './ProjectDetailPage.css';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);

  const currentIndex = projectsData.findIndex(
    (p) => p.id === id || String(p.numericId) === id
  );

  const project = projectsData[currentIndex];

  if (!project) {
    return (
      <div className="project-detail-page container" style={{ textAlign: 'center', paddingTop: '140px' }}>
        <h2>プロジェクトが見つかりませんでした</h2>
        <p style={{ margin: '20px 0', color: 'var(--md-sys-color-on-surface-variant)' }}>
          指定された作品IDは存在しないか、移動した可能性があります。
        </p>
        <Link to="/projects" className="m3-btn m3-btn-filled">
          <span className="material-symbols-outlined notranslate" translate="no">arrow_back</span>
          実績一覧に戻る
        </Link>
      </div>
    );
  }

  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;

  return (
    <motion.div
      className="project-detail-page"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.28, ease: [0.2, 0, 0, 1] }}
    >
      <div className="container detail-container">
        {/* Navigation Bar */}
        <div className="detail-nav-bar">
          <Link to="/projects" className="back-link">
            <span className="material-symbols-outlined notranslate" translate="no">arrow_back</span>
            実績一覧に戻る
          </Link>
        </div>

        {/* Header Summary Card */}
        <div className="detail-header-card">
          <div className="detail-meta-row">
            <span className="detail-category-badge">
              <span className="material-symbols-outlined notranslate" style={{ fontSize: '14px' }} translate="no">
                {project.icon || 'folder'}
              </span>
              {project.category?.join(', ')}
            </span>

            {project.details?.eventInfo && (
              <span className="detail-event-info">
                {project.details.eventInfo}
              </span>
            )}
          </div>

          <h1 className="detail-title">{project.title}</h1>
          <p className="detail-lead">{project.description}</p>

          <div className="detail-tags-row">
            {project.tags?.map((tag) => (
              <span key={tag} className="detail-tag">
                #{tag}
              </span>
            ))}
          </div>

          {/* Action Links */}
          {(project.link !== '#' || (project.details?.links && project.details.links.length > 0)) && (
            <div className="detail-action-buttons">
              {project.link !== '#' && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="m3-btn m3-btn-filled"
                >
                  <span className="material-symbols-outlined notranslate" translate="no">open_in_new</span>
                  プロジェクトを開く
                </a>
              )}

              {project.details?.links?.map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="m3-btn m3-btn-tonal"
                >
                  <span className="material-symbols-outlined notranslate" translate="no">link</span>
                  {item.title}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Media / Image Section with Skeleton */}
        {project.details?.images && project.details.images.length > 0 && (
          <div className="detail-media-card">
            {!imageLoaded && (
              <Skeleton
                width="100%"
                height="360px"
                borderRadius="16px"
                style={{ position: 'absolute', top: 0, left: 0 }}
              />
            )}
            <img
              src={project.details.images[0]}
              alt={project.title}
              className="detail-media-img"
              onLoad={() => setImageLoaded(true)}
              style={{ opacity: imageLoaded ? 1 : 0, transition: 'opacity 0.3s ease' }}
            />
          </div>
        )}

        {/* Collaborators */}
        {project.details?.collaborators && (
          <div className="case-study-section">
            <h2 className="case-study-section-title">
              <span className="material-symbols-outlined notranslate" translate="no">people</span>
              共同制作者
            </h2>
            <p className="case-study-text">{project.details.collaborators}</p>
          </div>
        )}

        {/* Background & Challenge */}
        {project.details?.background && (
          <div className="case-study-section">
            <h2 className="case-study-section-title">
              <span className="material-symbols-outlined notranslate" translate="no">lightbulb</span>
              背景・動機・課題
            </h2>
            <p className="case-study-text">{project.details.background}</p>
          </div>
        )}

        {/* Tech Stack & Tools */}
        {project.details?.tools && project.details.tools.length > 0 && (
          <div className="case-study-section">
            <h2 className="case-study-section-title">
              <span className="material-symbols-outlined notranslate" translate="no">build</span>
              使用技術・ツール
            </h2>
            <div className="tools-grid">
              {project.details.tools.map((tool, idx) => (
                <div key={idx} className="tool-chip">
                  <span className="material-symbols-outlined notranslate" style={{ fontSize: '16px' }} translate="no">terminal</span>
                  <span>{tool}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Execution Flow */}
        {project.details?.flow && project.details.flow.length > 0 && (
          <div className="case-study-section">
            <h2 className="case-study-section-title">
              <span className="material-symbols-outlined notranslate" translate="no">schema</span>
              動作フロー・処理の流れ
            </h2>
            <ul className="flow-steps-list">
              {project.details.flow.map((step, idx) => (
                <li key={idx} className="flow-step-item">
                  <span className="flow-step-number">{idx + 1}</span>
                  <span className="flow-step-content">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Impressions & Real Insights */}
        {project.details?.impressions && (
          <div className="case-study-section">
            <h2 className="case-study-section-title">
              <span className="material-symbols-outlined notranslate" translate="no">psychology</span>
              開発での工夫・反省・得られた気づき
            </h2>
            <p className="case-study-text">{project.details.impressions}</p>
          </div>
        )}

        {/* Future & Next Steps */}
        {project.details?.future && (
          <div className="case-study-section">
            <h2 className="case-study-section-title">
              <span className="material-symbols-outlined notranslate" translate="no">trending_up</span>
              成果・周囲からの反響・今後の展望
            </h2>
            <p className="case-study-text">{project.details.future}</p>
          </div>
        )}

        {/* Related Media Coverage & Videos */}
        {project.details?.relatedMediaIds && project.details.relatedMediaIds.length > 0 && (
          <div className="case-study-section project-related-media-section">
            <h2 className="case-study-section-title">
              <span className="material-symbols-outlined notranslate" translate="no">smart_display</span>
              関連メディア・取材映像
            </h2>
            <p className="case-study-text" style={{ marginBottom: '20px' }}>
              このプロジェクトに関連してテレビ番組や大学公式メディアで紹介された動画です。クリックするとその場で再生できます。
            </p>
            <div className="project-detail-media-grid">
              {mediaData
                .filter((m) => project.details.relatedMediaIds.includes(m.id))
                .map((media) => (
                  <MediaCard
                    key={media.id}
                    media={media}
                    onClick={(m) => setSelectedMedia(m)}
                  />
                ))}
            </div>
          </div>
        )}

        {/* Prev / Next Navigation Footer */}
        <div className="detail-page-footer-nav">
          {prevProject ? (
            <Link to={`/projects/${prevProject.id}`} className="back-link">
              <span className="material-symbols-outlined notranslate" translate="no">arrow_back</span>
              <span>前の実績: {prevProject.shortTitle || prevProject.title}</span>
            </Link>
          ) : <div />}

          {nextProject && (
            <Link to={`/projects/${nextProject.id}`} className="back-link">
              <span>次の実績: {nextProject.shortTitle || nextProject.title}</span>
              <span className="material-symbols-outlined notranslate" translate="no">arrow_forward</span>
            </Link>
          )}
        </div>
      </div>

      {/* Video Modal */}
      <MediaModal
        media={selectedMedia}
        isOpen={Boolean(selectedMedia)}
        onClose={() => setSelectedMedia(null)}
      />
    </motion.div>
  );
};

export default ProjectDetailPage;
