import React, { useState } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';
import styles from './Menu.module.css';

const items = [
  { id: 1, name: 'Cold Coffee', price: '180', category: 'Coffee', img: '/images/a.jpg', desc: 'Chilled espresso with house-made milk foam and a hint of vanilla.' },
  { id: 2, name: 'Cafe Burger', price: '260', category: 'Kitchen', img: '/images/f.jpg', desc: 'Juicy patty with caramelized onions, cheddar, and our special sauce.' },
  { id: 3, name: 'Daily Dessert', price: '150', category: 'Sweet', img: '/images/c1.webp', desc: 'Seasonal dessert prepared fresh every morning by our pastry chef.' },
  { id: 4, name: 'Pasta Primavera', price: '310', category: 'Kitchen', img: '/images/b.jpg', desc: 'Fresh pasta tossed with garden vegetables and olive oil pesto.' },
  { id: 5, name: 'Cappuccino', price: '140', category: 'Coffee', img: '/images/d.jpg', desc: 'Rich espresso topped with velvety steamed milk and micro-foam art.' },
  { id: 6, name: 'Grilled Sandwich', price: '190', category: 'Kitchen', img: '/images/e.jpg', desc: 'Toasted sourdough with mozzarella, sun-dried tomatoes, and basil.' },
  { id: 7, name: 'Fresh Juice', price: '120', category: 'Drinks', img: '/images/g.jpg', desc: 'Cold-pressed seasonal fruit juice — no sugar, no preservatives.' },
  { id: 8, name: 'Chocolate Brownie', price: '130', category: 'Sweet', img: '/images/c3.jpg', desc: 'Warm dark chocolate brownie with a molten center and ice cream.' },
  { id: 9, name: 'Iced Latte', price: '160', category: 'Coffee', img: '/images/c2.jpg', desc: 'Double-shot espresso poured over ice with oat or regular milk.' },
  { id: 10, name: 'Caesar Salad', price: '220', category: 'Kitchen', img: '/images/h.jpg', desc: 'Crisp romaine lettuce with parmesan, croutons, and house dressing.' },
  { id: 11, name: 'Mango Smoothie', price: '150', category: 'Drinks', img: '/images/c4.jpg', desc: 'Creamy Alphonso mango blended with yogurt and a touch of honey.' },
  { id: 12, name: 'Tiramisu', price: '210', category: 'Sweet', img: '/images/d1.jpg', desc: 'Classic Italian dessert with mascarpone, espresso, and cocoa.' },
];

const categories = ['All', 'Coffee', 'Kitchen', 'Drinks', 'Sweet'];

const MenuSection = () => {
  const [query, setQuery] = useState('');
  const [activeCat, setActiveCat] = useState('All');

  const filtered = items.filter(
    (item) =>
      (activeCat === 'All' || item.category === activeCat) &&
      item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className={styles.page} id="menu" aria-label="Our menu">
      {/* Header */}
      <div className={styles.sectionHeader}>
        <span className={styles.kicker}>Discover Our Menu</span>
        <h2 className={styles.sectionTitle}>
          Every dish crafted for <em>flavour</em> & comfort
        </h2>
        <p className={styles.sectionSub}>
          Browse chef-crafted plates, specialty drinks, and café favorites served all day.
        </p>
      </div>

      {/* Search & Filter */}
      <div className={styles.controls}>
        <div className={styles.searchWrap}>
          <FiSearch className={styles.searchIcon} />
          <input
            className={styles.searchInput}
            aria-label="Search menu"
            placeholder="Search dishes..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button className={styles.clearBtn} onClick={() => setQuery('')} aria-label="Clear search">
              <FiX />
            </button>
          )}
        </div>
        <div className={styles.tabs}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.tab} ${activeCat === cat ? styles.tabActive : ''}`}
              onClick={() => setActiveCat(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className={styles.grid}>
        {filtered.map((item, idx) => (
          <article key={item.id} className={styles.card} style={{ animationDelay: `${idx * 0.06}s` }}>
            <div className={styles.cardImgWrap}>
              <img src={item.img} alt={item.name} loading="lazy" />
              <span className={styles.cardTag}>{item.category}</span>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.cardTop}>
                <h3>{item.name}</h3>
                <span className={styles.price}>₹{item.price}</span>
              </div>
              <p>{item.desc}</p>
            </div>
          </article>
        ))}
        {filtered.length === 0 && (
          <div className={styles.empty}>
            <p>No dishes found. Try a different search or category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuSection;
