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
  <section className={styles.wrapper} aria-label="Special Menu">

    {/* NEW: Experience Today Banner (From 1st Image) */}
    {/* <div className={styles.bannerContent}>
      <div className={styles.bannerKicker}>✦ Your Table Awaits</div>
      <h2 className={styles.bannerTitle}>Experience Cafe BE Today</h2>
      <p className={styles.bannerSubtitle}>
        Step into our café, sip the finest blends, and feel the warmth. Cafe BE is more than
        coffee — it's a moment worth living.
      </p>
      <div className={styles.bannerActions}>
        <button className={styles.btnSolid}>Grab Your Cup ↗</button>
        <button className={styles.btnOutline}>See Café Hours ↗</button>
      </div>
    </div> */}

    {/* Elegant Divider between the two sections */}
    <div className={styles.bannerDivider}></div>

    {/* ORIGINAL: Signature Dishes Grid (From 2nd Image) */}
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
          <div key={i} className={styles.card}>
            <div className={styles.imgWrap}>
              <span className={styles.badge}>☆ {item.badge}</span>
              <img src={item.img} alt={item.name} loading="lazy" />
            </div>
            <div className={styles.body}>
              <div className={styles.top}>
                <h3>{item.name}</h3>
                <span className={styles.price}>₹{item.price}</span>
              </div>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SpecialMenu;
