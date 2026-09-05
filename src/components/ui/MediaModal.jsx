import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './MediaModal.css';

const MediaModal = ({ media, isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !media) return null;

  const isPortrait = media.format === 'portrait';
  const isInstagram = media.type === 'instagram';

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="media-modal-backdrop" onClick={onClose}>
          <motion.div
            className={`media-modal-container ${isPortrait ? 'portrait-container' : 'landscape-container'}`}
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.25, ease: [0.2, 0, 0, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="media-modal-header">
              <div className="media-modal-title-group">
                <span
                  className="media-modal-badge"
                  style={{
                    backgroundColor: `color-mix(in srgb, ${media.badgeColor || 'var(--google-blue)'} 16%, transparent)`,
                    color: media.badgeColor || 'var(--google-blue)',
                    borderColor: `color-mix(in srgb, ${media.badgeColor || 'var(--google-blue)'} 30%, transparent)`
                  }}
                >
                  {media.badge}
                </span>
                <span className="media-modal-source">{media.source}</span>
              </div>
              <button
                type="button"
                className="media-modal-close-btn"
                onClick={onClose}
                aria-label="閉じる"
              >
                <span className="material-symbols-outlined notranslate" translate="no">close</span>
              </button>
            </div>

            {/* Video Player Frame */}
            <div className={`media-modal-player-wrapper ${isPortrait ? 'portrait-frame' : 'landscape-frame'}`}>
              {isInstagram ? (
                <div className="instagram-modal-view">
                  <div className="instagram-preview-box">
                    <img src={media.thumbnail} alt={media.title} className="instagram-preview-img" />
                    <div className="instagram-overlay">
                      <span className="material-symbols-outlined notranslate play-icon-large" translate="no">play_arrow</span>
                      <p className="instagram-prompt-text">Instagram公式アプリ・Webで快適に視聴できます</p>
                      <a
                        href={media.mediaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="m3-btn m3-btn-filled ig-open-btn"
                      >
                        <span className="material-symbols-outlined notranslate" translate="no">open_in_new</span>
                        Instagramで動画を見る
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <iframe
                  className="media-iframe"
                  src={`https://www.youtube.com/embed/${media.embedId}?autoplay=1&rel=0`}
                  title={media.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              )}
            </div>

            {/* Modal Body Info */}
            <div className="media-modal-body">
              <h3 className="media-modal-title">{media.title}</h3>
              <p className="media-modal-desc">{media.description}</p>

              {media.highlights && media.highlights.length > 0 && (
                <div className="media-modal-highlights">
                  <span className="highlights-label">注目ポイント:</span>
                  <div className="highlights-chips">
                    {media.highlights.map((h, i) => (
                      <span key={i} className="highlight-chip">
                        <span className="material-symbols-outlined notranslate" style={{ fontSize: '14px' }} translate="no">check_circle</span>
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="media-modal-actions">
                <a
                  href={media.mediaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="m3-btn m3-btn-outlined"
                >
                  <span className="material-symbols-outlined notranslate" translate="no">open_in_new</span>
                  元の動画を新しいタブで開く
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default MediaModal;
