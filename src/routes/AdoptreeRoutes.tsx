import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Home from '../pages/Home/Home';
import Checkout from '../pages/Checkout/Checkout';
import Adoptar from '../pages/Adoptar/Adoptar';
import Impacto from '../pages/Impacto/Impacto';
import Contacto from '../components/Contacto/Contacto';
import PrivacyPolicy from '../pages/PrivacyPolicy/PrivacyPolicy';
import DonacionesPatrocinios from '../components/DonacionesPatrocinios/DonacionesPatrocinios';
import Cosecha from '../components/Cosecha/Cosecha';

const AdoptreeRoutes = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Cosecha />} />
        <Route path="/fincas" element="" />
        <Route path="/adopta-un-arbol" element={<Adoptar />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/impacto-ambiental" element={<Impacto />} />
        <Route path='/contacto' element={<Contacto/>} />
        <Route path='/donaciones-patrocinios' element={<DonacionesPatrocinios/>} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>

      <Footer />
    </>
  );
};

export default AdoptreeRoutes;
