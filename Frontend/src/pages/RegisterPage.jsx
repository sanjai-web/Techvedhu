import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Lock, User, Phone, Eye, EyeOff, Github, Chrome } from 'lucide-react';
import './AuthPage.css';

export default function RegisterPage() {
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="auth-page">
      {/* Left Panel */}
      <div className="auth-left">
        <div className="auth-left-content">
          <div className="auth-brand">
            <div className="logo-icon" style={{ background: 'linear-gradient(135deg,#4F46E5,#7C3AED)', borderRadius: 10, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: 'white', fontWeight: 900, fontSize: 20 }}>T</span>
            </div>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, color: 'white' }}>
              Tech<span style={{ color: '#818CF8' }}>Vedhu</span>
            </span>
          </div>
          <h2 className="auth-left-title">
            Start Your<br />
            Tech Journey<br />
            <span className="auth-left-accent">Today</span>
          </h2>
          <p className="auth-left-subtitle">
            Join 10,700+ learners already building their tech careers. Free demo — no credit card required.
          </p>

          {/* Real Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 24 }}>
            {[
              { v: '10.7K+', l: 'Learners' },
              { v: '4.8 ★', l: 'Google Rating' },
              { v: '100+', l: 'Companies' },
              { v: '50%', l: 'Salary Hike' },
            ].map((s) => (
              <div key={s.l} style={{ background: 'rgba(255,255,255,0.08)', borderRadius: 12, padding: '12px 14px', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
                <div style={{ fontSize: 20, fontWeight: 900, color: '#A5B4FC', fontFamily: 'var(--font-display)' }}>{s.v}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', fontWeight: 600, marginTop: 2 }}>{s.l}</div>
              </div>
            ))}
          </div>

          <div className="auth-features">
            {[
              '12 Internship / Certificate Programs',
              'Live Mentorship Sessions',
              'Guaranteed Internship Certificate',
              'Placement Support — 100+ Partners',
              'Free Demo Before You Enroll',
            ].map((f) => (
              <div key={f} className="auth-feature-item">
                <span className="auth-feature-check">✓</span>
                {f}
              </div>
            ))}
          </div>
        </div>
        <div className="auth-left-blob" />
      </div>

      {/* Right Panel */}
      <div className="auth-right">
        <div className="auth-form-container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="auth-title">Create your account</h1>
            <p className="auth-subtitle">
              Already have an account?{' '}
              <Link to="/login" className="auth-switch-link">Sign in</Link>
            </p>

            <div className="social-auth">
              <button className="social-btn">
                <Chrome size={18} />
                Sign up with Google
              </button>
            </div>

            <div className="auth-divider">
              <span>or register with email</span>
            </div>

            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <div className="input-wrapper">
                  <User size={16} className="input-icon" />
                  <input
                    type="text"
                    className="form-control-modern with-icon"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <div className="input-wrapper">
                  <Mail size={16} className="input-icon" />
                  <input
                    type="email"
                    className="form-control-modern with-icon"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <div className="input-wrapper">
                  <Phone size={16} className="input-icon" />
                  <input
                    type="tel"
                    className="form-control-modern with-icon"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Password</label>
                <div className="input-wrapper">
                  <Lock size={16} className="input-icon" />
                  <input
                    type={showPass ? 'text' : 'password'}
                    className="form-control-modern with-icon"
                    placeholder="Create a strong password"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    required
                    minLength={8}
                  />
                  <button type="button" className="toggle-pass" onClick={() => setShowPass(!showPass)}>
                    {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                By creating an account, you agree to our{' '}
                <Link to="/terms" style={{ color: 'var(--primary)', fontWeight: 600 }}>Terms of Service</Link>
                {' '}and{' '}
                <Link to="/privacy" style={{ color: 'var(--primary)', fontWeight: 600 }}>Privacy Policy</Link>.
              </p>

              <button type="submit" className="btn-primary-custom w-100 justify-content-center" style={{ padding: '14px' }}>
                Create Free Account
                <ArrowRight size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
