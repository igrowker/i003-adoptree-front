import React, { useState } from 'react';
import backgroundImage from '../../assets/citricos.jpg';
import logo from '../../assets/Header.png';
import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
import './Login.css';
import { validateForm } from '../../helpers/validateForm';
import { ErrorsRegister, FormDataRegister } from '../../types/types';

const Login: React.FC = () => {
  const [formData, setFormData] = useState<FormDataRegister>({
    name: '',
    email: '',
    password: '',
    direccionEnvio: '',
    role: 'USER',
    googleId: '', // Opcional
    avatar: null, // Opcional
  });
  const [errors, setErrors] = useState<ErrorsRegister>({
    name: '',
    email: '',
    password: '',
    direccionEnvio: '',
    role: '',
    googleId: '', // Opcional
    avatar: null, // Opcional
  });

  const navigate = useNavigate();

  const BACK_URL = import.meta.env.VITE_BACK_URL;

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
      const isFormValid = true;
      // const newErrors: Partial<ErrorsRegister> = {};
      // for (const field in formData) {
      //   if (!formData[field as keyof FormDataRegister]) {
      //     newErrors[field as keyof ErrorsRegister] = `${field} es requerido.`;
      //     isFormValid = false;
      //   }
      // }

      // const updatedErrors: ErrorsRegister = Object.assign(
      //   {},
      //   { email: '', password: '', name: '', direccionEnvio: '' },
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

        const response = await fetch(`${BACK_URL}/auth/register`, opciones);

        if (!response.ok) {
          // setFailed(true);
          throw new Error('Error en la petición'); // Si la respuesta no es exitosa, lanzamos un error
        }

        const data = await response.json();
        console.log(data);

        setFormData({
          name: '',
          email: '',
          password: '',
          direccionEnvio: '',
          role: '',
          googleId: '',
          avatar: null,
        });
        // setSuccess(true);

        setTimeout(() => {
          navigate('/auth/login');
        }, 1000);
      } else {
        alert('Todos los campos son obligatorios');
      }
    } catch (err) {
      console.log(err);
    }
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
        <h2 className="mb-[30px] font-[900]">Bienvenido 🌱</h2>
        <p className="text-[14px]">
          ¡Regístrate ahora! Es fácil, rápido y totalmente gratis.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="name"
            name="name"
            placeholder="Nombre completo"
            value={formData.name}
            onChange={handleInputChange}
            required
          />

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

          <input
            type="direccionEnvio"
            name="direccionEnvio"
            placeholder="Dirección"
            value={formData.direccionEnvio}
            onChange={handleInputChange}
            required
          />

          <button
            type="submit"
            className="text-white bg-gradient-to-r from-green-500 to-green-600 rounded-[10px] shadow-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform"
          >
            Registrate
          </button>
        </form>

        <p className="signup-text text-[14px] mt-[100px]">
          ¿Ya tenés cuenta?{' '}
          <Link className="font-[500]" to="/auth/login">
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
