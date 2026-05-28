import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Lock, Eye, EyeOff, Github, Chrome } from 'lucide-react';
import './AuthPage.css';

export default function LoginPage() {
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login
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
            Transform Your<br />
            Career with<br />
            <span className="auth-left-accent">TechVedhu</span>
          </h2>
          <p className="auth-left-subtitle">
            Join 50,000+ learners building world-class tech careers through expert-led courses and real-world projects.
          </p>
          <div className="auth-features">
            {['200+ Expert Courses', 'Live Mentorship', 'Guaranteed Internships', 'Career Support'].map((f) => (
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
            <h1 className="auth-title">Welcome back</h1>
            <p className="auth-subtitle">
              Don't have an account?{' '}
              <Link to="/register" className="auth-switch-link">Sign up free</Link>
            </p>

            {/* Social Auth */}
            <div className="social-auth">
              <button className="social-btn">
                <Chrome size={18} />
                Continue with Google
              </button>
              <button className="social-btn">
                <Github size={18} />
                Continue with GitHub
              </button>
            </div>

            <div className="auth-divider">
              <span>or sign in with email</span>
            </div>

            <form onSubmit={handleSubmit} className="auth-form">
              {/* Email */}
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

              {/* Password */}
              <div className="form-group">
                <div className="form-label-row">
                  <label className="form-label">Password</label>
                  <Link to="/forgot-password" className="forgot-link">Forgot password?</Link>
                </div>
                <div className="input-wrapper">
                  <Lock size={16} className="input-icon" />
                  <input
                    type={showPass ? 'text' : 'password'}
                    className="form-control-modern with-icon"
                    placeholder="Enter your password"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    required
                  />
                  <button
                    type="button"
                    className="toggle-pass"
                    onClick={() => setShowPass(!showPass)}
                  >
                    {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <button type="submit" className="btn-primary-custom w-100 justify-content-center" style={{ padding: '14px' }}>
                Sign In
                <ArrowRight size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
