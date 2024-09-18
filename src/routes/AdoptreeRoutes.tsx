import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Home from "../pages/Home/Home";

const AdoptreeRoutes = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fincas" element="" />
        <Route path="/adopta-un-arbol" element="" />
        <Route path="/checkout" element="" />
      </Routes>

      <Footer />
    </>
  );
};

export default AdoptreeRoutes;
