import React from "react";
import { useNavigate } from "react-router-dom";
import "./JuegosCard.css";

function JuegoCard({ juego, selectJuego }) {
  const navigate = useNavigate(); // Hook de react-router-dom para navegación

  const handleCardClick = () => {
    // Actualizar el juego seleccionado cuando se hace clic en la tarjeta
    selectJuego(juego);
  };

  return (
    <li className="juego-card" onClick={handleCardClick}>
      <h2 className="juego-name">{juego.name}</h2>
      <img src={juego.background_image} alt={juego.name} className="juego-img" />
      <h3 className="text">Rating: {juego.rating}</h3>
    </li>
  );
}

export default JuegoCard;
