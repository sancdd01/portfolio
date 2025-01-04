import React from "react";
import "./header.css";
import freq from "../../assets/freq.jpg";
import pic from "../../assets/pic.png";
import {
  css,
  django,
  html,
  java,
  js,
  postgresql,
  python,
  react1,
  ts,
} from "./imports";

const Header = () => {
  return (
    <div className="header gradient__bg">
      <div className="header-name" style={{ backgroundImage: `url(${freq})` }}>
        <h1 className="text-pop-up-top ">DERRICK</h1>
      </div>
      <div className="header-content">
        <div className="header-img">
          <img src={pic} alt="" />
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
    </div>
  );
};

export default Header;
