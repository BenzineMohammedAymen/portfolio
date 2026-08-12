import * as Icons from "lucide-react";
import useReveal from "../hooks/useReveal";
import { leadership } from "../data/content";

function LeadershipCard({ entry, delay }) {
  const [ref, inView] = useReveal();
  const Icon = Icons[entry.icon] || Icons.Bot;
  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "in-view" : ""} bg-gradient-to-br from-indigo/[0.07] to-violet/[0.06] border border-indigo/20 rounded-3xl p-10 grid md:grid-cols-[auto_1fr] gap-10 items-start`}
      style={{ transitionDelay: delay }}
    >
      <div className="flex md:flex-col items-center gap-4">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo to-violet flex items-center justify-center shadow-lg shadow-indigo/35 overflow-hidden">
          {entry.logo ? (
            <img src={entry.logo} alt={`${entry.org} logo`} className="w-12 h-12 object-contain rounded-lg bg-white/95 p-1.5" loading="lazy" />
          ) : (
            <Icon size={32} className="text-fg" />
          )}
        </div>
        <span className="bg-indigo/10 border border-indigo/20 rounded-full px-3.5 py-1 text-xs text-indigo-200 font-mono whitespace-nowrap">
          {entry.period}
        </span>
      </div>
      <div>
        <div className="text-2xl font-extrabold text-fg mb-1">{entry.org}</div>
        <div className="text-base text-indigo-300 font-semibold mb-1">{entry.role}</div>
        <a
          href={entry.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-cyan-300 mb-5 hover:opacity-75 transition"
        >
          <Icons.ExternalLink size={13} /> {entry.linkLabel}
        </a>
        <p className="text-slate-700 dark:text-slate-300 leading-loose mb-6">{entry.desc}</p>
        <div className="grid sm:grid-cols-2 gap-2.5 mb-6">
          {entry.points.map((p) => (
            <div key={p} className="flex items-start gap-2 text-sm text-muted">
              <span className="text-indigo-400 text-[8px] mt-2">◆</span>
              {p}
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {entry.tags.map((t) => (
            <span key={t} className="bg-line/5 border border-line/10 rounded-md px-2.5 py-1 text-xs text-muted">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Leadership() {
  return (
    <section id="leadership" className="bg-bg py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-indigo-400 uppercase tracking-widest mb-3">
          <span className="w-4 h-0.5 bg-indigo-400 rounded" /> Leadership & Community
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Growing the AI Community</h2>
        <p className="text-muted max-w-xl mb-14 leading-relaxed">
          Outside of engineering work, I care about helping more people learn AI skills in my region.
        </p>

        <div className="flex flex-col gap-8">
          {leadership.map((entry, i) => (
            <LeadershipCard key={entry.org} entry={entry} delay={`${i * 0.1}s`} />
          ))}
        </div>
      </div>
    </section>
  );
}
