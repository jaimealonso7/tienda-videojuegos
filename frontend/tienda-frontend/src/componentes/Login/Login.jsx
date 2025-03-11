// Login.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import './Login.css';

function Login({ handleLogin }) {
  const navigate = useNavigate();  // Inicializamos useNavigate
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Formulario enviado con los siguientes datos:');
    console.log({
      email,
      password
    });

    // Enviar la solicitud de login al backend
    axios
      .post(
        'http://localhost:8081/api/auth/login',
        {
          email,
          password
        },
        {
          withCredentials: true
        }
      )
      .then((response) => {
        const userInfo = {
          token: response.data.token,
          email: response.data.email
        };

        // Llamamos a handleLogin correctamente
        if (handleLogin && typeof handleLogin === 'function') {
          handleLogin(userInfo);
        }

        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(userInfo));

        // Redirigir a la página de juegos después de iniciar sesión
        navigate('/juegos');  // Redirige a la página de juegos
      })
      .catch((error) => {
        if (error.response) {
          setErrorMessage(
            'Las credenciales son incorrectas. Verifica tu email y contraseña.'
          );
        } else if (error.request) {
          setErrorMessage('Error de conexión. Intenta más tarde.');
        } else {
          console.log('Detalles del error desconocido:', error.message);
          setErrorMessage('Ocurrió un error inesperado.');
        }
      });
  };

  return (
    <div className="container">
      <div className="contenedor-global">
        <h3>INICIA SESIÓN</h3>
        <form onSubmit={handleSubmit} className="login-form">
          <label>
            Email:
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              name="email"
            />
          </label>
          <label>
            Contraseña:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              name="password"
            />
          </label>
          <button type="submit">Iniciar sesión</button>
        </form>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </div>
    </div>
  );
}

export default Login;
