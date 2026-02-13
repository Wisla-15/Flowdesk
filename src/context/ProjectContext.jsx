import { createContext, useContext, useEffect, useState } from 'react' 

const ProjectsContext = createContext() 

const initialProjects = [
  {
    id: 1,
    name: 'Marketing Website',
    deadline: '2026-02-20',
    team: ['A', 'B', 'C'],
    tasks: [
      { id: 1, title: 'Project setup', done: true },
      { id: 2, title: 'Design UI', done: false },
    ]
  }
] 

const calculateProgress = tasks => {
  if (!Array.isArray(tasks) || tasks.length === 0) {
    return 0 
  }

  const done = tasks.filter(t => t.done).length 
  return Math.round((done / tasks.length) * 100) 
} 

const calculateStatus = progress => {
  if (progress === 0) return 'Planning' 
  if (progress === 100) return 'Completed' 
  return 'In progress' 
} 

export const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem('projects') 
    return saved
      ? JSON.parse(saved)
      : initialProjects.map(p => {
          const progress = calculateProgress(p.tasks) 
          return {
            ...p,
            progress,
            status: calculateStatus(progress),
          } 
        }) 
  }) 

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects)) 
  }, [projects]) 

  const addProject = project => {
    setProjects(prev => [
      ...prev,
      {
        ...project,
        id: Date.now(),
        tasks: [],
        progress: 0,
        status: 'Planning',
      },
    ]) 
  } 

  const updateProjectTasks = (projectId, tasks) => {
  if (!Array.isArray(tasks)) return 

  setProjects(projects =>
    projects.map(p => {
      if (p.id !== projectId) return p 

      const progress = calculateProgress(tasks) 

      return {
        ...p,
        tasks,
        progress,
      } 
    })
  ) 
} 


  return (
    <ProjectsContext.Provider
      value={{
        projects,
        addProject,
        updateProjectTasks,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  ) 
} 

export const useProjects = () => useContext(ProjectsContext);