import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';


const AboutPart1 = () => {
  return (
    <section className="bg-[#F7FAFC] mt-20 py-16 px-4 md:px-12 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#30342C] mb-4">Sobre Nosotros</h2>
        <p className="text-[#30342C] text-lg mb-8">
          Adoptree es una plataforma que conecta a los consumidores directamente con los productores de cítricos en Argentina, promoviendo la agricultura sostenible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          <div className="rounded overflow-hidden">
            <img src={img1} alt="Imagen 1" className="w-full h-auto object-cover" />
          </div>
          <div className="rounded overflow-hidden">
            <img src={img2} alt="Imagen 2" className="w-full h-auto object-cover" />
          </div>
          <div className="rounded overflow-hidden">
            <img src={img3} alt="Imagen 3" className="w-full h-auto object-cover" />
          </div>
          <div className="rounded overflow-hidden">
            <img src={img4} alt="Imagen 4" className="w-full h-auto object-cover" />
          </div>
        </div>


        <h3 className="text-2xl font-semibold text-[#30342C] mb-6">
          Nos aseguramos de que tu idea y creación se entreguen correctamente
        </h3>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#30342C]">
          <p className="text-base">
            Adoptree ofrece una conexión directa con los productores de cítricos en Argentina. Al adoptar un árbol, recibís una parte de la cosecha, apoyando la sostenibilidad agrícola.
          </p>
          <p className="text-base">
            Nuestra plataforma facilita a los agricultores ingresos constantes, permitiendo mantener sus huertos de manera sostenible y mejorar las prácticas agrícolas responsables.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPart1;

