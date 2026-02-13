import { useProjects } from '../../context/ProjectContext'
import Projects from '../../components/aplication/Projects'
import AddProject from '../../components/aplication/AddProject'
import AppLayout from '../../components/aplication/AppLayout'

const ProjectsPage = () => {
  const { projects, addProject } = useProjects()

  return (
    <AppLayout>
      <h1>Projects</h1>
      <AddProject onAdd={addProject} />
      <Projects projects={projects} />
    </AppLayout>
  )
}

export default ProjectsPage;
