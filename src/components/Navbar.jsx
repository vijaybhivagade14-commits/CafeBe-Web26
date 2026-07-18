import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import styles from './Navbar.module.css';

const navigation = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/gallary', label: 'Gallery' },
  { to: '/about', label: 'Our Story' },
  { to: '/reservation', label: 'Reservation' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
      <nav className={styles.navbar} aria-label="Main navigation">
        <NavLink className={styles.brand} to="/" onClick={closeMenu} aria-label="Cafe BE home">
          <span className={styles.brandTop}>CAFE</span>
          <span className={styles.brandName}>BE</span>
          <span className={styles.brandLine}>COFFEE • KITCHEN</span>
        </NavLink>

        <button
          className={`${styles.menuButton} ${open ? styles.menuOpen : ''}`}
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <div className={`${styles.navLinks} ${open ? styles.navLinksOpen : ''}`}>
          {navigation.map(({ to, label }) => (
            <NavLink
              end={to === '/'}
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ''}`
              }
              to={to}
              onClick={closeMenu}
              key={to}
            >
              {label}
            </NavLink>
          ))}
          <NavLink className={styles.reserveButton} to="/reservation" onClick={closeMenu}>
            Reserve a Table
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
