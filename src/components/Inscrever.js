import React from "react";
import "./Inscrever.css";

function Inscrever() {
  return (
    <div className="inscrever">
      <div className="image-inscrever">
        <p>
          O Curso de Políticas Públicas Queimados em sua nova edição busca
          fortalecer capacidades de incidência do território, através de
          lideranças, coletivos e movimentos para a participação aprofundada na
          formulação, debate e monitoramento de políticas públicas no município
          de Queimados em seu contexto de vulnerabilidade socioeconômica, crise
          ambiental, violência institucionalizada e crescente desigualdade no
          período após a pandemia de Covid-19.
        </p>
        <button>Me Inscrever</button>
      </div>
      <div className="text-inscrever">
        <p id="text-number">2.</p>
        <p id="text-info">
          Como se <br /> inscrever
        </p>
      </div>
    </div>
  );
}

export default Inscrever;
