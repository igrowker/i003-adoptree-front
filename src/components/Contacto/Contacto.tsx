import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí enviarías la información del formulario a tu servidor o API.
    console.log('Datos enviados:', formData);
  };

  return (
    <div className='mt-24'> 
      <h2 className="text-black font-bold mb-4 text-center">Contacto</h2>
      <form onSubmit={handleSubmit} className="opacity-0 animate-fadeIn">
        <div className="mb-4">
          <label htmlFor="name" className="text-black font-medium">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg text-black focus:border-orange-500 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="text-black font-medium">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg text-black focus:border-orange-500 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="text-black font-medium">Mensaje</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg text-black focus:border-orange-500 focus:outline-none"
          />
        </div>
        <button type="submit" className="w-full p-3 bg-gradient-to-r from-orange-500 to-green-500 text-white rounded-3xl font-medium hover:bg-gradient-to-r hover:from-green-500 hover:to-orange-500 transition-colors">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
