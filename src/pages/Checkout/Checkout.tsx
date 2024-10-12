import React, { useState } from 'react';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentIcon from '@mui/icons-material/Payment';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import DeleteIcon from '@mui/icons-material/Delete';
import naranjas from '../../assets/naranjas.jpg';
import farmerGirl from '../../assets/farmer-girl.svg';
import ShippingSection from '../../components/ShippingSection/ShippingSection';
import PaymentMethodSection from '../../components/PaymentMethodSection/PaymentMethodSection';
import { useLanguage } from '../../LanguageContext/LanguageContext';

const Checkout = () => {
  const { language } = useLanguage(); 

  const [activeStep, setActiveStep] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const basePrice = 2000;
  const shippingCost = 2000;

  const steps = [
    { label: language === 'es' ? 'Tu cesta' : 'Your Cart', icon: LocalMallIcon },
    { label: language === 'es' ? 'Envío' : 'Shipping', icon: LocalShippingIcon },
    { label: language === 'es' ? 'Método de pago' : 'Payment Method', icon: PaymentIcon },
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  const totalPrice = basePrice * quantity + shippingCost;

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <>
            <div className="flex gap-[32px]">
              <img className="w-[200px] h-[170px] rounded-[8px]" src={naranjas} alt="Naranjas" />
              <div>
                <div className="flex justify-between bg-[#f9fafa] p-[20px] gap-[150px] items-center rounded-[4px] text-[#7e8591]">
                  <div>
                    <p className="text-gray-700 font-[500]">
                      {language === 'es' ? 'Adopción arbol de naranjas ecológicas' : 'Adoption of Organic Orange Tree'}
                    </p>
                    <p>{language === 'es' ? 'Nombre del árbol' : 'Tree Name'}</p>
                  </div>
                  <DeleteIcon />
                </div>
                <p className="mt-4 mb-2">{language === 'es' ? 'Cantidad reservada' : 'Reserved Quantity'}</p>
                <div className="flex items-center gap-[20px]">
                  <button
                    className="px-[14px] py-[4px] bg-[#e9ecf3] rounded-[4px] text-[#bfc1c4] font-[600]"
                    onClick={() => handleQuantityChange(-1)}
                  >
                    -
                  </button>
                  <span className="text-[#4BAF47] font-[600]">{quantity}</span>
                  <button
                    className="px-[14px] py-[4px] bg-[#4BAF47] rounded-[4px] text-white font-[600]"
                    onClick={() => handleQuantityChange(1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-[20px]">
              <div>
                <p className="flex justify-end mb-2 font-[600]">
                  $ {totalPrice.toFixed(2)}
                </p>
                <p className="text-sm text-gray-500">
                  {language === 'es' ? `Coste de envío: $ ${shippingCost.toFixed(2)}` : `Shipping Cost: $ ${shippingCost.toFixed(2)}`}
                </p>
              </div>
            </div>
            <hr className="my-[20px]" />
            <p className="text-gray-500">
              {language === 'es' ? 'Las fechas de envío pueden variar en función de variables climatológicas.' : 'Shipping dates may vary depending on weather conditions.'}
            </p>
          </>
        );
      case 1:
        return <ShippingSection />;
      case 2:
        return <PaymentMethodSection />;
      default:
        return <p>{language === 'es' ? 'Paso desconocido' : 'Unknown Step'}</p>;
    }
  };

  return (
    <section className="my-[92px]">
      <div className="flex gap-[40px] px-[200px] py-[20px] bg-[#f9fafa]">
        {steps.map((step, index) => (
          <React.Fragment key={step.label}>
            <div className={`flex items-center gap-[8px] ${index === activeStep ? 'text-[#4BAF47]' : 'text-[#b7bec7]'}`}>
              <step.icon />
              {step.label}
            </div>
            {index < steps.length - 1 && (
              <KeyboardArrowRightIcon className="text-gray-500" />
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="flex justify-between px-[200px] mt-[50px]">
        <div className={`${activeStep >= 1 && 'w-[64%]'}`}>
          {renderStepContent()}
        </div>

        <div className="p-[20px] shadow rounded-[4px]">
          <h3 className="text-xl font-semibold">{language === 'es' ? 'Resumen' : 'Summary'}</h3>

          <div className="mt-[20px] flex items-center gap-[150px]">
            <span>{language === 'es' ? 'Precio final' : 'Final Price'}</span>
            <span className="text-xl font-bold text-[#4BAF47]">
              $ {totalPrice.toFixed(2)}
            </span>
          </div>

          <button
            className="rounded-[10px] bg-[#4BAF47] text-white hover:bg-[#3B8838] my-6 w-full"
            onClick={handleNext}
            disabled={activeStep === steps.length - 1}
          >
            {activeStep === steps.length - 1 ? (language === 'es' ? 'Finalizar' : 'Finish') : (language === 'es' ? 'Avanzar' : 'Next')}
          </button>

          <div className="flex justify-center">
            <a className="text-[#4BAF47] text-xl text-center">
              {language === 'es' ? 'Seguir comprando' : 'Continue Shopping'}
            </a>
          </div>
        </div>
      </div>

      <div className="border border-gray-200 p-[30px] mt-[50px] ml-[200px] mr-[570px] rounded-[4px] flex items-center gap-[20px]">
        <img className="w-[60px]" src={farmerGirl} alt="Farmer Girl" />
        <div>
          <h2 className="text-[18px] font-semibold mb-1">{language === 'es' ? '¿Sabías que...?' : 'Did you know...?'}</h2>
          <p>
            {language === 'es' ? 'Nuestra comunidad apoya la transición de 3899 hectáreas de Argentina hacia una agricultura más sostenible, ya sea ecológica o regenerativa' : 'Our community supports the transition of 3899 hectares of Argentina towards more sustainable agriculture, whether organic or regenerative.'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
