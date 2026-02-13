import styles from './styles/Hero.module.css'


const Hero = () => {

  return (
    <section id="hero" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Manage projects without the chaos</h1>
          <p className={styles.description}>Plan, track, and deliver work faster with a clean workspace built for small teams.</p>

          <div className={styles.actions}>
            <a href='#finalcta' className="btn-primary">Start free trial</a>
            <a href='/app/dashboard' className="btn-secondary">Try how it works</a>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.mockup}>
            <div className={styles.sidebar}>
              <span className={styles.logo}>Flowdesk</span>
              <nav className={styles.menu}>
                <span>Dashboard</span>
                <span>Projects</span>
                <span>Team</span>
                <span>Settings</span>
              </nav>
            </div>

            <div className={styles.appContent}>
              <div className={styles.topbar}>
                <span>Projects</span>
              </div>

              <div className={styles.cards}>
                <div className={styles.card}>To do</div>
                <div className={styles.card}>In progress</div>
                <div className={styles.card}>Done</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
