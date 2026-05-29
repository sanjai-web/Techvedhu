import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logoImg from '../../assets/logo.png';

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            {/* Column 1: Brand */}
            <div className="footer-brand">
              <Link to="/" className="logo-brand-custom">
                <img src={logoImg} alt="TechVedhu Logo" className="footer-logo-img" />
                <span className="logo-text-custom">TECH VEDHU</span>
              </Link>
              <p className="footer-tagline-custom">
                Design amazing digital experiences that create more happy in the world.
              </p>
            </div>

            {/* Column 2: Address */}
            <div className="footer-col">
              <h5 className="footer-col-title-custom">Address</h5>
              <div className="footer-contact-list-custom">
                <div className="footer-contact-item-custom">
                  <i className="bi bi-envelope"></i>
                  <a href="mailto:support@techvedhu.com">support@techvedhu.com</a>
                </div>
                <div className="footer-contact-item-custom">
                  <i className="bi bi-telephone"></i>
                  <a href="tel:9363630504">9363630504</a>
                </div>
                <div className="footer-contact-item-custom align-start">
                  <i className="bi bi-geo-alt"></i>
                  <span>
                    Corporate Office : Salem, 7/257c Lakshmi complex, Advaitha Ashram road,Sinthampalayam, Balaji nagar, Fairlands, Salem, Tamilnadu 636016.
                  </span>
                </div>
                <div className="footer-contact-item-custom align-start">
                  <i className="bi bi-geo-alt"></i>
                  <span>
                    Office Address: Tech Vedhu 3rd Floor, Near Income Tax Department, 80 Feet Road, 6th Block, Koramangala, Bengaluru, Karnataka - 560095.
                  </span>
                </div>
              </div>
            </div>

            {/* Column 3: Career Programs */}
            <div className="footer-col">
              <h5 className="footer-col-title-custom">Career Programs</h5>
              <ul className="footer-links-custom">
                <li>
                  <Link to="/internships" className="footer-link-custom">
                    Internship / Certificate program
                  </Link>
                </li>
                <li>
                  <Link to="/career-launch" className="footer-link-custom">
                    Placement Guaranteed Program
                  </Link>
                </li>
              </ul>

              <h5 className="footer-col-title-custom sub-header-custom">For Business</h5>
              <ul className="footer-links-custom">
                <li>
                  <Link to="/contact" className="footer-link-custom">
                    Hire from Tech Vedhu
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="footer-link-custom">
                    Tech Vedhu Onboard
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Tech Vedhu */}
            <div className="footer-col">
              <h5 className="footer-col-title-custom">Tech Vedhu</h5>
              <ul className="footer-links-custom">
                <li>
                  <Link to="/" className="footer-link-custom">
                    Success Stories
                  </Link>
                </li>
                <li>
                  <Link to="/" className="footer-link-custom">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="footer-link-custom">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="footer-link-custom">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <p>© {new Date().getFullYear()} TechVedhu. All rights reserved. Made with ❤️ in India.</p>
            <div className="footer-legal">
              <Link to="/contact">Privacy Policy</Link>
              <Link to="/contact">Terms of Service</Link>
              <Link to="/contact">Refund Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
