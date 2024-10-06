import React, { useState } from 'react';
import donacionesImage from '../../assets/Donaciones.png';
import { useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Donaciones: React.FC = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState<'es' | 'en'>('es');

  const toggleLanguage = (lang: 'es' | 'en') => {
    setLanguage(lang);
  };

  const content: Record<'es' | 'en', any> = {
    es: {
      donations: 'Donaciones',
      title: '¿Nos ayudarías a crecer con una donación?',
      description1:
        'Con tu donación, nos ayudas a seguir adelante con nuestros proyectos de sostenibilidad y apoyo a los agricultores locales. Cada aporte, por pequeño que sea, hace una gran diferencia y nos permite crecer y expandir nuestro impacto en la comunidad.',
      description2:
        'Tu generosidad nos impulsa a innovar en prácticas agrícolas sostenibles, mejorar la calidad de vida de los agricultores y promover una alimentación más saludable y respetuosa con el medio ambiente.',
      donateHere: 'Dona aquí',
    },
    en: {
      donations: 'Donations',
      title: 'Would you help us grow with a donation?',
      description1:
        'With your donation, you help us move forward with our sustainability projects and support for local farmers. Every contribution, no matter how small, makes a big difference and allows us to grow and expand our impact on the community.',
      description2:
        'Your generosity drives us to innovate in sustainable farming practices, improve the quality of life for farmers, and promote healthier, more environmentally friendly food.',
      donateHere: 'Donate here',
    },
  };

  const {
    donations,
    title,
    description1,
    description2,
    donateHere
  } = content[language];

  const handleDonationClick = () => {
    navigate('/donar');
  };

  return (
    <section className="bg-[#f8f7f0] py-[75px]">
      <div className="container mx-auto px-8 max-w-5xl bg-[#f8f7f0]">
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => toggleLanguage('es')}
            className={`px-4 py-2 rounded-[10px] ${
              language === 'es' ? 'bg-[#4BAF47] text-white' : 'bg-gray-200'
            } transition-colors duration-300`}
          >
            Español
          </button>
          <button
            onClick={() => toggleLanguage('en')}
            className={`px-4 py-2 rounded-[10px] ${
              language === 'en' ? 'bg-[#4BAF47] text-white' : 'bg-gray-200'
            } transition-colors duration-300`}
          >
            English
          </button>
        </div>

        <div className="text-center mb-12">
          <span className="text-orange-500 fuentePersonalizada fuente">
            {donations}
          </span>
          <h2 className="text-3xl font-[800] text-gray-900 mb-4">{title}</h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-start gap-8 md:gap-12">
          <div className="md:w-[30%]">
            <img
              src={donacionesImage}
              alt="Donaciones"
              className="rounded-lg shadow-xl w-full object-cover transition-transform duration-300"
            />
          </div>

          <div className="md:w-3/5 space-y-6">
            <p className="text-gray-700 leading-relaxed">{description1}</p>
            <p className="text-gray-700 leading-relaxed">{description2}</p>

            <button
              onClick={handleDonationClick}
              className="inline-flex items-center px-6 py-3 font-semibold text-white bg-gradient-to-r from-green-500 to-green-600 rounded-[10px] shadow-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:-translate-y-1"
            >
              <Heart className="mr-2" size={20} />
              {donateHere}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donaciones;