import React from 'react';

const AboutWork = () => {
  return (
    <section className="h-[230vh] bg-black font-Barlow text-white px-8 py-16 box-border font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-lg tracking-widest uppercase font-semibold mb-8">HOW WE WORK</h2>
        <p className="text-5xl max-w-4xl mb-26 leading-relaxed">
          We believe that remarkable spaces are built by those who bring passion, vision, and craftsmanship into every detail.
        </p>
        <div className="grid max-w-5xl mx-auto grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          <div className="max-w-sm">
            <div className="text-gray-500 text-3xl font-semibold tracking-wide mb-2">01</div>
            <h3 className="text-4xl font-semibold mb-4 leading-tight">Designing spaces that engage all senses</h3>
            <p className="text-gray-300 text-xl leading-relaxed">
              We ensure that the sophistication and integrity of every development are experienced beyond sight—through touch, proportion, materiality, and light. By blending architecture, landscape, and lifestyle, we create environments that leave a lasting impression and fit seamlessly into the rhythm of daily life.
            </p>
          </div>
          <div className="max-w-sm mt-60">
            <div className="text-gray-500 text-3xl font-semibold tracking-wide mb-2">02</div>
            <h3 className="text-4xl font-semibold mb-4 leading-tight">Humanity at the heart of design</h3>
            <p className="text-gray-300 text-xl leading-relaxed">
              We believe that true living is defined by connection—between people, nature, and community. Guided by empathy and honesty, we design spaces that go beyond function, creating places that foster belonging, wellbeing, and a sense of pride.
            </p>
          </div>
          <div className="max-w-sm ">
            <div className="text-gray-500 text-3xl font-semibold tracking-wide mb-2">03</div>
            <h3 className="text-4xl font-semibold mb-4 leading-tight">Simplicity as timeless elegance</h3>
            <p className="text-gray-300 text-xl leading-relaxed">
              In a world overwhelmed with noise, simplicity stands out. We distill each project to its essence—clarity in form, purity in detail, and functionality that endures. For us, great design is a balance of elegance and utility, shaping environments that are effortless yet extraordinary.
            </p>
          </div>
          <div className="max-w-sm mt-50">
            <div className="text-gray-500 text-3xl font-semibold tracking-wide mb-2">04</div>
            <h3 className="text-4xl font-semibold mb-4 leading-tight">Excellence without compromise</h3>
            <p className="text-gray-300 text-xl leading-relaxed">
              We strive to exceed expectations with every project, delivering spaces that reflect both artistry and precision. From master planning to the finest finish, we approach every detail with uncompromising standards—creating legacies that are built to inspire for generations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWork;
