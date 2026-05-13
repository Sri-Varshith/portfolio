function Projects() {
  const projectList = [
    {
      title: "Low-Latency Trading Engine",
      description: "A high-performance order matching engine built to simulate real-time stock trading environments.",
      tech: ["C++", "Multithreading", "Sockets"],
      link: "#"
    },
    {
      title: "Algorithm Visualizer",
      description: "An interactive web tool that visualizes complex graph and sorting algorithms in real-time.",
      tech: ["React", "JavaScript", "Tailwind"],
      link: "#"
    },
    {
      title: "CLI Task Manager",
      description: "A lightweight command-line interface tool for managing developer workflows and tasks.",
      tech: ["C", "Bash", "Linux"],
      link: "#"
    }
  ];

  return (
    <section className="w-full py-20 px-6 md:px-20 border-t border-zinc-800/50 mt-20" id="projects">
      <div className="mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
          Featured <span className="text-brand-green">Projects</span>
        </h2>
        <p className="text-zinc-400 font-mono text-sm">
          {">"} ls -la ./my_work
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectList.map((project, index) => (
          <div 
            key={index} 
            className="bg-zinc-900 border border-zinc-800 p-6 rounded hover:border-brand-green transition-colors group flex flex-col"
          >
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-green transition-colors">
              {project.title}
            </h3>
            <p className="text-zinc-400 mb-6 flex-grow">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((techItem, techIndex) => (
                <span 
                  key={techIndex} 
                  className="px-2 py-1 bg-dark-bg text-brand-green border border-brand-green/20 rounded text-xs font-mono"
                >
                  {techItem}
                </span>
              ))}
            </div>
            <a href={project.link} className="text-sm font-mono text-zinc-300 hover:text-white mt-auto flex items-center gap-2">
              [ View Source ]
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;