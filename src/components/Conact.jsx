import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Conact() {
  return (
    <section id="contact" className="max-h-screen overflow-hidden bg-black text-white flex items-center justify-center px-0 relative">
      {/* Fade overlay for smooth transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black pointer-events-none"></div>
      <div className="relative z-10 w-full flex items-center justify-center">
      <div className="w-[90%] grid grid-cols-1 md:grid-cols-2 gap-17">
        
        {/* Left Side Text */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center"
        >
          <h1 className="text-[10vw]  font-serif leading-tight">
            LET’S <br /> GET IN <br /> TOUCH
          </h1>
        </motion.div>

        {/* Right Side Form */}
        <motion.form
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col space-y-12 mt-15"
        >
          {/* Full Name */}
          <div>
            <label className="uppercase text-lg tracking-wider">Full Name *</label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-white py-2"
              required
            />
          </div>

          {/* Email + Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="uppercase text-lg tracking-wider">Email *</label>
              <input
                type="email"
                className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-white py-2"
                required
              />
            </div>
            <div>
              <label className="uppercase text-lg tracking-wider">Phone *</label>
              <input
                type="tel"
                className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-white py-2"
                required
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="uppercase text-lg tracking-wider">Message *</label>
            <textarea
              className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-white py-2 resize-none"
              rows="3"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ x: 10 }}
            whileTap={{ scale: 0.95 }}
            className="self-end mt-6"
          >
            <ArrowRight size={40} strokeWidth={2.5} />
          </motion.button>
        </motion.form>
      </div>
      </div>
    </section>
  );
}
