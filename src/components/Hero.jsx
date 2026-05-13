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
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-10">
        
        {/* Your Quick Stats Bar */}
        <div className="flex flex-wrap gap-3 font-mono text-sm text-brand-green bg-brand-green/5 border border-brand-green/20 px-4 py-2 rounded w-fit">
          <span>3rd Year @ IIT Bhilai</span>
          <span className="hidden md:inline">|</span>
          <span>Open Source Contributor</span>
        </div>

        
{/* Social Profile Icons */}
        <div className="flex items-center gap-5">
          {/* GitHub Icon */}
          <a href="https://github.com/Sri-Varshith" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-brand-green transition-colors" title="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </a>
          
          {/* LinkedIn Icon */}
          <a href="https://www.linkedin.com/in/sri-varshith-nimmagadda-159097330/" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-brand-green transition-colors" title="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>

          {/* Codeforces Icon (Official Shape) */}
          <a href="https://codeforces.com/profile/srivarshith" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-brand-green transition-colors" title="Codeforces">
             <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
               <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-15c0-.828.672-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-7.5c0-.828.672-1.5 1.5-1.5h3z"/>
             </svg>
          </a>

          {/* Email Icon */}
          <a href="mailto:srivarshith101@gmail.com" className="text-zinc-400 hover:text-brand-green transition-colors" title="Email">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </a>
        </div>

        
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