// src/pages/Donate.jsx
import './Contact.css' // Reuse styles
import './Home.css' // Reuse styles
import { useEffect } from 'react'

const Donate = () => {
      useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  })

  const elements = document.querySelectorAll('.fade-in')
  elements.forEach((el) => observer.observe(el))

  return () => observer.disconnect()
}, [])

  return (
    <section className="contact-page fade-in">
      <div className="contact-content">
        <h2>Support Seraiah</h2>
        <p>Your donation helps Seraiah grow her bracelet business and continue pursuing her passion.</p>

        <div style={{ marginTop: '30px' }}>
            <img
            src={`${import.meta.env.BASE_URL}dance1.JPG`}
            alt="Seraiah - Maker of Delightful Circlets"
            className="maker-photo"
          />
          <p><strong>Donate via Cash App:</strong></p>
          <div>
            <span style={{ fontSize: '1.4rem', fontWeight: '800' }}>$Seraiahd0208</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Donate


