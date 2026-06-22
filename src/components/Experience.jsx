import * as Icons from "lucide-react";
import useReveal from "../hooks/useReveal";
import { experience } from "../data/content";

function ExpItem({ exp, delay }) {
  const [ref, inView] = useReveal();
  const Icon = Icons[exp.icon] || Icons.Briefcase;
  return (
    <div ref={ref} className={`reveal ${inView ? "in-view" : ""} grid grid-cols-[48px_1fr] gap-5 items-start`} style={{ transitionDelay: delay }}>
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo to-violet flex items-center justify-center shadow-lg shadow-indigo/30 relative z-10 flex-shrink-0">
        <Icon size={18} className="text-white" />
      </div>
      <div className="bg-card border border-border rounded-2xl p-7 hover:border-white/15 hover:translate-x-1 transition-all">
        <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
          <div>
            <div className="text-lg font-bold text-white">{exp.role}</div>
            <div className="text-sm text-indigo-300 font-semibold mt-0.5">{exp.company}</div>
          </div>
          <span className="bg-cyan/10 border border-cyan/20 rounded-full px-3 py-1 text-xs text-cyan-300 font-mono whitespace-nowrap h-fit">
            {exp.period}
          </span>
        </div>
        <ul className="space-y-2 mb-5">
          {exp.points.map((p, i) => (
            <li key={i} className="text-sm text-slate-400 leading-relaxed pl-5 relative">
              <span className="absolute left-0 top-[0.6rem] w-1.5 h-1.5 rounded-full bg-cyan-400" />
              {p}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {exp.tags.map((t) => (
            <span key={t} className="bg-white/5 border border-white/10 rounded-md px-2.5 py-1 text-xs text-slate-400">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="bg-bg2 py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-indigo-400 uppercase tracking-widest mb-3">
          <span className="w-4 h-0.5 bg-indigo-400 rounded" /> Experience
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">My Work</h2>
        <p className="text-slate-400 max-w-xl mb-14 leading-relaxed">
          From running a company's IT network to building software and AI tools as a freelancer.
        </p>
        <div className="flex flex-col gap-6 relative">
          <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-indigo/40 via-cyan/30 to-transparent" />
          {experience.map((exp, i) => (
            <ExpItem key={exp.role} exp={exp} delay={`${i * 0.1}s`} />
          ))}
        </div>
      </div>
    </section>
  );
}
