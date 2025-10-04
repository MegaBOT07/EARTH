import { motion } from "framer-motion"

export default function ProjectPhilosophy() {
  return (
    <motion.section 
      className="relative py-32"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
    >
      <div className="relative z-10 px-6  lg:px-20 max-w-3xl ml-auto">
        <motion.div 
          className="text-right"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xl text-start md:text-2xl mb-8 leading-relaxed font-sans">
            Every project is more than construction, it's a narrative shaped by context, culture, and community.
          </p>
          <p className="text-xl text-start md:text-2xl leading-relaxed font-sans">
            At One Earth Properties, we approach each development as an opportunity to create environments that feel alive: places where architecture, landscape, and human experience converge.
          </p>
        </motion.div>
      </div>
      
      {/* Thoughtful Design Section */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mt-48 pt-32">
        <motion.p 
          className="text-sm tracking-[0.2em] mb-16 opacity-80 font-sans"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 0.8, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          THOUGHTFUL DESIGN
        </motion.p>
        <motion.h2 
          className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight mb-24 max-w-5xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We believe design should resonate on every level. From proportions that inspire awe to details that invite touch, each project is crafted to engage the senses and elevate everyday living.
        </motion.h2>
      </div>
    </motion.section>
  )
}