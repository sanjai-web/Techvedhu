import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import InternshipPage from "./pages/InternshipPage";
import CareerLaunchPage from "./pages/CareerLaunchPage";
import ScholarshipPage from "./pages/ScholarshipPage";
import ContactPage from "./pages/ContactPage";
import "./App.css";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

function AppContent() {
  const location = useLocation();

  // Global scroll reveal observer — re-runs on every route change
  useEffect(() => {
    // Keep track of which elements have already been revealed to persist class across React re-renders
    const revealedElements = new WeakSet();

    // Small delay so React finishes rendering the new page before we observe
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              revealedElements.add(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
      );

      const revealEls = document.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right, .reveal-scale",
      );
      revealEls.forEach((el) => observer.observe(el));

      // MutationObserver to handle dynamic elements and prevent React re-renders from stripping 'visible' class
      const mutationObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          // 1. Restore 'visible' class if React re-renders and removes it
          if (
            mutation.type === "attributes" &&
            mutation.attributeName === "class"
          ) {
            const target = mutation.target;
            if (
              revealedElements.has(target) &&
              !target.classList.contains("visible")
            ) {
              target.classList.add("visible");
            }
          }

          // 2. Observe newly added DOM nodes that have reveal classes
          if (mutation.type === "childList") {
            mutation.addedNodes.forEach((node) => {
              if (node.nodeType === 1) {
                // Node.ELEMENT_NODE
                if (
                  node.matches(
                    ".reveal, .reveal-left, .reveal-right, .reveal-scale",
                  )
                ) {
                  observer.observe(node);
                }
                const children = node.querySelectorAll(
                  ".reveal, .reveal-left, .reveal-right, .reveal-scale",
                );
                children.forEach((child) => observer.observe(child));
              }
            });
          }
        });
      });

      mutationObserver.observe(document.body, {
        attributes: true,
        childList: true,
        subtree: true,
        attributeFilter: ["class"],
      });

      return () => {
        observer.disconnect();
        mutationObserver.disconnect();
      };
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]); // ← re-run on every page navigation

  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/internships" element={<InternshipPage />} />
          <Route path="/internships/:slug" element={<InternshipPage />} />
          <Route path="/career-launch" element={<CareerLaunchPage />} />
          <Route path="/career-launch/:slug" element={<CareerLaunchPage />} />
          <Route path="/scholarship" element={<ScholarshipPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;
