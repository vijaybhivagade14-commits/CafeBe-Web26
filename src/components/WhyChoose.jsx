import React from 'react';
import { FiCoffee, FiAward, FiSun, FiClock } from 'react-icons/fi';
import styles from './WhyChoose.module.css';

const features = [
  {
    icon: <FiCoffee />,
    title: 'Fresh Ingredients',
    desc: 'We source the finest seasonal produce and premium coffee beans from trusted local farms and artisan roasters.',
  },
  {
    icon: <FiAward />,
    title: 'Expert Chefs',
    desc: 'Our award-winning culinary team brings decades of combined experience to craft every dish with passion.',
  },
  {
    icon: <FiSun />,
    title: 'Cozy Ambiance',
    desc: 'A warm, inviting atmosphere that blends rustic charm with modern elegance — perfect for any occasion.',
  },
  {
    icon: <FiClock />,
    title: 'Fast Service',
    desc: 'Efficient, friendly service ensures your food and drinks arrive promptly without compromising on quality.',
  },
];

const WhyChoose = () => (
  <section className={styles.section} aria-label="Why choose Cafe BE">
    <div className={styles.inner}>
      <div className={styles.header}>
        <span className={styles.kicker}>Why Choose Us</span>
        <h2 className={styles.title}>
          What makes Cafe BE <em>different</em>
        </h2>
        <p className={styles.subtitle}>
          Every detail is thoughtfully considered to create an exceptional dining experience for our guests.
        </p>
      </div>
      <div className={styles.grid}>
        {features.map((f, i) => (
          <article key={i} className={styles.card} style={{ animationDelay: `${i * 0.1}s` }}>
            <div className={styles.iconWrap}>{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChoose;
