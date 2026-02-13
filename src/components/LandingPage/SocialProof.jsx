import styles from './styles/SocialProof.module.css'

const SocialProof = () => {
  return (
    <section className={styles.section}>
      <p className={styles.text}>Trusted by 500+ teams worldwide</p>

      <ul className={styles.list}>
        <li className={styles.item}>Notion</li>
        <li className={styles.item}>Slack</li>
        <li className={styles.item}>Stripe</li>
      </ul>
    </section>
  )
}

export default SocialProof;
