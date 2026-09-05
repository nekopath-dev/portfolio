import React from 'react';
import { SiYoutube, SiInstagram } from 'react-icons/si';
import './MediaCard.css';

const MediaCard = ({ media, onClick, compact = false }) => {
  const isPortrait = media.format === 'portrait';

  return (
    <div
      className={`media-card ${isPortrait ? 'portrait-card' : 'landscape-card'} ${compact ? 'compact-card' : ''}`}
      onClick={() => onClick(media)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(media);
        }
      }}
    >
      {/* Thumbnail Container */}
      <div className="media-thumbnail-wrapper">
        <img
          src={media.thumbnail}
          alt={media.title}
          className="media-thumbnail-img"
          loading="lazy"
        />
        
        {/* Badges Overlay */}
        <div className="media-badges-overlay">
          <span
            className="media-type-badge"
            style={{
              backgroundColor: `color-mix(in srgb, ${media.badgeColor || 'var(--google-blue)'} 20%, rgba(15, 16, 20, 0.85))`,
              color: media.badgeColor || 'var(--google-blue)',
              borderColor: `color-mix(in srgb, ${media.badgeColor || 'var(--google-blue)'} 40%, transparent)`
            }}
          >
            {media.badge}
          </span>

          <span className="media-platform-badge">
            {media.type === 'instagram' ? (
              <SiInstagram size={14} color="#E1306C" />
            ) : (
              <SiYoutube size={14} color="#FF0000" />
            )}
            <span>{media.type === 'instagram' ? 'Instagram' : (isPortrait ? 'Shorts' : 'YouTube')}</span>
          </span>
        </div>

        {/* Hover Play Icon */}
        <div className="media-play-overlay">
          <div className="media-play-button">
            <span className="material-symbols-outlined notranslate" translate="no">play_arrow</span>
          </div>
        </div>
      </div>

      {/* Card Details */}
      <div className="media-card-body">
        <div className="media-card-source">{media.source}</div>
        <h4 className="media-card-title">{media.title}</h4>
        
        {!compact && (
          <p className="media-card-desc">{media.description}</p>
        )}

        {media.highlights && media.highlights.length > 0 && !compact && (
          <div className="media-card-highlights">
            {media.highlights.slice(0, 2).map((h, idx) => (
              <span key={idx} className="media-highlight-tag">
                #{h}
              </span>
            ))}
          </div>
        )}

        <div className="media-card-footer">
          <span className="watch-prompt">
            <span className="material-symbols-outlined notranslate" style={{ fontSize: '18px' }} translate="no">
              smart_display
            </span>
            <span>動画を再生する</span>
          </span>
          <span className="material-symbols-outlined notranslate arrow-icon" translate="no">
            arrow_forward
          </span>
        </div>
      </div>
    </div>
  );
};

export default MediaCard;
