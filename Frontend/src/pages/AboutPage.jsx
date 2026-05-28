import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Heart, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './CoursesPage.css';

const team = [
  { name: 'Karthik Rajan', role: 'CEO & Co-founder', avatar: 'https://i.pravatar.cc/80?img=11', desc: 'Ex-Google, IIT Madras. 12+ years in tech education.' },
  { name: 'Divya Krishnan', role: 'CTO & Co-founder', avatar: 'https://i.pravatar.cc/80?img=9', desc: 'Ex-Microsoft, NIT grad. AI & Cloud architecture expert.' },
  { name: 'Arjun Mehta', role: 'Head of Curriculum', avatar: 'https://i.pravatar.cc/80?img=33', desc: 'Former Lead Engineer at Amazon. Full-stack expert.' },
  { name: 'Priya Subramaniam', role: 'Head of Placement', avatar: 'https://i.pravatar.cc/80?img=5', desc: '500+ placements in top MNCs. Career coaching expert.' },
];

const values = [
  { icon: <Target size={24} />, title: 'Mission-Driven', desc: 'Making quality tech education accessible to every aspiring learner in India.' },
  { icon: <Heart size={24} />, title: 'Student-First', desc: 'Every decision we make is centered around our learners\' success and growth.' },
  { icon: <Globe size={24} />, title: 'Industry-Aligned', desc: 'Curriculum built with hiring managers to ensure real-world relevance.' },
  { icon: <Users size={24} />, title: 'Community-Led', desc: 'A thriving community of 50,000+ learners supporting each other\'s journey.' },
];

export default function AboutPage() {
  return (
    <div className="page-content">
      {/* Hero */}
      <div className="page-hero bg-surface">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="section-label">Our Story</p>
            <h1 className="section-title">
              We're on a Mission to Make<br />
              <span className="text-gradient">Tech Education Accessible</span>
            </h1>
            <p className="section-subtitle mx-auto">
              TechVedhu was founded in 2020 in Chennai with a simple belief: every Indian learner
              deserves access to world-class tech education that leads to real career outcomes.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Values */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">What We Stand For</h2>
          </div>
          <div className="row g-4">
            {values.map((v, i) => (
              <div key={v.title} className="col-md-6 col-lg-3">
                <motion.div
                  className="card-modern p-4 h-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="feature-icon mb-3" style={{ background: 'var(--primary-light)', color: 'var(--primary)' }}>
                    {v.icon}
                  </div>
                  <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{v.title}</h4>
                  <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>{v.desc}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-surface">
        <div className="container">
          <div className="text-center mb-5">
            <p className="section-label">Our Team</p>
            <h2 className="section-title">
              Meet the <span className="text-gradient">Builders</span>
            </h2>
          </div>
          <div className="row g-4 justify-content-center">
            {team.map((m, i) => (
              <div key={m.name} className="col-sm-6 col-lg-3">
                <motion.div
                  className="card-modern p-4 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <img src={m.avatar} alt={m.name} style={{ width: 72, height: 72, borderRadius: '50%', objectFit: 'cover', margin: '0 auto 12px', display: 'block', border: '3px solid var(--primary-light)' }} />
                  <h4 style={{ fontSize: 15, fontWeight: 700, marginBottom: 4 }}>{m.name}</h4>
                  <p style={{ fontSize: 12, color: 'var(--primary)', fontWeight: 600, marginBottom: 8 }}>{m.role}</p>
                  <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>{m.desc}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container text-center">
          <h2 className="section-title">Ready to Join 50,000+ Learners?</h2>
          <p className="section-subtitle mx-auto mb-4">Start your free 7-day trial today. No credit card required.</p>
          <Link to="/register" className="btn-primary-custom">
            Get Started Free
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
