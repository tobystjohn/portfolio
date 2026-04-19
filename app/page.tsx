import Nav from "./components/Nav";
import LaunchHero from "./components/LaunchHero";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="flex-1">
      <Nav />
      <LaunchHero />
      <Hero />
      <Projects />
      <About />
      <Experience />
      <Contact />
    </main>
  );
}
