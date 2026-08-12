import useReveal from "../hooks/useReveal";
import { MapPin } from "lucide-react";
import { education } from "../data/content";

function EduCard({ edu, delay }) {
  const [ref, inView] = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "in-view" : ""} bg-card border border-border rounded-3xl p-8 relative overflow-hidden group hover:border-line/15 hover:-translate-y-1 transition-all`}
      style={{ transitionDelay: delay }}
    >
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo to-violet scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
      <div className="text-xs font-mono text-cyan-400 mb-3 tracking-wide">{edu.year}</div>
      <div className="text-lg font-bold text-fg mb-1">{edu.degree}</div>
      <div className="text-sm text-indigo-300 font-semibold mb-2">{edu.field}</div>
      <div className="text-sm text-muted mb-4 flex items-center gap-1.5">
        <MapPin size={13} /> {edu.school}
      </div>
      <p className="text-sm text-muted leading-relaxed mb-4">{edu.desc}</p>
      <div className="flex flex-wrap gap-2">
        {edu.badges.map((b) => (
          <span key={b} className="bg-indigo/10 border border-indigo/20 rounded-full px-3 py-1 text-[11px] text-indigo-200 font-semibold">
            {b}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Education() {
  return (
    <section id="education" className="bg-bg py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-indigo-400 uppercase tracking-widest mb-3">
          <span className="w-4 h-0.5 bg-indigo-400 rounded" /> Education
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">My Studies</h2>
        <p className="text-muted max-w-xl mb-14 leading-relaxed">
          I studied at Kasdi Merbah University in Ouargla, where I built strong skills in AI, data science, and computer science.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <EduCard key={edu.degree} edu={edu} delay={`${i * 0.1}s`} />
          ))}
        </div>
      </div>
    </section>
  );
}
