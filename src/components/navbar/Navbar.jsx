import React, {useState} from "react";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <p><a href="#home">Home</a></p>

        <p><a href="#about">About Me</a></p>

        <p><a href="#projects">Projects</a></p>

        <p><a href="#contact">Contact</a></p>

      </div>
      <div className="navbar-hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
