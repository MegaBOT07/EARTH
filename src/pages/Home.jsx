"use client"

import { useReducer, useMemo, useCallback, createContext } from "react"
import Blank from "../components/Blank.jsx"
import Clientsay from "../components/Clientsay.jsx"
import Conact from "../components/Conact.jsx"
import Landing from "../components/Landing.jsx"
import Offer from "../components/Offer.jsx"
import OfferSection from "../components/OfferSection.jsx"
import OurProject from "../components/OurProject.jsx"
import Vision from "../components/Vision.jsx"
import Footer from "../components/Footer.jsx"
// Create context for global state
export const AppContext = createContext()

// Reducer function
function appReducer(state, action) {
  switch (action.type) {
    case 'SET_CURRENT_SECTION':
      return { ...state, currentSection: action.payload }
    case 'TOGGLE_THEME':
      return { ...state, darkMode: !state.darkMode }
    default:
      return state
  }
}

const initialState = {
  currentSection: 'landing',
  darkMode: true
}

function Home() {
  const [state, dispatch] = useReducer(appReducer, initialState)

  // Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({
    state,
    dispatch
  }), [state])

  // Use useCallback for stable function references
  const setCurrentSection = useCallback((section) => {
    dispatch({ type: 'SET_CURRENT_SECTION', payload: section })
  }, [])

  const toggleTheme = useCallback(() => {
    dispatch({ type: 'TOGGLE_THEME' })
  }, [])

  // Add to context if needed
  const enhancedContextValue = useMemo(() => ({
    ...contextValue,
    setCurrentSection,
    toggleTheme
  }), [contextValue, setCurrentSection, toggleTheme])

  return (
    <AppContext.Provider value={enhancedContextValue}>
      <div className="bg-black text-white">
        <Landing />
        <Blank />
        <section id="projects">
          <OurProject />
        </section>
        {/* <Achievements /> */}
        {/* <Projects /> */}
        <Vision />
        <Offer />
        <OfferSection />
        <Clientsay />
        <Conact />
        <Footer />
      </div>
    </AppContext.Provider>
  )
}

export default Home
