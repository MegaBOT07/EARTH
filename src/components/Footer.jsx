import { motion } from "framer-motion"
import footerImg from "../assets/footer-img.png"

export default function Footer() {
  return (
    <footer 
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url(${footerImg})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-black/20 to-black/60"></div>
      <div className="relative z-10 text-center px-6 md:px-12 lg:px-20 w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8 leading-tight">
            inquires@oneearthproperties.com
          </h2>
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-8 md:gap-16 lg:gap-24 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <a 
            href="#newsletter" 
            className="text-white text-lg md:text-xl font-sans hover:opacity-70 transition-opacity cursor-pointer"
          >
            Newsletter
          </a>
          <a 
            href="#address" 
            className="text-white text-lg md:text-xl font-sans hover:opacity-70 transition-opacity cursor-pointer"
          >
            Address
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white text-lg md:text-xl font-sans hover:opacity-70 transition-opacity cursor-pointer"
          >
            X
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white text-lg md:text-xl font-sans hover:opacity-70 transition-opacity cursor-pointer"
          >
            Instagram
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white text-lg md:text-xl font-sans hover:opacity-70 transition-opacity cursor-pointer"
          >
            LinkedIn
          </a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="border-t border-gray-400 pt-8"
        >
          <p className="text-white text-sm md:text-base font-sans opacity-60">
            ©2025 One Earth Properties | All rights are reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}