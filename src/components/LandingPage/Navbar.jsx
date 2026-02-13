import { useState, useEffect } from 'react'
import styles from './styles/Navbar.module.css'

const sections = ['hero', 'features', 'howitworks', 'pricing', 'finalcta']

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100
      setScrolled(window.scrollY > 10)

      for (let id of sections) {
        const section = document.getElementById(id)
        if (section) {
          const offsetTop = section.offsetTop
          const offsetHeight = section.offsetHeight

          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(id)
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="#hero" className={styles.logo}>Flowdesk</a>

        <ul className={styles.menu}>
          <li>
            <a href="#features" className={`${styles.link} ${activeSection === 'features' ? styles.active : ''}`}>Features</a>
          </li>
          <li>
            <a href="#howitworks" className={`${styles.link} ${activeSection === 'howitworks' ? styles.active : ''}`}>How It Works</a>
          </li>
          <li>
            <a href="#pricing" className={`${styles.link} ${activeSection === 'pricing' ? styles.active : ''}`}>Pricing</a>
          </li>
        </ul>

        <div className={styles.cta}>
          <a href="#finalcta" className="btn-primary">Start free trial</a>
        </div>

        <button className={`${styles.hamburger} ${isOpen ? styles.active : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
        <ul>
          {sections.slice(1).map(id => (
            <li key={id}>
              <a href={`#${id}`} onClick={toggleMenu} className={activeSection === id ? styles.active : ''}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
