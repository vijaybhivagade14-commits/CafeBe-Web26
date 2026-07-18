import React, { useState, useEffect } from 'react';
import { FiClock, FiPercent } from 'react-icons/fi';
import styles from './Offers.module.css';

const offers = [
  {
    title: 'Breakfast Special',
    desc: 'Buy one get one on all coffee orders before 11am. Start your day the Cafe BE way.',
    discount: 'BOGO',
    img: '/images/5.jpg',
  },
  {
    title: 'Weekend Brunch',
    desc: '20% off all brunch dishes every Saturday & Sunday. Bring the family!',
    discount: '20% OFF',
    img: '/images/2.jpg',
  },
  {
    title: 'Happy Hour',
    desc: 'Cocktails and mocktails starting from ₹99 — weekdays 5pm to 7pm.',
    discount: 'FROM ₹99',
    img: '/images/3.jpg',
  },
];

// Countdown to end of current month
function getTimeLeft() {
  const now = new Date();
  const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
  const diff = endOfMonth - now;
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const Offers = () => {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.section} aria-label="Special offers">
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.kicker}>Limited Time Offers</span>
          <h2 className={styles.title}>
            Don't miss our <em>special</em> deals
          </h2>

          {/* Countdown */}
          <div className={styles.countdown}>
            <FiClock className={styles.clockIcon} />
            <span className={styles.countLabel}>Offers end in:</span>
            <div className={styles.timerRow}>
              {[
                { val: time.days, label: 'Days' },
                { val: time.hours, label: 'Hours' },
                { val: time.minutes, label: 'Min' },
                { val: time.seconds, label: 'Sec' },
              ].map(({ val, label }) => (
                <div key={label} className={styles.timerBlock}>
                  <span className={styles.timerNum}>{String(val).padStart(2, '0')}</span>
                  <span className={styles.timerLabel}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.grid}>
          {offers.map((o, i) => (
            <article key={i} className={styles.card}>
              <div className={styles.imgWrap}>
                <img src={o.img} alt={o.title} loading="lazy" />
                <span className={styles.discountBadge}>
                  <FiPercent /> {o.discount}
                </span>
              </div>
              <div className={styles.body}>
                <h3>{o.title}</h3>
                <p>{o.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
