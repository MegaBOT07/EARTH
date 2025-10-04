import { createContext, useContext, useReducer } from "react"
import { motion } from "framer-motion"
import AboutHero from "../components/AboutHero"
import AboutPhilosophy from "../components/AboutPhilosophy"
import AboutWork from "../components/AboutWork"
import AboutVision from "../components/AboutVision"
import AboutTeam from "../components/AboutTeam"
import Conact from "../components/Conact"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import AboutLandingImageSec from "../components/AboutLandingImageSec"

const AboutContext = createContext()

const initialState = {
  currentSection: 'hero',
  isLoaded: false,
  activeSection: null
}

function aboutReducer(state, action) {
  switch (action.type) {
    case 'SET_SECTION':
      return { ...state, currentSection: action.payload }
    case 'SET_LOADED':
      return { ...state, isLoaded: true }
    case 'SET_ACTIVE_SECTION':
      return { ...state, activeSection: action.payload }
    default:
      return state
  }
}

export function useAbout() {
  const context = useContext(AboutContext)
  if (!context) {
    throw new Error('useAbout must be used within an AboutProvider')
  }
  return context
}

export default function About() {
  const [state, dispatch] = useReducer(aboutReducer, initialState)

  return (
    <AboutContext.Provider value={{ state, dispatch }}>
      <div className="min-h-screen bg-black text-white">
        <Navigation />
        <section className="relative" style={{ height: "280vh" }}>
          <motion.div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/src/assets/about.png')",
              filter: 'grayscale(0.3) brightness(0.7) contrast(1.1)'
            }}
            initial={{ scale: 1.1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </motion.div>
          <div className="relative z-10 h-full flex flex-col">
            <AboutHero />
            <AboutPhilosophy />
            <AboutLandingImageSec />
          </div>
        </section>
        <AboutWork />
        <AboutVision />
        <AboutTeam />
        <Conact />
        <Footer />
      </div>
    </AboutContext.Provider>
  )
}