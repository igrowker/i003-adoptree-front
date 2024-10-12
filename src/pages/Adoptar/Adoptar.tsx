import React, { useEffect, useState } from 'react';
import AdoptarArbol from '../../components/AdoptarArbol/AdoptarArbol';
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useGetArbolesQuery } from '../../store/services/arbolApi';
import { useSearchParams } from 'react-router-dom';
import './Adoptar.css';

interface FincaData {
  id: number;
  name: string;
  ubication: string;
  practicesSustainable: string;
  productor: string;
}

interface ArbolData {
  id: number;
  name: string;
  type: string;
  location: string;
  images: string[];
  finca: FincaData;
  productor: string;
  price: number;
}

const Adoptar: React.FC = () => {
  const { data: arboles, error, isLoading } = useGetArbolesQuery();
  console.log("ARBOLES RECIBIDOS: ",arboles);
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const name = searchParams.get('search');
    if (name) {
      setSearchTerm(name);
    }
  }, [searchParams]);

 //Setear manualmente el nombre en plural para que el buscador lo reconozca sino no lo encuentra
 switch(searchTerm){
  case "Naranjos" : setSearchTerm("Naranjo")
                    break;
  case "Pomeleros" : setSearchTerm("Pomelero")
                    break;
  case "Limoneros" : setSearchTerm("Limonero")
                    break;
  case "Mandarinos" : setSearchTerm("Mandarino")
                    break;
 }

 //filtra y encuentra coincidencias en lowercase -- !!SE AGREGO COMPROBACION PARA PASAR EL LINT
 const filteredArboles = arboles?.filter((arbol) => 
  typeof arbol === 'object' && arbol !== null && 'type' in arbol &&
  arbol.type.toLowerCase().includes(searchTerm.toLowerCase())
);


  if (isLoading) {
    return (
      <div className="w-full flex justify-center">
        <div className="load-row my-[200px]">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
  }

  if (error) {
    return <p>Ocurrió un error al cargar los árboles.</p>;
  }

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-[200px] 2xl:px-[165px] my-[116px]">
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 mt-6 sm:mt-8">
        Adopciones
      </h1>
      <p className="text-gray-500 mb-4 sm:mb-6 max-w-2xl">
        Adopta un árbol para apoyar a un agricultor y recibe tu cosecha a lo largo de la temporada.
      </p>
      <TextField
        className="w-full max-w-2xl mb-8 sm:mb-12"
        id="outlined-basic"
        label="Busca un árbol"
        variant="outlined"
        value={searchTerm} // Setear el valor del campo
        onChange={(e) => setSearchTerm(e.target.value)} // Cambiar el estado al escribir
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

 {/* !!SE AGREGO COMPROBACION PARA PASAR EL LINT */}
<div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 mt-10 max-w-screen-lg">
  {filteredArboles?.map((arbol) => {
    // Comprobamos que arbol es del tipo ArbolData
    const isArbolData = (obj: any): obj is ArbolData => {
      return (
        obj &&
        typeof obj.id === 'number' &&
        typeof obj.type === 'string' &&
        Array.isArray(obj.images) &&
       
        obj.finca &&
        typeof obj.finca.name === 'string' &&
        typeof obj.price === 'string' // O número, dependiendo de tu definición
      );
    };

    if (isArbolData(arbol)) {
      return <AdoptarArbol key={arbol.id} datos={arbol} />;
    }
    return null; // Retornamos null si la validación falla
  })}
</div>

    </div>
  );
};

export default Adoptar;