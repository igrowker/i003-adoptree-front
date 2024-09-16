import Navbar from './components/Navbar/Navbar';
import Cards from './components/Cards/Cards';
import Beneficios from './components/Beneficios/Beneficios';
import Banner from './components/Banner/Banner';
import './App.css';
import Agriculture from './components/Agriculture/Agriculture';
import Arboles from './components/Arboles/Arboles';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Cards />
      <Beneficios />
      <Agriculture />
      <Arboles />
    </>
  );
};

export default App;
