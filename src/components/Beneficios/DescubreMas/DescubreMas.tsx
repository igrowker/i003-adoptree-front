import React from 'react';
import refrescanteImg from './refrescante.jpg'; // Asegúrate de que la ruta es correcta
import soporteImg from './soporte.jpg';         // Asegúrate de que la ruta es correcta
import sosteniendoImg from './sosteniendo.jpg'; // Asegúrate de que la ruta es correcta

const DescubreMas: React.FC = () => {
    // Función para manejar la compra de un árbol
    const handleBuyTree = () => {
        alert('¡Gracias por comprar uno de nuestros árboles! Tu apoyo es invaluable.');
    };

    // Función para manejar la donación de un árbol
    const handleDonateTree = () => {
        alert('¡Gracias por tu interés en donar un árbol! Tu contribución ayuda a mejorar el medio ambiente.');
    };

    return (
        <div className="container">
            <div className="text-center">
                <h2 className="text-4xl">Descubre Más</h2>
                <p className="text-lg">
                    Comprar directo del productor te ofrece alimentos frescos, de calidad,
                    y la oportunidad de apoyar a quienes cultivan de manera sostenible. Aquí te contamos por qué
                    es la mejor opción:
                </p>
            </div>
            <div className="benefits">
                <div className="benefit">
                    <img src={refrescanteImg} alt="Frescura Garantizada" className="img-responsive" />
                    <h3 className="benefit-title">Frescura Garantizada</h3>
                    <p>
                        Al adoptar o comprar uno de nuestros árboles cítricos, como naranjos, pomelos, mandarinos o limoneros, estás apoyando la producción local y disfrutando de frutas recién cosechadas, llenas de frescura y nutrientes esenciales.
                        Estos cítricos conservan su autenticidad y calidad, ofreciéndote una experiencia única de sabor natural y saludable en cada bocado.
                        ¡Anímate a adoptar un árbol o comprar directamente de nosotros y descubre lo mejor que la tierra tiene para ofrecer, mientras contribuyes a un impacto positivo en el medio ambiente!
                    </p>
                </div>
                <div className="benefit">
                    <img src={soporteImg} alt="Apoyo a los Agricultores Locales" className="img-responsive" />
                    <h3 className="benefit-title">Apoyo a los Agricultores Locales</h3>
                    <p>
                        Al colaborar con los pequeños productores, estás impulsando una economía más equitativa y sostenible, brindándoles la oportunidad de mejorar su calidad de vida y asegurar el bienestar de sus familias.
                        ¡Tu apoyo puede generar un cambio significativo en sus comunidades!
                    </p>
                </div>
                <div className="benefit">
                    <img src={sosteniendoImg} alt="Sostenibilidad" className="img-responsive" />
                    <h3 className="benefit-title">Sostenibilidad</h3>
                    <p>
                        Minimiza tu huella de carbono al prescindir de intermediarios, fomentando prácticas agrícolas sostenibles que protegen nuestro planeta para las futuras generaciones.
                        ¡Tu elección realmente marca la diferencia!
                    </p>
                </div>
            </div>
            <div className="call-to-action text-center">
                <h2 className="text-4xl">¡Haz Parte de la Donación y Compra de Nuestros Árboles!</h2>
                <p>Únete a nuestra iniciativa adoptando uno de nuestros árboles: pomelero, limonero, naranjo o mandarino.</p>
                <div>
                    <button onClick={handleDonateTree} className="cta-button">
                        Quiero Donar
                    </button>
                    <button onClick={handleBuyTree} className="cta-button">
                        Quiero Comprar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DescubreMas;
