import React from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen, Twitter, Linkedin, Youtube, Instagram,
  Mail, Phone, MapPin, ArrowRight, MessageCircle,
  Shield, Award, Globe
} from 'lucide-react';
import './Footer.css';

// ─── REAL TechVedhu.com footer content ───────────────────────────────────────
const footerLinks = {
  'Career Programs': [
    { label: 'Internship / Certificate Program', to: '/courses' },
    { label: 'Career Launchpad — FSD + Gen AI', to: '/courses' },
    { label: 'Data Analysis & Data Science', to: '/courses' },
    { label: 'FinTech & Digital Finance', to: '/courses' },
    { label: 'Placement Guaranteed Program', to: '/courses' },
    { label: 'Become an Instructor', to: '/become-instructor' },
  ],
  'TechVedhu': [
    { label: 'About Us', to: '/about' },
    { label: 'Success Stories', to: '/blog' },
    { label: 'Hire From Us', to: '/hire-from-us' },
    { label: 'Blog & Insights', to: '/blog' },
    { label: 'Terms & Conditions', to: '/terms' },
    { label: 'Privacy Policy', to: '/privacy' },
  ],
  'Programs': [
    { label: 'Web Development', to: '/courses' },
    { label: 'Machine Learning', to: '/courses' },
    { label: 'Python Programming', to: '/courses' },
    { label: 'UI/UX Design', to: '/courses' },
    { label: 'Cyber Security', to: '/courses' },
    { label: 'Data Science', to: '/courses' },
  ],
  'More Programs': [
    { label: 'Cloud Computing', to: '/courses' },
    { label: 'App Development', to: '/courses' },
    { label: 'Digital Marketing', to: '/courses' },
    { label: 'Java Programming', to: '/courses' },
    { label: 'Artificial Intelligence', to: '/courses' },
    { label: 'Sales & Marketing', to: '/courses' },
  ],
};

const socials = [
  { icon: <Twitter size={18} />, label: 'Twitter', href: '#' },
  { icon: <Linkedin size={18} />, label: 'LinkedIn', href: '#' },
  { icon: <Youtube size={18} />, label: 'YouTube', href: '#' },
  { icon: <Instagram size={18} />, label: 'Instagram', href: '#' },
];

const trustBadges = [
  { icon: <Shield size={16} />, label: 'SSL Secured' },
  { icon: <Award size={16} />, label: '4.8 Google Rating' },
  { icon: <Globe size={16} />, label: '10+ Languages' },
];

export default function Footer() {
  return (
    <footer className="footer">
      {/* Newsletter / CTA Banner */}
      <div className="footer-newsletter">
        <div className="container">
          <div className="newsletter-inner">
            <div className="newsletter-content">
              <h3 className="newsletter-title">
                🚀 Start Your Tech Journey —{' '}
                <span className="text-gradient" style={{ WebkitTextFillColor: 'unset', color: '#A5B4FC' }}>
                  Book a Free Trial Today
                </span>
              </h3>
              <p className="newsletter-subtitle">
                Join 10,700+ learners mastering in-demand tech skills with live mentorship,
                real projects, and 100+ hiring partners. No credit card required.
              </p>
            </div>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <div className="newsletter-input-wrap">
                <Mail size={16} className="newsletter-input-icon" />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="newsletter-input"
                />
              </div>
              <button type="submit" className="btn-primary-custom" style={{ background: 'white', color: 'var(--primary)' }}>
                Book Free Trial
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
              <Link to="/" className="footer-logo">
                <div className="logo-icon">
                  <BookOpen size={20} strokeWidth={2.5} />
                </div>
                <span className="logo-text">
                  Tech<span className="logo-accent">Vedhu</span>
                </span>
              </Link>

              <p className="footer-tagline">
                Design amazing digital experiences that create more happy in the world.
                Work-experience-based learning to supercharge your career.
              </p>

              {/* Real Contact Info from TechVedhu.com */}
              <div className="footer-contact">
                <div className="footer-contact-item">
                  <Mail size={15} />
                  <a href="mailto:support@techvedhu.com">support@techvedhu.com</a>
                </div>
                <div className="footer-contact-item">
                  <Phone size={15} />
                  <a href="tel:+919363630504">+91 93636 30504</a>
                </div>
                <div className="footer-contact-item">
                  <MapPin size={15} />
                  <span>
                    7/257c Lakshmi Complex, Advaitha Ashram Road,
                    Sinthampalayam, Fairlands, Salem — 636016, Tamil Nadu.
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="footer-socials">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="social-link tooltip-custom"
                    data-tooltip={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {s.icon}
                  </a>
                ))}
                {/* WhatsApp */}
                <a
                  href="https://wa.me/919363603504"
                  className="social-link tooltip-custom"
                  data-tooltip="WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ background: 'rgba(37, 211, 102, 0.15)' }}
                >
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="footer-links-col">
                <h4 className="footer-links-title">{category}</h4>
                <ul className="footer-links-list">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link to={link.to} className="footer-link">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <p className="footer-copyright">
              © {new Date().getFullYear()} TechVedhu. All rights reserved. Made with ❤️ in Salem, Tamil Nadu.
            </p>
            <div className="footer-trust-badges">
              {trustBadges.map((b) => (
                <span key={b.label} className="trust-badge">
                  {b.icon}
                  {b.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919363603504"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
    </footer>
  );
}
