import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logoImg from '../../assets/logo.png';
import { internshipPrograms, careerLaunchPrograms } from '../../data/courses';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileInternshipsOpen, setMobileInternshipsOpen] = useState(false);
  const [mobileCareerOpen, setMobileCareerOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    document.body.style.overflow = '';
    setMobileInternshipsOpen(false);
    setMobileCareerOpen(false);
  }, [location]);

  const handleHomeClick = (e) => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

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

            <Link to="/" className="nav-logo" onClick={handleHomeClick}>
              <img src={logoImg} alt="TechVedhu Logo" className="nav-logo-img" />
              <span className="logo-text" style={{color:'whitesmoke'}}>
                Tech<span className="logo-accent">Vedhu</span>
              </span>
            </Link>
          </div>

          {/* ── Center: Nav Links ── */}
          <ul className="nav-links-desktop">
            <li>
              <Link
                to="/"
                className={`nav-link-item${location.pathname === '/' ? ' active' : ''}`}
                onClick={handleHomeClick}
              >
                Home
              </Link>
            </li>

            {/* Internship Dropdown */}
            <li className="nav-dropdown-wrapper">
              <Link
                to="/internships"
                className={`nav-link-item${location.pathname.startsWith('/internships') ? ' active' : ''}`}
              >
                Internship Program <i className="bi bi-chevron-down nav-chevron"></i>
              </Link>
              <div className="nav-dropdown-menu">
                {internshipPrograms.map(course => (
                  <Link
                    key={course.id}
                    to={`/internships/${course.slug}`}
                    className="dropdown-item"
                  >
                    <span className="dropdown-icon-wrap" style={{ color: course.color }}>
                      <i className={`bi ${course.icon}`}></i>
                    </span>
                    <span className="dropdown-label">{course.title.toUpperCase()}</span>
                  </Link>
                ))}
              </div>
            </li>

            {/* Career Launch Dropdown */}
            <li className="nav-dropdown-wrapper">
              <Link
                to="/career-launch"
                className={`nav-link-item${location.pathname.startsWith('/career-launch') ? ' active' : ''}`}
              >
                Career Launchpad <i className="bi bi-chevron-down nav-chevron"></i>
              </Link>
              <div className="nav-dropdown-menu">
                {careerLaunchPrograms.map(prog => (
                  <Link
                    key={prog.id}
                    to={`/career-launch/${prog.slug}`}
                    className="dropdown-item"
                  >
                    <span className="dropdown-icon-wrap" style={{ color: prog.color }}>
                      <i className={`bi ${prog.icon}`}></i>
                    </span>
                    <span className="dropdown-label">{prog.title.toUpperCase()}</span>
                  </Link>
                ))}
              </div>
            </li>

            <li>
              <Link
                to="/scholarship"
                className={`nav-link-item${location.pathname === '/scholarship' ? ' active' : ''}`}
              >
                Scholarship
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className={`nav-link-item${location.pathname === '/contact' ? ' active' : ''}`}
              >
                Contact
              </Link>
            </li>
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
          <Link to="/" className="nav-logo" onClick={(e) => {
            setMenuOpen(false);
            document.body.style.overflow = '';
            handleHomeClick(e);
          }}>
            <img src={logoImg} alt="TechVedhu Logo" className="nav-logo-img" />
            <span className="logo-text">Tech<span className="logo-accent">Vedhu</span></span>
          </Link>
          <button className="drawer-close" onClick={() => { setMenuOpen(false); document.body.style.overflow = ''; }}>
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        <ul className="mobile-nav-list">
          {/* Home */}
          <li>
            <Link
              to="/"
              className={`mobile-link${location.pathname === '/' ? ' active' : ''}`}
              onClick={(e) => {
                setMenuOpen(false);
                document.body.style.overflow = '';
                handleHomeClick(e);
              }}
            >
              Home
              <i className="bi bi-arrow-right"></i>
            </Link>
          </li>

          {/* Internship Program Mobile Accordion */}
          <li>
            <button
              className={`mobile-link mobile-accordion-btn${location.pathname.startsWith('/internships') ? ' active' : ''}`}
              onClick={() => setMobileInternshipsOpen(!mobileInternshipsOpen)}
            >
              <span>Internship Program</span>
              <i className={`bi bi-chevron-${mobileInternshipsOpen ? 'up' : 'down'} accordion-icon`}></i>
            </button>
            <ul className={`mobile-submenu${mobileInternshipsOpen ? ' open' : ''}`}>
              <li>
                <Link
                  to="/internships"
                  className="mobile-submenu-link view-all-link"
                  onClick={() => { setMenuOpen(false); document.body.style.overflow = ''; }}
                >
                  <i className="bi bi-grid-fill"></i> View All Internships
                </Link>
              </li>
              {internshipPrograms.map(course => (
                <li key={course.id}>
                  <Link
                    to={`/internships/${course.slug}`}
                    className={`mobile-submenu-link${location.pathname === `/internships/${course.slug}` ? ' active' : ''}`}
                    onClick={() => { setMenuOpen(false); document.body.style.overflow = ''; }}
                  >
                    <i className={`bi ${course.icon}`} style={{ color: course.color }}></i> {course.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* Career Launchpad Mobile Accordion */}
          <li>
            <button
              className={`mobile-link mobile-accordion-btn${location.pathname.startsWith('/career-launch') ? ' active' : ''}`}
              onClick={() => setMobileCareerOpen(!mobileCareerOpen)}
            >
              <span>Career Launchpad</span>
              <i className={`bi bi-chevron-${mobileCareerOpen ? 'up' : 'down'} accordion-icon`}></i>
            </button>
            <ul className={`mobile-submenu${mobileCareerOpen ? ' open' : ''}`}>
              <li>
                <Link
                  to="/career-launch"
                  className="mobile-submenu-link view-all-link"
                  onClick={() => { setMenuOpen(false); document.body.style.overflow = ''; }}
                >
                  <i className="bi bi-grid-fill"></i> View All Career Tracks
                </Link>
              </li>
              {careerLaunchPrograms.map(prog => (
                <li key={prog.id}>
                  <Link
                    to={`/career-launch/${prog.slug}`}
                    className={`mobile-submenu-link${location.pathname === `/career-launch/${prog.slug}` ? ' active' : ''}`}
                    onClick={() => { setMenuOpen(false); document.body.style.overflow = ''; }}
                  >
                    <i className={`bi ${prog.icon}`} style={{ color: prog.color }}></i> {prog.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* Scholarship */}
          <li>
            <Link
              to="/scholarship"
              className={`mobile-link${location.pathname === '/scholarship' ? ' active' : ''}`}
              onClick={() => { setMenuOpen(false); document.body.style.overflow = ''; }}
            >
              Scholarship
              <i className="bi bi-arrow-right"></i>
            </Link>
          </li>

          {/* Contact */}
          <li>
            <Link
              to="/contact"
              className={`mobile-link${location.pathname === '/contact' ? ' active' : ''}`}
              onClick={() => { setMenuOpen(false); document.body.style.overflow = ''; }}
            >
              Contact
              <i className="bi bi-arrow-right"></i>
            </Link>
          </li>
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
