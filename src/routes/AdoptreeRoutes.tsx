import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Home from '../pages/Home/Home';
import Checkout from '../pages/Checkout/Checkout';
import Impacto from '../pages/Impacto/Impacto';

const AdoptreeRoutes = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fincas" element="" />
        <Route path="/adopta-un-arbol" element="" />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/impacto-ambiental" element={<Impacto />} />
      </Routes>

      <Footer />
    </>
  );
};

export default AdoptreeRoutes;
