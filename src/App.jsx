import { Header, About, Projects } from "./containers";
import { Navbar, CTA, Contact } from "./components";
import React, {useEffect, useRef} from "react";
import Skills from "./containers/skills/Skills";
import "./App.css";

function App() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          } else {
            entry.target.classList.remove("visible")
          }
        });
      },
      {threshold: 0.5}
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section)
      })
    }
  }, [])


  return (
    <>
      <Navbar />
      <div className="scroll-container">
        <div className="scroll-section" ref={(el) => (sectionsRef.current[0] = el)}>
        <Header />
        </div>
        <div className="scroll-section skills" ref={(el) => (sectionsRef.current[1] = el)}>
        <Skills />
        </div>
        <div className="scroll-section" ref={(el) => (sectionsRef.current[2] = el)}>
        <CTA />
       </div>
        <div className="scroll-section" ref={(el) => (sectionsRef.current[3] = el)}>
        <About />
        </div>
        <div className="scroll-section" ref={(el) => (sectionsRef.current[4] = el)}>
        <Projects />
        </div>
        <div className="scroll-section" ref={(el) => (sectionsRef.current[5] = el)}>
        <Contact />
        </div>
    </div>
    </>
  );
}

export default App;
