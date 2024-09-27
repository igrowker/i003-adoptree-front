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
import LeerMas1 from '../pages/Blog/LeerMas/LeerMas1';
import LeerMas2 from '../pages/Blog/LeerMas/LeerMas2';
import LeerMas3 from '../pages/Blog/LeerMas/LeerMas3';
import LanguageSwitcher from '../pages/Blog/LeerMas/LanguageSwitcher';
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
        <Route path="/leerMas1" element={<LeerMas1 />} />
        <Route path="/leerMas2" element={<LeerMas2 />} />
        <Route path="/leerMas3" element={<LeerMas3 />} />
        <Route path="/languageSwitcher" element={<LanguageSwitcher />} />
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
