import { motion } from "framer-motion"

export default function ProjectDesign() {
  const principles = [
    {
      number: "01",
      title: "Rooted in Place",
      description: "Context matters. Our projects draw from the heritage, materials, and spirit of their surroundings—whether urban landmarks, natural retreats, or vibrant communities—so that they feel authentic and timeless."
    },
    {
      number: "02",
      title: "Built to Endure",
      description: "Quality is non-negotiable. We combine sustainable practices with uncompromising craftsmanship, ensuring that every structure not only meets today's needs but also stands as a legacy for future generations."
    },
    {
      number: "03",
      title: "Human at Heart",
      description: "Ultimately, our projects are for people. Homes that nurture. Communities that connect. Spaces that inspire belonging. We measure success not by scale, but by the lives enriched within them."
    }
  ]

  return (
    <section className="py-32 bg-black">
      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="space-y-32">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {index % 2 === 0 ? (
                // Left-aligned layout (01, 03)
                <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                  <div className="flex items-start gap-4 md:gap-6">
                    <span className="text-4xl md:text-5xl lg:text-6xl font-light opacity-30 whitespace-nowrap">{principle.number}</span>
                    <div className="flex-1">
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 leading-tight">
                        {principle.title}
                      </h3>
                      <p className="text-base md:text-lg lg:text-3xl leading-relaxed opacity-70 font-sans max-w-xl">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                // Right-aligned layout (02)
                <div className="flex flex-col md:flex-row-reverse gap-4 md:gap-8 md:text-right">
                  <div className="flex flex-row-reverse md:flex-row-reverse items-start gap-4 md:gap-6 md:ml-auto">
                    <span className="text-4xl md:text-5xl lg:text-6xl font-light opacity-30 whitespace-nowrap">{principle.number}</span>
                    <div className="flex-1 text-left md:text-right">
                      <h3 className="md:text-4xl lg:text-5xl font-serif mb-6 leading-tight">
                        {principle.title}
                      </h3>
                      <p className="text-start md:text-lg lg:text-2xl leading-relaxed opacity-70 font-sans max-w-xl md:ml-auto">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}