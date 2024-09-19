import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Home from '../pages/Home/Home';
import Add from '../components/Prueba/Add';
import List from '../components/Prueba/List';
import Cards from '../components/Cards/Cards';

const AdoptreeRoutes = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fincas" element="" />
        <Route path="/adopta-un-arbol" element="" />
        <Route path="/checkout" element="" />

        <Route
          path="/pruebaRedux"
          element={
            <>
              <Cards />
              <Add /> 
              <List />
            </>
          }
        />
      </Routes>

      <Footer />
    </>
  );
};

export default AdoptreeRoutes;
