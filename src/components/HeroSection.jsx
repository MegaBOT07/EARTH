import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="flex-1 flex items-center px-6 md:px-12 lg:px-10">
      <div className="max-w-2xl">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-5xl mt-60 font-serif  mb-8 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          BUILDING LEGACIES,
          <br />
          SHAPING FUTURES
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-12 leading-relaxed max-w-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Let us create premium farm lands, villas, and sustainable communities where your family's legacy thrives for
          generations.
        </motion.p>

        <motion.button
          className="group flex items-center gap-3 text-2xl font-medium border-b border-white pb-2 hover:border-gray-300 transition-colors"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          Build now
          <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center group-hover:border-gray-300 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </motion.button>
      </div>
    </div>
  )
}
