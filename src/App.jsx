import React, { useState, useEffect } from 'react';
import Navigation from './components/layout/Navigation';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

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
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="footer">
        <div className="footer-top">
          <h2 className="footer-title">未来を一緒に創りましょう</h2>
          <p className="footer-subtitle">
            お気軽にお問い合わせください。新しい機会、コラボレーション、あるいは技術やデザインについての雑談でも大歓迎です。
          </p>
          <a href="#contact" className="footer-fab" onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            setActiveSection('contact');
          }}>
            <span className="material-symbols-outlined">edit</span>
            <span>メールを送る</span>
          </a>
        </div>

        <div className="footer-bottom">
          <div className="footer-row">
            <div className="footer-links">
              <span className="footer-link">日本</span>
              <span className="footer-link">Tanasuke について</span>
              <span className="footer-link">広告</span>
              <span className="footer-link">ビジネス</span>
            </div>
            <div className="footer-links">
              <a href="#" className="footer-link">GitHub</a>
              <a href="#" className="footer-link">Twitter</a>
              <a href="#" className="footer-link">Zenn</a>
            </div>
          </div>
          <div className="footer-row">
            <div className="footer-links">
              <span className="footer-link">プライバシー</span>
              <span className="footer-link">規約</span>
              <span className="footer-link">設定</span>
            </div>
            <div className="lucky-btn" title="インターネットがない？">
              <span className="material-symbols-outlined">videogame_asset</span>
              <span>I'm Feeling Lucky</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
