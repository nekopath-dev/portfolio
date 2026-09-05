import React, { useState } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/layout/Navigation';
import TopProgressBar from './components/ui/TopProgressBar';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import AboutPage from './pages/AboutPage';
import confetti from 'canvas-confetti';
import { SiGithub, SiX, SiLinkedin } from 'react-icons/si';
import NoteIcon from './components/ui/NoteIcon';
import './App.css';

function App() {
  const [isAppLoaded, setIsAppLoaded] = useState(true);
  const location = useLocation();

  return (
    <div className="app-container">
      {/* 1. YouTube-style Top Linear Progress Bar */}
      <TopProgressBar />

      {/* 2. Persistent Navigation Bar */}
      <Navigation isAppLoaded={isAppLoaded} />

      {/* 3. Main Content with Atomic Page Transitions */}
      <main className="main-content">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={<HomePage onAnimationComplete={() => setIsAppLoaded(true)} />}
            />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route
              path="*"
              element={<HomePage onAnimationComplete={() => setIsAppLoaded(true)} />}
            />
          </Routes>
        </AnimatePresence>
      </main>

      {/* 4. Google Style Persistent Footer */}
      <footer className="footer">
        <div className="footer-bottom">
          <div className="footer-row">
            <div className="footer-links">
              <span
                className="footer-link cursor-pointer transition-colors hover:text-white"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                日本
              </span>

              <Link to="/about" className="footer-link cursor-pointer transition-colors hover:text-white">
                Tanasuke について
              </Link>

              <Link to="/projects" className="footer-link cursor-pointer transition-colors hover:text-white">
                実績一覧
              </Link>

              <span
                className="footer-link cursor-pointer transition-colors hover:text-white"
                onClick={() => {
                  confetti({
                    particleCount: 50,
                    spread: 60,
                    colors: ['#4285F4'],
                    origin: { y: 0.8 },
                  });
                }}
              >
                広告
              </span>

              <span
                className="footer-link cursor-pointer transition-colors hover:text-white"
                onClick={() => {
                  confetti({
                    particleCount: 50,
                    spread: 60,
                    colors: ['#34A853'],
                    origin: { y: 0.8 },
                  });
                }}
              >
                ビジネス
              </span>
            </div>

            <div className="footer-links">
              <a href="https://github.com/nekopath-dev" target="_blank" rel="noopener noreferrer" className="footer-link" title="GitHub">
                <SiGithub size={22} />
              </a>
              <a href="https://x.com/tanasuke_fw" target="_blank" rel="noopener noreferrer" className="footer-link" title="X (Twitter)">
                <SiX size={22} />
              </a>
              <a href="https://www.linkedin.com/in/tanaka-yosuke/" target="_blank" rel="noopener noreferrer" className="footer-link" title="LinkedIn">
                <SiLinkedin size={22} />
              </a>
              <a href="https://note.com/lamne_blog" target="_blank" rel="noopener noreferrer" className="footer-link" title="Note">
                <NoteIcon size={22} />
              </a>
            </div>
          </div>

          <div className="footer-row">
            <div className="footer-links">
              <span
                className="footer-link cursor-pointer transition-colors hover:text-white"
                onClick={() => {
                  document.body.style.transition = 'filter 0.5s';
                  document.body.style.filter = 'blur(10px)';
                  setTimeout(() => (document.body.style.filter = 'none'), 2000);
                }}
              >
                プライバシー
              </span>

              <span
                className="footer-link cursor-pointer transition-colors hover:text-white"
                onClick={() => {
                  document.body.style.transition = 'transform 1s ease-in-out';
                  document.body.style.transform = 'rotate(360deg)';
                  setTimeout(() => (document.body.style.transform = 'none'), 1000);
                }}
              >
                規約
              </span>

              <span
                className="footer-link cursor-pointer transition-colors hover:text-white"
                onClick={() => alert('Material Design 3 & YouTube Seamless Transitions 稼働中！')}
              >
                設定
              </span>
            </div>

            <div
              className="lucky-btn"
              title="I'm Feeling Lucky"
              onClick={() => {
                confetti({
                  particleCount: 120,
                  spread: 80,
                  origin: { y: 0.6 },
                });
              }}
            >
              <span className="material-symbols-outlined notranslate" translate="no">
                videogame_asset
              </span>
              <span>I'm Feeling Lucky</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
