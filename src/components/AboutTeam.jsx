import { motion } from "framer-motion"

export default function AboutTeam() {
  const teamMembers = [
    {
      name: "Founder Name",
      role: "Founder & Chairman",
      description: "With over three decades of expertise in real estate and community development, [Name] has been the guiding force behind One Earth's philosophy of building with purpose and sustainability.",
      image: "/src/assets/about.png" // Placeholder
    },
    {
      name: "Co-Founder Name", 
      role: "Co-Founder & Managing Director",
      description: "Balancing heritage with innovation, [Name] ensures every project reflects cultural authenticity while embracing modern living.",
      image: "/src/assets/about.png" // Placeholder
    },
    {
      name: "Name",
      role: "Chief Architect", 
      description: "Driving the design vision, [Name] ensures every project achieves architectural integrity and timeless aesthetics.",
      image: "/src/assets/about.png" // Placeholder
    },
    {
      name: "Name",
      role: "Head of Sustainability",
      description: "Championing eco-conscious practices, [Name] integrates green solutions into planning, construction, and community design.",
      image: "/src/assets/about.png" // Placeholder
    }
  ]

  return (
    <section className="py-32 bg-black">
      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-serif leading-tight mb-16">
            DESIGN &<br />
            VISIONARIES<br />
            OF LIVING
          </h2>
        </motion.div>

        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-sm tracking-[0.2em] mb-8 opacity-80 font-sans">OUR TEAM</p>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <p className="text-2xl md:text-3xl font-serif leading-tight">
              We are a team of architects, designers, planners, and strategists united by a shared purpose, to craft that elevate life. Each member brings unique expertise, yet we are bound together by a passion for design, sustainability, and community building.
            </p>
            <div className="text-left">
              <motion.div
                className="pt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <a 
                  href="#positions" 
                  className="inline-flex items-center gap-3 text-lg font-sans border-b border-white pb-2 hover:border-gray-300 transition-colors group"
                >
                  See Open Positions
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-tight text-center mb-16">
            THE<br />
            VISIONARIES<br />
            BEHIND<br />
            ONE EARTH
          </h3>
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-sm tracking-[0.2em] mb-12 opacity-80 font-sans">FOUNDERS & LEADERSHIP</p>
          <p className="text-2xl md:text-3xl lg:text-4xl font-serif leading-tight max-w-5xl">
            At the heart of One Earth Properties is a leadership team that blends experience, creativity, and foresight. Each leader brings a distinct perspective, but all are united by the mission to create timeless spaces where people and nature coexist in harmony.
          </p>
        </motion.div>

        <div className="space-y-24">
          {teamMembers.map((member, index) => {
            const isEvenIndex = index % 2 === 0
            
            return (
              <motion.div
                key={index}
                className={`flex flex-col ${isEvenIndex ? 'md:flex-row' : 'md:flex-row-reverse'} items-start gap-16 md:gap-24`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="flex-1">
                  <div className="bg-gray-700 h-80 md:h-96 rounded-lg overflow-hidden">
                    <div className="w-full h-full bg-gray-600"></div>
                  </div>
                </div>
                <div className={`flex-1 ${isEvenIndex ? '' : 'md:text-right'}`}>
                  <h4 className="text-3xl md:text-4xl font-serif mb-2">{member.name}</h4>
                  <p className="text-lg opacity-60 font-serif italic mb-6">{member.role}</p>
                  <p className="text-lg md:text-xl leading-relaxed opacity-80 font-sans">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          className="text-center mt-32"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="border-t border-white/20 pt-16">
            <p className="text-base md:text-lg leading-relaxed opacity-80 font-sans max-w-4xl mx-auto">
              "We believe in a fluid, collaborative approach that allows us to bring together the finest minds across disciplines - architects, artisans, engineers, and creative partners to ensure every project reflects our uncompromising standards of quality, innovation, and timeless value."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}