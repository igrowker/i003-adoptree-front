import Bienvenido from '../../components/Bienvenido/Bienvenido';
import Arboles from '../../components/Arboles/Arboles';
import Banner from '../../components/Banner/Banner';
import Cards from '../../components/Cards/Cards';
import Beneficios from '../../components/Beneficios/Beneficios';
import Agriculture from '../../components/Agriculture/Agriculture';
import Agroadopcion from '../../components/Agroadopcion/Agroadopcion';
import Donaciones from '../../components/Donaciones/Donaciones';

const Home = () => {
  return (
    <>
      <Bienvenido />
      <Agriculture />
      <Arboles />
      <Banner />
      <Cards />
      <Agroadopcion />
      <Beneficios />
      <Donaciones />
    </>
  );
};

export default Home;
