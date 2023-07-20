import React, { useState, useEffect } from "react";
import "../App.css";
import "./HeroSection.css";
import backgroundVisao from "../assets/homeVisao.png";
import logoEngrenagem from "../assets/CPPengrenagem2_p.png";

function HeroSection() {
  const [text, setText] = useState("");

  const typeScreen = (text, i = 0) => {
    if (i < text.length) {
      setText(text.slice(0, i + 1));
      setTimeout(() => typeScreen(text, i + 1), 83);
    }
  };

  useEffect(() => {
    setTimeout(() => typeScreen("Políticas Públicas"));
  }, []);

  return (
    <div className="hero-container">
      <div className="image">
        <img src={backgroundVisao} />
      </div>
      <div className="text">
        <div id="text-1">
          <span>CURSO DE</span>
        </div>
        <div className="text2">
          <div id="text-2">{text}</div>
        </div>
        <div id="text-3">
          <span>QUEIMADOS </span> <img src={logoEngrenagem} /> <span>2023</span>
        </div>
        <div id="text-4">
          <span>Aprenda como se tornar uma</span>
          <span>
            <strong>liderança</strong> pro seu território
          </span>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
