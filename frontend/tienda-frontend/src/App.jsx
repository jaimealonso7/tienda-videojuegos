import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/Navbar/Navbar';
import Home from './paginas/Home/Home';
import Login from './componentes/Login/Login';
import Registro from './componentes/Registro/Registro';
import JuegosList from './paginas/Juegos/JuegosList';
import JuegosDetails from './paginas/Juegos/JuegosDetails';

const App = () => {

  // Al actualizar se guarda el color anterior
  const current_theme = localStorage.getItem('current_theme');
  // Se inicia en color 'Dia'
  const [theme, setTheme] = useState(current_theme? current_theme : 'light');
  // Estado para juego seleccionado
  const [selectedJuego, setSelectedJuego] = useState(null); 

  useEffect(()=>{
    localStorage.setItem('current_theme', theme);
  },[theme])

  
  return (
    <Router>
      <div className={`container ${theme}`}>  {/* Aplica el tema aquí */}
        <Navbar theme={theme} setTheme={setTheme} />
        <div>
          {/* Mostrar el juego seleccionado si existe 
          {selectedJuego && (
            <div className='juego-seleccionado'>
              <h2>Juego Seleccionado</h2>
              <h3>{selectedJuego.name}</h3>
              <img src={selectedJuego.background_image} alt={selectedJuego.name} className='juego-img' />
              <p>Rating: {selectedJuego.rating}</p>
            </div>  
          )}*/}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />

            {/* Ruta para la lista de juegos */}
            <Route path="/juegos"element={<JuegosList selectedJuego={selectedJuego} setSelectedJuego={setSelectedJuego} />} />

            <Route path="/juego/:id" element={<JuegosDetails juego={selectedJuego} />} />

          </Routes>
        </div>
      </div>
    </Router>
    
  )
}

export default App



{/*function App() {
  const [selectedPokemon, setSelectedPokemon] = useState()

  return (
    <>
      {selectedPokemon && (
        <div>
          <h2>Pokemon Seleccionado</h2>
          <PokemonDetails pokemon={selectedPokemon}></PokemonDetails>
        </div>
      )}

      <h2>Lista de pokemons</h2>
      <PokemonList selectedPokemon={setSelectedPokemon}></PokemonList>
    </>
  )
*/}
