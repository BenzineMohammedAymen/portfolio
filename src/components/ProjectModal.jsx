import { X, Github, ExternalLink, BookOpen } from "lucide-react";
import { visualMap } from "./ProjectVisuals";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;
  const Visual = visualMap[project.id];

  return (
    <div
      className="fixed inset-0 z-[800] bg-bg/93 backdrop-blur-xl overflow-y-auto flex items-start justify-center p-4 md:p-8"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-card2 border border-line/10 rounded-3xl max-w-3xl w-full relative overflow-hidden">
        <div className="h-56 relative">
          <Visual />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 bg-card/90 border border-line/10 rounded-lg w-9 h-9 flex items-center justify-center text-muted hover:border-rose hover:text-rose-400 transition z-10"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>
        <div className="p-7">
          <div className="text-xl font-extrabold text-fg mb-1">{project.title}</div>
          <div className="text-xs text-cyan-400 font-mono mb-5">{project.modal.subtitle}</div>
          <div className="grid sm:grid-cols-2 gap-4 mb-2">
            {project.modal.sections.map((s) => (
              <div key={s.title}>
                <div className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-1.5">{s.title}</div>
                <div className="text-sm text-muted leading-relaxed">{s.text}</div>
              </div>
            ))}
          </div>
          {(project.live || project.github || project.paper) && (
            <div className="flex flex-wrap gap-3 mt-6">
              {project.paper && (
                <a
                  href={project.paper}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-br from-indigo to-violet text-fg text-sm font-semibold px-5 py-2.5 rounded-lg hover:opacity-85 transition"
                >
                  <BookOpen size={15} /> View Published Thesis
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-br from-emerald-500 to-cyan-500 text-fg text-sm font-semibold px-5 py-2.5 rounded-lg hover:opacity-85 transition"
                >
                  <ExternalLink size={15} /> Visit Live Site
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-line/5 border border-line/10 text-fg text-sm font-semibold px-5 py-2.5 rounded-lg hover:border-indigo hover:text-indigo-300 transition"
                >
                  <Github size={15} /> View on GitHub
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
