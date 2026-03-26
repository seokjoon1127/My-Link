import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen py-8 md:py-16 px-4 md:px-8 selection:bg-neo-cyan selection:text-black overflow-x-hidden flex flex-col items-center">
      
      {/* 과격한 상단 배너 (마키 애니메이션) - 살짝 삐뚤어진 각도 */}
      <div className="w-[110vw] bg-neo-orange brutal-border brutal-shadow-sm mb-12 overflow-hidden flex items-center h-16 relative rotate-[-2deg] -ml-[5vw]">
        <div className="animate-marquee flex gap-10 font-black uppercase text-2xl text-black">
          <span>Software Engineer</span>
          <span className="text-white">★</span>
          <span>Java</span>
          <span className="text-white">★</span>
          <span>Spring Boot</span>
          <span className="text-white">★</span>
          <span>Python</span>
          <span className="text-white">★</span>
          <span>Backend Developer</span>
          <span className="text-white">★</span>
          <span>Park Seok Joon</span>
          <span className="text-white">★</span>
          {/* 부드러운 순환을 위한 루프 복제 */}
          <span>Software Engineer</span>
          <span className="text-white">★</span>
          <span>Java</span>
          <span className="text-white">★</span>
          <span>Spring Boot</span>
          <span className="text-white">★</span>
          <span>Python</span>
          <span className="text-white">★</span>
          <span>Backend Developer</span>
          <span className="text-white">★</span>
          <span>Park Seok Joon</span>
          <span className="text-white">★</span>
        </div>
      </div>

      <main className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-10 mt-6 relative z-10">
        
        {/* Left Column - Hero */}
        <section className="col-span-1 border lg:col-span-8 flex flex-col gap-10">
          
          <div className="bg-neo-yellow brutal-border brutal-shadow p-6 sm:p-10 md:p-16 relative group transition-transform hover:-translate-y-2 hover:translate-x-2">
            <div className="absolute top-6 right-6 lg:-right-6 lg:-top-6 bg-white brutal-border brutal-shadow-sm px-6 py-3 font-black text-2xl rotate-6">
              HELLO! 👋
            </div>
            
            <h1 className="text-6xl sm:text-7xl lg:text-[7.5rem] font-black uppercase tracking-tighter text-white brutal-text-shadow leading-[0.9] mb-8 break-words select-all">
              PARK <br/> SEOK JOON
            </h1>
            
            <div className="bg-white brutal-border p-8 max-w-2xl transform -rotate-1 brutal-shadow-sm">
              <p className="text-xl sm:text-2xl font-black leading-relaxed">
                안정적이고 확장 가능한 백엔드 시스템을 설계하고 단단하게 개발합니다.<br/>
                현재 <span className="bg-neo-pink px-2 brutal-border mx-1 inline-block rotate-2">한양대 정보시스템학과</span>에서 시스템의 근본과 본질을 탐구하고 있습니다.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className="bg-neo-purple brutal-border brutal-shadow p-8 flex flex-col justify-center items-center text-center">
              <h2 className="text-4xl font-black uppercase text-white brutal-text-shadow mb-6">Let's Connect</h2>
              <a href="mailto:hello@example.com" className="bg-white brutal-border brutal-shadow-sm brutal-btn-sm font-black text-2xl px-8 py-5 w-full uppercase outline-none focus:ring-4 focus:ring-neo-cyan">
                Email Me
              </a>
            </div>

            <div className="bg-neo-cyan brutal-border brutal-shadow p-8 flex flex-col justify-center items-center text-center">
              <h2 className="text-3xl font-black uppercase mb-6 bg-white brutal-border px-3 py-1 -rotate-2">Check my Code</h2>
              {/* 유저가 제공한 실제 깃허브 URL 적용 */}
              <a href="https://github.com/seokjoon1127" target="_blank" rel="noreferrer" className="bg-black text-white brutal-border brutal-shadow-sm brutal-btn-sm font-black text-2xl px-6 py-5 w-full flex justify-center items-center gap-3 outline-none focus:ring-4 focus:ring-neo-pink">
                <svg className="w-8 h-8 text-white shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                GITHUB
              </a>
            </div>
          </div>
        </section>

        {/* Right Column - Skills & Extras */}
        <section className="col-span-1 border lg:col-span-4 flex flex-col gap-10">
          
          <div className="bg-white brutal-border brutal-shadow p-8 h-full flex flex-col">
            <h2 className="text-5xl font-black uppercase mb-10 border-b-8 border-black pb-4 text-center">Tools</h2>
            
            <div className="flex flex-col gap-8 flex-1">
              <div className="bg-neo-pink brutal-border brutal-shadow-sm p-5 transform rotate-3 hover:rotate-0 hover:-translate-y-1 transition-all flex items-center gap-6 group cursor-default">
                <div className="bg-white brutal-border p-3 group-hover:bg-neo-yellow transition-colors">
                  <span className="text-5xl block">☕</span>
                </div>
                <span className="text-4xl font-black uppercase tracking-wide">Java</span>
              </div>
              
              <div className="bg-neo-cyan brutal-border brutal-shadow-sm p-5 transform -rotate-3 hover:rotate-0 hover:-translate-y-1 transition-all flex items-center gap-6 group cursor-default">
                <div className="bg-white brutal-border p-3 group-hover:bg-neo-pink transition-colors">
                  <span className="text-5xl block">🌱</span>
                </div>
                <span className="text-4xl font-black uppercase tracking-wide">Spring</span>
              </div>
              
              <div className="bg-neo-yellow brutal-border brutal-shadow-sm p-5 transform rotate-2 hover:rotate-0 hover:-translate-y-1 transition-all flex items-center gap-6 group cursor-default">
                <div className="bg-white brutal-border p-3 group-hover:bg-neo-cyan transition-colors">
                  <span className="text-5xl block">🐍</span>
                </div>
                <span className="text-4xl font-black uppercase tracking-wide">Python</span>
              </div>
            </div>
            
            <div className="mt-10 bg-black text-neo-yellow p-6 font-black text-xl text-center brutal-border border-white uppercase tracking-widest shadow-[6px_6px_0px_#ff90e8]">
              Backend First
            </div>
          </div>

        </section>

      </main>

      {/* Footer */}
      <footer className="mt-20 w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center bg-white brutal-border brutal-shadow p-8 font-black text-xl md:text-2xl gap-6">
        <div className="flex items-center gap-3">
           <div className="w-6 h-6 bg-black rounded-full" />
           &copy; {new Date().getFullYear()} PARK SEOK JOON
        </div>
        <div className="bg-neo-orange px-6 py-3 brutal-border brutal-shadow-sm text-black -rotate-1 hover:rotate-0 transition-transform cursor-default">
          HANYANG UNIV. IS
        </div>
      </footer>
    </div>
  );
}
