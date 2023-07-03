import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import NavIcon from "./components/NavIcon";
import Project from "./components/Project";
import Skill from "./components/Skill";

function App() {
  return (
    <div className="font-inter bg-bgColor max-w-full overflow-hidden">
      <Header />
      <NavIcon />
      {/* Hero */}
      <section className="section" id="hero">
        <Hero />
      </section>
      {/* About */}
      <section className="section" id="about">
        <About />
      </section>
      {/* Skills */}
      <section className="section" id="skill">
        <Skill />
      </section>
      {/* Projects */}
      <section className="section" id="project">
        <Project />
      </section>
      <Footer />
      {/* Contact me */}
    </div>
  );
}

export default App;
