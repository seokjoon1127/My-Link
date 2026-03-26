import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans selection:bg-neo-pink selection:text-black">
      {/* Header / Navbar */}
      <nav className="w-full border-b-4 border-black bg-white p-4 md:p-6 flex justify-between items-center sticky top-0 z-50">
        <h1 className="text-2xl font-black uppercase tracking-tighter">Seokjun.Park</h1>
        <div className="hidden md:flex gap-6 font-bold text-lg">
          <a href="#about" className="hover:underline decoration-4 underline-offset-4 transition-all">About</a>
          <a href="#skills" className="hover:underline decoration-4 underline-offset-4 transition-all">Skills</a>
          <a href="#contact" className="hover:underline decoration-4 underline-offset-4 transition-all">Contact</a>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto p-4 md:p-8 space-y-16 mt-8">
        
        {/* Hero Section */}
        <section className="flex flex-col gap-8 bg-neo-yellow neo-shadow p-8 md:p-16 relative">
          <div className="space-y-6">
            <div className="inline-block bg-white border-4 border-black px-4 py-2 font-black text-sm uppercase">
              Software Engineer
            </div>
            <h2 className="text-5xl md:text-7xl font-black leading-tight uppercase tracking-tight">
              안녕하세요,<br />
              <span className="bg-white px-2 mt-2 inline-block">박석준</span> 입니다.
            </h2>
            <p className="text-xl md:text-2xl font-bold border-l-8 border-black pl-6 py-2 bg-white/50">
              안정적이고 확장 가능한 백엔드 시스템을 설계하고 개발합니다. 한양대 정보시스템학과에서 넓은 시야와 깊은 지식을 쌓아가고 있습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <a href="#contact" className="bg-black text-white text-center font-black text-xl px-8 py-4 neo-shadow neo-shadow-hover border-4 border-black">
                프로젝트 문의하기
              </a>
              {/* NOTE: 실제 깃허브 URL은 your-username-here 부분을 변경해주시면 됩니다. */}
              <a href="https://github.com/your-username-here" target="_blank" rel="noreferrer" className="bg-white text-black text-center font-black text-xl px-8 py-4 neo-shadow neo-shadow-hover flex items-center justify-center gap-3">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                Github 연동
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-neo-pink neo-shadow p-8 md:p-16">
          <h3 className="text-4xl md:text-5xl font-black uppercase mb-8 border-b-8 border-black pb-2 inline-block bg-white px-4">About Me</h3>
          <p className="text-xl md:text-2xl font-bold leading-relaxed bg-white p-6 md:p-10 border-4 border-black">
            한양대 정보시스템학과에서 공부하며 컴퓨터 공학과 정보 시스템 전반에 대한 깊은 이해를 탄탄하게 다졌습니다. 
            단순히 코드를 작성하는 것을 넘어, 비즈니스 요구사항을 이해하고 이를 해결하기 위한 최적의 아키텍처를 고민합니다. 주로 백엔드 시스템 개발에 관심이 많으며, 사용자의 경험을 향상시키기 위해 빠르고 안정적인 서비스 인프라를 구축하는 것을 목표로 합니다.
          </p>
        </section>

        {/* Skills Section */}
        <section id="skills" className="bg-neo-blue neo-shadow p-8 md:p-16">
          <div className="flex justify-between items-end mb-12 border-b-8 border-black pb-4">
            <h3 className="text-4xl md:text-5xl font-black uppercase bg-white px-4">Tech Stack</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border-4 border-black p-8 font-black text-3xl text-center transform rotate-2 hover:rotate-0 transition-transform neo-shadow">
              <span className="block text-6xl mb-4">☕</span>
              Java
            </div>
            <div className="bg-white border-4 border-black p-8 font-black text-3xl text-center transform -rotate-2 hover:rotate-0 transition-transform neo-shadow">
              <span className="block text-6xl mb-4">🌱</span>
              Spring Boot
            </div>
            <div className="bg-white border-4 border-black p-8 font-black text-3xl text-center transform rotate-1 hover:rotate-0 transition-transform neo-shadow">
              <span className="block text-6xl mb-4">🐍</span>
              Python
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-white neo-shadow p-8 md:p-16 mb-16 text-center">
          <h3 className="text-4xl md:text-5xl font-black mb-6">Let's Work Together!</h3>
          <p className="text-2xl font-bold mb-10">새로운 프로젝트나 아이디어가 있다면 언제든지 편하게 연락주세요.</p>
          <a href="mailto:hello@example.com" className="inline-block bg-neo-green text-black font-black text-3xl px-16 py-8 neo-shadow neo-shadow-hover">
            이메일 보내기
          </a>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t-4 border-black bg-black text-white p-12 text-center font-bold text-lg">
        <p className="mb-2">Built with Next.js, React, and Tailwind CSS 4</p>
        <p>&copy; {new Date().getFullYear()} Seokjun.Park. All rights reserved.</p>
      </footer>
    </div>
  );
}
