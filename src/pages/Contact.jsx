import { createContext, useContext, useReducer } from "react"
import { motion } from "framer-motion"
import ContactHero from "../components/ContactHero"
import ContactGallery from "../components/ContactGallery"
import Conact from "../components/Conact"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"

const ContactContext = createContext()

const initialState = {
  currentSection: 'hero',
  isLoaded: false,
  formData: {
    fullName: '',
    email: '',
    phone: '',
    message: ''
  }
}

function contactReducer(state, action) {
  switch (action.type) {
    case 'SET_SECTION':
      return { ...state, currentSection: action.payload }
    case 'SET_LOADED':
      return { ...state, isLoaded: true }
    case 'UPDATE_FORM':
      return { ...state, formData: { ...state.formData, ...action.payload } }
    default:
      return state
  }
}

export function useContact() {
  const context = useContext(ContactContext)
  if (!context) {
    throw new Error('useContact must be used within a ContactProvider')
  }
  return context
}

export default function Contact() {
  const [state, dispatch] = useReducer(contactReducer, initialState)

  return (
    <ContactContext.Provider value={{ state, dispatch }}>
      <div className="min-h-screen bg-black text-white">
        <Navigation />
        <section className="relative min-h-screen">
          <motion.div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/src/assets/about.png')",
              filter: 'grayscale(1) brightness(0.3) contrast(1.2)'
            }}
            initial={{ scale: 1.1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
          </motion.div>
          <div className="relative z-10 h-full">
            <ContactHero />
          </div>
        </section>
        <ContactGallery />
        <Conact />
        <Footer />
      </div>
    </ContactContext.Provider>
  )
}
