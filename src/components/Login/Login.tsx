import React, { useState } from 'react';
import backgroundImage from '../../assets/Hojas.png';
import logo from '../../assets/Header.png';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';
import './Login.css';
import { validateForm } from '../../helpers/validateForm';
import { ErrorsLogin, FormDataLogin } from '../../types/types';
import { login, setAuthenticated } from '../../store/features/userSlice';

const Login: React.FC = () => {
  const [formData, setFormData] = useState<FormDataLogin>({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<ErrorsLogin>({
    email: '',
    password: '',
  });
  const [success, setSuccess] = useState<boolean>(false);
  const [failed, setFailed] = useState<boolean>(false);

  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user.user);
  const navigate = useNavigate();

  // const [userSession, setUserSession] = useState<any>(null);

  // Efecto para obtener datos de localStorage al montar el componente
  // useEffect(() => {

  //   const session = localStorage.getItem("userSession");
  //   setUserSession(session);

  //   if (session) {
  //     router.push("/");
  //   }
  // }, [router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    validateAndUpdateErrors(name, value);
  };

  const validateAndUpdateErrors = (fieldName: string, value: string) => {
    const fieldError = validateForm(fieldName, value); //* Mensaje de error

    setErrors({
      ...errors,
      [fieldName]: fieldError,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      //* Validar que todos los campos obligatorios estén llenos
      let isFormValid = true;
      // const newErrors: Partial<ErrorsLogin> = {};
      // for (const field in formData) {
      //   if (!formData[field as keyof FormDataLogin]) {
      //     newErrors[field as keyof ErrorsLogin] = `${field} es requerido.`;
      //     isFormValid = false;
      //   }
      // }

      // const updatedErrors: ErrorsLogin = Object.assign(
      //   {},
      //   { email: '', password: '', name: '', address: '', phone: '' },
      //   newErrors
      // );

      // setErrors(updatedErrors);

      if (isFormValid) {
        //* HAPPY PATH

        const opciones = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json', // Tipo de contenido que estamos enviando
          },
          body: JSON.stringify(formData), // Convertimos los datos a formato JSON
        };

        const response = await fetch(
          'http://localhost:3000/auth/login',
          opciones
        );

        if (!response.ok) {
          setFailed(true);
          throw new Error('Error en la petición'); // Si la respuesta no es exitosa, lanzamos un error
        }

        const data = await response.json();
        localStorage.setItem('token', data.token);
        setSuccess(true);
        // Redirige al usuario o actualiza el estado de la aplicación
        dispatch(login(data.user));
        dispatch(setAuthenticated());
        navigate('/');

        setFormData({
          email: '',
          password: '',
        });
        setSuccess(true);

        setTimeout(() => {
          // router.push("/");
        }, 1000);
      } else {
        alert('Todos los campos son obligatorios');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSuccess = async (credentialResponse: any) => {
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
        console.log(data);
        localStorage.setItem('token', data.token);
        setSuccess(true);
        // Redirige al usuario o actualiza el estado de la aplicación
        dispatch(login(data.user));
        dispatch(setAuthenticated());
        navigate('/');
      } else {
        const errorData = await res.json();
        console.error('Error de autenticación:', errorData);
        // Muestra un mensaje de error al usuario
      }
    } catch (error) {
      console.error('Error durante la autenticación:', error);
      // Muestra un mensaje de error al usuario
    }
  };

  const handleFailure = (error: any) => {
    console.error('Error de inicio de sesión con Google:', error);
    // Muestra un mensaje de error al usuario
  };

  return (
    <div className="login-container p-[50px]">
      <div className="login-image shadow-sm">
        <img src={backgroundImage} alt="Background" />
      </div>
      <div className="login-form shadow-sm">
        <img
          src={logo}
          alt="Adoptree Logo"
          className="logo w-[115px] mb-[30px]"
        />
        <h2 className="mb-[30px]">
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
            className="bg-[#4BAF47] text-white border-none hover:bg-[#3B8838]"
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
