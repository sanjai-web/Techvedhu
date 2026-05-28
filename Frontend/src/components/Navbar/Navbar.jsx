import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen, ChevronDown, Search, Bell, Menu, X,
  Laptop, Code2, Brain, Award, Users, Briefcase,
  GraduationCap, BarChart3, Globe, Zap
} from 'lucide-react';
import './Navbar.css';

const courseCategories = [
  { icon: <Code2 size={18} />, title: 'Web Development', count: '42 Courses', color: '#4F46E5' },
  { icon: <Brain size={18} />, title: 'AI & Machine Learning', count: '28 Courses', color: '#7C3AED' },
  { icon: <Laptop size={18} />, title: 'Mobile Development', count: '19 Courses', color: '#0EA5E9' },
  { icon: <BarChart3 size={18} />, title: 'Data Science', count: '31 Courses', color: '#10B981' },
  { icon: <Globe size={18} />, title: 'Cloud Computing', count: '16 Courses', color: '#F59E0B' },
  { icon: <Zap size={18} />, title: 'Cybersecurity', count: '12 Courses', color: '#EF4444' },
];

const navLinks = [
  { label: 'Home', path: '/' },
  {
    label: 'Courses', path: '/courses', hasDropdown: true,
  },
  { label: 'Internships', path: '/internships' },
  { label: 'Blog', path: '/blog' },
  { label: 'About', path: '/about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
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
    setDropdownOpen(false);
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
            {/* Logo */}
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
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button className="nav-link-btn">
                      {link.label}
                      <ChevronDown size={14} className={`dropdown-arrow ${dropdownOpen ? 'open' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          className="nav-dropdown"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.18 }}
                        >
                          <div className="dropdown-header">
                            <span>Browse by Category</span>
                            <Link to="/courses" className="dropdown-view-all">View All →</Link>
                          </div>
                          <div className="dropdown-grid">
                            {courseCategories.map((cat) => (
                              <Link key={cat.title} to="/courses" className="dropdown-item">
                                <span className="dropdown-item-icon" style={{ color: cat.color, background: `${cat.color}15` }}>
                                  {cat.icon}
                                </span>
                                <div>
                                  <div className="dropdown-item-title">{cat.title}</div>
                                  <div className="dropdown-item-count">{cat.count}</div>
                                </div>
                              </Link>
                            ))}
                          </div>
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
                      placeholder="Search courses, topics..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: 220, opacity: 1 }}
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

              {/* Notification */}
              <button className="icon-btn tooltip-custom" data-tooltip="Notifications">
                <Bell size={18} />
                <span className="notification-dot" />
              </button>

              <Link to="/login" className="btn-outline-custom" style={{ padding: '8px 18px', fontSize: '14px' }}>
                Log In
              </Link>
              <Link to="/register" className="btn-primary-custom" style={{ padding: '8px 18px', fontSize: '14px' }}>
                Get Started
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
                  placeholder="Search courses..."
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
              </nav>

              <div className="mobile-cta">
                <Link to="/login" className="btn-outline-custom w-100 justify-content-center" onClick={() => setMobileOpen(false)}>
                  Log In
                </Link>
                <Link to="/register" className="btn-primary-custom w-100 justify-content-center" onClick={() => setMobileOpen(false)}>
                  Get Started Free
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
