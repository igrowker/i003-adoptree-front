import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Cards from './components/Cards/Cards';
import Beneficios from './components/Beneficios/Beneficios';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Cards />
      <Beneficios />
    </>
  );
}

export default App;
