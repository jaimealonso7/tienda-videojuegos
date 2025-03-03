import React, { useState } from 'react'
import './Registro.css'

function Registro(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    // No se recarga la página
    e.preventDefault();
    props.handleLogin({ email, password });
  }

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
      </div>
    </div>
  );

}

export default Registro