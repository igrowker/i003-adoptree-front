import React, { useEffect, useState } from 'react';
import AdoptarArbol from '../../components/AdoptarArbol/AdoptarArbol';
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useGetArbolesQuery } from '../../store/services/arbolApi';
import { useSearchParams } from 'react-router-dom';
import { ArbolInterface } from '../../store/services/arbolApi';
import { motion } from 'framer-motion';
import './Adoptar.css';

const Adoptar: React.FC = () => {
  const { data: arboles, error, isLoading } = useGetArbolesQuery();
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const name = searchParams.get('search');
    if (name) {
      setSearchTerm(name);
    }
  }, [searchParams]);

  // Ajustar los términos de búsqueda según sea necesario
  switch (searchTerm) {
    case 'Naranjos':
      setSearchTerm('Naranjo');
      break;
    case 'Pomeleros':
      setSearchTerm('Pomelero');
      break;
    case 'Limoneros':
      setSearchTerm('Limonero');
      break;
    case 'Mandarinos':
      setSearchTerm('Mandarino');
      break;
  }

  // Aplicar el filtro solo sobre las propiedades disponibles en el tipo 'Arbol'
  const filteredArboles = arboles?.filter((arbol: ArbolInterface) =>
    arbol.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="w-full flex justify-center">
        <motion.div
          className="load-row my-[200px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </motion.div>
      </div>
    );
  }

  if (error) {
    return <p>Ocurrió un error al cargar los árboles.</p>;
  }

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-[200px] 2xl:px-[130px] my-[116px]">
      <motion.h1
        className="text-3xl sm:text-4xl font-bold mb-2 mt-6 sm:mt-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Adopciones
      </motion.h1>
      <motion.p
        className="text-gray-500 mb-4 sm:mb-6 max-w-2xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Adopta un árbol para apoyar a un agricultor y recibe tu cosecha a lo largo de la temporada.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <TextField
          className="w-full max-w-2xl mb-8 sm:mb-12"
          id="outlined-basic"
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'green', // Color del borde normal
              },
              '&:hover fieldset': {
                borderColor: '#909590', // Color del borde cuando se pasa el mouse
              },
              '&.Mui-focused fieldset': {
                borderColor: 'green', // Color del borde cuando está enfocado
              },
            },
            '& .MuiInputLabel-root': {
              color: 'gray', // Color del label
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: 'green', // Color del label cuando está enfocado
            },
          }}
          label="Busca un árbol"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </motion.div>
      <motion.div
        className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 mt-10 max-w-screen-lg"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {filteredArboles?.map((arbol: ArbolInterface) => (
          <motion.div
            key={arbol.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <AdoptarArbol datos={arbol} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Adoptar;
