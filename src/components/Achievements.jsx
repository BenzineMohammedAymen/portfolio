import * as Icons from "lucide-react";
import useReveal from "../hooks/useReveal";
import { achievements } from "../data/content";

function AchCard({ ach, delay }) {
  const [ref, inView] = useReveal();
  const Icon = Icons[ach.icon] || Icons.Award;
  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "in-view" : ""} bg-card border border-border rounded-2xl p-7 text-center relative overflow-hidden group hover:border-line/15 hover:-translate-y-1 transition-all`}
      style={{ transitionDelay: delay }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo to-violet opacity-0 group-hover:opacity-[0.04] transition-opacity" />
      <div className="relative z-10">
        <Icon size={28} className="mx-auto mb-3 text-indigo-300" />
        <div className="text-sm font-bold text-fg mb-1.5">{ach.title}</div>
        <div className="text-xs text-muted leading-relaxed">{ach.desc}</div>
      </div>
    </div>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="bg-bg2 py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-indigo-400 uppercase tracking-widest mb-3">
          <span className="w-4 h-0.5 bg-indigo-400 rounded" /> Achievements
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-10">Key Milestones</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map((a, i) => (
            <AchCard key={a.title} ach={a} delay={`${(i % 4) * 0.1}s`} />
          ))}
        </div>
      </div>
    </section>
  );
}
