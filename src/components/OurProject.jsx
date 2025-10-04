import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import villaImage from "../assets/landingpageimage.png";
import farmhouseImage from "../assets/about-test.jpg";
import pavilionImage from "../assets/about.png";
import coastlineImage from "../assets/footer-img.png";

const SLIDES = [
  {
    index: "I",
    title: "Aurora Villa Estate",
    location: "Abeokuta, Nigeria",
    image: villaImage,
    alt: "Modern glass villa illuminated at dusk with reflections on a wet driveway",
    description:
      "A hillside villa where softly lit glass volumes float over tropical landscaping. Passive ventilation, solar shading, and rainwater harvesting ensure comfort that respects the environment.",
    highlights: ["Passive cooling", "Rainwater reuse", "Smart lighting"],
  },
  {
    index: "II",
    title: "Palm Grove Farmstead",
    location: "Lekki, Lagos",
    image: farmhouseImage,
    alt: "Wide farmstead residence surrounded by palm trees at golden hour",
    description:
      "Premium agricultural land transformed into a productive retreat. The farmstead couples precision irrigation with regenerative soil practices to keep the grove thriving year-round.",
    highlights: ["Precision irrigation", "Regenerative soils", "Solar cold room"],
  },
  {
    index: "III",
    title: "Skyline Pavilions",
    location: "Victoria Island, Lagos",
    image: pavilionImage,
    alt: "Contemporary pavilion with illuminated wooden fins at night",
    description:
      "A series of sculpted pavilions designed for boutique hospitality. Each pavilion frames panoramic views, using cross-ventilation and adaptive shading to keep interiors naturally cool.",
    highlights: ["Biophilic interiors", "Cross ventilation", "Adaptive shading"],
  },
  {
    index: "IV",
    title: "Coastal Horizon Retreat",
    location: "Oniru Beach, Lagos",
    image: coastlineImage,
    alt: "Luxury beachfront residence with warm interior lighting during sunset",
    description:
      "A coastal getaway where floor-to-ceiling glazing opens to the Atlantic breeze. Locally sourced timber, wave-energy backup, and planted dunes protect the shoreline habitat.",
    highlights: ["Wave-energy backup", "Locally sourced timber", "Dune restoration"],
  },
];

export default function OurProject() {
  const projects = useMemo(() => SLIDES, []);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalProjects = projects.length;

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalProjects);
  }, [totalProjects]);

  const goToPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
  }, [totalProjects]);

  const handleSelect = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    if (totalProjects <= 1) return undefined;

    const timer = setInterval(goToNext, 8000);
    return () => clearInterval(timer);
  }, [goToNext, totalProjects]);

  if (!totalProjects) {
    return null;
  }

  const activeProject = projects[activeIndex];
  const rangeLabel =
    totalProjects > 1
      ? `${projects[0].index} – ${projects[totalProjects - 1].index}`
      : projects[0].index;

  return (
    <section className="relative w-full min-h-screen bg-black py-24 text-white sm:py-32">
      <div className="flex h-full w-full flex-col justify-center gap-16 px-6 sm:px-12 lg:px-16">
        <div className="text-center">
          <motion.h2
            className="text-4xl font-serif font-bold uppercase tracking-[0.4em] sm:text-5xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            OUR PROJECTS.
          </motion.h2>
          <motion.h3
            className="mt-4 text-3xl font-serif uppercase tracking-[0.4em] text-white/80 sm:text-5xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            OUR PRIDE.
          </motion.h3>
          <motion.p
            className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            Each project by One Earth Properties is a reflection of our commitment to excellence, sustainability, and timeless design. From premium agricultural lands to luxury villas and boutique retreats, every space is crafted to offer unmatched quality and long-term value.
          </motion.p>
        </div>

        <div className="grid h-full w-full gap-12 lg:grid-cols-[3fr_2fr]">
          <div className="relative h-full overflow-hidden rounded-[32px] border border-white/10 bg-white/5">
            <div className="aspect-[16/10] w-full">
              <AnimatePresence initial={false} mode="wait">
                <motion.img
                  key={activeProject.title}
                  src={activeProject.image}
                  alt={activeProject.alt}
                  className="h-full w-full object-cover"
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.65, ease: "easeOut" }}
                />
              </AnimatePresence>
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/0" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.4em] text-white/80">
              <span>{activeProject.index}</span>
              <span className="truncate text-right">{activeProject.location}</span>
            </div>
          </div>

          <div className="flex h-full flex-col justify-between gap-10">
            <motion.div
              key={activeProject.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="space-y-5"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-white/40">
                {activeProject.index} PROJECT
              </p>
              <h4 className="text-3xl font-serif font-semibold uppercase tracking-wide sm:text-4xl">
                {activeProject.title}
              </h4>
              <p className="text-base leading-relaxed text-white/70">
                {activeProject.description}
              </p>
              <ul className="flex flex-wrap gap-3 text-sm text-white/60">
                {activeProject.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="rounded-full border border-white/15 px-4 py-2 backdrop-blur-sm"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </motion.div>

            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between gap-6">
                <span className="text-sm uppercase tracking-[0.4em] text-white/50">
                  {rangeLabel}
                </span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={goToPrev}
                    aria-label="Show previous project"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:border-white/60 hover:bg-white/10"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={goToNext}
                    aria-label="Show next project"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:border-white/60 hover:bg-white/10"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="flex gap-4 overflow-x-auto pb-1">
                {projects.map((project, index) => (
                  <button
                    key={project.title}
                    type="button"
                    onClick={() => handleSelect(index)}
                    aria-label={`Show project ${project.title}`}
                    className={`relative h-20 min-w-[5rem] overflow-hidden rounded-2xl border transition duration-300 ${
                      index === activeIndex
                        ? "border-white/80"
                        : "border-white/10 hover:border-white/40"
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.alt}
                      className="h-full w-full object-cover"
                    />
                    <span
                      className={`absolute inset-0 flex items-center justify-center text-xs font-semibold uppercase tracking-[0.3em] text-white transition-opacity ${
                        index === activeIndex
                          ? "bg-black/60 opacity-100"
                          : "bg-black/50 opacity-0 hover:opacity-70"
                      }`}
                    >
                      {project.index}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
