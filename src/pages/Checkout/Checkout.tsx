import React, { useEffect, useState } from 'react';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentIcon from '@mui/icons-material/Payment';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import DeleteIcon from '@mui/icons-material/Delete';
import farmerGirl from '../../assets/farmer-girl.svg';
import ShippingSection from '../../components/ShippingSection/ShippingSection';
import PaymentMethodSection from '../../components/PaymentMethodSection/PaymentMethodSection';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setShippingAddresses } from '../../store/features/userSlice';
import { RootState } from '../../types/types';

const Checkout = () => {
  const [url, setUrl] = useState("")
  const [activeStep, setActiveStep] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const shippingCost = 2000;

  const steps = [
    { label: 'Tu cesta', icon: LocalMallIcon },
    { label: 'Envío', icon: LocalShippingIcon },
    { label: 'Método de pago', icon: PaymentIcon },
  ];

  const [arbol, setArbol] = useState<any>();

  const { id } = useParams<{ id: string }>()

  const user = useSelector((state: RootState) => state.user.user);
  const shippingAddress = useSelector((state: RootState) => state.user.shippingAddresses);
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchArbol = async () => {
      const response = await axios.get(`http://localhost:3000/arboles/${id}`);
      setArbol(response.data);

    };

    fetchArbol();
  }, []);

  useEffect(() => {
    if (!arbol) return; // Si arbol es null o undefined, no ejecuta el efecto
  
    const fetchUrlMp = async () => {
      const data = {
        id: String(arbol.id),
        title: arbol.type,
        quantity: 1,
        unit_price: parseInt(arbol.price, 10),
        description: `Arbol ${arbol.type}`,
        currency_id: "ARS"
      };
  
      const response = await axios.post(`http://localhost:3000/payments/create-order`, data);
      setUrl(response.data.url)
    };
  
    fetchUrlMp();
  }, [arbol]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  const totalPrice = (arbol?.price * quantity);

  const handleShippingAddressComplete = (addressData: any) => {
    // Here you can do additional processing with the address data if needed
    // console.log('Shipping address saved:', addressData);
    dispatch(setShippingAddresses(addressData))

    handleNext();
  };

  const handleAdoptionComplete = async () => {
    const adoptionData = {
      userId: user?.id,
      treeId: arbol?.id,
      shippingAddressId: shippingAddress.at(-1)?.id,
    }

    try {
      const response = await axios.post('http://localhost:3000/adoptions', adoptionData);
      console.log('Adopción creada:', response.data);

      window.location.href = url

    } catch (error) {
      console.error('Error al crear la adopción:', error);
    }
  }

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <>
            <div className="flex gap-[32px]">
              <img
                className="w-[200px] h-[170px] rounded-[8px]"
                src={arbol.images[0]}
                alt={arbol.type}
              />
              <div>
                <div className="flex justify-between bg-[#f9fafa] p-[20px] gap-[150px] items-center rounded-[4px] text-[#7e8591]">
                  <div>
                    <p className="text-gray-700 font-[500]">
                      Adopción de {arbol.type}
                    </p>
                    <p>Nombre del árbol</p>
                  </div>
                  <DeleteIcon />
                </div>
                <p className="mt-4 mb-2">Cantidad reservada</p>
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
                  Coste de envío: $ {shippingCost.toFixed(2)}
                </p>
              </div>
            </div>
            <hr className="my-[20px]" />
            <p className="text-gray-500">
              Las fechas de envío pueden variar en función de variables
              climatológicas.
            </p>
          </>
        );
      case 1:
        return <ShippingSection onComplete={handleShippingAddressComplete} />
      case 2:
        return <PaymentMethodSection />;
      default:
        return <p>Paso desconocido</p>;
    }
  };

  return (
    <section className="my-[92px]">
      <div className="flex gap-[40px] lg:px-[200px] 2xl:px-[165px] py-[20px] bg-[#f9fafa]">
        {steps.map((step, index) => (
          <React.Fragment key={step.label}>
            <div
              className={`flex items-center gap-[8px] ${index === activeStep ? 'text-[#4BAF47]' : 'text-[#b7bec7]'}`}
            >
              <step.icon />
              {step.label}
            </div>
            {index < steps.length - 1 && (
              <KeyboardArrowRightIcon className="text-gray-500" />
            )}
          </React.Fragment>
        ))}
      </div>

      {arbol ? (
        <>
          <div className="flex justify-between lg:px-[200px] 2xl:px-[165px] mt-[50px]">
            <div className={`${activeStep >= 1 && 'w-[64%]'} `}>
              {renderStepContent()}
            </div>

            <div className="p-[20px] shadow rounded-[4px]">
              <h3 className="text-xl font-semibold">Resumen</h3>

              <div className="mt-[20px] flex items-center gap-[150px]">
                <span>Precio final</span>
                <span className="text-xl font-bold text-[#4BAF47]">
                  $ {(totalPrice + 2000).toFixed(2)}
                </span>
              </div>

              <button
                className="rounded-[10px] bg-[#4BAF47] text-white hover:bg-[#3B8838] my-6 w-full"
                onClick={activeStep === steps.length - 1 ? handleAdoptionComplete : handleNext}
                // disabled={activeStep === steps.length - 1}
              >
                {activeStep === steps.length - 1 ? 'Finalizar' : 'Avanzar'}
              </button>

              <div className="flex justify-center">
                <a className="text-[#4BAF47] text-xl text-center">
                  Seguir comprando
                </a>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 p-[30px] mt-[50px] ml-[150px] mr-[570px] rounded-[4px] flex items-center gap-[20px]">
            <img className="w-[60px]" src={farmerGirl} alt="Farmer Girl" />
            <div>
              <h2 className="text-[18px] font-semibold mb-1">
                ¿Sabías que...?
              </h2>
              <p>
                Nuestra comunidad apoya la transición de 3899 hectáreas de
                Argentina hacia una agricultura más sostenible, ya sea ecológica
                o regenerativa
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="w-full flex justify-center">
          <div className="load-row my-[200px]">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      )}
    </section>
  );
};

export default Checkout;
