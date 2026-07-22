import React, { useState } from 'react';
import { FiX, FiChevronLeft, FiChevronRight, FiMaximize2 } from 'react-icons/fi';
import styles from './GalleryPage.module.css';

const categories = ['All', 'Food', 'Interior', 'Ambiance'];

const galleryItems = [
    {
        id: 1,
        title: 'Artisanal Latte Art',
        category: 'Food',
        image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop',
        subtitle: 'Specialty Coffee',
    },
    {
        id: 2,
        title: 'Rustic Wooden Seating',
        category: 'Interior',
        image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop',
        subtitle: 'Cozy Corner',
    },
    {
        id: 3,
        title: 'Gourmet Paneer Burger',
        category: 'Food',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop',
        subtitle: 'Signature Dishes',
    },
    {
        id: 4,
        title: 'Warm Evening Ambiance',
        category: 'Ambiance',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop',
        subtitle: 'Golden Hour',
    },
    {
        id: 5,
        title: 'Freshly Baked Pastries',
        category: 'Food',
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop',
        subtitle: 'Bakery Specials',
    },
    {
        id: 6,
        title: 'Espresso Bar Setup',
        category: 'Interior',
        image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=800&auto=format&fit=crop',
        subtitle: 'Barista Station',
    },
    {
        id: 7,
        title: 'Lush Greenery Corner',
        category: 'Ambiance',
        image: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=800&auto=format&fit=crop',
        subtitle: 'Vibes & Mood',
    },
    {
        id: 8,
        title: 'Handcrafted Cold Brew',
        category: 'Food',
        image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=800&auto=format&fit=crop',
        subtitle: 'Cold Beverages',
    }
];

const GalleryPage = () => {
    const [filter, setFilter] = useState('All');
    const [lightboxIndex, setLightboxIndex] = useState(null);

    // Filter items based on active category
    const filteredItems = filter === 'All'
        ? galleryItems
        : galleryItems.filter(item => item.category.toLowerCase() === filter.toLowerCase());

    const openLightbox = (index) => setLightboxIndex(index);
    const closeLightbox = () => setLightboxIndex(null);

    const prevImage = () => {
        setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
    };

    const nextImage = () => {
        setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className={styles.section} aria-label="Cafe BE Gallery Experience">
            <div className={styles.inner}>

                {/* Section Header */}
                <div className={styles.header}>
                    <span className={styles.kicker}>Visual Journey</span>
                    <h2 className={styles.title}>
                        Moments Captured at <em>Cafe BE</em>
                    </h2>
                    <p className={styles.subtitle}>
                        Explore the ambiance, artisanal creations, and warm aesthetic that define our neighbourhood cafe.
                    </p>
                </div>

                {/* Filter Category Tabs with Liquid Sweep Effect */}
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

                {/* Dynamic Gallery Masonry Grid */}
                <div className={styles.grid}>
                    {filteredItems.map((item, index) => (
                        <div
                            key={item.id}
                            className={styles.card}
                            onClick={() => openLightbox(index)}
                        >
                            <img src={item.image} alt={item.title} className={styles.cardImg} />

                            {/* Overlay with Tag & Zoom Icon */}
                            <div className={styles.cardOverlay}>
                                <span className={styles.tag}>{item.category}</span>
                                <h3 className={styles.itemTitle}>{item.title}</h3>
                                <span className={styles.itemSubtitle}>{item.subtitle}</span>
                                <div className={styles.zoomIconWrap}>
                                    <FiMaximize2 />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* Fullscreen Lightbox Modal */}
            {lightboxIndex !== null && (
                <div className={styles.lightbox} onClick={closeLightbox}>
                    <button className={styles.lbClose} onClick={closeLightbox} aria-label="Close Lightbox">
                        <FiX />
                    </button>

                    <button
                        className={`${styles.lbNav} ${styles.lbPrev}`}
                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                        aria-label="Previous Image"
                    >
                        <FiChevronLeft />
                    </button>

                    <div className={styles.lbContent} onClick={(e) => e.stopPropagation()}>
                        <img
                            src={filteredItems[lightboxIndex].image}
                            alt={filteredItems[lightboxIndex].title}
                            className={styles.lbImage}
                        />
                        <div className={styles.lbCaption}>
                            <h4>{filteredItems[lightboxIndex].title}</h4>
                            <span>{filteredItems[lightboxIndex].category} • {filteredItems[lightboxIndex].subtitle}</span>
                        </div>
                    </div>

                    <button
                        className={`${styles.lbNav} ${styles.lbNext}`}
                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        aria-label="Next Image"
                    >
                        <FiChevronRight />
                    </button>
                </div>
            )}
        </section>
    );
};

export default GalleryPage;