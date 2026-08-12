import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import useReveal from "../hooks/useReveal";
import { projects } from "../data/content";
import { visualMap } from "./ProjectVisuals";
import ProjectModal from "./ProjectModal";

const filters = [
  { key: "all", label: "All Projects" },
  { key: "ai", label: "AI / Research" },
  { key: "cv", label: "Computer Vision" },
  { key: "data", label: "Data Science" },
  { key: "web", label: "Web / App" },
  { key: "infra", label: "Enterprise IT" },
];

const tagColor = {
  indigo: "text-indigo-300",
  cyan: "text-cyan-300",
  emerald: "text-emerald-300",
  amber: "text-amber-300",
  violet: "text-violet-300",
  rose: "text-rose-300",
};

function ProjectCard({ project, onOpen, delay }) {
  const [ref, inView] = useReveal();
  const Visual = visualMap[project.id];
  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "in-view" : ""} bg-card border border-border rounded-2xl overflow-hidden flex flex-col cursor-pointer hover:border-line/20 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/35 transition-all`}
      style={{ transitionDelay: delay }}
      onClick={() => onOpen(project)}
    >
      <div className="h-[195px] relative overflow-hidden flex-shrink-0">
        <Visual />
        <div className={`absolute top-3 left-3 bg-bg/85 border border-line/10 rounded-full px-2.5 py-1 text-[11px] font-bold backdrop-blur ${tagColor[project.catColor]}`}>
          {project.catTag}
        </div>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="absolute top-3 right-3 bg-bg/85 border border-emerald/30 rounded-lg px-2.5 py-1.5 text-xs text-emerald-300 flex items-center gap-1.5 backdrop-blur hover:border-emerald hover:text-emerald-200 transition"
          >
            <ExternalLink size={13} /> Live Demo
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="absolute top-3 right-3 bg-bg/85 border border-line/10 rounded-lg px-2.5 py-1.5 text-xs text-slate-700 dark:text-slate-300 flex items-center gap-1.5 backdrop-blur hover:border-indigo hover:text-indigo-300 transition"
          >
            <Github size={13} /> GitHub
          </a>
        )}
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <div className={`text-[11px] font-bold uppercase tracking-wider mb-2 ${tagColor[project.typeColor]}`}>{project.type}</div>
        <div className="text-base font-bold text-fg mb-2.5 leading-snug">{project.title}</div>
        <p className="text-sm text-muted leading-relaxed mb-4 flex-1">{project.desc}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.metrics.map((m) => (
            <span key={m} className="bg-indigo/10 border border-indigo/20 rounded-md px-2 py-0.5 text-[11px] text-indigo-200 font-semibold">
              {m}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span key={s} className="bg-line/5 border border-line/10 rounded-md px-2 py-0.5 text-[11px] text-muted">
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [activeProject, setActiveProject] = useState(null);

  const visible = filter === "all" ? projects : projects.filter((p) => p.category.includes(filter));

  return (
    <section id="projects" className="bg-bg py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-indigo-400 uppercase tracking-widest mb-3">
          <span className="w-4 h-0.5 bg-indigo-400 rounded" /> Projects
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Things I Have Built</h2>
        <p className="text-muted max-w-xl mb-10 leading-relaxed">
          From AI research and medical deep learning to finance apps and business IT tools: real problems, real solutions.
        </p>

        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`rounded-full px-4 py-1.5 text-sm transition border ${
                filter === f.key
                  ? "bg-gradient-to-br from-indigo to-violet border-transparent text-fg"
                  : "border-line/15 text-muted hover:text-fg"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((p, i) => (
            <ProjectCard key={p.id} project={p} onOpen={setActiveProject} delay={`${(i % 3) * 0.1}s`} />
          ))}
        </div>
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
