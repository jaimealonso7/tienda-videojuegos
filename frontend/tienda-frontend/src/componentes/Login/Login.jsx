import React, {useState} from 'react'
import './Login.css'
function Login(props) {

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
        <h3>INICIA SESIÓN</h3>
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
          <button type="submit">Iniciar sesión</button>
        </form>
      </div>
    </div>
  );
}

export default Login