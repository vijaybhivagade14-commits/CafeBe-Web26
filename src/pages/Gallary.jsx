import React from 'react';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import styles from './Gallary.module.css';

const Gallary = () => (
  <div className={styles.page}>
    {/* Hero Banner */}
    <section className={styles.heroSection} style={{ backgroundImage: 'url(/images/6.jpg)' }}>
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        <span className={styles.kicker}>Gallery</span>
        <h1>Moments at <em>Cafe BE</em></h1>
        <p>
          Browse our collection of photos capturing the food, ambiance, and memories created at our café.
        </p>
      </div>
    </section>

    {/* Gallery Component */}
    <Gallery />

    <Footer />
  </div>
);

export default Gallary;
