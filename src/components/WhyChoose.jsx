import React from 'react';
import { FiCoffee } from 'react-icons/fi';
import styles from './WhyChoose.module.css';

const features = [
  {
    icon: <FiCoffee />,
    title: 'Passion & Care in Every Cup',
    desc: 'Crafted with care, every cup delights your senses',
  },
  {
    icon: <FiCoffee />,
    title: 'Custom Coffee for Every Occasion',
    desc: 'Custom coffee made for every special occasion',
  },
  {
    icon: <FiCoffee />,
    title: 'Timeless Coffee Classics, Reimagined',
    desc: 'Classic coffee flavors, refreshed with a modern twist',
  },
];

const WhyChoose = () => (
  <section className={styles.section} aria-label="Why choose Cafe BE">
    <div className={styles.inner}>

      {/* Left Column: Image Area */}
      <div className={styles.imageSide}>
        <img
          src="/images/d1.jpg"
          alt="Cafe BE Brewing Experience"
          className={styles.mainImage}
        />
      </div>

      {/* Right Column: Content Area */}
      <div className={styles.contentSide}>
        <header className={styles.header}>
          <span className={styles.kicker}>Why Choose Cafe BE</span>

          {/* Dual Color Heading: "Freshly brewed coffee" will be Black, rest will be Chocolate Brown */}
          <h2 className={styles.title}>
            Freshly brewed coffee, <span className={styles.highlight}>rich in flavor you can always trust</span>
          </h2>

          <p className={styles.subtitle}>
            At Cafe BE, We brew every cup with freshness and flavor you can trust, crafted to brighten your day
          </p>
        </header>

        {/* 3 Point List */}
        <div className={styles.verticalList}>
          {features.map((f, i) => (
            <article key={i} className={styles.listItem}>
              <div className={styles.iconCircle}>
                {f.icon}
              </div>

              <div className={styles.textWrap}>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

    </div>
  </section>
);

export default WhyChoose;