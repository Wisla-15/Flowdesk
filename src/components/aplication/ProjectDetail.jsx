import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useProjects } from '../../context/ProjectContext'
import styles from './styles/ProjectDetail.module.css'

const ProjectDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { projects, updateProjectTasks } = useProjects()

  const project = projects.find(p => p.id === Number(id))
  const [newTask, setNewTask] = useState('')

  if (!project) {return <p>Project not found</p>}

  const toggleTask = taskId => {
    const updatedTasks = project.tasks.map(task =>
      task.id === taskId
        ? { ...task, done: !task.done }
        : task
    )

    updateProjectTasks(project.id, updatedTasks)
  }

  const addTask = e => {
    e.preventDefault();
    if (!newTask.trim()) return;

    const updatedTasks = [...project.tasks,{
        id: Date.now(),
        title: newTask,
        done: false,
      }
    ]

    updateProjectTasks(project.id, updatedTasks);
    setNewTask('')
  }

  return (
    <div className={styles.wrapper}>
      <button className={styles.back} onClick={() => navigate(-1)}>← Back</button>

      <h2 className={styles.title}>{project.name}</h2>

      <div className={styles.section}>
        <h4>Progress</h4>
        <div className={styles.progress}>
          <div className={styles.bar} style={{ width: `${project.progress}%` }}/>
        </div>

        <span className={styles.percent}>{project.progress}%</span>
      </div>

      <div className={styles.section}>
        <h4>Tasks</h4>
        <ul className={styles.tasks}>
          {project.tasks.map(task => (
            <li key={task.id} className={task.done ? styles.done : ''}>
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggleTask(task.id)}
              />
              <span>{task.title}</span>
            </li>
          ))}
        </ul>

        <form className={styles.addTask} onSubmit={addTask}>
          <input
            type="text"
            placeholder="New task…"
            value={newTask}
            onChange={e => setNewTask(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  )
}

export default ProjectDetail;
