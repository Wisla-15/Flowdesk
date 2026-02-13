import styles from './styles/HowItWorks.module.css'

const HowItWorks = () => {
  return (
    <section id="howitworks" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>How it works</h2>

        <ol className={styles.list}>
          <li className={styles.step}>
            <span className={styles.number}>1</span>
            <h4 className={styles.title}>Create a project</h4>
            <p className={styles.description}>Set up your workspace in seconds.</p>
          </li>

          <li className={styles.step}>
            <span className={styles.number}>2</span>
            <h4 className={styles.title}>Invite your team</h4>
            <p className={styles.description}>Bring everyone together in one shared space.</p>
          </li>

          <li className={styles.step}>
            <span className={styles.number}>3</span>
            <h4 className={styles.title}>Track progress</h4>
            <p className={styles.description}>See what’s done, what’s next, and what needs attention.</p>
          </li>
        </ol>
      </div>
    </section>
  )
}

export default HowItWorks;