import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  BookOpen, Twitter, Linkedin, Github, Youtube, Instagram,
  Mail, Phone, MapPin, ArrowRight, ExternalLink,
  Shield, Award, Globe
} from 'lucide-react';
import './Footer.css';

const footerLinks = {
  Learning: [
    { label: 'Browse Courses', to: '/courses' },
    { label: 'Internships', to: '/internships' },
    { label: 'Career Paths', to: '/careers' },
    { label: 'Certifications', to: '/certifications' },
    { label: 'Free Resources', to: '/resources' },
    { label: 'Blog', to: '/blog' },
  ],
  Company: [
    { label: 'About Us', to: '/about' },
    { label: 'Careers', to: '/careers' },
    { label: 'Press & Media', to: '/press' },
    { label: 'Partner With Us', to: '/partner' },
    { label: 'Become an Instructor', to: '/teach' },
  ],
  Support: [
    { label: 'Help Center', to: '/help' },
    { label: 'Contact Us', to: '/contact' },
    { label: 'Community Forum', to: '/community' },
    { label: 'Student Reviews', to: '/reviews' },
    { label: 'Report an Issue', to: '/report' },
  ],
  Legal: [
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Terms of Service', to: '/terms' },
    { label: 'Cookie Policy', to: '/cookies' },
    { label: 'Refund Policy', to: '/refund' },
    { label: 'Accessibility', to: '/accessibility' },
  ],
};

const socials = [
  { icon: <Twitter size={18} />, label: 'Twitter', href: '#' },
  { icon: <Linkedin size={18} />, label: 'LinkedIn', href: '#' },
  { icon: <Youtube size={18} />, label: 'YouTube', href: '#' },
  { icon: <Instagram size={18} />, label: 'Instagram', href: '#' },
  { icon: <Github size={18} />, label: 'GitHub', href: '#' },
];

const trustBadges = [
  { icon: <Shield size={16} />, label: 'SSL Secured' },
  { icon: <Award size={16} />, label: 'ISO Certified' },
  { icon: <Globe size={16} />, label: 'NASSCOM Member' },
];

export default function Footer() {
  return (
    <footer className="footer">
      {/* Newsletter Banner */}
      <div className="footer-newsletter">
        <div className="container">
          <div className="newsletter-inner">
            <div className="newsletter-content">
              <h3 className="newsletter-title">
                🚀 Start Learning Today — Get{' '}
                <span className="text-gradient">₹2,000 Off</span> Your First Course
              </h3>
              <p className="newsletter-subtitle">
                Join 50,000+ learners. Get weekly insights, course updates, and exclusive offers.
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
              <button type="submit" className="btn-primary-custom">
                Subscribe
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
                Empowering India's next generation of tech leaders through
                world-class, mentor-led education and hands-on learning.
              </p>

              <div className="footer-contact">
                <div className="footer-contact-item">
                  <Mail size={15} />
                  <a href="mailto:hello@techvedhu.com">hello@techvedhu.com</a>
                </div>
                <div className="footer-contact-item">
                  <Phone size={15} />
                  <a href="tel:+919876543210">+91 98765 43210</a>
                </div>
                <div className="footer-contact-item">
                  <MapPin size={15} />
                  <span>Chennai, Tamil Nadu, India</span>
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
              © {new Date().getFullYear()} TechVedhu. All rights reserved. Made with ❤️ in India.
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
    </footer>
  );
}
