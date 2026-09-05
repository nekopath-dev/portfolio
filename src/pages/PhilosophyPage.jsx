import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './PhilosophyPage.css';

const PhilosophyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'PHILOSOPHY - 技術の進歩を、人間の幸福の進歩へ | Tanasuke';
  }, []);

  return (
    <motion.div
      className="philosophy-page"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.35, ease: [0.2, 0, 0, 1] }}
    >
      {/* 1. Hero Section: 上が一切隠れずクリア、下部のみ美しくグラデーション暗転 */}
      <section className="philosophy-hero">
        <div className="philosophy-hero-bg">
          <img
            src="/philosophy-banner.png"
            alt="Philosophy Key Visual"
            className="philosophy-hero-img"
          />
          <div className="philosophy-hero-overlay" />
        </div>

        {/* Back Link at top left */}
        <div className="philosophy-hero-header">
          <Link to="/about" className="philosophy-back-btn">
            <span className="material-symbols-outlined notranslate" translate="no">arrow_back</span>
            About に戻る
          </Link>
        </div>

        {/* Desktop Sky Title: Canvaの原案通り、右上の開けた夕暮れの空に配置 */}
        <div className="philosophy-sky-text desktop-only">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <span className="sky-eyebrow">
              <span className="material-symbols-outlined notranslate" style={{ fontSize: '15px' }} translate="no">
                auto_awesome
              </span>
              CORE BELIEF & MANIFESTO
            </span>
            <h1 className="sky-title">PHILOSOPHY</h1>
            <p className="sky-subtitle">
              技術と人間の幸福についてのマニフェスト
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Main Manifesto Content */}
      <section className="philosophy-content-section">
        <div className="container philosophy-content-container">
          <motion.div
            className="philosophy-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            {/* Mobile Header: モバイル時は画像の上に文字を被せず、カード上部にすっきり配置 */}
            <div className="philosophy-mobile-header mobile-only">
              <span className="sky-eyebrow">
                <span className="material-symbols-outlined notranslate" style={{ fontSize: '14px' }} translate="no">
                  auto_awesome
                </span>
                CORE BELIEF & MANIFESTO
              </span>
              <h1 className="mobile-hero-title">PHILOSOPHY</h1>
              <p className="mobile-hero-subtitle">
                技術と人間の幸福についてのマニフェスト
              </p>
            </div>

            <div className="philosophy-quote-mark">
              <span className="material-symbols-outlined notranslate" translate="no">
                format_quote
              </span>
            </div>

            {/* 本文：言葉の強調は最後だけに集約し、道中は統一された美しいトーンで展開 */}
            <div className="philosophy-prose">
              {/* Part 1 */}
              <div className="prose-paragraph">
                <p>私たちは今、変化の激しい時代を生きている。</p>
                <p>絶えず様々なものが進化し、<br className="mobile-break" />つながり合い、世界は便利になった。</p>
                <p>AIが発展した現代、<br className="mobile-break" />社会はますます速く、賢くなっていく。</p>
              </div>

              {/* Part 2 */}
              <div className="prose-paragraph prose-break">
                <p>けれど、私は思う。</p>
                <p>効率化で生まれたはずの時間は、<br className="mobile-break" />どこへ行ったのだろう、と。</p>
              </div>

              <div className="prose-paragraph">
                <p>空いた場所には次のタスクが入り、</p>
                <p>できることが増えた分だけ、<br className="mobile-break" />求められることも増えていく。</p>
                <p>
                  「いつでもできる」は、いつのまにか<br className="mobile-break" />
                  「いつまでも、やらなければならない」に<br className="mobile-break" />変わってしまった。
                </p>
              </div>

              <div className="prose-paragraph prose-break">
                <p>
                  テクノロジーの進歩と、<br className="mobile-break" />
                  人間の幸福の進歩は、同じではない。
                </p>
              </div>

              {/* Part 3 */}
              <div className="prose-paragraph prose-break">
                <p>だから私は、一歩先を見つめる。</p>
                <p>効率化された先に、<br className="mobile-break" />本当に幸せはあるのだろうか。</p>
              </div>

              <div className="prose-paragraph">
                <p>人手不足だから仕方ない、<br className="mobile-break" />という声もあるだろう。</p>
                <p>それでも私は、<br className="mobile-break" />「仕方ない」の先を見たい。</p>
                <p>技術は本来、<br className="mobile-break" />人を笑顔にする道具だったはずだから。</p>
              </div>
            </div>

            {/* Core Statement Banner: 言葉の強調は最後（ここ）だけに集中 */}
            <motion.div
              className="philosophy-statement-card"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="statement-sub">Vision Statement</span>
              <h2 className="statement-title">
                技術の進歩を、<br className="mobile-break" />
                人間の幸福の進歩へ。
              </h2>
            </motion.div>

            {/* Actions & Navigation */}
            <div className="philosophy-actions">
              <div className="philosophy-main-buttons">
                <Link to="/about" className="m3-btn m3-btn-filled">
                  <span className="material-symbols-outlined notranslate" translate="no">account_circle</span>
                  生い立ち・経歴（About Me）を読む
                </Link>
                <Link to="/projects" className="m3-btn m3-btn-tonal">
                  <span className="material-symbols-outlined notranslate" translate="no">folder</span>
                  制作実績・プロジェクトを見る
                </Link>
              </div>

              <div className="philosophy-secondary-actions">
                <a
                  href="https://tanasuke.my.canva.site/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="philosophy-canva-link"
                >
                  <span className="material-symbols-outlined notranslate" style={{ fontSize: '16px' }} translate="no">open_in_new</span>
                  Canvaオリジナル資料を見る
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default PhilosophyPage;
