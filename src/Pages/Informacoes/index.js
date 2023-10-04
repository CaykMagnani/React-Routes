import { useParams } from "react-router-dom";
import './style.css';
import Mapa from "./Mapa";

function Contato() {

    const { id }= useParams();

    if (id === 'Contato'){
        <div className="mapClass">
        <Mapa
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    }

}

export default Contato;
