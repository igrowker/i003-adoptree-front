import Navbar from './components/Navbar/Navbar';
import Cards from './components/Cards/Cards';
import Beneficios from './components/Beneficios/Beneficios';
import Banner from './components/Banner/Banner';
import Agriculture from './components/Agriculture/Agriculture';
import Bienvenido from './components/Bienvenido/Bienvenido';
import Arboles from './components/Arboles/Arboles';
import Footer from './components/Footer/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Bienvenido />
      <Agriculture />
      <Arboles />
      <Banner />
      <Cards />
      <Beneficios />
      <Footer />
    </>
  );
};

export default App;
