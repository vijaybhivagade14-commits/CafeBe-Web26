import React from 'react';
import { FiStar } from 'react-icons/fi';
import styles from './SpecialMenu.module.css';

const specials = [
  {
    name: 'Truffle Mushroom Risotto',
    desc: 'Creamy Arborio rice with wild mushrooms, truffle oil, and aged Parmesan. A house signature.',
    price: '450',
    img: '/images/b.jpg',
    badge: "Chef's Pick",
  },
  {
    name: 'Smoked Salmon Toast',
    desc: 'Sourdough topped with Norwegian salmon, cream cheese, capers, and microgreens.',
    price: '380',
    img: '/images/h.jpg',
    badge: 'Best Seller',
  },
  {
    name: 'Espresso Crème Brûlée',
    desc: 'Classic French custard infused with our signature espresso blend and torched to perfection.',
    price: '280',
    img: '/images/d1.jpg',
    badge: 'New',
  },
];

const SpecialMenu = () => (
  <section className={styles.section} aria-label="Special dishes">
    <div className={styles.inner}>
      <div className={styles.header}>
        <span className={styles.kicker}>Chef's Recommendation</span>
        <h2 className={styles.title}>
          Our <em>signature</em> dishes
        </h2>
        <p className={styles.subtitle}>
          Hand-selected by our head chef — these are the dishes our guests come back for again and again.
        </p>
      </div>
      <div className={styles.grid}>
        {specials.map((item, i) => (
          <article key={i} className={styles.card}>
            <div className={styles.imgWrap}>
              <img src={item.img} alt={item.name} loading="lazy" />
              <span className={styles.badge}>
                <FiStar /> {item.badge}
              </span>
            </div>
            <div className={styles.body}>
              <div className={styles.top}>
                <h3>{item.name}</h3>
                <span className={styles.price}>₹{item.price}</span>
              </div>
              <p>{item.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default SpecialMenu;
