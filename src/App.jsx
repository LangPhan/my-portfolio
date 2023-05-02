import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import NavIcon from "./components/NavIcon";

function App() {
  return (
    <div className="font-inter bg-bgColor">
      <Header />
      <NavIcon />
      {/* Hero */}
      <section className="section" id="#hero">
        <Hero/>
      </section>
      {/* About */}
      <section className="section" id="#about">
        <About/>
      </section>
      {/* Skills */}
      {/* Projects */}
      {/* Contact me */}
    </div>
  );
}

export default App;
