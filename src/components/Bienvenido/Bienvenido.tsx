import React from 'react';
import Button from '@mui/material/Button'; // Para usar el botón con MUI
import farmerImage from '../../assets/farmer.jpg'; // es la ruta de la img principal de fondo
import tituloPrincipal from '../../assets/titulo.png' //img del titulo Portada con diseño en formato png 
import adoptionImage from '../../assets/adopcion.jpg'//img card 1
import compraImage from '../../assets/compra.jpg'//img card 2
import disfrutaImage from '../../assets/disfruta.jpg'//img card 3

import "./Bienvenido.css" //estilos personalizados para el componente 

const Bienvenido: React.FC = () => {
  return (
        <section className="relative bg-cover bg-center h-screen flex items-center justify-center md:mb-20" style={{ backgroundImage: `url(${farmerImage})` }}>
      <div className="absolute inset-0 bg-black opacity-40"></div> {/* Filtro oscuro sobre la imagen */}

      <div className="relative z-10 text-center text-white px-4 ">

        
        <p className="text-lg mb-5 flex">BIENVENIDO A ADOPTREE</p>
        <img src={tituloPrincipal} alt="titutlo" /> {/* IMG de la portada ya que es una tipografia con dibujo */}
        
        <div className=' w-1/2 flex flex-col'>
        <p className="text-lg md:text-xl mb-6  anchoPersonalizado tipografiaPersonalizada">
          Descubre cómo puedes adoptar un árbol cítrico, apoyar a productores locales y recibir fruta fresca en casa. <br />
          ¡Únete a Adoptree!
        </p>
        <Button variant="contained" color="success" size="large" className='md:w-1/2 '>
          Descubre cómo
        </Button>
        </div>

            
        
      </div>

        {/*SECCION DE CARDS*/}
        <div className="absolute bottom-[-80px] left-0 right-0 hidden md:flex justify-center z-20 ">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-0">
                    {/* Primera tarjeta */}
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center ">
                        <p className="text-orange-400 font-medium tipografiaCards">Adopta</p>
                        <h3 className="text-xl font-semibold mb-4">Naranjos en adopción</h3>
                        <img src={adoptionImage} alt="Naranjos en adopción" className="h-24 w-24 mx-auto rounded-full mb-4" />
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <p className="text-orange-400 font-medium tipografiaCards">Compra</p>
                        <h3 className="text-xl font-semibold mb-4">Naranjos en adopción</h3>
                        <img src={compraImage} alt="Naranjos en adopción" className="h-24 w-24 mx-auto rounded-full mb-4" />
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <p className="text-orange-400 font-medium tipografiaCards">Disfruta</p>
                        <h3 className="text-xl font-semibold mb-4">Naranjos en adopción</h3>
                        <img src={disfrutaImage} alt="Naranjos en adopción" className="h-24 w-24 mx-auto rounded-full mb-4" />
                    </div>
                </div>
            </div>
    </section>
  );
};

export default Bienvenido;
