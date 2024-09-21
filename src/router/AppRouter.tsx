import { Routes, Route, Navigate } from 'react-router-dom';
import AdoptreeRoutes from '../routes/AdoptreeRoutes';
import Login from '../components/Login/Login';
import Registro from '../components/Login/Registro'

export const AppRouter = () => {
  // Antes de mostrar mis rutas, es decir, antes de hacer cualquier cosa en mi aplicación voy a hacer una evaluación

  const status: string = 'unauthenticated';

  if (status === 'checking') {
    return <div>checking...</div>;
  }

  return (
    <Routes>
      {status !== 'authenticated' ? (
        <Route path="/*" element={<AdoptreeRoutes />} />
      ) : (
        <>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/registro" element={<Registro />} />
      </>
      )}
      <Route path="/*" element={<Navigate to="/auth/login" replace/>} />
    </Routes>
  );
};
