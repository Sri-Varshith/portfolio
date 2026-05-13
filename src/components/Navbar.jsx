function Navbar() {
  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center bg-dark-bg/90 backdrop-blur-md fixed top-0 z-40 border-b border-zinc-800">
      
      {/* Logo stays on the left */}
      <div className="font-bold text-2xl tracking-tighter cursor-pointer">
        <a href="#about">
          <span className="text-white">SV</span>
          <span className="text-brand-green">.</span>
        </a>
      </div>
      
      {/* Absolute positioning forces the links to the dead center of the Navbar */}
      <ul className="hidden md:flex gap-8 font-mono text-sm text-zinc-400 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <li>
          <a href="#about" className="hover:text-brand-green transition-colors">/about</a>
        </li>
        <li>
          <a href="#projects" className="hover:text-brand-green transition-colors">/projects</a>
        </li>
        <li>
          <a href="#skills" className="hover:text-brand-green transition-colors">/skills</a>
        </li>
        <li>
          <a href="#experience" className="hover:text-brand-green transition-colors">/experience</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-brand-green transition-colors">/contact</a>
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;