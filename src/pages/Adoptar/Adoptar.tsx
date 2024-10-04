import React from 'react';
import AdoptarArbol from '../../components/AdoptarArbol/AdoptarArbol';
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './Adoptar.css';
import { useGetArbolesQuery } from '../../store/services/arbolApi'; // Hook generado por RTK Query

// Definimos el tipo de los datos de cada árbol
interface Arbol {
  id: number;
  name: string;
  type: string;
  location: string;
  images: string[];
  productor: string;
  price: number;
}

const Adoptar: React.FC = () => {
  // Utilizamos el hook para obtener los datos desde la API
  const { data: arboles, error, isLoading } = useGetArbolesQuery();

  // Función para manejar la adopción de un árbol
  const handleAdopt = (arbolId: number) => {
    console.log(`Árbol adoptado con ID: ${arbolId}`);
    // lógica para manejar la adopción (como enviar datos a la API)
  };

  // Muestra un mensaje de carga mientras se obtienen los datos
  if (isLoading) {
    return <p>Cargando árboles...</p>;
  }

  // Muestra un mensaje en caso de error
  if (error) {
    return <p>Ocurrió un error al cargar los árboles.</p>;
  }

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
            color: '#8F8F8F',
            '&:hover': { color: '#8F8F8F' },
          },
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': { borderColor: '#4BAF47' },
            '&.Mui-focused fieldset': { borderColor: '#4BAF47' },
          },
          '& .MuiInputBase-input': { color: '#4BAF47' },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
        {/* Iteramos sobre los datos de los árboles recibidos desde la API */}
        {arboles?.map((arbol: any) => (
          <AdoptarArbol key={arbol.id} datos={arbol} onAdopt={handleAdopt} />
        ))}
      </div>
    </div>
  );
};

export default Adoptar;
