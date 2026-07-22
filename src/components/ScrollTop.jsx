import React, { useState, useEffect } from 'react';
// (We removed FiArrowUp because we are using your image now)
import styles from './ScrollTop.module.css';

const ScrollTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`${styles.button} ${show ? styles.visible : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      {/* Here is your fork image instead of the arrow! */}
      <img src="/images/spoon3.png" alt="Scroll Up" className={styles.forkIcon} />
    </button>
  );
};

export default ScrollTop;
