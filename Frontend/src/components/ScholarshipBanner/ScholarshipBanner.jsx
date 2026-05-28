import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ScholarshipBanner.css';

function useCountdown(target) {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    const update = () => {
      const diff = target - Date.now();
      if (diff <= 0) return;
      setTime({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    update();
    const t = setInterval(update, 1000);
    return () => clearInterval(t);
  }, [target]);
  return time;
}

const deadline = Date.now() + 5 * 24 * 3600000 + 14 * 3600000 + 33 * 60000;

export default function ScholarshipBanner() {
  const time = useCountdown(deadline);
  const pad = n => String(n).padStart(2, '0');

  return (
    <section className="scholarship-section section-padding" id="scholarship">
      <div className="container">
        <div className="scholarship-card reveal">
          {/* Background elements */}
          <div className="sc-orb sc-orb-1"></div>
          <div className="sc-orb sc-orb-2"></div>

          <div className="sc-content">
            <div className="sc-left">
              <div className="sc-badge">
                <i className="bi bi-gift-fill"></i> Limited Scholarship Opportunity
              </div>
              <h2 className="sc-title">
                Get Up To <span className="sc-highlight">50% Scholarship</span><br />
                On Career Launch Programs
              </h2>
              <p className="sc-desc">
                Apply before the deadline and unlock massive discounts on our premium Career Launch programs. Seats are limited — don't miss your chance!
              </p>

              <div className="sc-eligibility">
                <h4>Eligibility Criteria</h4>
                <ul>
                  <li><i className="bi bi-check2-circle"></i> Final year students or recent graduates (2022–2025)</li>
                  <li><i className="bi bi-check2-circle"></i> Minimum 60% academic score</li>
                  <li><i className="bi bi-check2-circle"></i> Strong motivation and career clarity</li>
                  <li><i className="bi bi-check2-circle"></i> Open to all engineering and arts backgrounds</li>
                </ul>
              </div>

              <div className="sc-cta-group">
                <Link to="/scholarship" className="btn-primary-custom sc-btn">
                  <i className="bi bi-send-fill"></i> Apply for Scholarship
                </Link>
                <Link to="/contact" className="btn-outline-custom sc-btn">
                  Talk to Advisor
                </Link>
              </div>
            </div>

            <div className="sc-right">
              <div className="sc-discount-badge">
                <span className="discount-num">50%</span>
                <span className="discount-label">OFF</span>
                <span className="discount-sub">On All Programs</span>
              </div>

              <div className="sc-countdown-label">
                <i className="bi bi-clock-fill"></i> Scholarship Deadline
              </div>
              <div className="sc-countdown">
                {[['d', 'Days'], ['h', 'Hours'], ['m', 'Mins'], ['s', 'Secs']].map(([key, label]) => (
                  <div className="countdown-unit" key={key}>
                    <div className="countdown-num">{pad(time[key])}</div>
                    <div className="countdown-label">{label}</div>
                  </div>
                ))}
              </div>

              <div className="sc-slots">
                <div className="slots-bar">
                  <div className="slots-fill"></div>
                </div>
                <p className="slots-text">
                  <strong>Only 23 seats</strong> remaining out of 50
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
