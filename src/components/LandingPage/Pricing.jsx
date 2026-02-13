import styles from './styles/Pricing.module.css'

const Pricing = () => {
  return (
    <section id="pricing" className={styles.section}>
      <div className={styles.container}>
        {/* FREE */}
        <article className={styles.card}>
          <h3 className={styles.title}>Free</h3>
          <p className={styles.price}>$0</p>

          <ul className={styles.list}>
            <li>1 project</li>
            <li>Basic features</li>
            <li>Community support</li>
          </ul>

          <button className="btn-secondary">Get started</button>
        </article>

        <article className={`${styles.card} ${styles.highlight}`}>
          <span className={styles.badge}>Most popular</span>

          <h3 className={styles.title}>Pro</h3>
          <p className={styles.price}>$12<span>/month</span></p>

          <ul className={styles.list}>
            <li>Unlimited projects</li>
            <li>Automation</li>
            <li>Priority support</li>
          </ul>

          <button className="btn-primary">Start free trial</button>
        </article>

        <article className={styles.card}>
          <h3 className={styles.title}>Team</h3>
          <p className={styles.price}>$29<span>/month</span></p>

          <ul className={styles.list}>
            <li>Everything in Pro</li>
            <li>Team permissions</li>
            <li>Advanced analytics</li>
          </ul>

          <button className="btn-secondary">Contact sales</button>
        </article>
      </div>
    </section>
  )
}

export default Pricing;
