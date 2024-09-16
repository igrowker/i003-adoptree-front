import Navbar from './components/Navbar/Navbar';
import Cards from './components/Cards/Cards';
import Beneficios from './components/Beneficios/Beneficios';
import Banner from './components/Banner/Banner';
import './App.css';
import Agriculture from './components/Agriculture/Agriculture';
import Arboles from './components/Arboles/Arboles';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Cards />
      <Beneficios />
      <Agriculture />
      <Arboles />
      <Footer />
    </>
  );
};

export default App;
