// Home.jsx
import React from 'react';
import Login from '../../componentes/Login/Login';
import Registro from '../../componentes/Registro/Registro';
import './Home.css';

const Home = ({ handleLogin }) => {
  return (
    <div className='home-container'>
      <h1>Bienvenido A Nuestra Tienda De Videojuegos</h1>
      {/* Pasamos handleLogin a los componentes Login y Registro */}
      <Login handleLogin={handleLogin} />
      <Registro handleLogin={handleLogin} />
    </div>
  );
};

export default Home;
