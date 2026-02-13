import AppLayout from '../../components/aplication/AppLayout'
import { useTheme } from '../../context/ThemeContext'
import styles from './styles/Settings.module.css'

const Settings = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <AppLayout>
      <h1 className={styles.heading}>Settings</h1>

      <div className={styles.card}>
        <div className={styles.row}>
          <div>
            <h3>Theme</h3>
            <p>Light or dark appearance</p>
          </div>

          <button onClick={toggleTheme} className={`${styles.toggle} ${theme === 'dark' ? styles.dark : ''}`}>
            <span className={styles.thumb}>{theme === 'dark' ? '🌙' : '☀️'}</span>
          </button>
        </div>
      </div>
    </AppLayout>
  )
}

export default Settings;
