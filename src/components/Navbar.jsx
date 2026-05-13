function Navbar() {
  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center bg-dark-bg/80 backdrop-blur-md fixed top-0 z-40 border-b border-zinc-800">
      <div className="font-bold text-2xl tracking-tighter cursor-pointer">
        <span className="text-white">SV</span>
        <span className="text-brand-green">.</span>
      </div>
      
<ul className="hidden md:flex gap-8 font-mono text-sm text-zinc-400">
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

      <button className="hidden md:block px-4 py-2 border border-brand-green text-brand-green font-mono text-sm rounded hover:bg-brand-green/10 transition-colors">
        Resume.pdf
      </button>
    </nav>
  );
}

export default Navbar;