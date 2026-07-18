import React from 'react';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import styles from './About.module.css';

const About = () => (
  <div className={styles.page}>
    {/* Hero */}
    <section className={styles.heroSection} style={{ backgroundImage: 'url(/images/7.jpg)' }}>
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        <span className={styles.kicker}>Our Story</span>
        <h1>A few words about <em>Cafe BE</em></h1>
        <p>
          Born from a love of great coffee and honest food, Cafe BE opened its doors in 2018
          as a modern neighbourhood café in the heart of Nagpur. We believe every cup and every plate
          should tell a story of quality, craftsmanship, and care.
        </p>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className={styles.section}>
      <div className={styles.grid3}>
        <article className={styles.card}>
          <h2>Our Mission</h2>
          <p>
            To create a welcoming space where people connect over exceptional food and drinks,
            sourced responsibly and prepared with passion.
          </p>
        </article>
        <article className={styles.card}>
          <h2>Our Vision</h2>
          <p>
            To be Nagpur's most loved café — known for culinary creativity, warm hospitality,
            and a deep commitment to the community we serve.
          </p>
        </article>
        <article className={styles.card}>
          <h2>Our Values</h2>
          <p>
            Quality ingredients, sustainable practices, inclusive dining, and a relentless pursuit
            of flavour guide everything we do.
          </p>
        </article>
      </div>
    </section>

    {/* Image Gallery */}
    <section className={styles.section}>
      <div className={styles.imageRow}>
        <img src="/images/5.jpg" alt="Cafe interior" />
        <img src="/images/6.jpg" alt="Dining area" />
        <img src="/images/2.jpg" alt="Cozy corner" />
      </div>
    </section>

    {/* Stats */}
    <Stats />

    {/* Team */}
    <section className={styles.teamSection}>
      <div className={styles.teamInner}>
        <span className={styles.kicker}>The Team</span>
        <h2 className={styles.sectionTitle}>Meet the people behind <em>Cafe BE</em></h2>
        <div className={styles.teamGrid}>
          {[
            { name: 'Kevin Perry', role: 'Founder & Head Chef', img: '/images/m1.jpg' },
            { name: 'Jennifer Lee', role: 'Pastry Chef', img: '/images/m2.jpg' },
            { name: 'Mike McKenzie', role: 'Sous Chef', img: '/images/m3.jpg' },
            { name: 'Sarah Collins', role: 'Barista Lead', img: '/images/m4.jpg' },
          ].map((m, i) => (
            <div key={i} className={styles.teamMember}>
              <img src={m.img} alt={m.name} />
              <h3>{m.name}</h3>
              <span>{m.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <Testimonials />

    {/* Contact Info */}
    <section className={styles.section}>
      <div className={styles.grid3}>
        <article className={styles.infoCard}>
          <FiMapPin className={styles.infoIcon} />
          <h3>Visit Us</h3>
          <p>Level 13, 2 Elizabeth St, Nagpur</p>
        </article>
        <article className={styles.infoCard}>
          <FiPhone className={styles.infoIcon} />
          <h3>Call Us</h3>
          <p>+91 80000 00000</p>
        </article>
        <article className={styles.infoCard}>
          <FiMail className={styles.infoIcon} />
          <h3>Email Us</h3>
          <p>hello@cafebe.in</p>
        </article>
      </div>
    </section>

    <Footer />
  </div>
);

export default About;
