import styles from './styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <span className={styles.logo}>Flowdesk</span>
          <p className={styles.tagline}>Simple project management for modern teams.</p>
        </div>
        <nav className={styles.links}>
          <a href="#features">Features</a>
          <a href="#howitworks">How it works</a>
          <a href="#pricing">Pricing</a>
        </nav>
      </div>

      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} Flowdesk. All rights reserved.</span>
      </div>
    </footer>
  )
}

export default Footer;