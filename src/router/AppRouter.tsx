import { Routes, Route } from 'react-router-dom';
import AdoptreeRoutes from '../routes/AdoptreeRoutes';
import Login from '../components/Login/Login';
import Registro from '../components/Login/Registro';
import AboutUs from '../pages/About/AboutUs';


export const AppRouter = () => {
  return (
    <Routes>
      <>
        <Route path="/auth/register" element={<Registro />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/*" element={<AdoptreeRoutes />} />
        <Route path="/about" element={<AboutUs />} />
      </>
    </Routes>
  );
};
