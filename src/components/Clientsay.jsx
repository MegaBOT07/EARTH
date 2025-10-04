import React from "react";
import { motion } from 'framer-motion';

export default function Clientsay() {

  return (
    <section className="bg-black text-white h-[200vh]  px-6" >
      {/* Heading */}
      <motion.h2
        className="text-5xl font-serif mh-10 text-center "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        WHAT OUR CLIENT SAYS
      </motion.h2>

      {/* Subtext */}
      <motion.p
        className="max-w-3xl ml-90 mt-10  text-center text-gray-300 text-sm md:text-base mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        Each project by One Earth Properties is a reflection of our commitment
        to excellence, sustainability, and timeless design. From premium
        agricultural lands to luxury villas and bungalows, every space is
        crafted to offer unmatched quality and long-term value.
      </motion.p>

    
      <div className=" relative">
      
        <div className="flex h-[70vh] ">
                   <div className=" ml-30 h-full w-[30vw]">
                      <motion.img
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 0.5, y: 0 }}
          whileHover={{ opacity: 0.8, scale: 1.05, rotate: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Modern living room interior"
          className="w-full h-full object-cover cursor-pointer"
        />
                   </div >
                   </div>

        {/* Quote Section */}
        <div className="absolute top-120 left-130 max-w-4xl">
          <motion.p
            className="text-2xl leading-relaxed relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <span className="absolute -left-6 top-0  text-white">“</span>
            Each project by One Earth Properties is a reflection of our
            commitment to excellence, sustainability, and timeless design. Each
            project by One Earth Properties is a reflection of our commitment to
            excellence, sustainability, and timeless design.
          </motion.p>
          <div className="mt-6">
            <motion.h3
              className="font-serif font-bold text-5xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            >
              Name
            </motion.h3>
            <motion.p
              className="text-xl text-gray-400"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            >
              Company Name
            </motion.p>
          </div>
        </div>
      </div>
       <div className=" relative">
      
        <div className="flex h-[70vh] ">
                   <div className=" ml-200 mt-50 h-full w-[30vw]">
                      <motion.img
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 0.5, y: 0 }}
          whileHover={{ opacity: 0.8, scale: 1.05, rotate: -1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Modern living room interior"
          className="w-full h-full object-cover cursor-pointer"
        />
                   </div >
                   </div>

        {/* Quote Section */}
        <div className="absolute top-100 left-30 max-w-4xl">
          <motion.p
            className="text-2xl leading-relaxed relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <span className="absolute -left-6 top-0  text-white">“</span>
            Each project by One Earth Properties is a reflection of our
            commitment to excellence, sustainability, and timeless design. Each
            project by One Earth Properties is a reflection of our commitment to
            excellence, sustainability, and timeless design.
          </motion.p>
          <div className="mt-6">
            <motion.h3
              className="font-serif font-bold text-5xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            >
              Name
            </motion.h3>
            <motion.p
              className="text-xl text-gray-400"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            >
              Company Name
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
