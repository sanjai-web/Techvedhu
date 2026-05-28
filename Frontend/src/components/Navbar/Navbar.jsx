import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Internships', path: '/internships' },
  { label: 'Career Launch', path: '/career-launch' },
  { label: 'Scholarship', path: '/scholarship' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  }, [location]);

  const toggleMenu = () => {
    setMenuOpen(prev => {
      document.body.style.overflow = prev ? '' : 'hidden';
      return !prev;
    });
  };

  return (
    <>
      {/* Floating Pill Wrapper */}
      <div className={`navbar-wrapper${scrolled ? ' scrolled' : ''}`} id="main-navbar">
        <nav className="navbar-pill">

          {/* ── Left: Hamburger + Logo ── */}
          <div className="nav-left">
            <button
              className={`hamburger${menuOpen ? ' open' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
              id="hamburger-btn"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <Link to="/" className="nav-logo">
              <svg width="32" height="28" viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="nav-logo-svg" style={{ marginRight: '8px' }}>
                <path d="M6 4H15.5L20 15L24.5 4H34L25 24V32H15V24L6 4Z" fill="var(--primary-light)"/>
              </svg>
              <span className="logo-text">
                Tech<span className="logo-accent">Vedhu</span>
              </span>
            </Link>
          </div>

          {/* ── Center: Nav Links ── */}
          <ul className="nav-links-desktop">
            {navLinks.map(({ label, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`nav-link-item${location.pathname === path ? ' active' : ''}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* ── Right: CTAs ── */}
          <div className="nav-right">
            <Link to="/contact" className="nav-btn-ghost">
              Talk to Us
            </Link>
            <Link to="/contact" className="nav-btn-solid">
              <i className="bi bi-rocket-takeoff-fill"></i>
              Enroll Now
            </Link>
          </div>

        </nav>
      </div>

      {/* ── Mobile Drawer ── */}
      <div className={`mobile-overlay${menuOpen ? ' open' : ''}`} onClick={() => { setMenuOpen(false); document.body.style.overflow = ''; }} />
      <div className={`mobile-drawer${menuOpen ? ' open' : ''}`}>
        <div className="mobile-drawer-header">
          <Link to="/" className="nav-logo" onClick={() => { setMenuOpen(false); document.body.style.overflow = ''; }}>
            <div className="logo-icon"><i className="bi bi-lightning-charge-fill"></i></div>
            <span className="logo-text">Tech<span className="logo-accent">Vedhu</span></span>
          </Link>
          <button className="drawer-close" onClick={() => { setMenuOpen(false); document.body.style.overflow = ''; }}>
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        <ul className="mobile-nav-list">
          {navLinks.map(({ label, path }) => (
            <li key={path}>
              <Link
                to={path}
                className={`mobile-link${location.pathname === path ? ' active' : ''}`}
                onClick={() => { setMenuOpen(false); document.body.style.overflow = ''; }}
              >
                {label}
                <i className="bi bi-arrow-right"></i>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mobile-drawer-cta">
          <Link to="/contact" className="nav-btn-ghost" style={{ width: '100%', justifyContent: 'center' }}
            onClick={() => { setMenuOpen(false); document.body.style.overflow = ''; }}>
            Talk to Us
          </Link>
          <Link to="/contact" className="nav-btn-solid" style={{ width: '100%', justifyContent: 'center' }}
            onClick={() => { setMenuOpen(false); document.body.style.overflow = ''; }}>
            <i className="bi bi-rocket-takeoff-fill"></i> Enroll Now
          </Link>
        </div>
      </div>
    </>
  );
}
