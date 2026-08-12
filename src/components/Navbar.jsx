import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import useTheme from "../hooks/useTheme";

const links = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#leadership", label: "Leadership" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#research", label: "Research" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [progress, setProgress] = useState(0);
  const [theme, toggleTheme] = useTheme();

  useEffect(() => {
    function onScroll() {
      const doc = document.documentElement;
      const pct = (window.scrollY / (doc.scrollHeight - doc.clientHeight)) * 100;
      setProgress(pct);

      let current = "";
      links.forEach((l) => {
        const el = document.querySelector(l.href);
        if (el && window.scrollY >= el.offsetTop - 120) current = l.href;
      });
      setActive(current);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 h-0.5 bg-gradient-to-r from-indigo to-violet z-[999] transition-all duration-100"
        style={{ width: `${progress}%` }}
      />
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-3 bg-bg/90 backdrop-blur-xl border-b border-border">
        <a href="#hero" className="font-extrabold text-sm bg-gradient-to-br from-indigo to-violet bg-clip-text text-transparent">
          Aymen Benzine
        </a>
        <ul className="hidden md:flex gap-7 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-sm font-medium transition ${
                  active === l.href ? "text-fg" : "text-muted hover:text-fg"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted hover:text-fg hover:border-indigo/40 transition"
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <a
            href="#contact"
            className="hidden md:inline-block bg-gradient-to-br from-indigo to-violet text-fg text-sm font-semibold px-5 py-2 rounded-lg hover:opacity-85 transition"
          >
            Hire Me
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-slate-700 dark:text-slate-300"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-40 bg-bg/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-xl font-semibold text-slate-700 dark:text-slate-300 hover:text-fg"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 text-sm font-medium text-muted hover:text-fg transition"
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
            {theme === "dark" ? "Light mode" : "Dark mode"}
          </button>
        </div>
      )}
    </>
  );
}
