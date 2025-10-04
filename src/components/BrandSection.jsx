import { motion } from "framer-motion";

export default function BrandSection() {
  return (
    <div className="flex-1 flex flex-col mb-30 items-center justify-center px-6 md:px-12 lg:px-10">
      <motion.h2
        className="text-[16vw]  font-Grenda text-center mb-30 leading-none"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        ONE EARTH
      </motion.h2>

      <motion.h3
        className="text-xl md:text-2xl font-serif font-medium text-center mb-16 tracking-wider"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        WHY CHOOSE US?
      </motion.h3>

      <div className="relative  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl w-full">
        <motion.div
          className="w-70 ml-[-130px] absolute space-y-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <h4 className="text-lg font-serif font-medium">PREMIUM QUALITY</h4>
          <p className="text-sm leading-relaxed opacity-90">
            We offer meticulously developed plots and homes with highest standards of planning and development. Every
            detail reflects precision, luxury, and sustainability.
          </p>
        </motion.div>

        <motion.div
          className="absolute left-200 top-40 space-y-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >
          <h4 className="text-lg font-serif font-medium">INTEGRATED SOLUTIONS</h4>
          <p className="text-sm leading-relaxed opacity-90">
            From agricultural land to building plots and luxury homes, we provide end-to-end solutions for every stage
            of your property journey.
          </p>
        </motion.div>

        <motion.div
          className="absolute  top-90 right-180  w-70 space-y-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        >
          <h4 className="text-lg font-serif font-medium">TAILORED EXPERIENCES</h4>
          <p className="text-sm leading-relaxed opacity-90 ">
            Your vision is our mission. We work closely with you to identify opportunities that match your lifestyle,
            investment goals, and long-term vision.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
