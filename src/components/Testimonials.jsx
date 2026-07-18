import React, { useState, useEffect, useCallback } from 'react';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    text: 'Best coffee in town — the cosy atmosphere and friendly staff make it our go-to spot every weekend.',
    author: 'Anita Kapoor',
    role: 'Food Blogger',
    rating: 5,
    avatar: '/images/m1.jpg',
  },
  {
    text: 'The brunch menu is incredible. Every dish is bursting with flavour, and the presentation is top-notch.',
    author: 'Ramesh Patil',
    role: 'Regular Customer',
    rating: 5,
    avatar: '/images/m2.jpg',
  },
  {
    text: 'A neighbourhood gem! From the truffle risotto to the espresso crème brûlée — absolute perfection.',
    author: 'Sohail Mirza',
    role: 'Restaurant Critic',
    rating: 5,
    avatar: '/images/m3.jpg',
  },
  {
    text: 'We hosted our anniversary dinner here and the team went above and beyond. Truly unforgettable!',
    author: 'Priya Sharma',
    role: 'Loyal Guest',
    rating: 4,
    avatar: '/images/m4.jpg',
  },
  {
    text: 'The cold coffee is legendary. I drive 20 minutes just for it. Cafe BE has ruined all other cafes for me.',
    author: 'Arjun Deshmukh',
    role: 'Coffee Enthusiast',
    rating: 5,
    avatar: '/images/m1.jpg',
  },
  {
    text: 'Beautiful interiors, great music, and the most welcoming staff. My favorite workspace in Nagpur.',
    author: 'Meera Joshi',
    role: 'Freelancer',
    rating: 4,
    avatar: '/images/m2.jpg',
  },
];

const Stars = ({ count }) => (
  <div className={styles.stars} aria-label={`${count} out of 5 stars`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <FiStar key={i} className={i < count ? styles.starFilled : styles.starEmpty} />
    ))}
  </div>
);

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
  const prev = () => setCurrent((c) => (c - 1 + total) % total);

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <section className={styles.section} aria-label="Customer testimonials">
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.kicker}>Testimonials</span>
          <h2 className={styles.title}>
            What our <em>guests</em> say
          </h2>
        </div>

        <div className={styles.carousel}>
          <button className={styles.navBtn} onClick={prev} aria-label="Previous testimonial">
            <FiChevronLeft />
          </button>

          <div className={styles.slide} key={current}>
            <div className={styles.quote}>"</div>
            <p className={styles.text}>{t.text}</p>
            <Stars count={t.rating} />
            <div className={styles.author}>
              <img src={t.avatar} alt={t.author} className={styles.avatar} />
              <div>
                <strong>{t.author}</strong>
                <span>{t.role}</span>
              </div>
            </div>
          </div>

          <button className={styles.navBtn} onClick={next} aria-label="Next testimonial">
            <FiChevronRight />
          </button>
        </div>

        {/* Dots */}
        <div className={styles.dots}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
