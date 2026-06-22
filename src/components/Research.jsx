import * as Icons from "lucide-react";
import useReveal from "../hooks/useReveal";
import Bold from "./Bold";
import { research, researchInterests } from "../data/content";

export default function Research() {
  const [ref, inView] = useReveal();

  return (
    <section id="research" className="bg-bg2 py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-indigo-400 uppercase tracking-widest mb-3">
          <span className="w-4 h-0.5 bg-indigo-400 rounded" /> Research
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">My Academic Research</h2>
        <p className="text-slate-400 max-w-xl mb-10 leading-relaxed">
          I focus on building light, easy-to-explain AI tools for medical images, so AI can be useful even with limited computer power.
        </p>

        <div
          ref={ref}
          className={`reveal ${inView ? "in-view" : ""} bg-gradient-to-br from-indigo/[0.06] to-cyan/[0.04] border border-indigo/15 rounded-3xl p-10 mb-8 relative overflow-hidden`}
        >
          <div className="relative z-10">
            <div className="text-xs uppercase tracking-widest text-cyan-400 font-bold mb-3">Master's Thesis · Kasdi Merbah University · 2025</div>
            <h3 className="text-2xl font-extrabold text-white mb-5 leading-snug max-w-3xl">{research.title}</h3>
          </div>
          <div className="flex flex-wrap gap-6 mb-6 relative z-10">
            {research.meta.map((m) => {
              const Icon = Icons[m.icon] || Icons.Info;
              return (
                <div key={m.text} className="flex items-center gap-1.5 text-sm text-slate-400">
                  <Icon size={14} className="text-cyan-400" /> {m.text}
                </div>
              );
            })}
          </div>
          <div className="space-y-4 mb-7">
            {research.paragraphs.map((p, i) => (
              <p key={i} className="text-slate-300 leading-loose text-[15px]">
                <Bold text={p} />
              </p>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {research.findings.map((f) => (
              <div key={f.label} className="bg-card/60 border border-white/10 rounded-xl p-4 backdrop-blur">
                <div className="text-xl font-extrabold bg-gradient-to-br from-indigo to-violet bg-clip-text text-transparent">{f.num}</div>
                <div className="text-xs text-slate-400 mt-1 leading-relaxed">{f.label}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {research.awards.map((a) => (
              <span key={a} className="inline-flex items-center gap-1.5 bg-amber/[0.08] border border-amber/20 rounded-full px-3.5 py-1 text-xs text-amber-200 font-semibold">
                ⭐ {a}
              </span>
            ))}
          </div>
        </div>

        <h3 className="text-base font-bold text-white mb-5">My Research Interests</h3>
        <div className="grid sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {researchInterests.map((ri) => {
            const Icon = Icons[ri.icon] || Icons.Star;
            return (
              <div key={ri.name} className="bg-card border border-border rounded-2xl p-5 text-center hover:border-indigo hover:-translate-y-1 transition-all">
                <Icon size={24} className="mx-auto mb-2 text-indigo-300" />
                <div className="text-sm font-bold text-white">{ri.name}</div>
                <div className="text-xs text-slate-400 mt-1">{ri.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
