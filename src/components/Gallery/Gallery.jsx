import React, { useState } from 'react';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import styles from './Gallery.module.css';

const images = [
  { src: '/images/5.jpg', category: 'Interior', alt: 'Restaurant interior' },
  { src: '/images/a.jpg', category: 'Food', alt: 'Cold coffee' },
  { src: '/images/6.jpg', category: 'Interior', alt: 'Dining area' },
  { src: '/images/b.jpg', category: 'Food', alt: 'Pasta dish' },
  { src: '/images/j.jpg', category: 'Ambiance', alt: 'Evening setup' },
  { src: '/images/c.jpg', category: 'Food', alt: 'Cafe special' },
  { src: '/images/k.jpg', category: 'Ambiance', alt: 'Night view' },
  { src: '/images/h.jpg', category: 'Food', alt: 'Gourmet plate' },
  { src: '/images/2.jpg', category: 'Interior', alt: 'Cozy corner' },
  { src: '/images/d.jpg', category: 'Food', alt: 'Cappuccino art' },
  { src: '/images/3.jpg', category: 'Ambiance', alt: 'Happy hour' },
  { src: '/images/e.jpg', category: 'Food', alt: 'Sandwich' },
];

const categories = ['All', 'Food', 'Interior', 'Ambiance'];

const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = filter === 'All' ? images : images.filter((img) => img.category === filter);

  const openLightbox = (idx) => setLightbox(idx);
  const closeLightbox = () => setLightbox(null);

  const prevImage = () => {
    setLightbox((prev) => (prev > 0 ? prev - 1 : filtered.length - 1));
  };
  const nextImage = () => {
    setLightbox((prev) => (prev < filtered.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className={styles.section} aria-label="Gallery">
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.kicker}>Gallery</span>
          <h2 className={styles.title}>
            Moments at <em>Cafe BE</em>
          </h2>
        </div>

        <div className={styles.tabs}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.tab} ${filter === cat ? styles.tabActive : ''}`}
              onClick={() => setFilter(cat)}
              type="button"
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filtered.map((img, idx) => (
            <div
              key={idx}
              className={styles.item}
              onClick={() => openLightbox(idx)}
              role="button"
              tabIndex={0}
              aria-label={`View ${img.alt}`}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox(idx)}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className={styles.itemOverlay}>
                <span>View</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <button className={styles.lbClose} onClick={closeLightbox} aria-label="Close">
            <FiX />
          </button>
          <button
            className={`${styles.lbNav} ${styles.lbPrev}`}
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            aria-label="Previous"
          >
            <FiChevronLeft />
          </button>
          <img
            src={filtered[lightbox]?.src}
            alt={filtered[lightbox]?.alt}
            className={styles.lbImage}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className={`${styles.lbNav} ${styles.lbNext}`}
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            aria-label="Next"
          >
            <FiChevronRight />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
