import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";
import { profile } from "../data/content";

const cards = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}`, color: "bg-indigo/12 text-indigo-300" },
  { icon: Phone, label: "Phone", value: profile.phone, href: "tel:+213673809977", color: "bg-cyan/12 text-cyan-300" },
  { icon: Linkedin, label: "LinkedIn", value: "mohammed-aymen-benzine", href: profile.linkedin, color: "bg-blue-500/12 text-blue-300" },
  { icon: Github, label: "GitHub", value: "BenzineMohammedAymen", href: profile.github, color: "bg-violet/12 text-violet-300" },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-bg py-24 px-6 md:px-10">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-indigo-400 uppercase tracking-widest mb-3">
          <span className="w-4 h-0.5 bg-indigo-400 rounded" /> Contact
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
          Let's Build Something
          <br />
          <span className="grad-text">Great Together</span>
        </h2>
        <p className="text-slate-400 max-w-lg mx-auto mb-10 leading-relaxed">
          I am open to AI engineering, data science, software engineering, and research roles, in Algeria or remotely, anywhere in the world.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-6 text-left">
          {cards.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="bg-card border border-border rounded-2xl p-5 flex items-center gap-3.5 hover:border-white/15 hover:-translate-y-0.5 transition-all"
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${c.color}`}>
                <c.icon size={17} />
              </div>
              <div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wide mb-0.5">{c.label}</div>
                <div className="text-sm font-semibold text-white">{c.value}</div>
              </div>
            </a>
          ))}
        </div>
        <p className="text-xs text-slate-500 flex items-center justify-center gap-1.5">
          <MapPin size={13} /> Ouargla, Algeria · Open to remote and on-site work
        </p>
      </div>
    </section>
  );
}
