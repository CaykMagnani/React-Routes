import React from 'react';
import './style.css';
import Card from './index.js';

function CardMap({ cardData }) {
  return (

    <div className="card-map">
      
      {cardData.map((card, index) => (
        <Card key={index} title={card.title} price={card.price} image={card.image} />
      ))}
    </div>
  );
}

export default CardMap;
