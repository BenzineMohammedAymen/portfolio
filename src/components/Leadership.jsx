import { Bot, ExternalLink } from "lucide-react";
import useReveal from "../hooks/useReveal";
import { leadership } from "../data/content";

export default function Leadership() {
  const [ref, inView] = useReveal();
  return (
    <section id="leadership" className="bg-bg py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-indigo-400 uppercase tracking-widest mb-3">
          <span className="w-4 h-0.5 bg-indigo-400 rounded" /> Leadership & Community
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Growing the AI Community</h2>
        <p className="text-slate-400 max-w-xl mb-14 leading-relaxed">
          Outside of engineering work, I care about helping more people learn AI skills in my region.
        </p>

        <div
          ref={ref}
          className={`reveal ${inView ? "in-view" : ""} bg-gradient-to-br from-indigo/[0.07] to-violet/[0.06] border border-indigo/20 rounded-3xl p-10 grid md:grid-cols-[auto_1fr] gap-10 items-start`}
        >
          <div className="flex md:flex-col items-center gap-4">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo to-violet flex items-center justify-center shadow-lg shadow-indigo/35">
              <Bot size={32} className="text-white" />
            </div>
            <span className="bg-indigo/10 border border-indigo/20 rounded-full px-3.5 py-1 text-xs text-indigo-200 font-mono whitespace-nowrap">
              {leadership.period}
            </span>
          </div>
          <div>
            <div className="text-2xl font-extrabold text-white mb-1">{leadership.org}</div>
            <div className="text-base text-indigo-300 font-semibold mb-1">{leadership.role}</div>
            <a
              href={leadership.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-cyan-300 mb-5 hover:opacity-75 transition"
            >
              <ExternalLink size={13} /> View organization on LinkedIn
            </a>
            <p className="text-slate-300 leading-loose mb-6">{leadership.desc}</p>
            <div className="grid sm:grid-cols-2 gap-2.5 mb-6">
              {leadership.points.map((p) => (
                <div key={p} className="flex items-start gap-2 text-sm text-slate-400">
                  <span className="text-indigo-400 text-[8px] mt-2">◆</span>
                  {p}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {["Community Leadership", "AI Advocacy", "Event Organization", "Mentorship", "Research Collaboration"].map((t) => (
                <span key={t} className="bg-white/5 border border-white/10 rounded-md px-2.5 py-1 text-xs text-slate-400">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
