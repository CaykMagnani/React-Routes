import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const Mapa = withScriptjs(
  withGoogleMap(() => (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: -23.550520, lng: -46.633308 }} // Coordenadas do centro do mapa
    >
      <Marker position={{ lat: -23.550520, lng: -46.633308 }} /> {/* Marcador no mapa */}
    </GoogleMap>
  ))
);

export default Mapa;
