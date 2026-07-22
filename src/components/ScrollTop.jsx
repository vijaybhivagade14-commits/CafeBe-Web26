import React, { useState, useEffect } from 'react';
import styles from './ScrollTop.module.css';

const ScrollTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // 🚀 Premium Custom Smooth Scroll
  const scrollToTop = () => {
    const startingY = window.pageYOffset;
    const duration = 1000; // 1000ms (1 second) for a luxurious slow glide. Adjust if needed!
    const startTime = performance.now();

    // Premium Easing Curve: easeOutQuart 
    // (Starts quick to feel responsive, then smoothly slows down at the top)
    const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeProgress = easeOutQuart(progress);

      window.scrollTo(0, startingY * (1 - easeProgress));

      if (elapsed < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  return (
    <button
      className={`${styles.button} ${show ? styles.visible : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <img src="/images/spoon3.png" alt="Scroll Up" className={styles.forkIcon} />
    </button>
  );
};

export default ScrollTop;
