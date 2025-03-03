import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/Navbar/Navbar';
import Home from './paginas/Home/Home';
import Login from './componentes/Login/Login';
import Registro from './componentes/Registro/Registro';
import Juegos from './paginas/Juegos/Juegos';

const App = () => {

  // Al actualizar se guarda el color anterior
  const current_theme = localStorage.getItem('current_theme');
  // Se inicia en color 'Dia'
  const [theme, setTheme] = useState(current_theme? current_theme : 'light');

  useEffect(()=>{
    localStorage.setItem('current_theme', theme);
  },[theme])

  
  return (
    <Router>
      <div className={`container ${theme}`}>  {/* Aplica el tema aquí */}
        <Navbar theme={theme} setTheme={setTheme} />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/juegos" element={<Juegos />} />  {/* Ahora Productos tiene su propia ruta */}
          </Routes>
        </div>
      </div>
    </Router>
    
  )
}

export default App
