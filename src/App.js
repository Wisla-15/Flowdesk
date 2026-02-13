import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { ProjectsProvider } from "./context/ProjectContext"
import { ThemeProvider } from "./context/ThemeContext"
import Landing from "./pages/Landing"
import Dashboard from "./pages/appPages/Dashboard"
import Settings from "./pages/appPages/Settings"
import Projects from "./pages/appPages/ProjectsPage"
import ProjectDetails from "./pages/appPages/ProjectDetails"

const AppContent = () => {
  return (<>
    <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/app/dashboard" element={<Dashboard/>}/>
        <Route path="/app/projects" element={<Projects/>}/>
          <Route path="/app/projects/:id" element={<ProjectDetails/>}/>
        <Route path="/app/settings" element={<Settings/>}/>

        <Route path="*" element={<Landing/>}/>
    </Routes>
    </>)
}

export default function App(){
  return <ProjectsProvider>
          <ThemeProvider>
            <Router>
              <AppContent />
            </Router>
          </ThemeProvider>
          </ProjectsProvider> 
}
