
import styles from './styles/FinalCTA.module.css'

const FinalCTA = () => {

  return (
    <section id="finalcta" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Start managing projects the smart way</h2>
        <p className={styles.subtitle}>Join thousands of teams already using Flowdesk to ship faster.</p>
        <button className="btn-primary">Start your free trial</button>
      </div>
    </section>
  )
}

export default FinalCTA;