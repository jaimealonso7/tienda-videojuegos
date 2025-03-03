import React, { useState, useEffect } from 'react'
import "./Juegos.css"
import axios from 'axios';
function Juegos() {

    const [juegos, setJuegos] = useState([]);

    const HTMLJuegos = juegos.map((juego) => {
      return (
        <li key={juego.id} className='juego-item'>
          <h2>{juego.name}</h2> {/* Corregido para mostrar el nombre del juego */}
          <img src={juego.background_image} alt={juego.name} className='juego-img' />
        </li>
      )
    })

  /*useEffect(() => {
    fetch("https://api.rawg.io/api/games?key=e0720b42fbc340a6b817d4279c51e057")
        .then((response) => response.json())
        .then((data) => {
            console.log(data.results);
            setJuegos(data.results);
        })
  }, [])*/

  useEffect(() => {
    axios.get("https://api.rawg.io/api/games?key=e0720b42fbc340a6b817d4279c51e057")
       .then((response) => {
          console.log(response.data.results);
          setJuegos(response.data.results);   
        })
  }, [])
    
  return (
    <ul className='juego-list'>
      {HTMLJuegos}
    </ul>
  )
}

export default Juegos