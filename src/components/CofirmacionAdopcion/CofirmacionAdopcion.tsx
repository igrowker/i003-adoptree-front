import React, { useEffect } from 'react';
import axios from 'axios';
 
interface AdopcionDetails {
  tipoArbol: string;
  ubicacion: string;
  cuotaPagada: number;
  emailUsuario: string;
}
 
const ConfirmacionAdopcion: React.FC<AdopcionDetails> = ({ tipoArbol, ubicacion, cuotaPagada, emailUsuario }) => {
 
  useEffect(() => {
    const enviarConfirmacion = async () => {
      try {
        // Llamada a la API para enviar correo de confirmación
        await axios.post('/api/enviar-confirmacion', {
          tipoArbol,
          ubicacion,
          cuotaPagada,
          emailUsuario
        });
        console.log('Correo de confirmación enviado');
      } catch (error) {
        console.error('Error al enviar el correo:', error);
      }
    };
 
    enviarConfirmacion();
  }, [tipoArbol, ubicacion, cuotaPagada, emailUsuario]);
 
  return (
<div>
<h2>Adopción exitosa</h2>
<p>¡Gracias por adoptar un árbol cítrico!</p>
<p>Detalles de la adopción:</p>
<ul>
<li><strong>Tipo de árbol:</strong> {tipoArbol}</li>
<li><strong>Ubicación:</strong> {ubicacion}</li>
<li><strong>Cuota pagada:</strong> ${cuotaPagada}</li>
</ul>
</div>
  );
};
 
export default ConfirmacionAdopcion;