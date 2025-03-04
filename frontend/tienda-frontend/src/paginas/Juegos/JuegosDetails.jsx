import React from "react";
import "./JuegosDetails.css";

function JuegosDetails({ juego }) {
  if (!juego) return null; // Si no hay juego seleccionado, no renderizar nada

  return (
    <section className="selected-juego">
      <div className="juego-container">
        <h2 className="text">{juego.name}</h2>
        <img
          src={juego.background_image}
          alt={juego.name}
          className="juego-img"
        />
        <h3 className="text">Rating: {juego.rating}</h3>
      </div>
    </section>
  );
}

export default JuegosDetails;



/*import React from 'react'
import "./JuegosDetails.css";
function JuegosDetails({ props }) {
    const { juego } = props; 
    return (
      <section className='selected-juego'>
        <div className='juego-container'>
          <h2 className='text'>{juego.name}</h2> {/* Nombre del juego }
          <img src={juego.background_image} alt={juego.name} className='juego-img' />
          <h3 className='text'>Rating: {juego.rating}</h3> {/* Calificación del juego }
          {/* <p className='text'>Descripción: {juego.description}</p> Descripción del juego }
        </div>
      </section>
    );
  }
export default JuegosDetails*/