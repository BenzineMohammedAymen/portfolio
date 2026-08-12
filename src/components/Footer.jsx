import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShow(window.scrollY > 500);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <footer className="bg-bg2 border-t border-border py-7 px-6 md:px-10 flex items-center justify-center text-center">
        <div className="text-sm text-muted">
          © {new Date().getFullYear()} Mohammed Aymen Benzine · AI Engineer & Data Scientist · Ouargla, Algeria
        </div>
      </footer>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-8 right-8 z-[400] w-10 h-10 rounded-full bg-gradient-to-br from-indigo to-violet flex items-center justify-center shadow-lg shadow-indigo/40 text-fg transition-all hover:scale-110 ${
          show ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </button>
    </>
  );
}
