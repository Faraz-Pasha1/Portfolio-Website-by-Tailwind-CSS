import About from "./about/page";
import Hero from "./components/Hero";
import Contact from "./contact/page";
import Myskills from "./myskills/page";
import Projects from "./projects/page";


export default function Home() {
  return (
    <div>
      
      <Hero/>
      <Myskills />
      <Projects />
      <About />
      <Contact />
      
      
    </div>
  );
}
