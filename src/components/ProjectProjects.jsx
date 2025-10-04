import { motion } from "framer-motion"
import aboutTestImg from "../assets/about-test.jpg"

export default function ProjectProjects() {
  const projects = [
    {
      name: "Project Name",
      description: "Each project by One Earth Properties is a reflection of our commitment to excellence, sustainability, and timeless design. From premium agricultural lands to luxury villas and bungalows, every space is crafted to offer unmatched quality and long-term value."
    },
    {
      name: "Project Name",
      description: "Each project by One Earth Properties is a reflection of our commitment to excellence, sustainability, and timeless design. From premium agricultural lands to luxury villas and bungalows, every space is crafted to offer unmatched quality and long-term value."
    },
    {
      name: "Project Name", 
      description: "Each project by One Earth Properties is a reflection of our commitment to excellence, sustainability, and timeless design. From premium agricultural lands to luxury villas and bungalows, every space is crafted to offer unmatched quality and long-term value."
    },
    {
      name: "Project Name",
      description: "Each project by One Earth Properties is a reflection of our commitment to excellence, sustainability, and timeless design. From premium agricultural lands to luxury villas and bungalows, every space is crafted to offer unmatched quality and long-term value."
    }
  ]

  return (
    <section id="projects-section" className="py-20 bg-black">
      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <motion.h2 
          className="text-6xl md:text-8xl lg:text-9xl font-serif text-center mb-32 py-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          OUR PROJECTS
        </motion.h2>
        
        <div className="space-y-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0
            const isLastProject = index === projects.length - 1
            
            return (
              <motion.div 
                key={index} 
                className="group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {isLastProject ? (
                  // Centered layout for the last project
                  <div className="flex flex-col items-center">
                    <div className="w-full md:w-4/5 lg:w-3/4 overflow-hidden mb-8">
                      <div className="h-[50vh] md:h-[60vh] overflow-hidden">
                        <img 
                          src={aboutTestImg} 
                          alt={project.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-4/5 lg:w-3/4 max-w-3xl">
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4 leading-tight">
                        {project.name}
                      </h3>
                      <p className="text-base md:text-lg leading-relaxed opacity-70 font-sans">
                        {project.description}
                      </p>
                    </div>
                  </div>
                ) : isEven ? (
                  // Left-aligned: Image and text on the left
                  <div className="flex flex-col">
                    <div className="w-full md:w-3/5 overflow-hidden mb-8">
                      <div className="h-[50vh] md:h-[60vh] overflow-hidden">
                        <img 
                          src={aboutTestImg} 
                          alt={project.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-3/5 max-w-2xl">
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4 leading-tight">
                        {project.name}
                      </h3>
                      <p className="text-base md:text-lg leading-relaxed opacity-70 font-sans">
                        {project.description}
                      </p>
                    </div>
                  </div>
                ) : (
                  // Right-aligned: Image and text on the right
                  <div className="flex flex-col md:items-end">
                    <div className="w-full md:w-3/5 overflow-hidden mb-8">
                      <div className="h-[50vh] md:h-[60vh] overflow-hidden">
                        <img 
                          src={aboutTestImg} 
                          alt={project.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-3/5 max-w-2xl md:text-left">
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4 leading-tight">
                        {project.name}
                      </h3>
                      <p className="text-base md:text-lg leading-relaxed opacity-70 font-sans">
                        {project.description}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
        
        <motion.div 
          className="text-center py-20 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <a 
            href="#all-projects" 
            className="inline-flex items-center gap-3 text-xl font-sans border-b border-white pb-2 hover:border-gray-300 transition-colors group"
          >
            All Projects
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}