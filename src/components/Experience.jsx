function Experience() {
  const experienceList = [
    {
      role: "Open Source Contributor",
      company: "FOSS Overflow | GetWelPlus",
      duration: "Feb 2026 - Mar 2026",
      description:
        "Built and contributed to a Flutter-based mental wellness platform using Supabase and open-source workflows."
    },
    {
      role: "Mentor",
      company: "Openlake — The Open Source Club, IIT Bhilai",
      duration: "Aug 2025 - May 2026",
      description:
        "Mentored students in Git/GitHub workflows and guided open-source contributions."
    },
    {
      role: "Core Member",
      company: "Ingenuity — Competitive Programming Club, IIT Bhilai",
      duration: "Aug 2025 - May 2026",
      description:
        "Organized coding contests and helped students with DSA and competitive programming."
    }
  ];

  return (
    <section
      className="w-full py-20 px-6 md:px-20 border-t border-zinc-800/50"
      id="experience"
    >
      <div className="mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
          Work <span className="text-brand-green">Experience</span>
        </h2>

        <p className="text-zinc-400 font-mono text-sm">
          {">"} cat experience.log
        </p>
      </div>

      <div className="max-w-4xl border-l-2 border-zinc-800 ml-4 md:ml-0 flex flex-col gap-10">
        {experienceList.map((exp, index) => (
          <div
            key={index}
            className="relative pl-8 md:pl-12 group"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-zinc-800 border-2 border-dark-bg group-hover:bg-brand-green transition-colors duration-300"></div>

            <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 gap-2 md:gap-0">
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-brand-green transition-colors">
                  {exp.role}
                </h3>

                <p className="text-zinc-500 font-mono mt-1">
                  @{exp.company}
                </p>
              </div>

              <span className="text-brand-green font-mono text-sm bg-brand-green/10 px-3 py-1 rounded w-fit">
                {exp.duration}
              </span>
            </div>

            <p className="text-zinc-400 font-mono text-sm leading-relaxed">
              <span className="text-brand-green mr-2">▹</span>
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
