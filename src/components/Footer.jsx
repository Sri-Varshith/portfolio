function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-zinc-800/50 py-8 px-6 md:px-20 bg-dark-bg mt-10 flex flex-col md:flex-row items-center justify-between">
      <div className="mb-4 md:mb-0 text-center md:text-left">
        <h2 className="text-2xl font-bold text-white tracking-tighter cursor-pointer hover:text-brand-green transition-colors">
          SV<span className="text-brand-green">.</span>
        </h2>
        <p className="text-zinc-500 font-mono text-xs mt-2">
          © {currentYear} Sri Varshith. All rights reserved.
        </p>
      </div>


      <div className="text-zinc-600 font-mono text-xs">
        {">"} return 0;
      </div>
    </footer>
  );
}

export default Footer;