import { motion } from "framer-motion"

export default function ProjectHero() {
  return (
    <motion.section 
      className="relative h-screen flex items-end"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="relative z-10 w-full flex justify-center">
        <motion.p 
          className="absolute left-6 md:left-12 lg:left-20 text-sm md:text-base tracking-[0.2em] text-white font-sans"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          OUR PROJECTS
        </motion.p>
        <motion.h1 
          className="text-7xl md:text-8xl lg:text-9xl font-serif leading-[0.9] text-white text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          SPACES<br />
          THAT SPEAK.<br />
          LEGACIES<br />
          THAT LAST.
        </motion.h1>
        
      </div>
    </motion.section>
  )
}