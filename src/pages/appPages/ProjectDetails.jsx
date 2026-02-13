import { useParams, useNavigate } from 'react-router-dom'
import { useProjects } from '../../context/ProjectContext'
import AppLayout from '../../components/aplication/AppLayout'
import ProjectDetail from '../../components/aplication/ProjectDetail'

const ProjectDetailPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { projects, updateProjectTasks } = useProjects()

  const project = projects.find(p => p.id === Number(id))

  if (!project) {
    return (
      <AppLayout>
        <p>Project not found</p>
      </AppLayout>
    )
  }

  return (
    <AppLayout>
      <ProjectDetail
        project={project}
        onBack={() => navigate('/app/projects')}
        onTasksChange={tasks =>
          updateProjectTasks(project.id, tasks)
        }
      />
    </AppLayout>
  )
}

export default ProjectDetailPage;
