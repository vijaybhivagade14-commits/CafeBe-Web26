import React from 'react';
import Gallery from '../../components/Gallery/Gallery';
import GalleryPage from "../../components/GalleryPage/GalleryPage"
import Footer from '../../components/Footer/Footer';
import styles from './Gallary.module.css';

const Gallary = () => (
  <div className={styles.page}>
    {/* Hero Banner */}
    {/* Hero Banner */}
    <section className={styles.heroSection} style={{ '--hero-bg': 'url(/images/6.jpg)' }}>
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        <span className={styles.kicker}>Gallery</span>
        <h1>Moments at <em>Cafe BE</em></h1>
        <p>
          Browse our collection of photos capturing the food, ambiance, and memories created at our café.
        </p>
      </div>
    </section>

    {/* Premium Editorial Section */}
    <section className={styles.editorialSection}>
      <div className={styles.editorialContainer}>

        {/* Editorial Block 1 (Image Left, Text Right) */}
        <div className={styles.editorialBlock}>
          <div className={styles.edImageWrap}>
            <img src="/images/pizza1.png" alt="Signature Coffee" className={styles.edImage} />
          </div>
          <div className={styles.edContent}>
            <span className={styles.edKicker}>The Craft</span>
            <h2 className={styles.edTitle}>The Perfect <em>Brew</em></h2>
            <p className={styles.edDesc}>
              Every cup we serve is a testament to our dedication to the art of coffee.
              From the carefully selected beans to the precise temperature of the milk,
              we ensure that every sip is an experience worth savoring.
            </p>
          </div>
        </div>

        {/* Editorial Block 2 (Text Left, Image Right) */}
        <div className={`${styles.editorialBlock} ${styles.reverse}`}>
          <div className={styles.edContent}>
            <span className={styles.edKicker}>The Ambiance</span>
            <h2 className={styles.edTitle}>Rustic <em>Elegance</em></h2>
            <p className={styles.edDesc}>
              Our space is designed to be your sanctuary. Whether you're here for a quiet
              morning with a book, or an evening gathering with friends, our warm lighting
              and cozy interiors provide the perfect backdrop for your memories.
            </p>
          </div>
          <div className={styles.edImageWrap}>
            <img src="/images/tea-bread.png" alt="Cozy Interior" className={styles.edImage} />
          </div>
        </div>

      </div>
    </section>

    {/* Standard Gallery Component */}
    <GalleryPage />

    <Footer />
  </div>
);

export default Gallary;
