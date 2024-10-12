import React, { useState } from 'react';
import axios from 'axios';

const MiPerfil = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    role: user.role,
  });

  // Maneja el cambio en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Maneja el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Realiza la solicitud al backend para actualizar los datos del usuario
      const response = await axios.put(`/api/users/${user.id}`, formData);

      if (response.status === 200) {
        alert('Perfil actualizado exitosamente');
        setIsEditing(false);
      }
    } catch (error) {
      console.error('Error al actualizar el perfil:', error);
      alert('Hubo un problema al actualizar el perfil. Inténtalo de nuevo.');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Mi Perfil</h1>

      <div className="flex items-center mb-6">
        <img
          src={user.avatar || 'https://via.placeholder.com/150'}
          alt="Avatar de usuario"
          className="w-24 h-24 rounded-full object-cover mr-4"
        />
        <div>
          <h2 className="text-xl font-semibold">{formData.name}</h2>
          <p className="text-gray-600">{formData.email}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Nombre</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            readOnly={!isEditing}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Correo Electrónico</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            readOnly={!isEditing}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Rol</label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            readOnly={!isEditing}
          />
        </div>

        {/* Botones para editar y guardar */}
        <div className="flex justify-end">
          {isEditing ? (
            <>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
              >
                Guardar
              </button>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="bg-gray-300 text-black px-4 py-2 rounded"
              >
                Cancelar
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              className="text-white bg-gradient-to-r from-green-500 to-green-600 rounded-[10px] shadow-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform"
            >
              Editar
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MiPerfil;
