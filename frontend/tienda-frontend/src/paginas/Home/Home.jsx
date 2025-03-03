import React from 'react'
import Login from '../../componentes/Login/Login'
import Registro from '../../componentes/Registro/Registro'

import './Home.css'
const Home = () => {
  return (
    <div className='home-container'>
      
      <h1>Bienvenido A Nuestra Tienda De Videojuegos</h1>
      {/* Aquí renderizamos el componente Login dentro de Home */}
      <Login />
      <Registro />

      {/* Puedes agregar más contenido aquí */}

    </div>

  )
}

export default Home