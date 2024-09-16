import Navbar from './components/Navbar/Navbar';
import Cards from './components/Cards/Cards';
import Beneficios from './components/Beneficios/Beneficios';
import Banner from './components/Banner/Banner';
import './App.css';
import Agriculture from './components/Agriculture/Agriculture';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Cards />
      <Beneficios />
      <Agriculture />
      <Footer />
    </>
  );
}

export default App;
