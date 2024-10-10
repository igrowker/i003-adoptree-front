import React, { useState } from 'react';
import backgroundImage from '../../assets/Mandarinas.jpg';
import { useNavigate } from 'react-router-dom';
import './Donar.css';
import { useLanguage } from '../../LanguageContext/LanguageContext';  // Importar contexto de idioma

const Donar: React.FC = () => {
  const { language } = useLanguage();  // Usar el idioma del contexto
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    monto: '',
    mensaje: '',
  });

  const [selectedMonto, setSelectedMonto] = useState<number | null>(100); // Para controlar el monto seleccionado
  const [isCustom, setIsCustom] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
      const opciones = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      };

      const response = await fetch(
        'http://localhost:3000/donaciones',
        opciones
      );
      if (!response.ok) throw new Error('Error en la petición');

      navigate('/');
      alert(language === 'es' ? '¡Gracias por tu donación!' : 'Thank you for your donation!');
    } catch (err) {
      console.error(err);
      alert(language === 'es' ? 'Hubo un error al procesar tu donación.' : 'There was an error processing your donation.');
    }
  };

  return (
    <div className="donar-container mt-[150px]">
      <div className="donar-image shadow-lg">
        <img src={backgroundImage} alt="Background" />
      </div>
      <div className="donar-form shadow-lg">
        <h2 className="mb-[30px] text-[1.9rem] font-[900]">
          {language === 'es' ? 'Haz tu donación 🌱' : 'Make your donation 🌱'}
        </h2>
        <p className="text-[14px]">
          {language === 'es' ? 'Tu apoyo es muy valioso para nosotros.' : 'Your support is very valuable to us.'}
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nombre"
            placeholder={language === 'es' ? 'Nombre completo' : 'Full name'}
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
          <div className="monto-options">
            <label>{language === 'es' ? 'Me gustaría donar:' : 'I would like to donate:'}</label>
            <div className="monto-buttons">
              <button
                type="button"
                className={selectedMonto === 100 ? 'selected' : ''}
                onClick={() => handleMontoClick(100)}
              >
                $1000
              </button>
              <button
                type="button"
                className={selectedMonto === 50 ? 'selected' : ''}
                onClick={() => handleMontoClick(50)}
              >
                $3000
              </button>
              <button
                type="button"
                className={selectedMonto === 25 ? 'selected' : ''}
                onClick={() => handleMontoClick(25)}
              >
                $5000
              </button>
              <button
                type="button"
                className={isCustom ? 'selected' : ''}
                onClick={() => setIsCustom(true)}
              >
                {language === 'es' ? 'Otro' : 'Other'}
              </button>
            </div>
          </div>

          {isCustom && (
            <input
              type="number"
              name="monto"
              placeholder={language === 'es' ? 'Ingresa un monto' : 'Enter an amount'}
              value={formData.monto}
              onChange={handleCustomMontoChange}
              required
            />
          )}

          <textarea
            name="mensaje"
            placeholder={language === 'es' ? 'Mensaje opcional' : 'Optional message'}
            value={formData.mensaje}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="text-white bg-gradient-to-r from-green-500 to-green-600 rounded-[10px] shadow-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform"
          >
            {language === 'es' ? 'Donar' : 'Donate'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Donar;
