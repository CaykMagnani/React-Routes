import React from "react";
import { useParams } from "react-router-dom";
import './style.css';
import SimpleMap from "./Mapa";

function Contato() {
  const { id } = useParams();

  if (id === 'Contato') {
    return (
      <div className="mapContainer"> {/* Usando a classe mapContainer */}
        <div className="mapFilho"> {/* Usando a classe mapFilho */}
          <SimpleMap />
        </div>
        <div className="mapFilho2">
          
          <h1>Titulo Do meu ECOMMERCE</h1> <br />
          <p>CNPJ DO MEU ECOMMERCE</p> <br />
          <p>EMAIL DO MEU ECOMMERCE</p> <br />

        </div>
      </div>
    );
  }

  return null;
}

export default Contato;
