import React from 'react';
import { useGetFincaDataQuery } from '../../store/services/fincaApi'; 
import './FincaInfo.css';
import { Arbol, Hacienda } from '../../types/types';

const FincaInfo: React.FC = () => {

  const { data: fincaData, isLoading, isError } = useGetFincaDataQuery(1);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (isError) {
    return <div>Error al cargar los datos.</div>;
  }


  return (
    <div className="finca-info-container">
      {fincaData.map((finca: Hacienda) => (
        <div key={finca.id} className="finca-info">
          {/* Sección del título y descripción */}
          <div className="finca-info-header">
            <h2>{finca.name}</h2>
          </div>

          {/* Información de prácticas sostenibles */}
          <div className="finca-info-practices">
            <div className="finca-info-practice">
              <span className="practice-icon" aria-hidden="true">♻️</span>
              <h3>Prácticas</h3>
              <p>{finca.practicesSustainable}</p>
            </div>

            {/* Información sobre los tipos de árboles */}
            <div className="finca-info-practice">
              <span className="practice-icon" aria-hidden="true">🌳</span>
              <h3>Árboles</h3>
              <ul>
                {finca.arbol.map((tree: Arbol, index: number) => (
                  <li key={index}>{tree.type}</li>
                ))}
              </ul>
            </div>

            {/* Información sobre la ubicación */}
            <div className="finca-info-practice">
              <span className="practice-icon" aria-hidden="true">📍</span>
              <h3>Ubicación</h3>
              <p>{finca.ubication}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FincaInfo;