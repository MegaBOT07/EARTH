import { motion } from "framer-motion";

export default function FutureSection() {
  return (
    <div className="flex-1 flex items-center ml-[-50px] mt-25 px-6 md:px-12 lg:px-24">
      <div className="max-w-2xl">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          WE ARE THE FUTURE
          <br />
          OF REAL ESTATE
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl mb-12 leading-relaxed w-160"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          At ONE EARTH Properties, we're redefining real estate with sustainable communities, advanced infrastructure,
          and world-class designs. Our approach is built around long-term value creation and environmental stewardship.
        </motion.p>

        <motion.button
          className="group flex items-center gap-3 text-lg font-medium border-b border-white pb-2 hover:border-gray-300 transition-colors"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          Build now
          <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center group-hover:border-gray-300 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </motion.button>
      </div>
    </div>
  )
}
