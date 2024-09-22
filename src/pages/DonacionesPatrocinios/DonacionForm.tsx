import React from 'react';

const DonacionForm: React.FC = () => {
  console.log("DonacionForm montado");
  return (
    <div className="bg-[#F7FAFC] min-h-screen flex flex-col items-center py-12 px-6">
      <h1 className="text-[#30342C] font-nunito-black text-4xl mb-6 text-center">
        Formulario de Donación
      </h1>
      <form className="w-full max-w-lg"> {/* Cambiado a max-w-lg */}
        <label htmlFor="nombre" className="font-lato text-lg mb-2">Nombre:</label>
        <input type="text" id="nombre" className="border p-2 w-full mb-4" required />

        <label htmlFor="apellido" className="font-lato text-lg mb-2">Apellido:</label>
        <input type="text" id="apellido" className="border p-2 w-full mb-4" required />

        <label htmlFor="monto" className="font-lato text-lg mb-2">Monto de la Donación:</label>
        <input type="number" id="monto" className="border p-2 w-full mb-4" required />

        <button type="submit" className="bg-[#00BF62] text-white px-6 py-3 rounded-lg font-lato hover:bg-[#89C26A]">
          Enviar Donación
        </button>
      </form>
    </div>
  );
};

export default DonacionForm;
