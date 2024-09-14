import React from 'react';
import './App.css';
import Arboles from './components/Arboles/Arboles'; // Importar el componente de árboles

const App: React.FC = () => {
  return (
    <div>
      {/* Aquí renderizas el componente de árboles */}
      <Arboles />
    </div>
  );
};

export default App;
