import React, { Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import InternshipsPage from './pages/InternshipsPage';
import InternshipDetailsPage from './pages/InternshipDetailsPage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import './App.css';

// Simple 404 Page
function NotFoundPage() {
  return (
    <div className="page-content" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', textAlign: 'center', padding: '80px 24px' }}>
      <div style={{ fontSize: 80, fontWeight: 900, color: 'var(--primary)', fontFamily: 'var(--font-display)', lineHeight: 1 }}>404</div>
      <h2 style={{ fontSize: 28, fontWeight: 700, marginTop: 16, marginBottom: 12 }}>Page Not Found</h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: 32, maxWidth: 400 }}>
        Oops! The page you're looking for doesn't exist. Let's get you back on track.
      </p>
      <a href="/" className="btn-primary-custom">← Back to Home</a>
    </div>
  );
}

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

// Determine if current page should show Navbar & Footer
function Layout({ children }) {
  const { pathname } = useLocation();
  const isAuthPage = ['/login', '/register'].includes(pathname);

  return (
    <>
      {!isAuthPage && <Navbar />}
      <main>{children}</main>
      {!isAuthPage && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />
          <Route
            path="/courses"
            element={
              <Layout>
                <CoursesPage />
              </Layout>
            }
          />
          <Route
            path="/courses/:id"
            element={
              <Layout>
                <InternshipDetailsPage />
              </Layout>
            }
          />
          <Route
            path="/internships"
            element={
              <Layout>
                <InternshipsPage />
              </Layout>
            }
          />
          <Route
            path="/blog"
            element={
              <Layout>
                <BlogPage />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <AboutPage />
              </Layout>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="*"
            element={
              <Layout>
                <NotFoundPage />
              </Layout>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}
