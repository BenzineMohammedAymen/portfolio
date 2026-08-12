import { Mail, Github, Linkedin } from "lucide-react";
import { profile, heroStats } from "../data/content";
import profilePhoto from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center px-6 md:px-10 pt-28 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute w-[580px] h-[580px] rounded-full bg-indigo/20 blur-[90px] -top-32 -right-20 animate-orb" />
        <div className="absolute w-[440px] h-[440px] rounded-full bg-cyan/20 blur-[90px] -bottom-20 -left-16 animate-orb" style={{ animationDelay: "3s" }} />
        <div className="absolute w-[330px] h-[330px] rounded-full bg-violet/20 blur-[90px] top-[45%] left-[48%] animate-orb" style={{ animationDelay: "6s" }} />
      </div>

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-[1.1fr_1fr] gap-16 items-center relative z-10">
        <div className="reveal in-view">
          <div className="inline-flex items-center gap-2 bg-emerald/10 border border-emerald/25 rounded-full px-4 py-1.5 text-emerald-300 text-xs font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
            Open to opportunities
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4">
            <span className="grad-text">{profile.name.split(" ").slice(0, 2).join(" ")}</span>
            <br />
            {profile.name.split(" ").slice(2).join(" ")}
          </h1>

          <div className="flex flex-wrap gap-2 mb-5">
            {profile.roles.map((r) => (
              <span key={r} className="bg-indigo/10 border border-indigo/20 rounded-full px-3 py-1 text-xs text-indigo-200 font-mono">
                {r}
              </span>
            ))}
          </div>

          <p className="text-slate-700 dark:text-slate-300 max-w-md mb-8 leading-relaxed">{profile.tagline}</p>

          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 bg-gradient-to-br from-indigo to-violet text-fg font-semibold text-sm px-6 py-3 rounded-xl hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo/35 transition"
            >
              <Mail size={16} /> Contact Me
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-line/20 text-fg font-medium text-sm px-6 py-3 rounded-xl hover:border-indigo hover:text-indigo-300 hover:-translate-y-0.5 transition"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-line/20 text-fg font-medium text-sm px-6 py-3 rounded-xl hover:border-indigo hover:text-indigo-300 hover:-translate-y-0.5 transition"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {heroStats.map((s) => (
              <div key={s.label} className="bg-card/80 border border-border rounded-2xl px-5 py-4 backdrop-blur">
                <div className="text-2xl font-extrabold bg-gradient-to-br from-indigo to-violet bg-clip-text text-transparent">
                  {s.value}
                </div>
                <div className="text-xs text-muted mt-1 leading-relaxed">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal-r in-view flex justify-center items-center relative">
          <div className="absolute w-[350px] h-[350px] rounded-full bg-indigo/20 blur-3xl animate-orb" />
          <div className="absolute w-[380px] h-[380px] rounded-full border border-indigo/20 animate-spin-slow" />
          <div className="absolute w-[430px] h-[430px] rounded-full border border-dashed border-cyan/15 animate-spin-reverse" />
          <img
            src={profilePhoto}
            alt={profile.name}
            className="w-[230px] md:w-[300px] h-[230px] md:h-[300px] rounded-full object-cover object-[center_15%] border-[2.5px] border-indigo/40 shadow-[0_0_60px_rgba(99,102,241,0.18)] relative z-10"
          />
        </div>
      </div>
    </section>
  );
}
