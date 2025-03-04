import React, { useEffect, useState } from "react";
import JuegosCard from "./JuegosCard";
import JuegosDetails from "./JuegosDetails"; // Importamos los detalles
import "./JuegosList.css";
import GetForm from "./GetForm"; // Asegúrate de que GetForm está en la misma carpeta

function JuegosList({ setSelectedJuego, selectedJuego }) {
  const [juegos, setJuegos] = useState([]);

  // Función para manejar los valores de GetForm
  const handleFormSubmit = (from, to) => {
    console.log("Valores recibidos en JuegosList:", from, to);
    // Llamamos a getJuegos con el rango adecuado
    getJuegos(from, to);
  };

  // Llamada a la API para obtener los juegos en el rango especificado
  const fetchJuego = async (id) => {
    const response = await fetch(
      `https://api.rawg.io/api/games/${id}?key=e0720b42fbc340a6b817d4279c51e057`
    );
    return response.json();
  };

  const getJuegos = async (from, to) => {
    const juegosArr = [];
    const ids = [3498, 3328, 28, 4200, 1030, 5286, 13536, 3070, 58175, 274755];

    // Usamos from y to correctamente para obtener los juegos en el rango
    for (let i = from - 1; i < to; i++) {
      const juego = await fetchJuego(ids[i]);
      juegosArr.push(juego);
    }

    setJuegos(juegosArr);
  };

  useEffect(() => {
    // Carga por defecto los primeros 10 juegos
    getJuegos(1, 10);
  }, []);

  return (
    <div className="juegos-container">
      <GetForm handleFormSubmit={handleFormSubmit} />
      
      {selectedJuego && <JuegosDetails juego={selectedJuego} />}
      
      <ul className="juegos-list">
        {juegos.map((juego) => (
          <JuegosCard 
            key={juego.id} 
            juego={juego} 
            selectJuego={setSelectedJuego} 
          />
        ))}
      </ul>
    </div>
  );
}

export default JuegosList;
