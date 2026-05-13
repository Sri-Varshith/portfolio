function Experience() {
  // Mock data - replace with your actual internships/jobs/roles
  const experienceList = [
    {
      role: "Systems Engineering Intern",
      company: "TechNova Solutions",
      duration: "May 2023 - Aug 2023",
      description: [
        "Optimized core C++ data processing pipeline, reducing execution time by 15%.",
        "Wrote automated Bash scripts for Linux server deployment.",
        "Collaborated with senior engineers to debug memory leaks in legacy code."
      ]
    },
    {
      role: "Open Source Contributor",
      company: "Various Projects",
      duration: "Jan 2022 - Present",
      description: [
        "Contributed bug fixes and feature enhancements to popular C++ repositories.",
        "Managed version control using Git and resolved complex merge conflicts.",
        "Wrote technical documentation for API endpoints."
      ]
    }
  ];

  return (
    <section className="w-full py-20 px-6 md:px-20 border-t border-zinc-800/50" id="experience">
      <div className="mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
          Work <span className="text-brand-green">Experience</span>
        </h2>
        <p className="text-zinc-400 font-mono text-sm">
          {">"} tail -f /var/log/career.log
        </p>
      </div>

      <div className="max-w-4xl border-l-2 border-zinc-800 ml-4 md:ml-0 flex flex-col gap-10">
        {experienceList.map((exp, index) => (
          <div key={index} className="relative pl-8 md:pl-12 group">
            {/* The Timeline Dot */}
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-zinc-800 border-2 border-dark-bg group-hover:bg-brand-green transition-colors duration-300"></div>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2 md:gap-0">
              <h3 className="text-2xl font-bold text-white group-hover:text-brand-green transition-colors">
                {exp.role} <span className="text-zinc-500 font-normal">@ {exp.company}</span>
              </h3>
              <span className="text-brand-green font-mono text-sm bg-brand-green/10 px-3 py-1 rounded w-fit">
                {exp.duration}
              </span>
            </div>
            
            <ul className="list-none flex flex-col gap-2 text-zinc-400 mt-4">
              {exp.description.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-brand-green mt-1">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;