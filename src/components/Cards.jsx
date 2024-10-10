import React from "react";
import { useNavigate } from "react-router-dom"; // permet de naviguer entre différentes pages

import logements from "../../datas/logements.json";

function Cards() {
  const navigate = useNavigate();

  const handleCardClick = (id) => { // au clic, redirige vers la page logement correspondante
    navigate(`/accomodations/${id}`);
  }

  return (
    <div className="cards-container">
      {logements.map((logement) => (
        <div key={logement.id} className="card" 
        onClick={() => handleCardClick(logement.id)}>
          <img src={logement.cover} alt={logement.title} className="card-cover" />
          <div className="card-title">
            <h2>{logement.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;