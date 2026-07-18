import React, { useEffect, useRef, useState } from 'react'; // 1. Added useState here
import { Link } from 'react-router-dom';
import { FiArrowDown } from 'react-icons/fi';
import styles from './Hero.module.css';

const Hero = () => {
  const heroRef = useRef(null);
  
  // 2. Add state to track mouse position
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = heroRef.current;
    if (el) {
      el.classList.add(styles.visible);
    }
  }, []);

  // 3. Function that calculates how much the food should move based on mouse
  const handleMouseMove = (e) => {
    const x = (e.clientX - window.innerWidth / 2) * 0.04;
    const y = (e.clientY - window.innerHeight / 2) * 0.04;
    setMousePos({ x, y });
  };

  return (
    <section 
      className={styles.hero} 
      ref={heroRef} 
      onMouseMove={handleMouseMove} // 4. Mouse movement tracking
      aria-label="Welcome to Cafe BE"
    >
      {/* 5. Static Dark Background Image */}
      <div className={styles.bgWrap}>
        <img src="/images/dark-bg.jpg" alt="" className={styles.bgImageStatic} aria-hidden="true" />
        <div className={styles.overlay} />
      </div>

      {/* 6. Floating Parallax Food */}
      <div className={styles.parallaxWrap}>
        {/* Left side pizza */}
        <img 
          src="/images/pizza.png" 
          alt="Pizza" 
          className={`${styles.floatingImg} ${styles.pizzaImg}`} 
          style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px) rotate(${mousePos.x * 0.2}deg)` }}
          aria-hidden="true"
        />
        {/* Right side burger */}
        <img 
          src="/images/Burger-panner.png" 
          alt="Burger" 
          className={`${styles.floatingImg} ${styles.burgerImg}`} 
          style={{ transform: `translate(${mousePos.x * -1}px, ${mousePos.y * -1}px) rotate(${mousePos.x * -0.2}deg)` }}
          aria-hidden="true"
        />
      </div>

      {/* Content (Leave everything below this exactly as it was) */}
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
