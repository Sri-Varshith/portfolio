function Hero() {
  return (
    <section id="about" className="w-full min-h-[80vh] flex flex-col justify-center items-start px-6 md:px-20 mt-16">
      <p className="font-mono text-brand-green mb-4">
        {">"} user.login()
      </p>
      
      <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-2">
        Sri Varshith.
      </h1>
      
      <h2 className="text-4xl md:text-6xl font-bold text-zinc-500 mb-6">
        I build high-performance systems.
      </h2>
      
      <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
        I'm a software developer specializing in C++, Systems Programming, and algorithmic problem solving. When I'm not optimizing low-level code, I'm competing on Codeforces.
      </p>
      
      <div className="flex gap-4">
        <button className="px-6 py-3 bg-brand-green text-dark-bg font-bold rounded hover:bg-brand-green/90 transition-colors">
          View Projects
        </button>
        <button className="px-6 py-3 border border-zinc-700 text-zinc-300 rounded hover:border-brand-green hover:text-brand-green transition-colors font-mono">
          Codeforces Profile
        </button>
      </div>
    </section>
  );
}

export default Hero;