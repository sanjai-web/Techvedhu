import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero/Hero';
import StatsSection from '../components/StatsSection/StatsSection';
import CourseCards from '../components/CourseCards/CourseCards';
import Testimonials from '../components/Testimonials/Testimonials';
import FeaturesSection from '../components/FeaturesSection/FeaturesSection';
import InternshipsSection from '../components/InternshipsSection/InternshipsSection';
import CTASection from '../components/CTASection/CTASection';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: 'ease-out-cubic',
      offset: 60,
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Hero />
      <StatsSection />
      <CourseCards />
      <FeaturesSection />
      <InternshipsSection />
      <Testimonials />
      <CTASection />
    </motion.div>
  );
}
