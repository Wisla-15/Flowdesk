import { useState } from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import styles from './styles/AppLayout.module.css'

const AppLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className={styles.layout}>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)}/>
      <div className={styles.main}>
        <Topbar onMenuClick={() => setSidebarOpen(true)} />
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
