import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-scroll";
import "./Navbar.css";
import Logo from "../assets/visao_logo-1.png";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link
            to="hero-container"
            spy={true}
            smooth={true}
            offset={20}
            duration={500}
            className="navbar-logo"
            onClick={closeMobileMenu}
          >
            <img src={Logo}></img>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                className="nav-links"
                to="sobre"
                spy={true}
                smooth={true}
                offset={20}
                duration={500}
                onClick={closeMobileMenu}
              >
                SOBRE O CURSO
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-links"
                to="inscrever"
                spy={true}
                smooth={true}
                offset={20}
                duration={500}
                onClick={closeMobileMenu}
              >
                COMO SE INSCREVER
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-links"
                to="parceiros"
                spy={true}
                smooth={true}
                offset={20}
                duration={500}
                onClick={closeMobileMenu}
              >
                PARCEIROS
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
