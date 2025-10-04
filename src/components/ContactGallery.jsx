import { motion } from "framer-motion"

export default function ContactGallery() {
  // You can replace these with actual project data
  const projects = [
    { id: 1, title: "Beautiful Space 1", image: "" },
    { id: 2, title: "Beautiful Space 2", image: "" },
    { id: 3, title: "Beautiful Space 3", image: "" },
    { id: 4, title: "Beautiful Space 4", image: "" },
    { id: 5, title: "Beautiful Space 5", image: "" },
    { id: 6, title: "Beautiful Space 6", image: "" },
    { id: 7, title: "Beautiful Space 7", image: "" },
    { id: 8, title: "Beautiful Space 8", image: "" },
    { id: 9, title: "Beautiful Space 9", image: "" },
  ]

  return (
    <section className="relative py-20 px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative aspect-[4/3] bg-gray-800 rounded-lg overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
              
              {/* Placeholder for project images */}
              {project.image ? (
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-600">
                  <span className="text-2xl font-light">Project {project.id}</span>
                </div>
              )}
              
              {/* Overlay text */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-light tracking-wider text-white">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
