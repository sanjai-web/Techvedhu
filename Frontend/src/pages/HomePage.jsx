import React from 'react';
import Hero from '../components/Hero/Hero';
import ExploreSection from '../components/ExploreSection/ExploreSection';
import CareerLaunch from '../components/CareerLaunch/CareerLaunch';
import ScholarshipBanner from '../components/ScholarshipBanner/ScholarshipBanner';
import Mentors from '../components/Mentors/Mentors';
import Testimonials from '../components/Testimonials/Testimonials';
import FAQ from '../components/FAQ/FAQ';
import ContactForm from '../components/ContactForm/ContactForm';
import { hiringPartners } from '../data/courses';
import './HomePage.css';

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Why TechVedhu */}
      <section className="why-section section-padding">
        <div className="container">
          <div className="why-header reveal">
            <div className="section-label"><i className="bi bi-lightning-charge-fill"></i> Why Us</div>
            <h2 className="section-title">Why <span className="gradient-text">TechVedhu?</span></h2>
            <p className="section-subtitle">Not just courses — a complete career transformation ecosystem built around real outcomes.</p>
          </div>

          <div className="why-bento">

            {/* ── Hero stat card ── */}
            <div className="why-hero-card reveal">
              <div className="why-hero-top">
                <div className="why-hero-stat">
                  <span className="why-hero-num gradient-text">5,000+</span>
                  <span className="why-hero-label">Learners Placed</span>
                </div>
                {/* Stacked avatars — social proof */}
                <div className="why-avatars">
                  {[
                    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=50&h=50&q=80',
                    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=50&h=50&q=80',
                    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=50&h=50&q=80',
                    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=50&h=50&q=80',
                    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=50&h=50&q=80',
                  ].map((src, i) => (
                    <img key={i} src={src} alt="learner" className="why-avatar-img" style={{ zIndex: 5 - i }} />
                  ))}
                  <span className="why-avatar-more">+4.9k</span>
                </div>
              </div>
              <div className="why-hero-divider"></div>
              <div className="why-hero-stats-row">
                <div className="why-mini-stat"><strong>98%</strong><span>Placement Rate</span></div>
                <div className="why-mini-stat"><strong>30+</strong><span>MNC Mentors</span></div>
                <div className="why-mini-stat"><strong>15 LPA</strong><span>Avg. Package</span></div>
              </div>
            </div>

            {/* ── Feature cards ── */}
            {[
              { icon: 'bi-briefcase-fill', color: '#2DD4BF', title: 'Real Internship', desc: 'Actual projects, real deadlines, and professional collaboration with MNCs.', stat: '100%', statLabel: 'Project-based' },
              { icon: 'bi-award-fill', color: '#FBBF24', title: 'Industry Certificate', desc: 'Trusted by 50+ hiring companies across India and abroad.', stat: '50+', statLabel: 'Partners' },
              { icon: 'bi-graph-up-arrow', color: '#FB7185', title: 'Placement Support', desc: 'Mock interviews, resume reviews & recruiter connects guaranteed.', stat: '3x', statLabel: 'Higher chances' },
              { icon: 'bi-cpu-fill', color: '#A78BFA', title: 'GenAI Ready', desc: 'Every program embeds GenAI tools, prompts & AI-assisted workflows.', stat: '2025', statLabel: 'Future-proof' },
              { icon: 'bi-shield-check-fill', color: '#FB923C', title: 'Scholarship Options', desc: 'Up to 50% off. Talent should never be limited by finances.', stat: '50%', statLabel: 'Max discount' },
            ].map((w, i) => (
              <div key={w.title} className={`why-feat-card reveal delay-${(i % 3 + 1) * 100}`} style={{ '--cc': w.color }}>
                <div className="why-feat-card-top">
                  <div className="why-feat-card-icon">
                    <i className={`bi ${w.icon}`}></i>
                  </div>
                  <div className="why-feat-card-kpi">
                    <span className="why-feat-kpi-num">{w.stat}</span>
                    <span className="why-feat-kpi-label">{w.statLabel}</span>
                  </div>
                </div>
                <h4 className="why-feat-card-title">{w.title}</h4>
                <p className="why-feat-card-desc">{w.desc}</p>
                <div className="why-feat-card-bar"></div>
              </div>
            ))}

          </div>
        </div>
      </section>

      <ExploreSection />
      <CareerLaunch />
      <ScholarshipBanner />
      <Mentors />

      {/* Learners Work At */}
      <section className="learners-section section-padding-sm">
        <div className="container">
          <div className="text-center-section reveal">
            <div className="section-label"><i className="bi bi-buildings-fill"></i> Success</div>
            <h2 className="section-title">Our Learners Work At <span className="gradient-text">Top Companies</span></h2>
          </div>
          <div className="learners-marquee-wrapper reveal">
            <div className="marquee-wrapper">
              <div className="marquee-track">
                {[...hiringPartners, ...hiringPartners].map((partner, i) => (
                  <div key={i} className="learner-logo">
                    <img src={partner.logo} alt={partner.name} className="learner-logo-img" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Free Demo Banner Section */}
      <section className="free-demo-section section-padding-sm reveal">
        <div className="container">
          <div className="free-demo-banner">
            <div className="demo-content">
              <h2 className="demo-title">
                Book your <span className="demo-highlight-wrapper">Free Demo<svg className="demo-underline-svg" viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg"><path d="M5,15 C50,5 150,5 195,15" stroke="#FF7A00" strokeWidth="4" fill="none" strokeLinecap="round" /></svg></span> session
              </h2>
              <p className="demo-subtitle">Get a free academic counselling session</p>
              <a href="#contact" className="demo-cta-btn">
                Book a free demo
              </a>
            </div>
            
            <div className="demo-visual">
              <div className="demo-avatar-wrapper">
                <div className="demo-blob-backdrop"></div>
                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&h=500&q=80" alt="Students with laptop" className="demo-cutout-img" />
                <span className="sparkle-shape spark-orange-1">+</span>
                <span className="sparkle-shape spark-orange-2">+</span>
                <span className="sparkle-shape spark-dot-1">●</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ />

      {/* CTA + Contact */}
      <section className="home-contact section-padding" id="contact">
        <div className="container">
          <div className="home-contact-grid">
            <div className="contact-left reveal-left">
              <div className="section-label"><i className="bi bi-envelope-fill"></i> Enroll Today</div>
              <h2 className="section-title">Ready to <span className="gradient-text">Launch Your Career?</span></h2>
              <p className="section-subtitle" style={{ margin: '0 0 32px', textAlign: 'left' }}>
                Join 5000+ students who transformed their careers with TechVedhu. Talk to our experts today.
              </p>
              <div className="contact-perks">
                {['Free career counselling session', 'Personalized program recommendation', 'EMI options available', 'Response within 24 hours'].map(p => (
                  <div key={p} className="perk-item">
                    <i className="bi bi-check-circle-fill" style={{ color: 'var(--secondary)' }}></i>
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="contact-right reveal-right">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
