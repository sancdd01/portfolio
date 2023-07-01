import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#about">About Me</a>
      </p>
      <p>
        <a href="#projects">Projects</a>
      </p>
      <p>
        <a href="#contact">Contact</a>
      </p>
    </div>
  );
};

export default Navbar;
