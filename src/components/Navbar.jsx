function Navbar() {
  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center bg-dark-bg/80 backdrop-blur-md fixed top-0 z-40 border-b border-zinc-800">
      <div className="font-bold text-2xl tracking-tighter cursor-pointer">
        <span className="text-white">SV</span>
        <span className="text-brand-green">.</span>
      </div>
      
      <ul className="hidden md:flex gap-8 font-mono text-sm text-zinc-400">
        <li className="hover:text-brand-green transition-colors cursor-pointer">/about</li>
        <li className="hover:text-brand-green transition-colors cursor-pointer">/projects</li>
        <li className="hover:text-brand-green transition-colors cursor-pointer">/skills</li>
        <li className="hover:text-brand-green transition-colors cursor-pointer">/contact</li>
      </ul>

      <button className="hidden md:block px-4 py-2 border border-brand-green text-brand-green font-mono text-sm rounded hover:bg-brand-green/10 transition-colors">
        Resume.pdf
      </button>
    </nav>
  );
}

export default Navbar;