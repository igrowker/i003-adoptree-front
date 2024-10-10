import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../types/types';


interface ShippingSectionProps {
  onComplete: (addressData: AddressData) => void;
}

interface AddressData {
  fullName: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  country: string;
  phoneNumber: string;
}

const ShippingSection: React.FC<ShippingSectionProps> = ({ onComplete }) => {
  const [shippingInfo, setShippingInfo] = useState({
    fullName: '',
    address: '',
    city: '',
    province: '',
    postalCode: '',
    country: 'Argentina',
    phoneNumber: '',
  });

  const user = useSelector((state: RootState) => state.user.user);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setShippingInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  const createShippingAddress = async (addressData: AddressData) => {
    try {
      const response = await axios.post('http://localhost:3000/shipping-addresses', addressData);
      console.log('Dirección de envío creada:', response.data);
      onComplete(response.data);
    } catch (error) {
      console.error('Error al crear la dirección de envío:', error);
    }
  };



  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const shippingData = {...shippingInfo, userId: user?.id}
    console.log(shippingData)
    createShippingAddress(shippingData);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Información de Envío</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700"
          >
            Nombre completo
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={shippingInfo.fullName}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full rounded-md p-1 border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>
        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700"
          >
            Dirección
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={shippingInfo.address}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full rounded-md p-1 border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700"
            >
              Ciudad
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={shippingInfo.city}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md p-1 border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>
          <div>
            <label
              htmlFor="province"
              className="block text-sm font-medium text-gray-700"
            >
              Provincia
            </label>
            <input
              type="text"
              id="province"
              name="province"
              value={shippingInfo.province}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md p-1 border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="postalCode"
              className="block text-sm font-medium text-gray-700"
            >
              Código Postal
            </label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={shippingInfo.postalCode}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md p-1 border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>
          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700"
            >
              País
            </label>
            <select
              id="country"
              name="country"
              value={shippingInfo.country}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md p-1 border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            >
              <option value="España">Argentina</option>
              {/* Añade más países según sea necesario */}
            </select>
          </div>
        </div>
        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Teléfono
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={shippingInfo.phoneNumber}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          Guardar y Continuar
        </button>
      </form>
    </div>
  );
};

export default ShippingSection;
