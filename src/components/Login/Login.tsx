import React from 'react';
import backgroundImage from '../../assets/Hojas.png';
import logo from '../../assets/Header.png';
import google from '../../assets/google-svgrepo-com.svg'

import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import './Login.css';

const Login: React.FC = () => {
  const { email, password, onInputChange } = useForm({
    email: 'maria@mail.com',
    password: '123456',
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="login-container p-[50px]">
      <div className="login-image shadow-sm">
        <img src={backgroundImage} alt="Background" />
      </div>
      <div className="login-form shadow-sm">
        <img src={logo} alt="Adoptree Logo" className="logo w-[115px] mb-[30px]" />
        <h2 className='mb-[30px]'>Hola, <br /> Bienvenido de nuevo</h2>
        <p className='text-[14px]'>Inicie sesión para gestionar su cuenta.</p>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={onInputChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={password}
            onChange={onInputChange}
            required
          />

          <button type="submit" className="bg-[#4BAF47] text-white border-none hover:bg-[#3B8838]">
            Login
          </button>
        </form>

        <p className="line-text mt-[20px]">or</p>

        <div className='flex items-center justify-center gap-3 mb-[40px]'>
          <img className='w-[25px]' src={google} alt="google icon" />
          <span>Iniciar sesión con Google</span>
        </div>

       
        <p className="signup-text text-[14px] mt-[20px]">
          ¿Todavía no tenés cuenta? <Link className='font-[500]' to="/auth/registro">Registrate</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
