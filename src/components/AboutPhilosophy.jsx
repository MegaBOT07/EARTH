import { motion } from "framer-motion"

export default function AboutPhilosophy() {
  return (
    <motion.section 
      className="relative py-32"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
    >
      <div className="relative  z-10 px-6 md:px-12 lg:px-20 max-w-8xl mx-auto">
        <motion.div 
          className="ml-180   gap-10 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h2 className="text-2xl md:text-2xl lg:text-2xl font-serif leading-tight mb-4">
              We explore and push the boundaries of real estate for communities and individuals who seek to enrich their lives through meaningful spaces.
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-lg md:text-xl leading-relaxed font-sans opacity-90">
              For over three decades, we've been blending architectural integrity, sustainable planning, and timeless design to create living environments that inspire belonging, foster harmony with nature, and stand as legacies for generations.
            </p>
            <motion.div
              className="pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <a 
                href="#contact" 
                className="inline-flex  items-center gap-3 text-4xl underline   pb-2 hover:border-gray-300 transition-colors group"
              >
                Contact Us
                <div className="border-2 rounded-[50%] group-hover:translate-x-1"><svg className="w-10 h-10  transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg></div>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}