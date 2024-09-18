import imgLimones from '../../assets/img-limones.png';
import imgNaranjero from '../../assets/img-naranjero.png';
import './Agroadopcion.css';

const Agroadopcion: React.FC = () => {
  return (
    <section className="bg-[#f8f7f0] py-20 px-[200px] my-[100px]">
      <div className="container flex flex-col items-center text-center">
        <p className="text-orange-500 mb-2 fuentePersonalizada">
          Agroadopcion ecologica
        </p>
        <h2 className="text-5xl font-bold text-gray-900 mb-[40px]">
          ¿En que consisté la adopción de un árbol?
        </h2>

        <div className="bg-white rounded p-9 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-9 mb-9 md:mb-0">
              <p className="text-left text-gray-700 text-agro">
                Adoptá un cítrico de nuestro huerto de Entre Ríos. Vas a poder
                verlo crecer a través de fotos en tu zona de usuario y recibir
                tu cosecha de naranjas en tu casa. <br />
                ¿Ya lo tenés decidido? Hacé <b><a href="#!" className="text-gray-700">clic acá</a></b> para comenzar la
                adopción de tu naranjo. <br />
                Gracias a las adopciones, podemos financiar las prácticas
                regenerativas que estamos implementando para preservar los
                ecosistemas locales.
              </p>
            </div>
            <div className="md:col-span-3 mb-3 md:mb-0">
              <img
                src={imgLimones}
                alt="ImgLimones"
                className="shadow-lg w-[294px]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-6">
          <div className="md:col-span-3 mb-3 md:mb-0">
              <img
                src={imgNaranjero}
                alt="imgNaranjero"
                className="shadow-lg w-[294px] h-[454px]"
              />
            </div>
            <div className="md:col-span-9 mb-9 md:mb-0">
              <p className="text-left text-gray-700 text-agro">
              La producción actual de naranjas está reservada para los dueños de los árboles. De esta manera, podemos cultivar naranjas de forma ecológica bajo demanda y enviarlas directamente del árbol a tu casa, sin tratamientos postcosecha ni pasar por cámaras de frío.</p>

              <p className="text-left text-gray-700 text-agro mt-6 font-bold">¿Cómo podés llegar a ser dueño de un árbol?</p>

              <ol className="list-decimal px-6">
                <li className="text-left">Decidí cuántas naranjas querés reservar para la primera temporada.</li>
                <li className="text-left">Poné un nombre a tu árbol.</li>
                <li className="text-left">Cuando confirmes la adopción de tu naranjo, te vamos a dar acceso a un huerto en tu área privada para que puedas seguir su evolución, planificar los envíos de tu cosecha, descargarte un certificado de propiedad o regalar el árbol a quien vos quieras.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agroadopcion;
