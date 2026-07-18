import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowDown } from 'react-icons/fi';
import styles from './Hero.module.css';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (el) {
      el.classList.add(styles.visible);
    }
  }, []);

  return (
    <section className={styles.hero} ref={heroRef} aria-label="Welcome to Cafe BE">
      {/* Background Image */}
      <div className={styles.bgWrap}>
        {/* Example: Changing to a pizza background */}
        <img src="/images/pizza.png" alt="" className={styles.bgImage} aria-hidden="true" />
        <div className={styles.overlay} />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <span className={styles.badge}>★ Award-Winning Café Since 2018</span>
        <h1 className={styles.title}>
          Crafting <em>moments</em> with every cup & every plate.
        </h1>
        <p className={styles.subtitle}>
          A modern neighbourhood café serving seasonal menus, specialty coffee,
          and relaxed hospitality in the heart of Nagpur.
        </p>
        <div className={styles.actions}>
          <Link className={styles.ctaPrimary} to="/reservation">
            Reserve a Table
          </Link>
          <Link className={styles.ctaSecondary} to="/menu">
            Explore Menu →
          </Link>
        </div>

        {/* Stats Row */}
        <div className={styles.statsRow}>
          <div className={styles.stat}>
            <strong>120+</strong>
            <span>Daily Guests</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <strong>50+</strong>
            <span>Menu Items</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <strong>7/7</strong>
            <span>Open Daily</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <span>Scroll</span>
        <FiArrowDown className={styles.scrollArrow} />
      </div>
    </section>
  );
};

export default Hero;
