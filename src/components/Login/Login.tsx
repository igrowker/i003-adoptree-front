import React, { useState, useEffect } from 'react';
import backgroundImage from '../../assets/citricos.jpg';
import logo from '../../assets/Header.png';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';
import { validateForm } from '../../helpers/validateForm';
import { ErrorsLogin, FormDataLogin } from '../../types/types';
import { login, setAuthenticated } from '../../store/features/userSlice';
import './Login.css';
import { CredentialResponse } from '@react-oauth/google';

const Login: React.FC = () => {
  const [formData, setFormData] = useState<FormDataLogin>({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<ErrorsLogin>({
    email: '',
    password: '',
  });
  const [attempts, setAttempts] = useState<number>(0);
  const [isBlocked, setIsBlocked] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const MAX_ATTEMPTS = 3; // Máximo de intentos permitidos
  const BLOCK_TIME = 30; // Tiempo de bloqueo en segundos

  useEffect(() => {
    // Cargar el estado inicial desde localStorage
    const storedAttempts = localStorage.getItem('loginAttempts');
    const storedBlockState = localStorage.getItem('isBlocked');
    const storedTimer = localStorage.getItem('timer');

    if (storedAttempts) {
      setAttempts(parseInt(storedAttempts));
    }
    if (storedBlockState) {
      setIsBlocked(JSON.parse(storedBlockState));
    }
    if (storedTimer) {
      setTimer(parseInt(storedTimer));
    }
  }, []);

  useEffect(() => {
    // Actualizar localStorage cada vez que cambien estos valores
    localStorage.setItem('loginAttempts', attempts.toString());
    localStorage.setItem('isBlocked', JSON.stringify(isBlocked));
    localStorage.setItem('timer', timer.toString());

    if (isBlocked && timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(countdown);
            setIsBlocked(false);
            setAttempts(0); // Reiniciar intentos al desbloquear
            localStorage.removeItem('loginAttempts'); // Limpiar los intentos
            localStorage.removeItem('isBlocked'); // Limpiar estado de bloqueo
            localStorage.removeItem('timer'); // Limpiar temporizador
            return 0; // Asegurarse de que el temporizador se reinicie
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(countdown);
    }
  }, [attempts, isBlocked, timer]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    validateAndUpdateErrors(name, value);
  };

  const validateAndUpdateErrors = (fieldName: string, value: string) => {
    const fieldError = validateForm(fieldName, value);

    setErrors({
      ...errors,
      [fieldName]: fieldError,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isBlocked) {
      alert('Demasiados intentos fallidos. Inténtalo de nuevo más tarde.');
      return;
    }

    try {
      const isFormValid = true; // Puedes agregar tu lógica de validación

      if (isFormValid) {
        const opciones = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        };

        const response = await fetch('http://localhost:3000/auth/login', opciones);

        if (!response.ok) {
          const currentAttempts = attempts + 1;
          setAttempts(currentAttempts);

          if (currentAttempts >= MAX_ATTEMPTS) {
            setIsBlocked(true);
            setTimer(BLOCK_TIME); // Establecer temporizador a 30 segundos
            alert('Has alcanzado el número máximo de intentos. Estás bloqueado por 30 segundos.');
          } else {
            alert('Credenciales incorrectas. Inténtalo de nuevo.');
          }
          return;
        }

        const data = await response.json();
        localStorage.setItem('token', data.token);
        dispatch(login(data.user));
        dispatch(setAuthenticated());
        navigate('/');

        setFormData({
          email: '',
          password: '',
        });
      } else {
        alert('Todos los campos son obligatorios');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSuccess = async (credentialResponse: CredentialResponse) => {
    const { credential } = credentialResponse;

    try {
      const res = await fetch('http://localhost:3000/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ credential }),
      });

      if (res.ok) {
        const data = await res.json();
        localStorage.setItem('token', data.token);
        dispatch(login(data.user));
        dispatch(setAuthenticated());
        navigate('/');
      } else {
        const errorData = await res.json();
        console.error('Error de autenticación:', errorData);
      }
    } catch (error) {
      console.error('Error durante la autenticación:', error);
    }
  };

  const handleFailure = (error: string) => {
    console.error('Error de inicio de sesión con Google:', error);
  };

  return (
    <div className="login-container p-[50px]">
      <div className="login-image shadow-sm">
        <img src={backgroundImage} alt="Background" />
      </div>
      <div className="login-form shadow-sm">
        <a href="/">
          <img src={logo} alt="Adoptree Logo" className="logo w-[115px] mb-[30px]" />
        </a>
        <h2 className="mb-[30px] font-[900]">
          Hola, <br /> Bienvenido de nuevo
        </h2>
        <p className="text-[14px]">Inicie sesión para gestionar su cuenta.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <button
            type="submit"
            className="text-white bg-gradient-to-r from-green-500 to-green-600 rounded-[10px] shadow-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform"
            disabled={isBlocked}
          >
            {isBlocked ? `Bloqueado (${timer})` : 'Inicia sesión'}
          </button>
        </form>

        <p className="line-text mt-[20px]">o también</p>

        <GoogleSignIn onSuccess={handleSuccess} onFailure={handleFailure} />

        <p className="signup-text text-[14px] mt-[20px]">
          ¿Todavía no tenés cuenta?{' '}
          <Link className="font-[500]" to="/auth/register">
            Registrate
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
