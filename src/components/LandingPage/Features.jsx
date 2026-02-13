import styles from './styles/Features.module.css'

const Features = () => {
  return (
    <section id="features" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Everything your team needs to stay productive</h2>

        <div className={styles.grid}>
          <article className={styles.card}>
            <div className={styles.icon}>🗂️</div>
            <h3 className={styles.title}>All your work in one place</h3>
            <p className={styles.description}>Tasks, deadlines, and files — organized in a single, intuitive dashboard.</p>
          </article>

          <article className={styles.card}>
            <div className={styles.icon}>🤝</div>
            <h3 className={styles.title}>Built for collaboration</h3>
            <p className={styles.description}>Assign tasks, leave comments, and stay aligned without endless meetings.</p>
          </article>

          <article className={styles.card}>
            <div className={styles.icon}>⚡</div>
            <h3 className={styles.title}>Automate the busy work</h3>
            <p className={styles.description}>Smart workflows handle repetitive tasks so your team can focus on what matters.</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Features;