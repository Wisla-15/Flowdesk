import { NavLink } from 'react-router-dom'
import styles from './styles/Sidebar.module.css'

const Sidebar = ({ open, onClose }) => {
  return (
    <>
      <aside className={`${styles.sidebar} ${open ? styles.open : ''}`}>
        <div className={styles.top}>
          <strong className={styles.logo}>Flowdesk</strong>
          <button className={styles.close} onClick={onClose}>✕</button>
        </div>

        <nav className={styles.nav}>
          <NavLink to="/app/dashboard" end>📊 Dashboard</NavLink>
          <NavLink to="/app/projects">📁 Projects</NavLink>
          <NavLink to="/app/settings">⚙️ Settings</NavLink>
        </nav>
      </aside>

      {open && (
        <div className={styles.overlay} onClick={onClose}/>
      )}
    </>
  )
}

export default Sidebar;
