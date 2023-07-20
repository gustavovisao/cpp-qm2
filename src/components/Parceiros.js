import React from "react";
import "./Parceiros.css";
import casaFluminense from "../assets/casa-logo-colorida.png";
import visaoLogo from "../assets/visao_logo-2.png";
import AgendaQueimados from "../assets/agenda-queimados-2030.png";
import EstacioLogo from "../assets/estacio-logo-1.png";

function Parceiros() {
  return (
    <div className="parceiros">
      <div className="text-parceiros">
        <br />
        <p id="parceiros-number">
          3. <br />
        </p>
        <p id="parceiros-info">Parceiros</p>
      </div>
      <div className="image-parceiros">
        <div className="section-parceiros">
          <img src={AgendaQueimados} />
          <p>
            Um documento elaborado pelas organizações, Pedalar Queimados,
            Golfinhos da Baixada, Ampara amigos do paraíso e Bxd_qm2 que
            pretende ampliar o debate a respeito das políticas públicas para
            esse território e ainda estimular e influenciar as propostas das
            pré-candidaturas das eleições municipais 2020 e futuras.
          </p>
        </div>
        <div className="section-parceiros">
          <img src={visaoLogo} />
          <p>
            Somos um laboratório cívico, organizamos redes de cooperação e
            trabalhamos tecnologias sociais, digitais e verdes na Baixada-RJ.
          </p>
        </div>
        <div className="section-parceiros">
          <img src={casaFluminense} />
          <p>
            Um espaço para a construção coletiva de políticas para a promoção de
            igualdade e o aprofundamento democrático no Rio de Janeiro.
          </p>
        </div>
        <div className="section-parceiros estacio">
          <img src={EstacioLogo} />
          <p>
            Uma universidade privada presente em diversas regiões do Brasil,
            oferecendo cursos de graduação, pós-graduação e extensão em diversas
            áreas do conhecimento.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Parceiros;
