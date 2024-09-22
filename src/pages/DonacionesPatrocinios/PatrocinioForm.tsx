import React from 'react';

const PatrocinioForm: React.FC = () => {
  console.log("PatrocinioForm montado");
  return (
    <div className="bg-[#F7FAFC] min-h-screen flex flex-col items-center py-12 px-6">
      <h1 className="text-[#30342C] font-nunito-black text-4xl mb-6 text-center">
        Formulario de Patrocinios
      </h1>
      <form className="w-full max-w-lg"> 
        <label htmlFor="empresa" className="font-lato text-lg mb-2">Nombre de la Empresa:</label>
        <input type="text" id="empresa" className="border p-2 w-full mb-4" required />

        <label htmlFor="contacto" className="font-lato text-lg mb-2">Nombre del Contacto:</label>
        <input type="text" id="contacto" className="border p-2 w-full mb-4" required />

        <label htmlFor="email" className="font-lato text-lg mb-2">Correo Electrónico:</label>
        <input type="email" id="email" className="border p-2 w-full mb-4" required />

        <label htmlFor="telefono" className="font-lato text-lg mb-2">Teléfono:</label>
        <input type="tel" id="telefono" className="border p-2 w-full mb-4" required />

        <label htmlFor="cantidad" className="font-lato text-lg mb-2">Cantidad de Árboles a Patrocinar:</label>
        <input type="number" id="cantidad" className="border p-2 w-full mb-4" required />

        <label htmlFor="comentarios" className="font-lato text-lg mb-2">Comentarios Adicionales:</label>
        <textarea id="comentarios" className="border p-2 w-full mb-4" rows={4} />

        <button type="submit" className="bg-[#00BF62] text-white px-6 py-3 rounded-lg font-lato hover:bg-[#89C26A]">
          Enviar Patrocinio
        </button>
      </form>
    </div>
  );
};

export default PatrocinioForm;
