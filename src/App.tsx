import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Cards from './components/Cards/Cards';
import Beneficios from './components/Beneficios/Beneficios';
import './App.css';
import Agriculture from './components/Agriculture/Agriculture';
import Bienvenido from './components/Bienvenido/Bienvenido';

function App() {
  return (
    <>
      <Navbar />
      <Bienvenido />
      <Cards />
      <Beneficios />
      <Agriculture />
    </>
  );
}

export default App;
