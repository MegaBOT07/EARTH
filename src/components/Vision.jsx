import React from 'react';
import { motion } from 'framer-motion';

export default function Vision() {
  return (
    <section className="relative w-full h-screen bg-black overflow-hidden" >
      {/* Background Image */}
      <div className="absolute w-[50%] inset-0">
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 0.5, y: 0 }}
          whileHover={{ opacity: 0.8, scale: 1.05 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Modern living room interior"
          className="w-full h-full object-cover cursor-pointer"
        />
       
      </div>

      {/* Content Overlay */}
      <div className="absolute left-120 bottom-30 z-10 flex items-center justify-end h-full px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="text-white max-w-2xl">
          {/* Title */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6 leading-tight uppercase tracking-wide"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            A VISION OF
            <br />
            INSPIRED LIVING
          </motion.h1>
        </div>
      </div>
      <div className='absolute left-220 text-white top-120 '>
          <motion.p
            className=" text-lg md:text-xl mb-8 max-w-lg opacity-90"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            At One Earth Properties, real estate is not just construction it’s a legacy. At One Earth Properties, real estate is not just construction it’s a legacy.
          </motion.p>
      </div>
    </section>
  );
}
