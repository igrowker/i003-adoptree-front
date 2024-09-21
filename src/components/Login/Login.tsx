import React, { useState } from 'react';
import backgroundImage from '../../assets/Hojas.png';
import logo from '../../assets/AdopLogo.png';
import facebookIcon from '../../assets/facebook.svg';
import instagramIcon from '../../assets/instagram.svg';
import twitterIcon from '../../assets/twitter.svg';
import { Link } from 'react-router-dom'; 
import './Login.css'; 

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <div className="login-image">
        <img src={backgroundImage} alt="Background" />
      </div>
      <div className="login-form">
      <img src={logo} alt="Adoptree Logo" className="logo" />
        <h2>Hola, Bienvenido</h2>
        <p>Inicia sesión.</p>
        <form onSubmit={handleLogin}>
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            placeholder="Contraseña" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />

          <button type="submit" className="login-button">Login</button>
        </form>

        <div className="social-login">
          <p>Registro rápido</p>
          <div className="social-media-icons">
        <img src={facebookIcon} alt="Facebook" className="social-icon" />
        <img src={instagramIcon} alt="Instagram" className="social-icon" />
        <img src={twitterIcon} alt="Twitter" className="social-icon" />
      </div>
        </div>
        <p className="signup-text">
        ¿Todavía no tenés cuenta? <Link to="/auth/registro">Registrate</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;