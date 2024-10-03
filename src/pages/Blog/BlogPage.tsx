import React from 'react';
import './BlogPage.css';
import Reforestation from '../Blog/reforestation.jpg';
import { Calendar, Tag, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom'; // Importa Link para manejar la navegación

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      title: 'Actualización del Proyecto',
      date: 'Septiembre 20, 2024',
      content:
        'Este mes hemos logrado un progreso significativo en la implementación de nuevas prácticas sostenibles en la finca. Hemos introducido nuevas especies de árboles autóctonos...',
      category: 'Actualización del Proyecto',
      link: '/Blog1', // Ruta correspondiente
    },
    {
      title: 'Importancia de la Reforestación',
      date: 'Agosto 15, 2024',
      content:
        'La reforestación es clave para combatir el cambio climático y preservar la biodiversidad. En nuestro proyecto, estamos comprometidos con la plantación de árboles que ayudan a regenerar ecosistemas locales...',
      category: 'Conservación Ambiental',
      link: '/Blog2', // Ruta correspondiente
    },
    {
      title: 'Entrevista con el Dr. Juan Pérez',
      date: 'Julio 10, 2024',
      content:
        'En esta entrevista, el Dr. Juan Pérez nos habla sobre la importancia de las prácticas agrícolas sostenibles y cómo afectan al medio ambiente a largo plazo...',
      category: 'Entrevistas',
      link: '/Blog3', // Ruta correspondiente
    },
  ];

  return (
    <div className="min-h-screen py-40 px-4 sm:px-6 lg:px-[200px]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 space-y-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src={Reforestation}
              alt="Evolución del proyecto"
              className="w-full md:w-1/2 h-64 object-cover rounded-tl-[100px] shadow-lg"
            />
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">
                Evolución del proyecto
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Nuestro proyecto ha evolucionado significativamente desde su
                inicio. Hemos implementado prácticas sostenibles, introducido
                nuevas especies y trabajado en estrecha colaboración con la
                comunidad local para crear un impacto positivo duradero. Cada
                paso que damos nos acerca más a nuestro objetivo de un futuro
                más verde y sostenible.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <img
              src="https://e7.pngegg.com/pngimages/768/79/png-clipart-agriculture-agronomy-agricultural-science-crop-organization-agriculture-people-harvest.png"
              alt="Importancia de la reforestación"
              className="w-full md:w-1/2 h-64 object-cover rounded-br-[100px] shadow-lg"
            />
            <div className="w-full md:w-1/2 text-right">
              <h2 className="text-3xl font-bold mb-4">
                Importancia de la reforestación
              </h2>
              <p className="text-gray-600 leading-relaxed">
                La reforestación juega un papel crucial en la lucha contra el
                cambio climático y la preservación de la biodiversidad. Nuestros
                esfuerzos se centran en plantar especies nativas que restauran
                el equilibrio ecológico y proporcionan beneficios a largo plazo
                para el medio ambiente y las comunidades locales. Cada árbol
                plantado es un paso hacia un futuro más sostenible.
              </p>
            </div>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-center mb-12">
          Publicaciones Recientes
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

                {/* Envolver el botón en un Link sin modificar el diseño */}
                <Link
                  to={post.link}
                  className="flex items-center justify-between rounded-[10px] bg-[#4BAF47] text-white hover:bg-[#3B8838] 4xl:text-[20px] px-4 py-2"
                >
                  Leer más
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
