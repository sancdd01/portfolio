import React from "react";
import AnimatedBackground from "../../components/AnimatedBackground";

import "./header.css";
import pic from "../../assets/pic.png";


const Header = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <AnimatedBackground />
        <h1 className="text-pop-up-top ">DERRICK</h1>
      </section>

      {/* Intro Section */}
      <section className="intro-section">
        <div className="header-content">
          <div className="header-img">
            <img src={pic} alt="portrait of Derrick" />
          </div>
          <div className="header-overiew" id="home">
          <p>
            Welcome to my portfolio website! I'm Derrick, a dedicated software
            developer with a background in aircraft mechanics and instruction in
            the Air Force. Currently completing my degree in Computer Science,
            specializing in Java, I bring a unique blend of technical expertise,
            military discipline, and meticulous attention to detail. <br />
            <br />
            Through a rigorous coding bootcamp, I gained hands-on experience in
            full-stack web development, utilizing frameworks like React and
            Node.js. With a focus on creating scalable and responsive
            applications, I'm driven by my passion for leveraging technology to
            enhance user experiences. <br />
            <br />
            My background as an aircraft mechanic has instilled in me a
            commitment to precision and delivering high-quality work. I thrive
            on constantly expanding my knowledge and skills, staying up-to-date
            with emerging trends and technologies. Whether through personal
            projects or collaboration with fellow developers, I actively seek
            growth opportunities to further enhance my abilities. <br />
            <br />
            Thank you for visiting my portfolio website! I'm eager to contribute
            my diverse skill set and unwavering dedication to impactful software
            development projects. If you have any questions or would like to
            collaborate, please feel free to reach out. Let's create something
            amazing together!
          </p>
        </div>
        </div>
      </section>
    </>
  );
};

export default Header;
