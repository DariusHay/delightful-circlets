import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  // ❗ Auto-close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="navbar">
      <h1>
        <Link to="/" className="brand">
          Delightful Circlets
        </Link>
      </h1>

      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/donate">Donate</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>
    </nav>
  )
}

export default Navbar


