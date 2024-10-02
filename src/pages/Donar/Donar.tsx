import React, { useState } from 'react';
import backgroundImage from '../../assets/Hojas.png';
import logo from '../../assets/Header.png';
import './Donar.css'; 
import { Link, useNavigate } from 'react-router-dom';

const Donar: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    monto: '',
    mensaje: '',
  });

  const [selectedMonto, setSelectedMonto] = useState<number | null>(100); // Para controlar el monto seleccionado
  const [isCustom, setIsCustom] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleMontoClick = (monto: number) => {
    setSelectedMonto(monto);
    setIsCustom(false);
    setFormData({
      ...formData,
      monto: monto.toString(),
    });
  };

  const handleCustomMontoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedMonto(null);
    setIsCustom(true);
    setFormData({
      ...formData,
      monto: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      // Aquí se puede hacer la lógica de envío del formulario
      const opciones = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      };

      const response = await fetch('http://localhost:3000/donaciones', opciones);
      if (!response.ok) throw new Error('Error en la petición');

      // Puedes redirigir a otra página o mostrar un mensaje de éxito
      navigate('/');
      alert('Gracias por tu donación!');

    } catch (err) {
      console.error(err);
      alert('Hubo un error al procesar tu donación.');
    }
  };

  return (
    <div className="donar-container p-[50px]">
      <div className="donar-image shadow-sm">
        <img src={backgroundImage} alt="Background" />
      </div>
      <div className="donar-form shadow-sm">
        <img src={logo} alt="Adoptree Logo" className="logo w-[115px] mb-[30px]" />
        <h2 className="mb-[30px]">Haz tu donación 🌱</h2>
        <p className="text-[14px]">Tu apoyo es muy valioso para nosotros.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre completo"
            value={formData.nombre}
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
          {/* Montos Predefinidos */}
          <div className="monto-options">
            <label>Me gustaria donar:</label>
            <div className="monto-buttons">
              <button
                type="button"
                className={selectedMonto === 100 ? 'selected' : ''}
                onClick={() => handleMontoClick(100)}
              >
                $100
              </button>
              <button
                type="button"
                className={selectedMonto === 50 ? 'selected' : ''}
                onClick={() => handleMontoClick(50)}
              >
                $50
              </button>
              <button
                type="button"
                className={selectedMonto === 25 ? 'selected' : ''}
                onClick={() => handleMontoClick(25)}
              >
                $25
              </button>
              <button
                type="button"
                className={isCustom ? 'selected' : ''}
                onClick={() => setIsCustom(true)}
              >
                Otro
              </button>
            </div>
          </div>

          {/* Campo para monto personalizado */}
          {isCustom && (
            <input
              type="number"
              name="monto"
              placeholder="Ingresa un monto"
              value={formData.monto}
              onChange={handleCustomMontoChange}
              required
            />
          )}

          <textarea
            name="mensaje"
            placeholder="Mensaje opcional"
            value={formData.mensaje}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="bg-[#4BAF47] text-white border-none hover:bg-[#3B8838]"
          >
            Donar
          </button>
        </form>
        <p className="signup-text text-[14px] mt-[20px]">
          ¿No tienes cuenta?{' '}
          <Link className="font-[500]" to="/auth/register">
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Donar;
