import React, { useState } from 'react';
import { FiUser, FiCalendar, FiClock, FiUsers, FiPhone, FiMail, FiCheck } from 'react-icons/fi';
import styles from './Reservation.module.css';

const initialForm = { name: '', email: '', phone: '', date: '', time: '', guests: '2', notes: '' };

function validate(v) {
  const errs = {};
  if (!v.name.trim()) errs.name = 'Name is required';
  if (!v.email.trim()) errs.email = 'Email is required';
  else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v.email)) errs.email = 'Invalid email';
  if (!v.phone.trim()) errs.phone = 'Phone is required';
  if (!v.date) errs.date = 'Date is required';
  if (!v.time) errs.time = 'Time is required';
  return errs;
}

const Reservation = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    setErrors((s) => ({ ...s, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm(initialForm);
    }, 4000);
  };

  return (
    <section className={styles.section} aria-label="Reserve a table">
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.kicker}>Reservation</span>
          <h2 className={styles.title}>
            Book your <em>table</em> today
          </h2>
          <p className={styles.subtitle}>
            Secure your spot for an unforgettable dining experience. We'll confirm your reservation within 2 hours.
          </p>
        </div>

        {submitted ? (
          <div className={styles.success}>
            <div className={styles.successIcon}><FiCheck /></div>
            <h3>Reservation Received!</h3>
            <p>Thank you, {form.name || 'Guest'}. We'll confirm your booking via email shortly.</p>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.row}>
              <div className={styles.field}>
                <label><FiUser className={styles.fieldIcon} /> Full Name</label>
                <input name="name" value={form.name} onChange={handleChange} placeholder="John Doe" />
                {errors.name && <span className={styles.error}>{errors.name}</span>}
              </div>
              <div className={styles.field}>
                <label><FiMail className={styles.fieldIcon} /> Email</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@example.com" />
                {errors.email && <span className={styles.error}>{errors.email}</span>}
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.field}>
                <label><FiPhone className={styles.fieldIcon} /> Phone</label>
                <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+91 80000 00000" />
                {errors.phone && <span className={styles.error}>{errors.phone}</span>}
              </div>
              <div className={styles.field}>
                <label><FiUsers className={styles.fieldIcon} /> Guests</label>
                <select name="guests" value={form.guests} onChange={handleChange}>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                  <option value="9+">9+ Guests</option>
                </select>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.field}>
                <label><FiCalendar className={styles.fieldIcon} /> Date</label>
                <input name="date" type="date" value={form.date} onChange={handleChange} />
                {errors.date && <span className={styles.error}>{errors.date}</span>}
              </div>
              <div className={styles.field}>
                <label><FiClock className={styles.fieldIcon} /> Time</label>
                <input name="time" type="time" value={form.time} onChange={handleChange} />
                {errors.time && <span className={styles.error}>{errors.time}</span>}
              </div>
            </div>
            <div className={styles.field}>
              <label>Special Requests (optional)</label>
              <textarea name="notes" value={form.notes} onChange={handleChange} placeholder="Any dietary requirements or special occasion?" rows={3} />
            </div>
            <button type="submit" className={styles.submitBtn}>Confirm Reservation</button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Reservation;
