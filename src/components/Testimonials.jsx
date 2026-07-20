import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    id: 1,
    name: 'Meera Joshi',
    role: 'Freelancer & Regular Guest',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=250&auto=format&fit=crop',
    rating: 5,
    message: 'Beautiful interiors, great music, and the most welcoming staff. My favorite workspace in Nagpur with the best artisanal coffee!',
  },
  {
    id: 2,
    name: 'Rohan Sharma',
    role: 'Food Enthusiast',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&auto=format&fit=crop',
    rating: 5,
    message: 'The paneer burger and cold brew coffee are out of this world! Every visit to Cafe BE feels special and refreshing.',
  },
  {
    id: 3,
    name: 'Ananya Verma',
    role: 'Architect',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250&auto=format&fit=crop',
    rating: 4,
    message: 'The ambiance is so aesthetic and peaceful. Perfect spot for evening coffee meetings and catching up with friends.',
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className={styles.section} aria-label="Guest Testimonials">
      <div className={styles.inner}>
        
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.kicker}>Testimonials</span>
          <h2 className={styles.title}>
            What our <em>guests</em> say
          </h2>
        </div>

        {/* Carousel / Card Container */}
        <div className={styles.carouselWrap}>
          
          {/* Navigation - Prev Button */}
          <button 
            className={`${styles.navBtn} ${styles.prevBtn}`} 
            onClick={handlePrev}
            aria-label="Previous Testimonial"
          >
            <FiChevronLeft />
          </button>

          {/* Testimonial Card with Top-Left Floating Avatar */}
          <div className={styles.card}>
            
            {/* 1st Image Style: Left Top Floating Avatar */}
            <div className={styles.avatarWrap}>
              <img src={current.image} alt={current.name} className={styles.avatarImg} />
            </div>

            {/* Card Content Area */}
            <div className={styles.cardBody}>
              
              {/* Guest Name */}
              <h3 className={styles.guestName}>{current.name}</h3>
              
              {/* Guest Role / Tagline */}
              <span className={styles.guestRole}>{current.role}</span>

              {/* Star Rating */}
              <div className={styles.rating}>
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    className={i < current.rating ? styles.starFilled : styles.starEmpty}
                  />
                ))}
              </div>

              {/* Message */}
              <p className={styles.message}>“{current.message}”</p>
            </div>

          </div>

          {/* Navigation - Next Button */}
          <button 
            className={`${styles.navBtn} ${styles.nextBtn}`} 
            onClick={handleNext}
            aria-label="Next Testimonial"
          >
            <FiChevronRight />
          </button>

        </div>

        {/* Pagination Dots */}
        <div className={styles.dots}>
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`${styles.dot} ${currentIndex === idx ? styles.dotActive : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;