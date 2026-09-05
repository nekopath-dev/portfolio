import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';
import Skills from '../components/sections/Skills';
import Contact from '../components/sections/Contact';
import MediaCard from '../components/ui/MediaCard';
import MediaModal from '../components/ui/MediaModal';
import { projectsData } from '../data/projectsData';
import { mediaData } from '../data/mediaData';
import './HomePage.css';

const HomePage = ({ onAnimationComplete }) => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  // ピックアップ実績（featured なもの、または主要プロジェクト）
  const featuredProjects = projectsData.filter((p) => p.featured);
  const featuredMedia = mediaData.filter((m) => m.featured);

  return (
    <motion.div
      className="home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
    >
      {/* 1. Google検索風 Hero Section */}
      <Hero onAnimationComplete={onAnimationComplete} />

      {/* 2. About Digest Section */}
      <section id="home-about" className="home-digest-section">
        <div className="container">
          <div className="section-header-row">
            <div className="section-heading-group">
              <span className="section-eyebrow">
                <span className="material-symbols-outlined notranslate" style={{ fontSize: '18px' }} translate="no">person</span>
                Who I am
              </span>
              <h2 className="home-section-title">About Me & Philosophy</h2>
              <p className="home-section-desc">
                法政大学大学院で高度情報技術を専攻しながら、Google AIアンバサダー活動やサークル設立・個人開発を推進。
              </p>
            </div>

            <Link to="/about" className="m3-btn m3-btn-tonal">
              <span>詳しい自己紹介・経歴を見る</span>
              <span className="material-symbols-outlined notranslate" translate="no">arrow_forward</span>
            </Link>
          </div>

          <div className="home-about-digest-card">
            <p className="home-about-text">
              2003年生まれ。広島工業大学から2026年に<strong>法政大学大学院 情報科学研究科</strong>に進学。
              学部1年で学内サークル「HIT Metaverse」を立ち上げ、600名規模のバーチャルオープンキャンパスを主催・成功させました。
              現在は生成AIと開発自動化に注力し、Google AI学生アンバサダー MVP受賞や Claude Code / OpenClaw を用いたアプリ制作を行っています。
            </p>

            <div className="role-cards">
              <div className="role-card">
                <div className="role-icon-wrapper">
                  <span className="material-symbols-outlined notranslate" translate="no">school</span>
                </div>
                <h4 className="role-title">大学院生</h4>
                <p className="role-org">法政大学大学院</p>
                <p className="role-desc">情報科学研究科</p>
              </div>

              <div className="role-card red">
                <div className="role-icon-wrapper">
                  <span className="material-symbols-outlined notranslate" translate="no">military_tech</span>
                </div>
                <h4 className="role-title">
                  <span className="keep-together">コミュニティ</span><span className="keep-together">アンバサダー</span>
                </h4>
                <p className="role-org">Google AI</p>
                <p className="role-desc">Weekly Challenge MVP受賞</p>
              </div>

              <div className="role-card yellow">
                <div className="role-icon-wrapper">
                  <span className="material-symbols-outlined notranslate" translate="no">groups</span>
                </div>
                <h4 className="role-title">
                  <span className="keep-together">サークル設立</span>・<span className="keep-together">代表</span>
                </h4>
                <p className="role-org">HIT Metaverse</p>
                <p className="role-desc">40名組織 / 600名動員</p>
              </div>

              <div className="role-card green">
                <div className="role-icon-wrapper">
                  <span className="material-symbols-outlined notranslate" translate="no">code_blocks</span>
                </div>
                <h4 className="role-title">個人開発</h4>
                <p className="role-org">Fuwalief</p>
                <p className="role-desc">AI壁紙アプリ「Irodori」等</p>
              </div>
            </div>

            <div className="home-about-actions" style={{ marginTop: '28px' }}>
              <Link to="/about" className="m3-btn m3-btn-filled">
                <span>生い立ち・価値観・タイムラインを読む</span>
                <span className="material-symbols-outlined notranslate" translate="no">arrow_forward</span>
              </Link>
              <Link
                to="/philosophy"
                className="m3-btn m3-btn-outlined"
              >
                <span>PHILOSOPHY</span>
                <span className="material-symbols-outlined notranslate" translate="no">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Projects Section */}
      <section className="home-digest-section" style={{ paddingTop: '20px' }}>
        <div className="container">
          <div className="section-header-row">
            <div className="section-heading-group">
              <span className="section-eyebrow">
                <span className="material-symbols-outlined notranslate" style={{ fontSize: '18px' }} translate="no">folder_special</span>
                Selected Works
              </span>
              <h2 className="home-section-title">注目の実績・プロジェクト</h2>
              <p className="home-section-desc">
                Google AIアンバサダー活動、自動化システム、メタバースイベントなどの代表作です。
              </p>
            </div>

            <Link to="/projects" className="m3-btn m3-btn-tonal">
              <span>すべての実績を見る（全{projectsData.length}件）</span>
              <span className="material-symbols-outlined notranslate" translate="no">arrow_forward</span>
            </Link>
          </div>

          <div className="featured-projects-grid">
            {featuredProjects.map((project) => (
              <Link key={project.id} to={`/projects/${project.id}`} className="project-card-link">
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
                    <div className="project-card-badge">
                      <span className="material-symbols-outlined notranslate" style={{ fontSize: '14px' }} translate="no">star</span>
                      Featured
                    </div>
                  </div>

                  <div className="m3-card-body">
                    <h3 className="m3-card-title">{project.title}</h3>
                    <p className="m3-card-desc">{project.description}</p>

                    <div className="m3-card-tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="m3-card-tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="m3-card-footer">
                      <span>詳細ケーススタディ</span>
                      <span className="material-symbols-outlined notranslate" translate="no">arrow_forward</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Media & TV Features Section */}
      <section className="home-digest-section" style={{ paddingTop: '20px' }}>
        <div className="container">
          <div className="section-header-row">
            <div className="section-heading-group">
              <span className="section-eyebrow">
                <span className="material-symbols-outlined notranslate" style={{ fontSize: '18px' }} translate="no">verified</span>
                Press & Social Proof
              </span>
              <h2 className="home-section-title">注目メディア掲載・取材実績</h2>
              <p className="home-section-desc">
                地上波テレビ取材やWEBメディア特集、公式プレスリリースなど、対外的に取り上げられた活動実績です。
              </p>
            </div>

            <Link to="/about" className="m3-btn m3-btn-tonal">
              <span>すべてのメディア掲載を見る（全{mediaData.length}件）</span>
              <span className="material-symbols-outlined notranslate" translate="no">arrow_forward</span>
            </Link>
          </div>

          <div className="home-media-grid">
            {featuredMedia.map((media) => (
              <MediaCard
                key={media.id}
                media={media}
                onClick={(m) => setSelectedMedia(m)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Skills Section */}
      <Skills />

      {/* 6. Contact Section */}
      <Contact />

      {/* Video Modal */}
      <MediaModal
        media={selectedMedia}
        isOpen={Boolean(selectedMedia)}
        onClose={() => setSelectedMedia(null)}
      />
    </motion.div>
  );
};

export default HomePage;
