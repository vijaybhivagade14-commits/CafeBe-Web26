import React, { useState, useEffect, useRef } from 'react';
import { FiSmile, FiCalendar, FiStar, FiAward } from 'react-icons/fi';
import styles from './Stats.module.css';

const statsData = [
  { icon: <FiSmile />, target: 2500, label: 'Happy Customers', suffix: '+' },
  { icon: <FiCalendar />, target: 8, label: 'Years of Experience', suffix: '+' },
  { icon: <FiStar />, target: 150, label: 'Dishes Served Daily', suffix: '+' },
  { icon: <FiAward />, target: 12, label: 'Awards Won', suffix: '' },
];

function useCountUp(target, trigger, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [trigger, target, duration]);

  return count;
}

const StatItem = ({ icon, target, label, suffix, active, delay }) => {
  const count = useCountUp(target, active);
  return (
    <div className={styles.stat} style={{ animationDelay: `${delay}s` }}>
      <div className={styles.iconWrap}>{icon}</div>
      <span className={styles.number}>{count}{suffix}</span>
      <span className={styles.label}>{label}</span>
    </div>
  );
};

const Stats = () => {
  const [active, setActive] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} ref={ref} aria-label="Our achievements" style={{ backgroundImage: 'url(/images/6.jpg)' }}>
      <div className={styles.bgOverlay} />
      <div className={styles.inner}>
        {statsData.map((s, i) => (
          <StatItem key={i} {...s} active={active} delay={i * 0.15} />
        ))}
      </div>
    </section>
  );
};

export default Stats;
