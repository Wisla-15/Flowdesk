import { useNavigate } from 'react-router-dom'
import styles from './styles/Projects.module.css'

const Projects = ({ projects }) => {
  const navigate = useNavigate()

  return (
    <div className={styles.list}>
      {projects.map(project => (
        <div
          key={project.id}
          className={styles.card}
          onClick={() => navigate(`/app/projects/${project.id}`)}
        >
          <div className={styles.header}>
            <h3 className={styles.title}>{project.name}</h3>
            {project.deadline && (
              <span className={styles.deadline}>{new Date(project.deadline).toLocaleDateString()}</span>
            )}
          </div>
          <p className={styles.status}>{project.status}</p>
          <div className={styles.progress}>
            <div className={styles.bar} style={{ width: `${project.progress}%` }}/>
          </div>
          <span className={styles.percent}>{project.progress}%</span>
        </div>
      ))}
    </div>
  )
}

export default Projects;
