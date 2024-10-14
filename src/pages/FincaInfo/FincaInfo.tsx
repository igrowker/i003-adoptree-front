import React from 'react';
import { motion } from 'framer-motion';
import { useGetFincaDataQuery } from '../../store/services/fincaApi';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Arbol, Hacienda } from '../../types/types';
import { Leaf, MapPin, User, Phone, Mail, Award } from 'lucide-react';
import { useLanguage } from '../../LanguageContext/LanguageContext';

const FincaInfo: React.FC = () => {
  const { language } = useLanguage();  // Usar el idioma seleccionado
  const { data: fincaData, isLoading, isError } = useGetFincaDataQuery(1);

  if (isLoading) {
    return (
      <div className="w-full flex justify-center">
        <motion.div
          className="load-row my-[200px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </motion.div>
      </div>
    );
  }

  if (isError) {
    return <div className="text-center text-red-600 p-8">{language === 'es' ? 'Error al cargar los datos. Por favor, intenta de nuevo más tarde.' : 'Error loading data. Please try again later.'}</div>;
  }

  return (
    <div className="max-w-7xl mx-auto my-[130px] px-4 sm:px-6 lg:px-9">
      {fincaData.map((finca: Hacienda) => (
        <motion.div
          key={finca.id}
          className="bg-white shadow-xl rounded-2xl mb-[40px] overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Carrusel de imágenes */}
          <div className="relative h-96">
            <Carousel showThumbs={false} autoPlay infiniteLoop showStatus={false} showArrows={true} className="h-full">
              {finca.images.map((image, index) => (
                <motion.div
                  key={index}
                  className="h-96"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <img src={image} alt={`Imagen ${index + 1} de ${finca.name}`} className="w-full h-full object-cover" />
                </motion.div>
              ))}
            </Carousel>
            <motion.div
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold text-white mb-2">{finca.name}</h2>
              <p className="text-xl text-gray-200 flex items-center">
                <MapPin className="mr-2" size={20} />
                {finca.ubication}
              </p>
            </motion.div>
          </div>

          <div className="p-8">
            {/* Información de prácticas sostenibles */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    staggerChildren: 0.3,
                  },
                },
              }}
            >
              <motion.div className="bg-green-50 p-6 rounded-xl shadow-sm" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                <h3 className="text-2xl font-semibold text-green-700 mb-4 flex items-center">
                  <Leaf className="mr-2" size={24} />
                  {language === 'es' ? 'Prácticas Sostenibles' : 'Sustainable Practices'}
                </h3>
                <p className="text-gray-700">{finca.practicesSustainable}</p>
              </motion.div>
              <motion.div className="bg-green-50 p-6 rounded-xl shadow-sm" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                <h3 className="text-2xl font-semibold text-green-700 mb-4">{language === 'es' ? 'Árboles Disponibles' : 'Available Trees'}</h3>
                <ul className="space-y-2">
                  {finca.arbol.map((tree: Arbol, index: number) => (
                    <li key={index} className="flex justify-between items-center">
                      <span className="text-gray-700">{tree.type}</span>
                      <span className="font-semibold text-green-700">${tree.price}</span>
                      <span className="text-sm text-gray-500">({tree.statusTree})</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div className="bg-green-50 p-6 rounded-xl shadow-sm" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                <h3 className="text-2xl font-semibold text-green-700 mb-4 flex items-center">
                  <User className="mr-2" size={24} />
                  {language === 'es' ? 'Productor' : 'Producer'}
                </h3>
                <p className="text-xl font-medium text-gray-800 mb-2">
                  {finca.productor.nombre} {finca.productor.apellido}
                </p>
                <p className="text-gray-700 mb-4">{finca.productor.especialidad}</p>
                <div className="space-y-2">
                  <p className="flex items-center text-gray-700">
                    <Phone className="mr-2" size={18} />
                    {finca.productor.telefono}
                  </p>
                  <p className="flex items-center text-gray-700">
                    <Mail className="mr-2" size={18} />
                    {finca.productor.email}
                  </p>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold text-green-700 flex items-center mb-2">
                    <Award className="mr-2" size={18} />
                    {language === 'es' ? 'Certificaciones' : 'Certifications'}:
                  </h4>
                  <ul className="list-disc list-inside text-gray-700">
                    {finca.productor.certificaciones.map((cert, idx) => (
                      <li key={idx}>{cert}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FincaInfo;
