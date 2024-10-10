/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import AdoptarArbol from '../../components/AdoptarArbol/AdoptarArbol';
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './Adoptar.css';
import { useGetArbolesQuery } from '../../store/services/arbolApi';

const Adoptar: React.FC = () => {
  const { data: arboles, error, isLoading } = useGetArbolesQuery();

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
        Adopta un árbol para apoyar a un agricultor y recibe tu cosecha a lo
        largo de la temporada.
      </p>
      <TextField
        className="w-full max-w-2xl mb-8 sm:mb-12"
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

      <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-10">
        {arboles?.map((arbol: any) => (
          <AdoptarArbol key={arbol.id} datos={arbol} />
        ))}
      </div>
    </div>
  );
};

export default Adoptar;
