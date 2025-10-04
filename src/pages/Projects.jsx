import { createContext, useContext, useReducer } from "react"
import { motion } from "framer-motion"
import ProjectHero from "../components/ProjectHero"
import ProjectPhilosophy from "../components/ProjectPhilosophy"
import ProjectDesign from "../components/ProjectDesign"
import ProjectProjects from "../components/ProjectProjects"
import Conact from "../components/Conact"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
const ProjectContext = createContext()

const initialState = {
  currentSection: 'hero',
  isLoaded: false,
  activeProject: null
}

function projectReducer(state, action) {
  switch (action.type) {
    case 'SET_SECTION':
      return { ...state, currentSection: action.payload }
    case 'SET_LOADED':
      return { ...state, isLoaded: true }
    case 'SET_ACTIVE_PROJECT':
      return { ...state, activeProject: action.payload }
    default:
      return state
  }
}

export function useProject() {
  const context = useContext(ProjectContext)
  if (!context) {
    throw new Error('useProject must be used within a ProjectProvider')
  }
  return context
}

export default function Projects() {
  const [state, dispatch] = useReducer(projectReducer, initialState)

  return (
    <ProjectContext.Provider value={{ state, dispatch }}>
      <div className="min-h-screen bg-black text-white">
        <Navigation />
        <section className="relative" style={{ height: "300vh" }}>
          <motion.div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/src/assets/about.png')",
              filter: 'grayscale(1) brightness(0.4) contrast(1.2)'
            }}
            initial={{ scale: 1.1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-black/30"></div>
          </motion.div>
          <div className="relative z-10 h-full flex flex-col">
            <ProjectHero />
            <ProjectPhilosophy />
          </div>
        </section>
        <ProjectDesign />
        <ProjectProjects />
        <Conact />
        <Footer />
      </div>
    </ProjectContext.Provider>
  )
}