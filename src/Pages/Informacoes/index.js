import React from "react";
import { useParams } from "react-router-dom";
import './style.css';
import SimpleMap from "./Mapa";

function Contato() {
  const { id } = useParams();

  if (id === 'Contato') {
    return (

      <div className="mapContainer"> {/* Usando a classe mapContainer */}
        
          <SimpleMap />

          <div className="infos">

          <h1 className="texto">Loja Aleatória</h1>
          <p className="texto">CNPJ DO MEU ECOMMERCE</p>
          <p className="texto"> Rua Exemplos Da Silva</p>
          <p className="texto">Vila Exemplar</p>
          <p className="texto">Franca - SP / CEP: 12345-678</p>
          <p className="texto">Telefone: (16) 991234-5678</p>

          <div className="caixaInfos">
          <p className="texto">Email: ecommerce@ecommerce.com</p>
          </div>

          <h1 className="texto">Linha de Onibus:</h1>
          <p className="textoColorido">109 (VILA Exemplar) - Ponto Rua Exemplo Da Silva</p>

          </div>


      </div>

    );
  }

  return null;
}

export default Contato;
