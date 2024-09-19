import React, { useState } from 'react';
import backgroundImage from '../../assets/ArbolCuenta.png';
import logo from '../../assets/AdopLogo.png';
import facebookIcon from '../../assets/facebook.svg';
import instagramIcon from '../../assets/instagram.svg';
import twitterIcon from '../../assets/twitter.svg';
import './Registro.css';  

const Registro: React.FC = () => {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    email: '',
    password: '',
    confirmarPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Formulario enviado');
    if (formData.password !== formData.confirmarPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    console.log('Datos del formulario:', formData);
  };

  return (
    <div className="registro-container">
      <div className="registro-image">
        <img src={backgroundImage} alt="Background" />
      </div>
      <div className="registro-form">
      <img src={logo} alt="Adoptree Logo" className="logo" />
        <h2>Crear una cuenta</h2>
        <p>Completa el formulario para registrarte.</p>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="nombres" 
            placeholder="Nombres" 
            value={formData.nombres} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="text" 
            name="apellidos" 
            placeholder="Apellidos" 
            value={formData.apellidos} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="password" 
            name="password" 
            placeholder="Contraseña" 
            value={formData.password} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="password" 
            name="confirmarPassword" 
            placeholder="Confirmar Contraseña" 
            value={formData.confirmarPassword} 
            onChange={handleChange} 
            required 
          />
          <button type="submit" className="registro-button">Registrar</button>
        </form>

        <div className="social-login">
          <p>Registro rápido</p>
          <div className="social-media-icons">
            <img src={facebookIcon} alt="Facebook" className="social-icon" />
            <img src={instagramIcon} alt="Instagram" className="social-icon" />
            <img src={twitterIcon} alt="Twitter" className="social-icon" />
          </div>
        </div>
        <p className="login-text">
          ¿Ya ténes cuenta? <a href="/login">Inicia sesión</a>
        </p>
      </div>
    </div>
  );
};

export default Registro;
