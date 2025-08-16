// pages/index.tsx
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Cases from "./components/Cases";
import Contact from "./components/Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <main className="space-y-12">
        <About />
        <Experience />
        <Skills />
        <Cases />
        <Contact />
      </main>
    </div>
  );
};

export default Home;
