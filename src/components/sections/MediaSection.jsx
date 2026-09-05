import React, { useState } from 'react';
import { mediaData, mediaCategories } from '../../data/mediaData';
import MediaCard from '../ui/MediaCard';
import MediaModal from '../ui/MediaModal';
import './MediaSection.css';

const MediaSection = ({ 
  title = "Media Coverage & Features", 
  subtitle = "地上波テレビ番組での取材やWEBメディア特集、公式プレスリリースなど、対外的に取り上げられた活動実績です。" 
}) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedMedia, setSelectedMedia] = useState(null);

  const filteredMedia = mediaData.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  // 横長（TV）と縦長（Shorts/Reels）を綺麗に配置するためのレイアウト分類
  const tvMedia = filteredMedia.filter(m => m.format === 'landscape');
  const portraitMedia = filteredMedia.filter(m => m.format === 'portrait');

  return (
    <section className="media-section-container">
      <div className="media-section-header">
        <div className="media-header-badge">
          <span className="material-symbols-outlined notranslate" style={{ fontSize: '16px' }} translate="no">
            verified
          </span>
          Social Proof & Press
        </div>
        <h3 className="media-section-title">{title}</h3>
        <p className="media-section-subtitle">{subtitle}</p>

        {/* Filter Chips */}
        <div className="media-filter-chips">
          {mediaCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`media-filter-chip ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Media Grid */}
      <div className="media-display-area">
        {/* Landscape (TV取材) カード */}
        {tvMedia.length > 0 && (
          <div className="media-landscape-grid">
            {tvMedia.map((item) => (
              <MediaCard
                key={item.id}
                media={item}
                onClick={(m) => setSelectedMedia(m)}
              />
            ))}
          </div>
        )}

        {/* Portrait (Shorts & Reels) カード */}
        {portraitMedia.length > 0 && (
          <div className="media-portrait-grid">
            {portraitMedia.map((item) => (
              <MediaCard
                key={item.id}
                media={item}
                onClick={(m) => setSelectedMedia(m)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Video Modal */}
      <MediaModal
        media={selectedMedia}
        isOpen={Boolean(selectedMedia)}
        onClose={() => setSelectedMedia(null)}
      />
    </section>
  );
};

export default MediaSection;
