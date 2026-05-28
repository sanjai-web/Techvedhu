import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen, ChevronDown, Search, Menu, X,
  Code2, Brain, TrendingUp, Palette, Shield,
  Globe, Monitor, ShoppingBag, Rocket, BarChart3, Zap
} from 'lucide-react';
import './Navbar.css';

// ─── REAL TechVedhu.com navigation structure ─────────────────────────────────
const internshipPrograms = [
  { icon: <Code2 size={17} />, title: 'Web Development', color: '#4F46E5', slug: 'web-development' },
  { icon: <Brain size={17} />, title: 'Machine Learning', color: '#7C3AED', slug: 'machine-learning' },
  { icon: <Code2 size={17} />, title: 'Python Programming', color: '#0EA5E9', slug: 'python' },
  { icon: <Palette size={17} />, title: 'UI/UX Design', color: '#F59E0B', slug: 'ui-ux-design' },
  { icon: <ShoppingBag size={17} />, title: 'Sales & Marketing', color: '#10B981', slug: 'sales-marketing' },
  { icon: <Shield size={17} />, title: 'Cyber Security', color: '#EF4444', slug: 'cyber-security' },
  { icon: <Globe size={17} />, title: 'Cloud Computing', color: '#0EA5E9', slug: 'cloud-computing' },
  { icon: <Monitor size={17} />, title: 'App Development', color: '#7C3AED', slug: 'app-development' },
  { icon: <TrendingUp size={17} />, title: 'Data Science', color: '#10B981', slug: 'data-science' },
  { icon: <TrendingUp size={17} />, title: 'Digital Marketing', color: '#F59E0B', slug: 'digital-marketing' },
  { icon: <Code2 size={17} />, title: 'Java Programming', color: '#EF4444', slug: 'java' },
  { icon: <Brain size={17} />, title: 'Artificial Intelligence', color: '#4F46E5', slug: 'ai' },
];

const launchpadPrograms = [
  { icon: <Rocket size={17} />, title: 'Software Dev Launchpad (FSD + Gen AI)', subtitle: '4–8 months · Placement Guaranteed', color: '#4F46E5' },
  { icon: <BarChart3 size={17} />, title: 'Data Analysis & Data Science (DADS)', subtitle: '4–8 months · Placement Guaranteed', color: '#10B981' },
  { icon: <Zap size={17} />, title: 'FinTech & Digital Finance + Gen AI', subtitle: '4–8 months · Placement Guaranteed', color: '#F59E0B' },
];

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Internship Program', path: '/courses', hasDropdown: true, dropdownType: 'internship' },
  { label: 'Career Launchpad', path: '/courses', hasDropdown: true, dropdownType: 'launchpad' },
  { label: 'About', path: '/about' },
  { label: 'Blog', path: '/blog' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  useEffect(() => {
    if (searchOpen && searchRef.current) searchRef.current.focus();
  }, [searchOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <nav className={`navbar-custom ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="navbar-inner">
            {/* Logo — real TechVedhu branding */}
            <Link to="/" className="navbar-logo">
              <div className="logo-icon">
                <BookOpen size={20} strokeWidth={2.5} />
              </div>
              <span className="logo-text">
                Tech<span className="logo-accent">Vedhu</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="navbar-links">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div
                    key={link.label}
                    className="nav-dropdown-wrapper"
                    onMouseEnter={() => setActiveDropdown(link.dropdownType)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="nav-link-btn">
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={`dropdown-arrow ${activeDropdown === link.dropdownType ? 'open' : ''}`}
                      />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === link.dropdownType && (
                        <motion.div
                          className={`nav-dropdown ${link.dropdownType === 'launchpad' ? 'nav-dropdown-narrow' : ''}`}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.18 }}
                        >
                          {link.dropdownType === 'internship' ? (
                            <>
                              <div className="dropdown-header">
                                <span>Internship / Certificate Programs</span>
                                <Link to="/courses" className="dropdown-view-all">View All →</Link>
                              </div>
                              <div className="dropdown-grid">
                                {internshipPrograms.map((p) => (
                                  <Link key={p.title} to={`/courses/${p.slug}`} className="dropdown-item">
                                    <span className="dropdown-item-icon" style={{ color: p.color, background: `${p.color}15` }}>
                                      {p.icon}
                                    </span>
                                    <div className="dropdown-item-title">{p.title}</div>
                                  </Link>
                                ))}
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="dropdown-header">
                                <span>Career Launchpad Programs</span>
                                <Link to="/courses" className="dropdown-view-all">View All →</Link>
                              </div>
                              <div className="dropdown-list">
                                {launchpadPrograms.map((p) => (
                                  <Link key={p.title} to="/courses" className="dropdown-item-wide">
                                    <span className="dropdown-item-icon" style={{ color: p.color, background: `${p.color}15` }}>
                                      {p.icon}
                                    </span>
                                    <div>
                                      <div className="dropdown-item-title">{p.title}</div>
                                      <div className="dropdown-item-count">{p.subtitle}</div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <NavLink
                    key={link.label}
                    to={link.path}
                    className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}
                  >
                    {link.label}
                  </NavLink>
                )
              )}
            </div>

            {/* Desktop Actions */}
            <div className="navbar-actions">
              {/* Search */}
              <div className={`search-wrapper ${searchOpen ? 'open' : ''}`}>
                <AnimatePresence>
                  {searchOpen && (
                    <motion.input
                      ref={searchRef}
                      className="search-input"
                      placeholder="Search programs..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: 200, opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      onBlur={() => { setSearchOpen(false); setSearchQuery(''); }}
                      onKeyDown={(e) => e.key === 'Escape' && setSearchOpen(false)}
                    />
                  )}
                </AnimatePresence>
                <button
                  className="icon-btn tooltip-custom"
                  data-tooltip="Search"
                  onClick={() => setSearchOpen(!searchOpen)}
                >
                  <Search size={18} />
                </button>
              </div>

              {/* Real TechVedhu CTA buttons */}
              <a
                href="https://wa.me/919363603504"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-custom"
                style={{ padding: '8px 18px', fontSize: '14px' }}
              >
                Free Trial
              </a>
              <Link to="/register" className="btn-primary-custom" style={{ padding: '8px 18px', fontSize: '14px' }}>
                Login / Signup
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="mobile-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.28 }}
            >
              <div className="mobile-menu-header">
                <Link to="/" className="navbar-logo" onClick={() => setMobileOpen(false)}>
                  <div className="logo-icon"><BookOpen size={18} strokeWidth={2.5} /></div>
                  <span className="logo-text">Tech<span className="logo-accent">Vedhu</span></span>
                </Link>
                <button className="icon-btn" onClick={() => setMobileOpen(false)}>
                  <X size={22} />
                </button>
              </div>

              <div className="mobile-search">
                <Search size={16} className="mobile-search-icon" />
                <input
                  className="mobile-search-input"
                  placeholder="Search programs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <nav className="mobile-nav">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <NavLink
                      to={link.path}
                      className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
                <div className="mobile-extra-links">
                  <a href="/become-instructor" className="mobile-nav-link">Become an Instructor</a>
                  <a href="/hire-from-us" className="mobile-nav-link">Hire From Us</a>
                </div>
              </nav>

              <div className="mobile-cta">
                <a
                  href="https://wa.me/919363603504"
                  className="btn-outline-custom w-100 justify-content-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Free Trial
                </a>
                <Link
                  to="/register"
                  className="btn-primary-custom w-100 justify-content-center"
                  onClick={() => setMobileOpen(false)}
                >
                  Login / Signup
                </Link>
              </div>

              {/* Contact in Mobile */}
              <div className="mobile-contact">
                <a href="tel:+919363630504">📞 +91 93636 30504</a>
                <a href="mailto:support@techvedhu.com">✉️ support@techvedhu.com</a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
