import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './TopProgressBar.css';

const TopProgressBar = () => {
  const location = useLocation();
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // ページ遷移時にトッププログレスバーを走らせる
    setIsVisible(true);
    setProgress(35);

    const stepTimer = setTimeout(() => {
      setProgress(75);
    }, 80);

    const completeTimer = setTimeout(() => {
      setProgress(100);
    }, 220);

    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      setProgress(0);
    }, 450);

    // 画面の一番上へスムーズにスクロール
    window.scrollTo({ top: 0, behavior: 'instant' });

    return () => {
      clearTimeout(stepTimer);
      clearTimeout(completeTimer);
      clearTimeout(hideTimer);
    };
  }, [location.pathname]);

  if (!isVisible && progress === 0) return null;

  return (
    <div className="top-progress-bar-container" aria-hidden="true">
      <div
        className={`top-progress-bar ${progress === 100 ? 'completing' : ''} ${!isVisible ? 'hidden' : ''}`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default TopProgressBar;
