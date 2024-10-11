/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import AdoptarArbol from '../../components/AdoptarArbol/AdoptarArbol';
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useGetArbolesQuery } from '../../store/services/arbolApi';
import { motion } from 'framer-motion'; // Importar motion
import './Adoptar.css';

const Adoptar: React.FC = () => {
  const { data: arboles, error, isLoading } = useGetArbolesQuery();
  const [searchValue, setSearchValue] = useState('');
  const [filteredArboles, setFilteredArboles] = useState<any[]>(arboles || []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSearchKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      const searchResult = (arboles || []).filter((arbol: any) =>
        arbol.type && arbol.type.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredArboles(searchResult);
    }
  };

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
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 mt-6 sm:mt-8">Adopciones</h1>
      <p className="text-gray-500 mb-4 sm:mb-6 max-w-2xl">
        Adopta un árbol para apoyar a un agricultor y recibe tu cosecha a lo largo de la temporada.
      </p>
      <TextField
        className="w-full max-w-2xl mb-8 sm:mb-12"
        id="outlined-basic"
        label="Busca un árbol"
        variant="outlined"
        value={searchValue}
        onChange={handleSearchChange}
        onKeyPress={handleSearchKeyPress}
        sx={{
          '& .MuiFormLabel-root': {
            color: '#8F8F8F',
            '&:hover': { color: '#4BAF47' },
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

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 mt-10 max-w-screen-lg">
        {filteredArboles.length > 0 
          ? filteredArboles.map((arbol: any) => (
              <motion.div 
                key={arbol.id} 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.3 }}
              >
                <AdoptarArbol datos={arbol} />
              </motion.div>
            ))
          : arboles?.map((arbol: any) => (
              <motion.div 
                key={arbol.id} 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.3 }}
              >
                <AdoptarArbol datos={arbol} />
              </motion.div>
            ))
        }
      </div>
    </div>
  );
};

export default Adoptar;
