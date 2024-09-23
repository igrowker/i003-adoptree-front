import AdoptarArbol from '../../components/AdoptarArbol/AdoptarArbol'; //lamado al componente hijo
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './Adoptar.css';

const Adoptar = () => {
  // Datos de ejemplo de un árbol que se va recibir luego de la API

  //!!EN ESTA PAGE SE RECIBE LA INFO DE LOS ARBOLES CARGADOS CON TODA LA INFO CORRESPONDIENTE COMO ESTE CARGADA LA TABLA EN FORMATO JSON Y TRABAJARLA
  //!! EL FLUJO SERIA : Adoptar.tsx(info arboles) ---> AdoptarArbol.tsx(se le pasa la info por props y se genera las diferentes cards con un bucle)

  //------------------------------------------------------------------------------------------
  //EN ESTA SECCION REEMPLAZAR POR LA LOGICA DE RECEPCION DE LA INFO

  const datos = [
    {
      id: 1,
      name: 'Arbol de Naranjo',
      type: 'Naranja',
      location: 'Tucumán, Argentina',
      imageUrl:
        'https://i.pinimg.com/564x/3c/bf/ec/3cbfec1259635898efae5b57ea3ddea3.jpg',
      productor: 'Anita Minisci',
      price: 100,
    },

    {
      id: 2,
      name: 'Arbol de Mandarino',
      type: 'Mandarino',
      location: 'Mendoza, Argentina',
      imageUrl:
        'https://i.pinimg.com/564x/64/9f/a5/649fa54b28b8539c1ae306e98a5673c0.jpg',
      productor: 'Angelo Gibilisco',
      price: 600,
    },

    {
      id: 3,
      name: 'Arbol de Limon ',
      type: 'Limon',
      location: 'Corrientes, Argentina',
      imageUrl:
        'https://i.pinimg.com/564x/35/96/8f/35968f335d21465253afe8c96b9af31e.jpg',
      productor: 'Antonio Bonillo',
      price: 150,
    },

    {
      id: 4,
      name: 'Arbol de Limon ',
      type: 'Limon',
      location: 'Corrientes, Argentina',
      imageUrl:
        'https://i.pinimg.com/564x/35/96/8f/35968f335d21465253afe8c96b9af31e.jpg',
      productor: 'Juan Bonillo',
      price: 150,
    },

    {
      id: 5,
      name: 'Arbol de Limon ',
      type: 'Limon',
      location: 'Corrientes, Argentina',
      imageUrl:
        'https://i.pinimg.com/564x/35/96/8f/35968f335d21465253afe8c96b9af31e.jpg',
      productor: 'Joaquin Gine',
      price: 150,
    },

    {
      id: 6,
      name: 'Arbol de Limon ',
      type: 'Limon',
      location: 'Corrientes, Argentina',
      imageUrl:
        'https://i.pinimg.com/564x/35/96/8f/35968f335d21465253afe8c96b9af31e.jpg',
      productor: 'Danilo Magnano',
      price: 150,
    },

    {
      id: 7,
      name: 'Arbol de Limon ',
      type: 'Limon',
      location: 'Corrientes, Argentina',
      imageUrl:
        'https://i.pinimg.com/564x/35/96/8f/35968f335d21465253afe8c96b9af31e.jpg',
      productor: 'Angelo Dipiero',
      price: 150,
    },
  ];

  const handleAdopt = (arbolId: number) => {
    console.log(`Árbol adoptado con ID: ${arbolId}`);
    //  lógica para manejar la adopción (para enviar los datos a la API "carga")
  };
  //-----------------------------------------------------------------------------------------

  return (
    <div className="px-[200px] my-[116px]">
      <h1 className="text-4xl font-bold mb-2 mt-10">Adopciones</h1>
      <p className="text-gray-500 mb-7 w-[650px]">
        Adopta un árbol para apoyar a un agricultor y recibe tu cosecha a lo
        largo de la temporada.
      </p>
      <TextField
        className="w-[650px]"
        id="outlined-basic"
        label="Busca un árbol"
        variant="outlined"
        sx={{
          '& .MuiFormLabel-root': {
            color: '#8F8F8F', // Color normal del label
            '&:hover': {
              color: '#8F8F8F', // Color del label al pasar el mouse
            },
          },
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: '#4BAF47', // Cambia el color del borde al pasar el mouse
            },
            '&.Mui-focused fieldset': {
              borderColor: '#4BAF47', // Cambia el color del borde al enfocar
            },
          },
          '& .MuiInputBase-input': {
            color: '#4BAF47', // Cambia el color del texto
          },
        }}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
      />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
        {/*!! iterar sobre una lista de árboles si tienes más de uno !!*/}
        {datos.map((dat) => (
          <AdoptarArbol key={dat.id} datos={dat} onAdopt={handleAdopt} />
        ))}
      </div>
    </div>
  );
};

export default Adoptar;
