import React, { useState } from 'react';
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend } from 'react-icons/fi';
import Footer from '../components/Footer';
import styles from './Contact.module.css';

const initialState = { name: '', email: '', subject: '', message: '' };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Name is required';
  if (!values.email.trim()) errors.email = 'Email is required';
  else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email)) errors.email = 'Invalid email address';
  if (!values.subject.trim()) errors.subject = 'Subject is required';
  if (!values.message.trim()) errors.message = 'Message is required';
  return errors;
}

const Contact = () => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((s) => ({ ...s, [name]: value }));
    setErrors((s) => ({ ...s, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate(values);
    if (Object.keys(errs).length) {
      setErrors(errs);
      setStatus(null);
      return;
    }
    setStatus('Message sent successfully! We\'ll get back to you soon.');
    setValues(initialState);
  };

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.heroSection} style={{ backgroundImage: 'url(/images/5.jpg)' }}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.kicker}>Get in Touch</span>
          <h1>We'd love to <em>hear</em> from you</h1>
          <p>Have questions, feedback, or want to collaborate? Reach out and we'll respond within 24 hours.</p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className={styles.section}>
        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <div className={styles.infoIconWrap}><FiMapPin /></div>
            <h3>Visit Us</h3>
            <p>Level 13, 2 Elizabeth St<br />Nagpur, Maharashtra</p>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.infoIconWrap}><FiPhone /></div>
            <h3>Call Us</h3>
            <p>+91 80000 00000<br />+91 80801 46176</p>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.infoIconWrap}><FiMail /></div>
            <h3>Email Us</h3>
            <p>hello@cafebe.in<br />reservations@cafebe.in</p>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.infoIconWrap}><FiClock /></div>
            <h3>Hours</h3>
            <p>Mon – Sun<br />10:00 AM – 10:30 PM</p>
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className={styles.section}>
        <div className={styles.contactGrid}>
          {/* Form */}
          <div className={styles.formWrap}>
            <h2>Send us a message</h2>
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.field}>
                <label>Name</label>
                <input name="name" value={values.name} onChange={handleChange} placeholder="John Doe" />
                {errors.name && <span className={styles.error}>{errors.name}</span>}
              </div>
              <div className={styles.field}>
                <label>Email</label>
                <input name="email" type="email" value={values.email} onChange={handleChange} placeholder="john@example.com" />
                {errors.email && <span className={styles.error}>{errors.email}</span>}
              </div>
              <div className={styles.field}>
                <label>Subject</label>
                <input name="subject" value={values.subject} onChange={handleChange} placeholder="How can we help?" />
                {errors.subject && <span className={styles.error}>{errors.subject}</span>}
              </div>
              <div className={styles.field}>
                <label>Message</label>
                <textarea name="message" value={values.message} onChange={handleChange} placeholder="Your message..." rows={5} />
                {errors.message && <span className={styles.error}>{errors.message}</span>}
              </div>
              <button type="submit" className={styles.submitBtn}>
                <FiSend style={{ marginRight: 8 }} /> Send Message
              </button>
              {status && <div className={styles.success}>{status}</div>}
            </form>
          </div>

          {/* Map */}
          <div className={styles.mapWrap}>
            <h2>Find us here</h2>
            <div className={styles.map}>
              <iframe
                title="Cafe BE location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.4758!2d79.0882!3d21.1458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDA4JzQ0LjkiTiA3OcKwMDUnMTcuNSJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: '16px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
