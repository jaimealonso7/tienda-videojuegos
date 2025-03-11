import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Registro.css';

function Registro(props) {
  const navigate = useNavigate();  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Verifica la prop en consola
  console.log("handleLogin prop en Registro:", props.handleLogin);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8081/api/auth/register', {
      email: email,  
      password: password,
    })
    .then((response) => {
      console.log('Respuesta del servidor:', response);

      if (response.status === 200) {
        console.log('Usuario registrado con éxito');
        const successMessage = response.data;  // El mensaje recibido
        
        // Guardamos el mensaje en localStorage para pruebas
        localStorage.setItem('user', JSON.stringify({ message: successMessage }));
        console.log('Mensaje guardado en localStorage:', localStorage.getItem('user'));

        // Verificar que handleLogin es una función antes de llamarla
        if (typeof props.handleLogin === 'function') {
          // Llamar handleLogin solo cuando la respuesta sea exitosa
          props.handleLogin({ message: successMessage });
        } else {
          //console.error('handleLogin no es una función');
        }

        // Redirigir a la página de juegos
        navigate('/juegos');
      } else {
        console.error('Error al registrar usuario: respuesta inesperada', response);
        setErrorMessage('Error al registrar usuario');
      }
    })
    .catch((error) => {
      console.error('Error en la solicitud de registro:', error); // Imprime el error de la solicitud
      setErrorMessage('Error al registrar usuario');
    });
  };

  return (
    <div className="container">
      <div className="contenedor-global">
        <h3>REGISTRATE</h3>
        <form onSubmit={handleSubmit} className="login-form">
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Contraseña:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit">REGISTRARSE</button>
        </form>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* Mostrar el mensaje de error */}
      </div>
    </div>
  );
}

export default Registro;
