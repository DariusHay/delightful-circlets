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
        <h2>Featured Items</h2>
        <div className="bracelet-grid">
          <div className="bracelet-card">
            <div className="bracelet-image-wrapper right-focus">
              <img src={`${import.meta.env.BASE_URL}sunglasses.JPG`} alt="Rainbow Charm Bracelet" className="bracelet-image" />
            </div>
            <p>Custom Sunglasses</p>
          </div>

          <div className="bracelet-card">
            <div className="bracelet-image-wrapper zoom-2">
              <img src={`${import.meta.env.BASE_URL}pearl.JPG`} alt="Pearl Bracelet" className="bracelet-image" />
            </div>
            <p>Pearl Bracelets</p>
          </div>

          <div className="bracelet-card">
            <div className="bracelet-image-wrapper zoom-1">
              <img src={`${import.meta.env.BASE_URL}custom.JPG`} alt="Sunset Glow Bracelet" className="bracelet-image" />
            </div>
            <p>Custom Named Bracelets</p>
          </div>
        </div>

      </motion.section>

      {/* Meet the Maker */}
      <section className="about-creator fade-in">
        <h2>Meet the Maker</h2>
        <p>Hi! I'm Seraiah, a 15-year-old who loves making unique bracelets that tell a story. What started as a hobby has grown into a passion — and now, my own little business!</p>
          <img
            src={`${import.meta.env.BASE_URL}dance1.JPG`}
            alt="Seraiah - Maker of Delightful Circlets"
            className="maker-photo"
          />
      </section>

      {/* CTA */}
      <section className="cta fade-in">
        <h2>Support a Teen Entrepreneur</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
          <Link to="/shop" className="cta-btn">Explore the Shop</Link>
          <Link to="/donate" className="cta-btn" style={{ backgroundColor: '#00c244' }}>Donate</Link>
        </div>
      </section>

    </div>
  )
}

export default Home

