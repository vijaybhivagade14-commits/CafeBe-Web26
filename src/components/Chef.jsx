import React from 'react';
import { FiInstagram, FiTwitter } from 'react-icons/fi';
import styles from './Chef.module.css';

const chefs = [
  {
    name: 'Kevin Perry',
    role: 'Head Chef',
    experience: '15 years',
    img: '/images/m1.jpg',
    social: { instagram: '#', twitter: '#' },
  },
  {
    name: 'Jennifer Lee',
    role: 'Pastry Chef',
    experience: '10 years',
    img: '/images/m2.jpg',
    social: { instagram: '#', twitter: '#' },
  },
  {
    name: 'Mike McKenzie',
    role: 'Sous Chef',
    experience: '8 years',
    img: '/images/m3.jpg',
    social: { instagram: '#', twitter: '#' },
  },
  {
    name: 'Sarah Collins',
    role: 'Barista Lead',
    experience: '6 years',
    img: '/images/m4.jpg',
    social: { instagram: '#', twitter: '#' },
  },
];

const Chef = () => (
  <section className={styles.section} aria-label="Meet our chefs">
    <div className={styles.inner}>
      <div className={styles.header}>
        <span className={styles.kicker}>Our Team</span>
        <h2 className={styles.title}>
          Meet the <em>talented</em> people behind your food
        </h2>
        <p className={styles.subtitle}>
          Passionate, creative, and dedicated — our kitchen team turns every ingredient into an experience.
        </p>
      </div>
      <div className={styles.grid}>
        {chefs.map((chef, i) => (
          <article key={i} className={styles.card}>
            <div className={styles.imgWrap}>
              <img src={chef.img} alt={chef.name} loading="lazy" />
              <div className={styles.overlay}>
                <a href={chef.social.instagram} aria-label="Instagram" className={styles.socialIcon}>
                  <FiInstagram />
                </a>
                <a href={chef.social.twitter} aria-label="Twitter" className={styles.socialIcon}>
                  <FiTwitter />
                </a>
              </div>
            </div>
            <div className={styles.info}>
              <h3>{chef.name}</h3>
              <span className={styles.role}>{chef.role}</span>
              <span className={styles.exp}>{chef.experience} experience</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Chef;
