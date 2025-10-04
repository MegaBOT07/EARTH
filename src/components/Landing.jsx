import React from "react";
import { motion } from "framer-motion";
import Navigation from "./Navigation.jsx";
import HeroSection from "./HeroSection.jsx";
import BrandSection from "./BrandSection.jsx";
import FutureSection from "./FutureSection.jsx";
import landingImage from "../assets/landingpageimage.png";

export default function Landing() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <section className="relative" style={{ height: "300vh" }}>
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${landingImage})`,
          }}
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </motion.div>
        <div className="relative z-10 h-full flex flex-col">
          <HeroSection />
          <BrandSection />
          <FutureSection />
        </div>
      </section>
    </div>
  );
}
