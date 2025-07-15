import { FaFacebook } from 'react-icons/fa'
import { useEffect } from 'react'
import './Contact.css' // Assuming you have a CSS file for styles

const Contact = () => {
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
        <h2>Get in Touch</h2>
        <p>If you'd like to place an order or have any questions, feel free to reach out!</p>

        <div className="contact-info">
          <img
            src={`${import.meta.env.BASE_URL}dance2.JPG`}
            alt="Seraiah - Maker of Delightful Circlets"
            className="maker-photo"
          />
          <p><strong>Contact Name:</strong> Seraiah</p>
          <p><strong>Phone:</strong> <a href="tel:4078679471">(407) 867-9471</a></p>

          <a
            href="https://www.facebook.com/seraiah.denmark"
            target="_blank"
            rel="noopener noreferrer"
            className="facebook-link"
          >
            <FaFacebook className="facebook-icon" />
            Facebook Page
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact


