function Hero() {
  return (
    <section id="about" className="w-full min-h-[80vh] flex flex-col justify-center items-start px-6 md:px-20 mt-16">
      <p className="font-mono text-brand-green mb-4">
        {">"} varshith.init()
      </p>
      
      <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-4">
        Hi, I'm <span className="text-brand-green">Sri Varshith.</span>
      </h1>
      
      <h2 className="text-xl md:text-3xl font-mono text-zinc-400 mb-10 leading-relaxed max-w-4xl">
Building scalable digital solutions from scratch and translating complex logic into seamless user experiences.
      </h2>
      {/* Quick Stats bar */}
      <div className="flex flex-wrap gap-3 font-mono text-sm text-brand-green mb-10 bg-brand-green/5 border border-brand-green/20 px-4 py-2 rounded w-fit">
        <span>3rd Year @ IIT Bhilai</span>
        <span className="hidden md:inline">|</span>
        <span>Open Source Contributor</span>
      </div>
      
      <div className="flex flex-wrap gap-4">
        <a href="#projects" className="px-6 py-3 bg-brand-green text-dark-bg font-bold rounded hover:bg-brand-green/90 transition-colors">
          View Projects
        </a>
        <a href="#contact" className="px-6 py-3 border border-zinc-700 text-zinc-300 rounded hover:border-brand-green hover:text-brand-green transition-colors font-mono">
          Get in Touch
        </a>
      </div>
    </section>
  );
}

export default Hero;