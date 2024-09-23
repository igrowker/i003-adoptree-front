import { Routes, Route, Navigate } from 'react-router-dom';
import AdoptreeRoutes from '../routes/AdoptreeRoutes';
import Login from '../components/Login/Login';
import Registro from '../components/Login/Registro'
import Contacto from '../components/Contacto/Contacto';
import DonacionesPatrocinios from '../components/DonacionesPatrocinios/DonacionesPatrocinios';
import DonacionForm from '../pages/DonacionesPatrocinios/DonacionForm';
import PatrocinioForm from '../pages/DonacionesPatrocinios/PatrocinioForm';

export const AppRouter = () => {
  // Antes de mostrar mis rutas, es decir, antes de hacer cualquier cosa en mi aplicación voy a hacer una evaluación

  const status: string = 'authenticated';

  if (status === 'checking') {
    return <div>checking...</div>;
  }

  return (
    <Routes>
      {status === 'authenticated' ? (
        <Route path="/*" element={<AdoptreeRoutes />} />
      ) : (
        <>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/registro" element={<Registro />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/donaciones-patrocinios" element={<DonacionesPatrocinios />} />
        <Route path="/donaciones/formulario" element={<DonacionForm />} />
        <Route path="/patrocinio/formulario" element={<PatrocinioForm />} />
      </>
      )}
      <Route path="/*" element={<Navigate to="/auth/login" replace/>} />
    </Routes>
  );
};
