import React from 'react';

export default function Offer() {
  return (
    <section className="relative w-full h-[60vh] bg-black flex items-center justify-center px-6 md:px-12 lg:px-20">
      <div className="text-center text-white max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-8 leading-tight uppercase tracking-wide">
          WHAT WE OFFER
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl leading-relaxed opacity-90 max-w-2xl mx-auto">
          Each project by One Earth Properties is a reflection of our commitment to excellence, sustainability, every space crafted to offer unmatched quality and long-term value.
        </p>
      </div>
    </section>
  );
}
