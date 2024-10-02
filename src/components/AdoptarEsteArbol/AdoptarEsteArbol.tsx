import { useNavigate, useParams } from 'react-router-dom';

const AdoptarEsteArbol = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const datos = [
    {
      id: 1,
      name: 'árbol de Naranjo',
      type: 'Naranja',
      location: 'Tucumán, Argentina',
      imageUrl:
        'https://i.pinimg.com/564x/3c/bf/ec/3cbfec1259635898efae5b57ea3ddea3.jpg',
      productor: 'Anita Minisci',
      price: 100,
    },

    {
      id: 2,
      name: 'árbol de Mandarino',
      type: 'Mandarino',
      location: 'Mendoza, Argentina',
      imageUrl:
        'https://i.pinimg.com/564x/64/9f/a5/649fa54b28b8539c1ae306e98a5673c0.jpg',
      productor: 'Angelo Gibilisco',
      price: 600,
    },

    {
      id: 3,
      name: 'árbol de Limon ',
      type: 'Limon',
      location: 'Corrientes, Argentina',
      imageUrl:
        'https://i.pinimg.com/564x/35/96/8f/35968f335d21465253afe8c96b9af31e.jpg',
      productor: 'Antonio Bonillo',
      price: 150,
    },

    {
      id: 4,
      name: 'árbol de Limon ',
      type: 'Limon',
      location: 'Corrientes, Argentina',
      imageUrl:
        'https://i.pinimg.com/564x/35/96/8f/35968f335d21465253afe8c96b9af31e.jpg',
      productor: 'Juan Bonillo',
      price: 150,
    },

    {
      id: 5,
      name: 'árbol de Limon ',
      type: 'Limon',
      location: 'Corrientes, Argentina',
      imageUrl:
        'https://i.pinimg.com/564x/35/96/8f/35968f335d21465253afe8c96b9af31e.jpg',
      productor: 'Joaquin Gine',
      price: 150,
    },

    {
      id: 6,
      name: 'árbol de Limon ',
      type: 'Limon',
      location: 'Corrientes, Argentina',
      imageUrl:
        'https://i.pinimg.com/564x/35/96/8f/35968f335d21465253afe8c96b9af31e.jpg',
      productor: 'Danilo Magnano',
      price: 150,
    },

    {
      id: 7,
      name: 'árbol de Limon ',
      type: 'Limon',
      location: 'Corrientes, Argentina',
      imageUrl:
        'https://i.pinimg.com/564x/35/96/8f/35968f335d21465253afe8c96b9af31e.jpg',
      productor: 'Angelo Dipiero',
      price: 150,
    },
  ];
  const obtnerArbolPorId = (id: string) => {
    return datos.find((arbol) => arbol.id === Number(id));
  };
  let arbol = undefined;
  if (id) {
    arbol = obtnerArbolPorId(id);
  }
  return (
    <div className="container my-[116px] mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 font-mono gap-8 md:px-60">
      <section>
        <img  src={arbol?.imageUrl} alt={arbol?.name} />
      </section>
      <section className='flex flex-col justify-center gap-10'>
        <div>
          <h2 className="text-3xl font-bold mb-4">Adopta un {arbol?.name}</h2>
          <p className='text-lg mb-2'> Gracias a: {arbol?.productor}</p>
          <span className="text-base text-gray-600">En {arbol?.location}</span>
        </div>
        <div className='flex flex-col items-start gap-2'>
            <p className='text-lg font-bold text-[#4BAF47]'>{arbol?.price.toLocaleString("es-AR", {style: "currency", currency: "ARS"})}/año</p>
          <button
            className="text-xl rounded-[10px] bg-[#4BAF47] text-white hover:bg-[#3B8838] py-3 transition-colors duration-300 w-full 4xl:w-1/2"
            onClick={() => navigate('/checkout')}
          >
            Adoptar
          </button>
          <button
            className="text-[#4BAF47] text-xl text-center bg-slate-100 hover:bg-slate-200 py-3 transition-colors duration-300  w-full 4xl:w-1/2" 
            onClick={() => navigate('/adopta-un-arbol')}
          >
            Volver
          </button>
        </div>
      </section>
    </div>
  );
};

export default AdoptarEsteArbol;
