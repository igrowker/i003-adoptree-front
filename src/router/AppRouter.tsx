import { Routes, Route, Navigate } from 'react-router-dom';
import AdoptreeRoutes from '../routes/AdoptreeRoutes';

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
        <Route path="/auth/*" element="" />
      )}
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
