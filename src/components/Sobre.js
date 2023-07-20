import React from "react";
import "./Sobre.css";
import engrenagem1 from "../assets/CPPengrenagem1_p.png";
import engrenagem2 from "../assets/CPPengrenagem2_p.png";
import engrenagem4 from "../assets/CPPengrenagem4_p.png";
import { motion } from "framer-motion";
import video from "../assets/cpp-video.mp4";

function Cards() {
  return (
    <div className="sobre" id="sobre">
      <div className="info">
        <ul className="list-info">
          <li>GRATUITO</li>
          <img src={engrenagem1} />

          <li>12 AULAS</li>
          <img src={engrenagem2} />

          <li>PRESENCIAL</li>
          <img src={engrenagem4} />

          <li>VISITAS DE CAMPO</li>
        </ul>
      </div>
      <div className="text-sobre">
        <p id="text-number">1.</p>
        <p id="text-info">
          Sobre <br /> o curso
        </p>
        <p id="description">
          O Curso de Políticas Públicas Queimados em sua nova edição busca
          fortalecer capacidades de incidência do território, através de
          lideranças, coletivos e movimentos para a participação aprofundada na
          formulação, debate e monitoramento de políticas públicas no município
          de Queimados em seu contexto de vulnerabilidade socioeconômica, crise
          ambiental, violência institucionalizada e crescente desigualdade no
          período após a pandemia de Covid-19.
        </p>
      </div>
      <div className="image-sobre">
        <video autoPlay controls src={video}></video>
      </div>
    </div>
  );
}

export default Cards;
