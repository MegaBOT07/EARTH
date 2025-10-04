import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Achievements() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current;
    if (cards.length === 0) return;

    const horizontalTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${sectionRef.current.offsetHeight * cards.length-1}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    horizontalTl.to(containerRef.current, {
      xPercent: -100 * (cards.length - 1),
      ease: "none",
    });

    horizontalTl.to(
      cards,
      {
        yPercent: -20,
        stagger: 0.1,
        ease: "power2.out",
      },
      0
    );

    gsap.fromTo(
      cards,
      { opacity: 0, scale: 0.8, y: 50 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.to(cards, {
      yPercent: -5,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "bottom bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const achievements = [
    {
      title: "Award Winning Designs",
      description: "Recognized for innovative and sustainable property designs.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Sustainable Development",
      description: "Committed to eco-friendly practices in all our projects.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Client Satisfaction",
      description: "Over 95% client satisfaction rate with our services.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Innovation Leaders",
      description: "Pioneering new standards in real estate development.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[100vh] bg-black text-white overflow-hidden"
    >
      <div
        ref={containerRef}
        className="flex h-full gap-3 px-5 py-10"
        style={{
          width: `calc(90vw * ${achievements.length} + ${(achievements.length - 1) * 0.75}rem)`,
        }}
      >
        {achievements.map((achievement, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="w-[90vw] h-[90vh] bg-gray-900 rounded-lg shadow-2xl border border-white/20 flex-shrink-0 relative overflow-hidden will-change-transform will-change-opacity"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${achievement.image})`,
                opacity: 0.3,
              }}
            ></div>
            <div className="relative z-10 flex flex-col justify-end p-8 h-full">
              <h3 className="text-3xl font-serif mb-2 uppercase tracking-wide">
                {achievement.title}
              </h3>
              <p className="text-white/80 leading-relaxed">
                {achievement.description}
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
