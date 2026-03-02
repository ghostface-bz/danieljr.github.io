import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import NavTransition from "./components/NavTransition";

export default function Home() {
  return (
    <>
      {/* Atmospheric background layer */}
      <div className="bg-layer" aria-hidden="true" />

      {/* GSAP scroll progress bar */}
      <ScrollProgress />

      {/* Nav section-transition overlay */}
      <NavTransition />

      <Navbar />
      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
