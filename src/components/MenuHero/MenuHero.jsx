import React from 'react';
import styles from './MenuHero.module.css';

const MenuHero = () => {
    return (
        <div className={styles.heroWrapper}>
            {/* Dark overlay for text readability */}
            <div className={styles.bgOverlay}></div>

            {/* Background Image with Parallax (Aap isme 2.jpg ki jagah koi bhi dark coffee image laga sakte hain) */}
            <div
                className={styles.bgImage}
                style={{ backgroundImage: `url('/images/2.jpg')` }}
            ></div>

            <div className={styles.content}>
                <span className={styles.subtitle}>Sip & Savor</span>
                <h1 className={styles.title}>Our Culinary Masterpieces</h1>
                <div className={styles.divider}></div>
                <p className={styles.desc}>
                    Explore a curated selection of premium coffees, artisanal pastries, and hearty meals crafted with passion.
                </p>
            </div>
        </div>
    );
};

export default MenuHero;
