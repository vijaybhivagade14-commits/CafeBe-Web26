import React from 'react';
import { FiMapPin, FiPhone, FiMail, FiCompass, FiHeart, FiAward, FiCoffee } from 'react-icons/fi';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.page}>

      {/* 1. Hero Banner with Parallax Feel */}
      <section className={styles.heroSection}>
        <div className={styles.heroBg} style={{ backgroundImage: 'url(/images/7.jpg)' }} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.kicker}>Our Journey</span>
          <h1 className={styles.heroTitle}>
            Crafting Culinary Stories At <em>Cafe BE</em>
          </h1>
          <p className={styles.heroSubtitle}>
            Born from an endless passion for artisanal coffee and honest food, Cafe BE opened its doors in 2018 in the heart of Nagpur.
          </p>
        </div>
      </section>

      {/* 2. Editorial Story & Founder Spotlight */}
      <section className={styles.storySection}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>

            {/* Left Image Wrapper with Floating Badge */}
            <div className={styles.storyImageWrap}>
              <img src="/images/5.jpg" alt="Cafe BE Craftsmanship" className={styles.storyImgMain} />
              <div className={styles.badgeWrap}>
                <span className={styles.badgeYear}>EST. 2018</span>
                <span className={styles.badgeText}>Nagpur, India</span>
              </div>
            </div>

            {/* Right Story Text */}
            <div className={styles.storyTextWrap}>
              <span className={styles.kicker}>The Philosophy</span>
              <h2 className={styles.sectionHeading}>
                Every Cup & Plate Tells A <em>Unique Story</em>
              </h2>
              <p className={styles.bodyParagraph}>
                We believe that dining is an emotion. At Cafe BE, we source the finest seasonal produce and single-origin coffee beans from trusted local farms.
              </p>
              <p className={styles.bodyParagraph}>
                Whether you are seeking a peaceful workspace, an artisanal espresso, or a hearty meal with loved ones, our doors are open to offer relaxed hospitality and unforgettable flavor profiles.
              </p>

              <div className={styles.signatureBlock}>
                <span className={styles.chefName}>Kevin Perry</span>
                <span className={styles.chefRole}>Founder & Head Chef</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Core Values (Glassmorphism Cards) */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <div className={styles.headerCenter}>
            <span className={styles.kicker}>What Guides Us</span>
            <h2 className={styles.sectionHeading}>Pillars of <em>Excellence</em></h2>
          </div>

          <div className={styles.valuesGrid}>
            <article className={styles.valueCard}>
              <div className={styles.iconCircle}>
                <FiCompass />
              </div>
              <h3>Our Mission</h3>
              <p>To create a welcoming space where people connect over exceptional food and specialty coffee, prepared with passion.</p>
            </article>

            <article className={styles.valueCard}>
              <div className={styles.iconCircle}>
                <FiAward />
              </div>
              <h3>Our Vision</h3>
              <p>To be Nagpur’s most cherished café — recognized for culinary creativity, warm ambiance, and community care.</p>
            </article>

            <article className={styles.valueCard}>
              <div className={styles.iconCircle}>
                <FiHeart />
              </div>
              <h3>Our Values</h3>
              <p>Uncompromising ingredient quality, sustainable practices, and continuous experimentation with authentic flavors.</p>
            </article>
          </div>
        </div>
      </section>

      {/* 4. Ambient Gallery Grid */}
      <section className={styles.gallerySection}>
        <div className={styles.container}>
          <div className={styles.imageRow}>
            <div className={styles.imgCard}>
              <img src="/images/5.jpg" alt="Cafe interior" />
              <div className={styles.imgOverlay}><span>Interior Aesthetics</span></div>
            </div>
            <div className={styles.imgCard}>
              <img src="/images/6.jpg" alt="Dining area" />
              <div className={styles.imgOverlay}><span>Artisanal Seating</span></div>
            </div>
            <div className={styles.imgCard}>
              <img src="/images/2.jpg" alt="Cozy corner" />
              <div className={styles.imgOverlay}><span>Warm Ambiance</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Stats Component */}
      <Stats />

      {/* 6. Meet The Team */}
      <section className={styles.teamSection}>
        <div className={styles.container}>
          <div className={styles.headerCenter}>
            <span className={styles.kicker}>Master Craftsmen</span>
            <h2 className={styles.sectionHeading}>Meet The People Behind <em>Cafe BE</em></h2>
          </div>

          <div className={styles.teamGrid}>
            {[
              { name: 'Kevin Perry', role: 'Founder & Head Chef', img: '/images/m1.jpg' },
              { name: 'Jennifer Lee', role: 'Master Pastry Chef', img: '/images/m2.jpg' },
              { name: 'Mike McKenzie', role: 'Sous Chef', img: '/images/m3.jpg' },
              { name: 'Sarah Collins', role: 'Lead Barista', img: '/images/m4.jpg' },
            ].map((m, i) => (
              <div key={i} className={styles.teamMemberCard}>
                <div className={styles.teamImgWrapper}>
                  <img src={m.img} alt={m.name} className={styles.teamImg} />
                </div>
                <div className={styles.teamInfo}>
                  <h3>{m.name}</h3>
                  <span>{m.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <Testimonials />

      {/* 8. Quick Contact Info Cards */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            <article className={styles.infoCard}>
              <div className={styles.infoIconWrap}><FiMapPin /></div>
              <h3>Visit Us</h3>
              <p>Level 13, 2 Elizabeth St, Nagpur</p>
            </article>

            <article className={styles.infoCard}>
              <div className={styles.infoIconWrap}><FiPhone /></div>
              <h3>Call Us</h3>
              <p>+91 80000 00000</p>
            </article>

            <article className={styles.infoCard}>
              <div className={styles.infoIconWrap}><FiMail /></div>
              <h3>Email Us</h3>
              <p>hello@cafebe.in</p>
            </article>
          </div>
        </div>
      </section>

      {/* 9. Footer */}
      <Footer />
    </div>
  );
};

export default About;