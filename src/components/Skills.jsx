import * as Icons from "lucide-react";
import useReveal from "../hooks/useReveal";
import { skills } from "../data/content";

const colorMap = {
  indigo: "bg-indigo/10 text-indigo-300",
  cyan: "bg-cyan/10 text-cyan-300",
  emerald: "bg-emerald/10 text-emerald-300",
  amber: "bg-amber/10 text-amber-300",
  violet: "bg-violet/10 text-violet-300",
  rose: "bg-rose/10 text-rose-300",
};

function SkillCard({ skill, delay }) {
  const [ref, inView] = useReveal();
  const Icon = Icons[skill.icon] || Icons.Code2;
  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "in-view" : ""} bg-card border border-border rounded-2xl p-6 hover:border-line/15 hover:-translate-y-1 transition-all`}
      style={{ transitionDelay: delay }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${colorMap[skill.color]}`}>
          <Icon size={17} />
        </div>
        <div className="text-sm font-bold text-fg">{skill.name}</div>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {skill.items.map((item) => (
          <span
            key={item}
            className="bg-line/[0.04] border border-line/10 rounded-md px-2.5 py-1 text-xs text-muted hover:bg-indigo/10 hover:border-indigo/25 hover:text-indigo-200 transition cursor-default"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="bg-bg2 py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-indigo-400 uppercase tracking-widest mb-3">
          <span className="w-4 h-0.5 bg-indigo-400 rounded" /> Skills
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">What I Can Do</h2>
        <p className="text-muted max-w-xl mb-14 leading-relaxed">
          A wide range of skills covering AI research, data science, full-stack development, IT networks, and business document design.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} delay={`${(i % 3) * 0.1}s`} />
          ))}
        </div>
      </div>
    </section>
  );
}
