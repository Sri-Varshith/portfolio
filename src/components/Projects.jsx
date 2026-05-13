function Projects() {
  const projectList = [
    {
      title: "DocuLens",
      subtitle: "Privacy-First Document Digitization",
      description: "A privacy-first offline document vault. Scan your ID cards or important documents, extract and store key details securely on your device—no cloud, no data leaving your phone.",
      bullets: [
        "Implemented on-device OCR to extract details such as names, ID numbers, and bank information from document images.",
        "Built privacy-focused local storage using SQLite with zero cloud dependency for secure offline access.",
        "Enabled quick copy-paste workflows for extracted data, reducing manual form-filling effort."
      ],
      tech: ["Flutter", "Dart", "Google ML Kit", "SQLite"],
      link: "https://github.com/Sri-Varshith/DocuLens" // Swap with your actual repo link later
    },
    {
      title: "CalmSpace",
      subtitle: "Ambient Focus & Habit Tracking",
      description: "A comprehensive wellness and productivity app designed for ambient focus sessions. Features integrated audio playback, mood-tagged journaling, and offline streak tracking to build consistent daily habits.",
      bullets: [
        "Built clean architecture using the repository pattern and Riverpod 3.x Notifier for state management.",
        "Integrated ambient audio playback with a session timer, seek control, and a persistent mini-player.",
        "Persisted journal entries locally via SQLite with mood tagging, timestamped history, and a full detail view.",
        "Implemented daily streak tracking to encourage consistent session habits, stored entirely offline."
      ],
      tech: ["Flutter", "Dart", "Riverpod 3.x", "SQLite"],
      link: "https://github.com/Sri-Varshith/Calmspace" // Swap with your actual repo link later
    }
  ];

  return (
    <section className="w-full py-20 px-6 md:px-20 border-t border-zinc-800/50 mt-20" id="projects">
      {/* YOUR EXACT HEADER - UNCHANGED */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
          Featured <span className="text-brand-green">Projects</span>
        </h2>
        <p className="text-zinc-400 font-mono text-sm">
          {">"} ls -la ./my_work
        </p>
      </div>

      {/* CHANGED TO FULL-WIDTH (flex-col) TO FIT YOUR BULLET POINTS */}
      <div className="flex flex-col gap-8">
        {projectList.map((project, index) => (
          <div 
            key={index} 
            className="bg-zinc-900 border border-zinc-800 p-6 md:p-8 rounded hover:border-brand-green transition-colors group flex flex-col"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
              <div>
                <h1 className="text-2xl font-bold text-white group-hover:text-brand-green transition-colors">
                  {project.title}
                </h1>
                <p className="text-brand-green font-mono text-sm mt-1">
                  {project.subtitle}
                </p>
              </div>
              
              {/* YOUR EXACT TECH STACK PILLS */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((techItem, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="px-2 py-1 bg-dark-bg text-brand-green border border-brand-green/20 rounded text-xs font-mono"
                  >
                    {techItem}
                  </span>
                ))}
              </div>
            </div>
            
            <p className="text-zinc-300 font-mono text-sm mb-6 leading-relaxed">
              {project.description}
            </p>

            {/* NEW: RENDER YOUR BULLET POINTS */}
            <ul className="flex flex-col gap-3 mb-8">
              {project.bullets.map((bullet, bIndex) => (
                <li key={bIndex} className="text-zinc-400 font-mono text-sm flex items-start gap-3 leading-relaxed">
                  <span className="text-brand-green font-mono mt-0.5">{">"}</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* YOUR EXACT VIEW SOURCE BUTTON */}
            <a href={project.link} className="text-sm font-mono text-zinc-300 hover:text-brand-green mt-auto w-fit flex items-center gap-2 transition-colors">
              [ View Source ]
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;