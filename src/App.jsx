import React, { useState, useEffect } from 'react';
import Navigation from './components/layout/Navigation';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import confetti from 'canvas-confetti';
import { SiGithub, SiX, SiZenn } from 'react-icons/si';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isAppLoaded, setIsAppLoaded] = useState(false);

  // Simple scroll spy to update active nav link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for navbar

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const offsetTop = top + window.scrollY;
          const offsetBottom = bottom + window.scrollY;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} isAppLoaded={isAppLoaded} />
      <main>
        <Hero onAnimationComplete={() => setIsAppLoaded(true)} isAppLoaded={isAppLoaded} />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer id="contact" className="footer">
        <div className="footer-top">
          <h2 className="footer-title">Let's Connect</h2>
          <p className="footer-subtitle">
            お気軽にお問い合わせください。新しい機会、コラボレーション、あるいは技術やデザインについての雑談でも大歓迎です。
          </p>
          <a href="#contact" className="footer-fab" onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact-form-section')?.scrollIntoView({ behavior: 'smooth' });
            setActiveSection('contact');
          }}>
            <span className="material-symbols-outlined notranslate" translate="no">edit</span>
            <span>メールを送る</span>
          </a>
        </div>

        <div className="footer-bottom">
          <div className="footer-row">
            <div className="footer-links">
              <span className="footer-link cursor-pointer transition-colors hover:text-white" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>日本</span>
              <span className="footer-link cursor-pointer transition-colors hover:text-white" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>Tanasuke について</span>

              <span className="footer-link cursor-pointer transition-colors hover:text-white" onClick={() => {
                confetti({ particleCount: 50, spread: 60, colors: ['#4285F4'], origin: { y: 0.8 } }); // Google Blue
              }}>広告</span>

              <span className="footer-link cursor-pointer transition-colors hover:text-white" onClick={() => {
                confetti({ particleCount: 50, spread: 60, colors: ['#34A853'], origin: { y: 0.8 } }); // Google Green
              }}>ビジネス</span>
            </div>
            <div className="footer-links">
              <a href="https://github.com/Tanasuke" target="_blank" rel="noopener noreferrer" className="footer-link" title="GitHub"><SiGithub size={24} /></a>
              <a href="https://twitter.com/Tanasuke" target="_blank" rel="noopener noreferrer" className="footer-link" title="X (Twitter)"><SiX size={24} /></a>
              <a href="https://zenn.dev/Tanasuke" target="_blank" rel="noopener noreferrer" className="footer-link" title="Zenn"><SiZenn size={24} /></a>
            </div>
          </div>
          <div className="footer-row">
            <div className="footer-links">
              <span className="footer-link cursor-pointer transition-colors hover:text-white" onClick={() => {
                document.body.style.transition = "filter 0.5s";
                document.body.style.filter = "blur(10px)";
                setTimeout(() => document.body.style.filter = "none", 2000);
              }}>プライバシー</span>

              <span className="footer-link cursor-pointer transition-colors hover:text-white" onClick={() => {
                document.body.style.transition = "transform 1s ease-in-out";
                document.body.style.transform = "rotate(360deg)";
                setTimeout(() => document.body.style.transform = "none", 1000);
              }}>規約</span>

              <span className="footer-link cursor-pointer transition-colors hover:text-white" onClick={() => alert('設定モーダル表示（今後実装予定）')}>設定</span>
            </div>
            <div className="lucky-btn" title="インターネットがない？" onClick={() => {
              confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
              });
            }}>
              <span className="material-symbols-outlined notranslate" translate="no">videogame_asset</span>
              <span>I'm Feeling Lucky</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
