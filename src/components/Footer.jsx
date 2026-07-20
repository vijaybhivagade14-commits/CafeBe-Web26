import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiInstagram, FiTwitter, FiFacebook, FiMapPin, FiPhone, FiMail, FiSend } from 'react-icons/fi';
import styles from './Footer.module.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className={styles.footer}>
      {/* NEW: Direct image tag for the cup */}
      <img src="/images/7.jpg" alt="Coffee Cup" className={styles.cupImage} />      <div className={styles.inner}>
        {/* Col 1 — Brand */}
        <div className={styles.col}>
          <div className={styles.brand}>
            <span className={styles.brandTop}>CAFE</span>
            <span className={styles.brandName}>BE</span>
            <span className={styles.brandLine}>COFFEE • KITCHEN</span>
          </div>
          <p className={styles.brandDesc}>
            A modern neighbourhood café serving seasonal menus, specialty coffee,
            and relaxed hospitality in Nagpur.
          </p>
          <div className={styles.socials}>
            <a href="#" aria-label="Instagram" className={styles.socialLink}><FiInstagram /></a>
            <a href="#" aria-label="Facebook" className={styles.socialLink}><FiFacebook /></a>
            <a href="#" aria-label="Twitter" className={styles.socialLink}><FiTwitter /></a>
          </div>
        </div>

        {/* Col 2 — Quick Links */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Quick Links</h4>
          <nav className={styles.links}>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/gallary">Gallery</Link>
            <Link to="/about">Our Story</Link>
            <Link to="/reservation">Reservation</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>

        {/* Col 3 — Contact */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Contact Us</h4>
          <div className={styles.contactList}>
            <p><FiMapPin className={styles.contactIcon} /> Level 13, 2 Elizabeth St, Nagpur</p>
            <p><FiPhone className={styles.contactIcon} /> +91 80000 00000</p>
            <p><FiMail className={styles.contactIcon} /> hello@cafebe.in</p>
            <p className={styles.hours}>Open daily: 10am — 10:30pm</p>
          </div>
        </div>

        {/* Col 4 — Newsletter */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Newsletter</h4>
          <p className={styles.newsletterDesc}>Subscribe for updates on new dishes, events, and exclusive offers.</p>
          <form className={styles.newsletterForm} onSubmit={handleNewsletter}>
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email for newsletter"
              required
            />
            <button type="submit" aria-label="Subscribe">
              <FiSend />
            </button>
          </form>
          {subscribed && <span className={styles.subSuccess}>Thanks for subscribing!</span>}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Cafe BE. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
