import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white font-sans selection:bg-indigo-500/30">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(-45deg,#ee7752,#e73c7e,#23a6d5,#23d5ab)] bg-[length:400%_400%] animate-bg-gradient opacity-30 mix-blend-screen" />
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-purple-600/30 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[30rem] h-[30rem] bg-indigo-600/20 rounded-full blur-[128px]" />

      <main className="flex min-h-screen items-center justify-center p-6 sm:p-24 relative z-10 w-full">
        <div className="animate-float w-full max-w-3xl">
          <div className="glass w-full rounded-[2rem] p-8 sm:p-12 shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
            <div className="flex flex-col md:flex-row items-center gap-10">
              
              {/* Profile Avatar */}
              <div className="relative group shrink-0">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition duration-500" />
                <div className="relative h-40 w-40 rounded-full border-2 border-white/20 overflow-hidden bg-zinc-900 flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
              </div>

              {/* Profile Info */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left w-full">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-medium text-indigo-300 mb-4 tracking-wider uppercase">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                  </span>
                  Available for work
                </div>
                
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                  David Doe
                </h1>
                
                <h2 className="text-xl sm:text-2xl font-medium text-zinc-400 mb-6">
                  Full Stack Engineer
                </h2>
                
                <p className="text-base sm:text-lg text-zinc-500 leading-relaxed mb-8 max-w-md">
                  Crafting beautiful and performant web experiences. Passionate about modern web technologies, UI/UX design, and scalable architectures.
                </p>

                {/* Social Links & Actions */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 w-full">
                  <button className="px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-zinc-200 hover:-translate-y-1 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                    Contact Me
                  </button>
                  <a href="#" className="p-3 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:bg-white/10 hover:text-white hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                  </a>
                  <a href="#" className="p-3 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:bg-white/10 hover:text-white hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                  </a>
                </div>

              </div>
            </div>
            
            {/* Skills Section */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "GraphQL"].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-zinc-300 hover:bg-white/10 hover:text-white transition-colors cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
