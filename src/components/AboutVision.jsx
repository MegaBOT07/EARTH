import { motion } from "framer-motion"

export default function AboutVision() {
  return (
    <section className="py-32 bg-black">
      <div className="px-16   text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl text-start  ml-50 md:text-7xl lg:text-8xl font-serif leading-tight mb-16">
            NATURE<br />
            GROUNDS,<br />
            ARCHITECTURE<br />
            ELEVATES
          </h2>
        </motion.div>
        
        <motion.div
          className="mt-32"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-sm tracking-[0.2em] mb-12 opacity-80 text-start font-sans">WHAT WE BELIEVE</p>
          <div className="grid text-start md:grid-cols-2 gap-16 items-start">
            <p className="text-2xl md:text-3xl lg:text-2xl ml-50  font-serif leading-tight">
              We believe that the most meaningful places are created when thoughtful planning and timeless design come together to evoke emotion. This harmony leads to stronger communities, deeper connections, and lasting value for generations.
            </p>
            <div className="text-left">
              <div className=" border-white/20 border-t max-w-sm lg:ml-40 mt-40">
                <p className="text-base md:text-lg leading-relaxed opacity-80 font-sans">
                  "Our approach is guided by insight and experience, but at the heart of it all, we focus on how spaces make people feel, because homes and environments should not only serve function, but also inspire belonging and pride."
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}