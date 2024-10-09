import React from 'react';
import './BlogPage.css';
import Reforestation from '../Blog/reforestation.jpg';
import { Calendar, Tag, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../LanguageContext/LanguageContext'; // Importar useLanguage

const BlogPage: React.FC = () => {
  const { language } = useLanguage(); // Utilizar el hook de idioma

  // Definir las publicaciones del blog para cada idioma
  const blogPosts = language === 'es' ? [
    {
      title: 'Actualización del Proyecto',
      date: 'Septiembre 20, 2024',
      content: 'Este mes hemos logrado un progreso significativo en la implementación de nuevas prácticas sostenibles en la finca...',
      category: 'Actualización del Proyecto',
      link: '/Blog1',
    },
    {
      title: 'Importancia de la Reforestación',
      date: 'Agosto 15, 2024',
      content: 'La reforestación es clave para combatir el cambio climático y preservar la biodiversidad. En nuestro proyecto...',
      category: 'Conservación Ambiental',
      link: '/Blog2',
    },
    {
      title: 'Entrevista con el Dr. Juan Pérez',
      date: 'Julio 10, 2024',
      content: 'En esta entrevista, el Dr. Juan Pérez nos habla sobre la importancia de las prácticas agrícolas sostenibles...',
      category: 'Entrevistas',
      link: '/Blog3',
    },
  ] : [
    {
      title: 'Project Update',
      date: 'September 20, 2024',
      content: 'This month we have made significant progress in implementing new sustainable practices on the farm...',
      category: 'Project Update',
      link: '/Blog1',
    },
    {
      title: 'Importance of Reforestation',
      date: 'August 15, 2024',
      content: 'Reforestation is key to combating climate change and preserving biodiversity. In our project...',
      category: 'Environmental Conservation',
      link: '/Blog2',
    },
    {
      title: 'Interview with Dr. Juan Pérez',
      date: 'July 10, 2024',
      content: 'In this interview, Dr. Juan Pérez talks to us about the importance of sustainable agricultural practices...',
      category: 'Interviews',
      link: '/Blog3',
    },
  ];

  return (
    <div className="min-h-screen py-40 px-4 sm:px-6 lg:px-[200px]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 space-y-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src={Reforestation}
              alt={language === 'es' ? 'Evolución del proyecto' : 'Project Evolution'}
              className="w-full md:w-1/2 h-64 object-cover rounded-tl-[100px] shadow-lg"
            />
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-[800] mb-4">
                {language === 'es' ? 'Evolución del proyecto' : 'Project Evolution'}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {language === 'es' 
                  ? 'Nuestro proyecto ha evolucionado significativamente desde su inicio. Hemos implementado prácticas sostenibles...'
                  : 'Our project has evolved significantly since its inception. We have implemented sustainable practices...'}
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <img
              src="https://e7.pngegg.com/pngimages/768/79/png-clipart-agriculture-agronomy-agricultural-science-crop-organization-agriculture-people-harvest.png"
              alt={language === 'es' ? 'Importancia de la reforestación' : 'Importance of Reforestation'}
              className="w-full md:w-1/2 h-64 object-cover rounded-br-[100px] shadow-lg"
            />
            <div className="w-full md:w-1/2 text-right">
              <h2 className="text-3xl font-[800] mb-4">
                {language === 'es' ? 'Importancia de la reforestación' : 'Importance of Reforestation'}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {language === 'es' 
                  ? 'La reforestación juega un papel crucial en la lucha contra el cambio climático y la preservación de la biodiversidad...'
                  : 'Reforestation plays a crucial role in combating climate change and preserving biodiversity...'}
              </p>
            </div>
          </div>
        </div>

        <h1 className="text-4xl font-[800] text-center mb-12">
          {language === 'es' ? 'Publicaciones Recientes' : 'Recent Posts'}
        </h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Tag className="w-4 h-4 mr-2" />
                  <span>{post.category}</span>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.content}
                </p>
                <Link
                  to={post.link}
                  className="flex items-center justify-between rounded-[10px] bg-[#4BAF47] text-white hover:bg-[#3B8838] 4xl:text-[20px] px-4 py-2"
                >
                  {language === 'es' ? 'Leer más' : 'Read more'}
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

