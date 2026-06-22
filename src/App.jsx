import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Leadership from "./components/Leadership";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function Divider() {
  return <div className="h-px bg-gradient-to-r from-transparent via-indigo/20 to-transparent" />;
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Education />
      <Divider />
      <Experience />
      <Divider />
      <Leadership />
      <Divider />
      <Skills />
      <Divider />
      <Projects />
      <Divider />
      <Research />
      <Divider />
      <Certifications />
      <Divider />
      <Achievements />
      <Divider />
      <Contact />
      <Footer />
    </div>
  );
}
