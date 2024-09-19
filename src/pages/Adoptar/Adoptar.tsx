import AdoptarArbol from "../../components/AdoptarArbol/AdoptarArbol"; //lamado al componente hijo

import "./Adoptar.css"


const Adoptar = () => {
  // Datos de ejemplo de un árbol que se va recibir luego de la API

  //!!EN ESTA PAGE SE RECIBE LA INFO DE LOS ARBOLES CARGADOS CON TODA LA INFO CORRESPONDIENTE COMO ESTE CARGADA LA TABLA EN FORMATO JSON Y TRABAJARLA
  //!! EL FLUJO SERIA : Adoptar.tsx(info arboles) ---> AdoptarArbol.tsx(se le pasa la info por props y se genera las diferentes cards con un bucle)

  //------------------------------------------------------------------------------------------
  //EN ESTA SECCION REEMPLAZAR POR LA LOGICA DE RECEPCION DE LA INFO
 

  const datos = [ 
    {id: 1,
      name: "Arbol de Naranjo",
      type: "Naranja",
      location: "Tucumán, Argentina",
      imageUrl: "https://i.pinimg.com/564x/3c/bf/ec/3cbfec1259635898efae5b57ea3ddea3.jpg", 
      productor:"",
      price: 100
    },

    {id: 2,
      name: "Arbol de Mandarino",
      type: "Mandarino",
      location: "Mendoza, Argentina",
      imageUrl: "https://i.pinimg.com/564x/64/9f/a5/649fa54b28b8539c1ae306e98a5673c0.jpg", 
      productor:"",
      price: 600
    },

      {
        id: 3,
    name: "Arbol de Limon ",
    type: "Limon",
    location: "Corrientes, Argentina",
    imageUrl: "https://i.pinimg.com/564x/35/96/8f/35968f335d21465253afe8c96b9af31e.jpg", 
    productor:"",
    price: 150
      },

      {
        id: 3,
    name: "Arbol de Limon ",
    type: "Limon",
    location: "Corrientes, Argentina",
    imageUrl: "https://i.pinimg.com/564x/35/96/8f/35968f335d21465253afe8c96b9af31e.jpg", 
    productor:"",
    price: 150
      },

      {
        id: 4,
    name: "Arbol de Limon ",
    type: "Limon",
    location: "Corrientes, Argentina",
    imageUrl: "https://i.pinimg.com/564x/35/96/8f/35968f335d21465253afe8c96b9af31e.jpg", 
    productor:"",
    price: 150
      },

      {
        id: 5,
    name: "Arbol de Limon ",
    type: "Limon",
    location: "Corrientes, Argentina",
    imageUrl: "https://i.pinimg.com/564x/35/96/8f/35968f335d21465253afe8c96b9af31e.jpg", 
    productor:"",
    price: 150
      },

      {
        id: 6,
    name: "Arbol de Limon ",
    type: "Limon",
    location: "Corrientes, Argentina",
    imageUrl: "https://i.pinimg.com/564x/35/96/8f/35968f335d21465253afe8c96b9af31e.jpg", 
    productor:"",
    price: 150
      },
  ];


  const handleAdopt = (arbolId: number) => {
    console.log(`Árbol adoptado con ID: ${arbolId}`);
    //  lógica para manejar la adopción (para enviar los datos a la API "carga")
  };
//-----------------------------------------------------------------------------------------


  return (
    <div className="container mx-auto p-4 pt-20">
      <h1 className="text-5xl text-center font-bold mb-12 mt-10 text-orange-400 fuentePersonalizada">Adoptar un Árbol: </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/*!! iterar sobre una lista de árboles si tienes más de uno !!*/}
        {datos.map((dat) => (
          <AdoptarArbol
            key={dat.id}
            datos={dat}
            onAdopt={handleAdopt}
          />
        ))}
        
      </div>
    </div>
  );
};

export default Adoptar;