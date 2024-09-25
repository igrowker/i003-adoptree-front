import { Routes, Route } from 'react-router-dom';
import AdoptreeRoutes from '../routes/AdoptreeRoutes';
import Login from '../components/Login/Login';
import Registro from '../components/Login/Registro';
import AboutUs from '../pages/About/AboutUs';
import { useEffect } from 'react';
import axios from 'axios';
 




export const AppRouter = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/some-endpoint');
        console.log(response.data); // Haz algo con los datos
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };
 
    fetchData();
  }, []);
 
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