import React from "react";
import { motion } from 'framer-motion';

function OfferSection() {
    return (
        <div className=" text-white h-[310vh] overflow-hidden bg-black px-20 py-10">
              <div className="flex h-[150vh] ">
                   <div className=" h-full w-1/2">
                      <motion.img
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 0.5, y: 0 }}
          whileHover={{ opacity: 0.8, scale: 1.05, rotate: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Modern living room interior"
          className="w-full h-[90vh] object-cover cursor-pointer"
        />
        <motion.h1
          className="mt-6 mb-6 text-2xl font-serif"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Service Name
        </motion.h1>
        <motion.p
          className="text-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Each project by One Earth Properties is a reflection of our commitment to excellence, sustainability, and timeless design. From premium agricultural lands to luxury villas and bungalows, every space is crafted to offer unmatched quality and long-term value.
        </motion.p>
                   </div >
                   <div className=" w-1/3 ml-50 mt-100 ">
                        <motion.img
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 0.5, y: 0 }}
          whileHover={{ opacity: 0.8, scale: 1.05, rotate: -1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Modern living room interior"
          className=" w-full h-[70vh] object-cover cursor-pointer"
        />
         <motion.h1
           className="mt-4 mb-4 text-xl font-serif"
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, ease: "easeOut" }}
         >
           Service Name
         </motion.h1>
        <motion.p
          className="text-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Each project by One Earth Properties is a reflection of our commitment to excellence, sustainability, and timeless design. From premium agricultural lands to luxury villas and bungalows, every space is crafted to offer unmatched quality and long-term value.
        </motion.p>
                   </div>
              </div>
               <div className="flex h-[150vh] ">
                 <div className=" w-[23vw] ml-0 mr-40 mt-130 ">
                        <motion.img
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 0.5, y: 0 }}
          whileHover={{ opacity: 0.8, scale: 1.05, rotate: 2 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Modern living room interior"
          className=" w-full h-[55vh] object-cover cursor-pointer"
        />
         <motion.h1
           className="mt-2 mb-2 text-lg font-serif"
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, ease: "easeOut" }}
         >
           Service Name
         </motion.h1>
        <motion.p
          className="text-sm"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Each project by One Earth Properties is a reflection of our commitment to excellence, sustainability, and timeless design. From premium agricultural lands to luxury villas and bungalows, every space is crafted to offer unmatched quality and long-term value.
        </motion.p>
                   </div>
                   <div className=" h-full w-[30vw] ml-50 mt-40">
                      <motion.img
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 0.5, y: 0 }}
          whileHover={{ opacity: 0.8, scale: 1.05, rotate: -2 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Modern living room interior"
          className="w-full h-[70vh] object-cover cursor-pointer"
        />
        <motion.h1
          className="mt-6 mb-6 text-2xl font-serif"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Service Name
        </motion.h1>
        <motion.p
          className="text-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Each project by One Earth Properties is a reflection of our commitment to excellence, sustainability, and timeless design. From premium agricultural lands to luxury villas and bungalows, every space is crafted to offer unmatched quality and long-term value.
        </motion.p>
                   </div >
              </div>
        </div>
    )
}
export default OfferSection;
