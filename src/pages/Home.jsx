// src/pages/Home.jsx
import { Link } from 'react-router-dom'
import './Home.css'
// Add this in useEffect inside Home.jsx
import { useEffect } from 'react';
import { motion } from 'framer-motion'

const Home = () => {
  useEffect(() => {
  const elements = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });

  elements.forEach(el => observer.observe(el));
}, []);
  return (
    <div className="home">
      {/* Hero Section */}
      <motion.section className="hero fade-in">
        <div className="hero-text">
          <h1>Welcome to Delightful Circlets</h1>
          <p>Handmade with love by a young creator.</p>
          <Link to="/shop" className="shop-btn">Shop Now</Link>
        </div>
      </motion.section>

      {/* Featured Products */}
      <motion.section className="featured fade-in">
        <h2>Featured Bracelets</h2>
        <div className="bracelet-grid">
          <div className="bracelet-card">
            <img src={`${import.meta.env.BASE_URL}bracelet1.jpg`} alt="Rainbow Charm Bracelet" />
            <p>Rainbow Charm</p>
          </div>
          <div className="bracelet-card">
            <img src={`${import.meta.env.BASE_URL}bracelet2.jpg`} alt="Pearl Twist Bracelet" />
            <p>Pearl Twist</p>
          </div>
          <div className="bracelet-card">
            <img src={`${import.meta.env.BASE_URL}bracelet3.jpg`} alt="Sunset Glow Bracelet" />
            <p>Sunset Glow</p>
          </div>
        </div>
      </motion.section>

      {/* Meet the Maker */}
      <section className="about-creator fade-in">
        <h2>Meet the Maker</h2>
        <p>Hi! I'm Seraiah, a 15-year-old who loves making unique bracelets that tell a story. What started as a hobby has grown into a passion — and now, my own little business!</p>
      </section>

      {/* CTA */}
      <section className="cta fade-in">
        <h2>Support a Teen Entrepreneur</h2>
        <Link to="/shop" className="cta-btn">Explore the Shop</Link>
      </section>
    </div>
  )
}

export default Home

