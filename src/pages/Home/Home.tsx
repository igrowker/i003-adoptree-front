import Bienvenido from '../../components/Bienvenido/Bienvenido';
import { Agriculture } from '@mui/icons-material';
import Arboles from '../../components/Arboles/Arboles';
import Banner from '../../components/Banner/Banner';
import Cards from '../../components/Cards/Cards';
import Beneficios from '../../components/Beneficios/Beneficios';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <>
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

export default Home;
