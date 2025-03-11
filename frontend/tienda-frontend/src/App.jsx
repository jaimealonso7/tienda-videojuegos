import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/Navbar/Navbar';
import Home from './paginas/Home/Home';
import Login from './componentes/Login/Login';
import Registro from './componentes/Registro/Registro';  // Importa Registro
import JuegosList from './paginas/Juegos/JuegosList';
import JuegosDetails from './paginas/Juegos/JuegosDetails';

const App = () => {
  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');
  const [selectedJuego, setSelectedJuego] = useState(null);
  const [user, setUser] = useState(null);  // Estado para manejar el usuario logueado

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error al parsear el usuario de localStorage:', error);
        localStorage.removeItem('user');
      }
    }

    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }, []);

  // Esta es la función que se pasará como prop
  const handleLogin = (userInfo) => {
    setUser(userInfo);
    localStorage.setItem('user', JSON.stringify(userInfo)); 
    localStorage.setItem('token', userInfo.token); // Asegúrate de guardar el token
  };

  return (
    <Router>
      <div className={`container ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme} />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login handleLogin={handleLogin} />} />

            <Route path="/registro" element={<Registro handleLogin={handleLogin} />} />

            <Route path="/juegos" element={<JuegosList selectedJuego={selectedJuego} setSelectedJuego={setSelectedJuego} />} />
            <Route path="/juego/:id" element={<JuegosDetails juego={selectedJuego} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
