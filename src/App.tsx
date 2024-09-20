import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import './App.css';
import FincaInfo from './pages/FincaInfo/FincaInfo';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const App: React.FC = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<FincaInfo />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
