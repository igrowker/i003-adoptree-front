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
  const [loginError, setLoginError] = useState<string>(''); // mensaje de error
  const [attemptsLeft, setAttemptsLeft] = useState<number>(3); // intentos restantes
  const [isBlocked, setIsBlocked] = useState<boolean>(false); // estado de bloqueo
  const [timeLeft, setTimeLeft] = useState<number>(30); // temporizador de 30 segundos

  const BACK_URL = import.meta.env.VITE_BACK_URL;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Temporizador para desbloquear el formulario
  useEffect(() => {
    if (isBlocked && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      if (timeLeft === 1) { // cambiado de 0 a 1 para evitar el problema
        // al llegar el tiempo a 0 se desbloquea el login
        setIsBlocked(false);
        setAttemptsLeft(3); // Restablecer intentos a 3
        setLoginError(''); // Limpiar mensaje de error
        setTimeLeft(30); // Restablecer temporizador
      }

      return () => clearInterval(timer);
    }
  }, [isBlocked, timeLeft]);

  // restablece el estado al desbloquear la cuenta
  useEffect(() => {
    if (!isBlocked) {
      setLoginError(''); // Limpiar mensaje de error
      setAttemptsLeft(3); // Restablecer intentos fallidos a 3
    }
  }, [isBlocked]);

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
      // muesta solo el mensaje si esta bloqueado
      setLoginError(`La cuenta está bloqueada. Espera ${timeLeft} segundos para intentar nuevamente.`);
      return;
    }

    try {
      const isFormValid = true; //logica segun las validaciones

      if (isFormValid) {
        const opciones = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        };

        const response = await fetch(`${BACK_URL}/auth/login`, opciones);

        if (!response.ok) {
          const remainingAttempts = attemptsLeft - 1;
          setAttemptsLeft(remainingAttempts);

          if (remainingAttempts === 0) {
            setIsBlocked(true); // Bloquear la cuenta si se agotaron los intentos
            setLoginError('Cuenta bloqueada. Has alcanzado el número máximo de intentos fallidos.');
          } else {
            setLoginError(`Credenciales incorrectas. Te quedan ${remainingAttempts} intento(s).`);
          }

          throw new Error('Error en la petición');
        }

        const data = await response.json();
        localStorage.setItem('token', data.token);

        dispatch(login(data.user));
        dispatch(setAuthenticated());
        navigate('/');
        setLoginError(''); // Limpiar el mensaje de error al iniciar sesión correctamente
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
      const res = await fetch(`${BACK_URL}/auth/google`, {
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
          <img
            src={logo}
            alt="Adoptree Logo"
            className="logo w-[115px] mb-[30px]"
          />
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

          {loginError && !isBlocked && (
            <p className="text-red-600 mt-2">{loginError}</p> // Mostrar error en rojo solo si no está bloqueado
          )}

          {isBlocked && timeLeft > 0 && (
            <p className="text-red-600 mt-2">
              Cuenta bloqueada. Espera {timeLeft} segundos antes de volver a intentar.
            </p> // Mostrar contador si está bloqueado
          )}

          <button
            type="submit"
            className="text-white bg-gradient-to-r from-green-500 to-green-600 rounded-[10px] shadow-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform"
            disabled={isBlocked} // Deshabilitar el botón si está bloqueado
          >
            Inicia sesión
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
