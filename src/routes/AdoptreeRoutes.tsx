import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Home from '../pages/Home/Home';
import Checkout from '../pages/Checkout/Checkout';
import Adoptar from '../pages/Adoptar/Adoptar';
import Impacto from '../pages/Impacto/Impacto';
import Contacto from '../components/Contacto/Contacto';
import PrivacyPolicy from '../pages/PrivacyPolicy/PrivacyPolicy';
import BlogPage from '../pages/Blog/BlogPage';
import FincaInfo from '../pages/FincaInfo/FincaInfo';
import DonacionesPatrocinios from '../components/DonacionesPatrocinios/DonacionesPatrocinios';
import AboutUs from '../pages/About/AboutUs';
// import DonacionesPatrocinios from '../components/DonacionesPatrocinios/DonacionesPatrocinios';

const AdoptreeRoutes = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fincas" element={<FincaInfo />} />
        <Route path="/adopta-un-arbol" element={<Adoptar />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/impacto-ambiental" element={<Impacto />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/donaciones" element={<DonacionesPatrocinios />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>

      <Footer />
    </>
  );
};

export default AdoptreeRoutes;
