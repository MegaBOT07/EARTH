import { motion } from "framer-motion"

export default function AboutHero() {
  return (
    <motion.section 
      className="relative h-screen flex items-center justify-center text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="relative text-start mt-50 z-10 px-6 md:px-12 lg:px-20 max-w-8xl mx-auto w-full">
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-serif leading-tight mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          WHERE LAND<br />
          BECOMES<br />
          LEGACY
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl lg:text-2xl font-sans opacity-80 max-w-8xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Sustainable environments with meaningful human connection.
        </motion.p>
      </div>
    </motion.section>
  )
}