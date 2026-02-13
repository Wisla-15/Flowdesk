import { useMemo } from 'react'
import AppLayout from '../../components/aplication/AppLayout'
import { useProjects } from '../../context/ProjectContext'
import Projects from '../../components/aplication/Projects'
import AddProject from '../../components/aplication/AddProject'
import styles from './styles/Dashboard.module.css'

const Dashboard = () => {
  const { projects, addProject } = useProjects()

  const stats = useMemo(() => {
    const allTasks = projects.flatMap(p => p.tasks)
    const completed = allTasks.filter(t => t.done).length
    const progress = Math.round(
      (completed / allTasks.length) * 100 || 0
    )

    return {
      projects: projects.length,
      totalTasks: allTasks.length,
      progress,
    };
  }, [projects])

  return (
    <AppLayout>
      <h1 className={styles.heading}>Dashboard</h1>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>Projects</h3>
          <strong>{stats.projects}</strong>
        </div>

        <div className={styles.card}>
          <h3>Total tasks</h3>
          <strong>{stats.totalTasks}</strong>
        </div>

        <div className={styles.card}>
          <h3>Overall progress</h3>
          <strong>{stats.progress}%</strong>
          <div className={styles.progress}>
            <div className={styles.bar} style={{ width: `${stats.progress}%` }}/>
          </div>
        </div>
      </div>

      <AddProject onAdd={addProject} />
      <Projects projects={projects} />
    </AppLayout>
  )
}

export default Dashboard;
