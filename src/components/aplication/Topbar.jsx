import styles from './styles/Topbar.module.css'

const Topbar = ({ onMenuClick }) => {
  return (
    <header className={styles.topbar}>
      <button className={styles.menu} onClick={onMenuClick}>☰</button>
      <div className={styles.right}>
        <span>Josef Novák</span>
      </div>
    </header>
  )
}

export default Topbar;
