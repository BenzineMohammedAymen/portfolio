import * as Icons from "lucide-react";
import useReveal from "../hooks/useReveal";
import { certifications } from "../data/content";

const colorMap = {
  cyan: { bg: "bg-cyan/10", text: "text-cyan-300", badgeBg: "bg-cyan/10", badgeBorder: "border-cyan/20", badgeText: "text-cyan-300" },
  amber: { bg: "bg-amber/10", text: "text-amber-300", badgeBg: "bg-amber/10", badgeBorder: "border-amber/20", badgeText: "text-amber-200" },
  violet: { bg: "bg-violet/10", text: "text-violet-300", badgeBg: "bg-violet/10", badgeBorder: "border-violet/20", badgeText: "text-violet-200" },
  emerald: { bg: "bg-emerald/10", text: "text-emerald-300", badgeBg: "bg-emerald/10", badgeBorder: "border-emerald/20", badgeText: "text-emerald-200" },
  indigo: { bg: "bg-indigo/10", text: "text-indigo-300", badgeBg: "bg-indigo/10", badgeBorder: "border-indigo/20", badgeText: "text-indigo-200" },
};

function CertCard({ cert, delay }) {
  const [ref, inView] = useReveal();
  const Icon = Icons[cert.icon] || Icons.Award;
  const c = colorMap[cert.color];
  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "in-view" : ""} bg-card border border-border rounded-2xl p-6 flex gap-4 items-start hover:border-line/15 hover:-translate-y-0.5 transition-all`}
      style={{ transitionDelay: delay }}
    >
      <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden ${c.bg}`}>
        {cert.logo ? (
          <img src={cert.logo} alt={`${cert.org} logo`} className="w-7 h-7 object-contain rounded-sm bg-white/95 p-0.5" loading="lazy" />
        ) : (
          <Icon size={20} className={c.text} />
        )}
      </div>
      <div>
        <div className="text-sm font-bold text-fg mb-1">{cert.title}</div>
        <div className="text-xs text-muted">{cert.org}</div>
        <span className={`inline-block mt-2 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${c.badgeBg} border ${c.badgeBorder} ${c.badgeText}`}>
          {cert.tag}
        </span>
      </div>
    </div>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="bg-bg py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-indigo-400 uppercase tracking-widest mb-3">
          <span className="w-4 h-0.5 bg-indigo-400 rounded" /> Certifications
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Certificates & Awards</h2>
        <p className="text-muted max-w-xl mb-14 leading-relaxed">
          Official certificates and academic awards that show my skills in AI and professional growth.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((c, i) => (
            <CertCard key={c.title} cert={c} delay={`${(i % 3) * 0.1}s`} />
          ))}
        </div>
      </div>
    </section>
  );
}
