import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import styles from './FAQ.module.css';

const faqs = [
  { q: 'Do you take reservations?', a: 'Yes — you can reserve a table via our reservation page, call us at +91 80000 00000, or visit in person. We recommend booking at least 24 hours in advance for weekends.' },
  { q: 'Do you offer takeout or delivery?', a: 'Yes, most of our menu is available for takeout. We also partner with leading food delivery apps for convenient doorstep delivery.' },
  { q: 'Are you family and kid friendly?', a: 'Absolutely! We welcome families with open arms. We have a dedicated kids menu, high chairs, and a small play corner.' },
  { q: 'Do you cater for dietary requirements?', a: 'Yes — we offer vegetarian, vegan, and gluten-free options. Please inform your server about any allergies and our chef will be happy to accommodate.' },
  { q: 'What are your operating hours?', a: 'We\'re open daily from 10:00 AM to 10:30 PM, including weekends and most holidays. Hours may vary on special occasions.' },
  { q: 'Can I host a private event at Cafe BE?', a: 'Yes! We have a private dining area that seats up to 30 guests. Contact us for custom menus, decorations, and event planning assistance.' },
];

const FAQItem = ({ faq, isOpen, onToggle }) => (
  <div className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}>
    <button className={styles.question} onClick={onToggle} aria-expanded={isOpen}>
      <span>{faq.q}</span>
      <FiChevronDown className={styles.chevron} />
    </button>
    <div className={styles.answerWrap}>
      <div className={styles.answer}>{faq.a}</div>
    </div>
  </div>
);

const FAQ = () => {
  const [open, setOpen] = useState(null);

  return (
    <section className={styles.section} aria-label="Frequently asked questions">
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.kicker}>FAQ</span>
          <h2 className={styles.title}>
            Frequently asked <em>questions</em>
          </h2>
          <p className={styles.subtitle}>
            Everything you need to know about dining with us.
          </p>
        </div>
        <div className={styles.list}>
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
