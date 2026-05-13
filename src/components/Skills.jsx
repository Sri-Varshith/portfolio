function Skills() {
  // Organizing skills into categories makes it much easier to read
  const skillCategories = [
    {
      title: "Languages",
      skills: ["C++", "C", "Python", "JavaScript", "SQL"]
    },
    {
      title: "Systems & Architecture",
      skills: ["Linux/Unix", "Multithreading", "Sockets", "Memory Management", "Data Structures"]
    },
    {
      title: "Web Technologies",
      skills: ["React", "Node.js", "Tailwind CSS", "Vite", "REST APIs"]
    },
    {
      title: "Tools & Environment",
      skills: ["Git", "Bash", "Neovim", "Docker", "GDB"]
    }
  ];

  return (
    <section className="w-full py-20 px-6 md:px-20 border-t border-zinc-800/50" id="skills">
      <div className="mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
          Technical <span className="text-brand-green">Arsenal</span>
        </h2>
        <p className="text-zinc-400 font-mono text-sm">
          {">"} cat ~/.skills
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <div 
            key={index} 
            className="bg-zinc-900/50 border border-zinc-800 p-6 rounded hover:border-zinc-700 transition-colors"
          >
            <h3 className="text-xl font-bold text-white mb-4 border-b border-zinc-800 pb-2">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, skillIndex) => (
                <span 
                  key={skillIndex} 
                  className="px-3 py-1.5 bg-dark-bg text-zinc-300 border border-zinc-700 rounded text-sm font-mono hover:border-brand-green hover:text-brand-green transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;