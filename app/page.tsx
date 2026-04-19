import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="flex-1">
      <Nav />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
