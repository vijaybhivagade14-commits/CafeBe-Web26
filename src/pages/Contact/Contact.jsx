import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import Footer from '../../components/Footer/Footer';
import styles from './Contact.module.css';

const initialState = { name: '', email: '', subject: '', message: '' };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Name is required';
  if (!values.email.trim()) errors.email = 'Email is required';
  else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email)) errors.email = 'Please enter a valid email address';
  if (!values.subject.trim()) errors.subject = 'Subject is required';
  if (!values.message.trim()) errors.message = 'Message is required';
  return errors;
}

const Contact = () => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // { type: 'success' | 'error', text: string }
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((s) => ({ ...s, [name]: value }));
    setErrors((s) => ({ ...s, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(values);
    if (Object.keys(errs).length) {
      setErrors(errs);
      setStatus(null);
      return;
    }

    setIsSending(true);
    setStatus(null);

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: values.name,
          from_email: values.email,
          subject: values.subject,
          message: values.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      setStatus({ type: 'success', text: "Message sent successfully! We'll get back to you soon." });
      setValues(initialState);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus({ type: 'error', text: 'Something went wrong. Please try again or email us directly.' });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className={styles.page}>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBg} style={{ backgroundImage: 'url(/images/5.jpg)' }} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.kicker}>Get In Touch</span>
          <h1 className={styles.heroTitle}>
            We'd Love To <em>Hear From You</em>
          </h1>
          <p className={styles.heroSubtitle}>
            Have questions, feedback, or table reservations? Reach out to us and our warm hospitality team will respond within 24 hours.
          </p>
        </div>
      </section>

      <div className={styles.container}>

        {/* Contact Info Cards */}
        <section className={styles.infoSection}>
          <div className={styles.infoGrid}>

            <div className={styles.infoCard}>
              <div className={styles.infoIconWrap}><FiMapPin /></div>
              <h3>Visit Us</h3>
              <p>Level 13, 2 Elizabeth St<br />Nagpur, Maharashtra</p>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIconWrap}><FiPhone /></div>
              <h3>Call Us</h3>
              <p>+91 7219 793033<br />+91 80801 46176</p>
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

        {/* Contact Form + Map Dual Section */}
        <section className={styles.mainGridSection}>
          <div className={styles.contactGrid}>

            {/* Left: Message Form */}
            <div className={styles.formCard}>
              <div className={styles.cardHeader}>
                <span className={styles.kicker}>Write To Us</span>
                <h2>Send Us A Message</h2>
              </div>

              <form className={styles.form} onSubmit={handleSubmit} noValidate>

                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label>Your Name</label>
                    <input
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className={errors.name ? styles.inputError : ''}
                      disabled={isSending}
                    />
                    {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                  </div>

                  <div className={styles.field}>
                    <label>Email Address</label>
                    <input
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={errors.email ? styles.inputError : ''}
                      disabled={isSending}
                    />
                    {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                  </div>
                </div>

                <div className={styles.field}>
                  <label>Subject</label>
                  <input
                    name="subject"
                    value={values.subject}
                    onChange={handleChange}
                    placeholder="e.g. Reservation Inquiry / Event Inquiry"
                    className={errors.subject ? styles.inputError : ''}
                    disabled={isSending}
                  />
                  {errors.subject && <span className={styles.errorText}>{errors.subject}</span>}
                </div>

                <div className={styles.field}>
                  <label>Your Message</label>
                  <textarea
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    placeholder="Tell us more about how we can help..."
                    rows={5}
                    className={errors.message ? styles.inputError : ''}
                    disabled={isSending}
                  />
                  {errors.message && <span className={styles.errorText}>{errors.message}</span>}
                </div>

                <button type="submit" className={styles.submitBtn} disabled={isSending}>
                  <FiSend className={styles.btnIcon} /> {isSending ? 'Sending...' : 'Send Message'}
                </button>

                {status && (
                  <div className={status.type === 'success' ? styles.successBox : styles.errorBox}>
                    {status.type === 'success' ? <FiCheckCircle className={styles.successIcon} /> : <FiAlertCircle className={styles.errorIcon} />}
                    <span>{status.text}</span>
                  </div>
                )}
              </form>
            </div>

            {/* Right: Embedded Interactive Map */}
            <div className={styles.mapCard}>
              <div className={styles.cardHeader}>
                <span className={styles.kicker}>Location</span>
                <h2>Find Us On The Map</h2>
              </div>
              <div className={styles.mapContainer}>
                <iframe
                  title="Cafe BE Location Map"
                  src="https://maps.google.com/maps?q=Nagpur&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
};

export default Contact;