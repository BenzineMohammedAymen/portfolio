import useReveal from "../hooks/useReveal";
import Bold from "./Bold";
import { about } from "../data/content";
import profilePhoto from "../assets/profile.jpg";

export default function About() {
  const [refL, inViewL] = useReveal();
  const [refR, inViewR] = useReveal();

  return (
    <section id="about" className="bg-bg2 py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.6fr] gap-16 items-start">
        <div ref={refL} className={`reveal-l relative ${inViewL ? "in-view" : ""}`}>
          <img
            src={profilePhoto}
            alt="Mohammed Aymen Benzine"
            className="w-full rounded-3xl object-cover object-[center_10%] max-h-[520px] border border-white/10"
          />
          <div className="absolute -bottom-6 -right-6 bg-card/95 border border-border rounded-2xl px-5 py-4 backdrop-blur-xl min-w-[170px]">
            <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Current Role</div>
            <div className="text-sm font-bold text-white">IT Engineer</div>
            <div className="text-xs text-indigo-300 mt-0.5">ETTR · Ouargla, Algeria</div>
          </div>
        </div>

        <div ref={refR} className={`reveal-r ${inViewR ? "in-view" : ""}`}>
          <div className="inline-flex items-center gap-2 text-xs font-bold text-indigo-400 uppercase tracking-widest mb-3">
            <span className="w-4 h-0.5 bg-indigo-400 rounded" /> About Me
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
            Engineer, Researcher,
            <br />
            <span className="grad-text">Community Builder</span>
          </h2>
          <div className="space-y-5">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-slate-300 leading-loose text-[15px]">
                <Bold text={p} />
              </p>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mt-6">
            {about.tags.map((tag) => (
              <span key={tag} className="bg-indigo/10 border border-indigo/20 rounded-lg px-3 py-1 text-xs text-indigo-200 font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
