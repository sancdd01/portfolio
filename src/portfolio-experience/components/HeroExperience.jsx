import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function HeroExperience() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    console.log("HeroExperience mounted");
    console.log("sectionRef:", sectionRef.current);
    console.log("contentRef:", contentRef.current);
    console.log("bgRef:", bgRef.current);

    const ctx = gsap.context(() => {
      gsap.to(contentRef.current, {
        y: -300,
        opacity: 0.1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          markers: true,
        },
      });

      gsap.to(bgRef.current, {
        scale: 1.4,
        y: 150,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          markers: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero-experience" ref={sectionRef}>
      <div className="hero-experience__background" ref={bgRef}></div>

      <div className="hero-experience__content" ref={contentRef}>
        <p className="hero-experience__eyebrow">Software Engineer</p>
        <h1 className="hero-experience__title">Derrick Sanchez</h1>
        <p className="hero-experience__subtitle">
          Building reliable systems from interface to infrastructure.
        </p>
        <div className="hero-experience__scroll">
          <span className="hero-experience__scroll-line"></span>
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}

export default HeroExperience;