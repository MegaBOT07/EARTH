import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

export default function ContactHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute top-8 left-8"
        >
          <Link
            to="/"
            className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors group"
          >
            <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            <span className="text-lg font-light tracking-wider">Back</span>
          </Link>
        </motion.div>

        {/* Hero Text */}
        <div className="text-center space-y-8 mt-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif leading-tight tracking-wide"
          >
            EXPLORE THE MOST BEAUTIFUL
            <br />
            SPACES IN THE WORLD
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full max-w-2xl mx-auto h-px bg-white/30"
          ></motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-xl md:text-2xl font-light tracking-wider text-gray-300"
          >
            An invitation to live with nature and elegance
          </motion.p>
        </div>
      </div>
    </section>
  )
}
