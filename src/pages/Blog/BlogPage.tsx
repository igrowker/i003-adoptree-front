import React from 'react';
import './BlogPage.css';
import Reforestation from '../Blog/reforestation.jpg';
import Equipo from '../Blog/equipo.jpg';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      title: 'Actualización del Proyecto - Septiembre 2024',
      date: 'Septiembre 20, 2024',
      content:
        'Este mes hemos logrado un progreso significativo en la implementación de nuevas prácticas sostenibles en la finca. Hemos introducido nuevas especies de árboles autóctonos...',
      category: 'Actualización del Proyecto',
    },
    {
      title: 'Importancia de la Reforestación',
      date: 'Agosto 15, 2024',
      content:
        'La reforestación es clave para combatir el cambio climático y preservar la biodiversidad. En nuestro proyecto, estamos comprometidos con la plantación de árboles que ayudan a regenerar ecosistemas locales...',
      category: 'Conservación Ambiental',
    },
    {
      title: 'Entrevista con el Dr. Juan Pérez',
      date: 'Julio 10, 2024',
      content:
        'En esta entrevista, el Dr. Juan Pérez nos habla sobre la importancia de las prácticas agrícolas sostenibles y cómo afectan al medio ambiente a largo plazo...',
      category: 'Entrevistas',
    },
  ];

  return (
    <div className="blog-page-container">
      <div className="project-evolution-container">
        <img
          src={Reforestation}
          alt="Evolución del proyecto"
          className="project-evolution-image-left"
        />
        <div className="project-evolution-content">
          <h2>Evolución del proyecto</h2>
          <p className="p-left">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
            necessitatibus asperiores sunt dolores vero et, voluptates qui
            quisquam quos laudantium quibusdam quod consectetur iusto pariatur
            earum quo quae nam unde!
          </p>
        </div>
      </div>

      <div className="project-evolution-container">
        <div className="project-evolution-content">
          <h2>Importancia de la reforestación</h2>
          <p className="p-right">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet cum
            explicabo, ut a quis consequatur error velit! Laboriosam ut
            perferendis illo dicta voluptas. Ut reprehenderit excepturi numquam
            animi quibusdam autem.
          </p>
        </div>
        <img
          src={Equipo}
          alt="Importancia de la reforestación"
          className="project-evolution-image-right"
        />
      </div>

      <h1>Publicaciones</h1>

      <div className="blog-posts-container">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-post">
            <h2>{post.title}</h2>
            <p className="blog-post-date">{post.date}</p>
            <p className="blog-post-category">{post.category}</p>
            <p>{post.content}</p>
            <button className="read-more-button">Leer más</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
