import Bienvenido from '../../components/Bienvenido/Bienvenido';
import Arboles from '../../components/Arboles/Arboles';
import Banner from '../../components/Banner/Banner';
import Cards from '../../components/Cards/Cards';
import Beneficios from '../../components/Beneficios/Beneficios';
import Agriculture from '../../components/Agriculture/Agriculture';
import Agroadopcion from '../../components/Agroadopcion/Agroadopcion';

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
    </>
  );
};

export default Home;
