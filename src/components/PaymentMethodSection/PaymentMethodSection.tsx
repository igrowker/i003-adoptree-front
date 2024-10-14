import React, { useState } from 'react';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import Mp from '../../assets/mp.png';

const PaymentMethodSection: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardInfo, setCardInfo] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  });

  const handlePaymentMethodChange = (method: string) => {
    setPaymentMethod(method);
  };

  const handleCardInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí puedes manejar el envío de la información de pago
    console.log('Método de pago:', paymentMethod);
    console.log('Información de tarjeta:', cardInfo);
    // Luego podrías finalizar el proceso de checkout
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Método de Pago</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <input
              type="radio"
              id="creditCard"
              name="paymentMethod"
              value="creditCard"
              checked={paymentMethod === 'creditCard'}
              onChange={() => handlePaymentMethodChange('creditCard')}
              className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300"
            />
            <label htmlFor="creditCard" className="flex items-center space-x-2">
              <CreditCardIcon className="text-gray-600" />
              <span>Tarjeta de Crédito</span>
            </label>
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="radio"
              id="mercadopago"
              name="paymentMethod"
              value="mercadopago"
              checked={paymentMethod === 'mercadopago'}
              onChange={() => handlePaymentMethodChange('mercadopago')}
              className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300"
            />
            <label
              htmlFor="mercadopago"
              className="flex items-center space-x-2"
            >
              {/* <SiMercadopago className="text-gray-600" /> */}
              <img className="w-[80px]" src={Mp} alt="Mercado Pago Logo" />
              {/* <span>Mercado Pago</span> */}
            </label>
          </div>
        </div>

        {paymentMethod === 'creditCard' && (
          <div className="space-y-4">
            <div>
              <label
                htmlFor="cardNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Número de tarjeta
              </label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={cardInfo.cardNumber}
                onChange={handleCardInfoChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>
            <div>
              <label
                htmlFor="cardName"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre en la tarjeta
              </label>
              <input
                type="text"
                id="cardName"
                name="cardName"
                value={cardInfo.cardName}
                onChange={handleCardInfoChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="expiryDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  Fecha de expiración
                </label>
                <input
                  type="text"
                  id="expiryDate"
                  name="expiryDate"
                  value={cardInfo.expiryDate}
                  onChange={handleCardInfoChange}
                  placeholder="MM/AA"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div>
                <label
                  htmlFor="cvv"
                  className="block text-sm font-medium text-gray-700"
                >
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  value={cardInfo.cvv}
                  onChange={handleCardInfoChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>
            </div>
          </div>
        )}

        {paymentMethod === 'mercadopago' && (
          <div className="bg-green-100 p-4 rounded-md">
            <p className="text-green-800">
              Serás redirigido a Mercado Pago para completar tu pago de forma
              segura.
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default PaymentMethodSection;
