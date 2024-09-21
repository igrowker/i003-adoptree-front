import { useAppSelector } from '../../store/store';

interface Usuario {
  id: number;
  nombre: string;
  correo: string;
  direccionEnvio: string;
}

const List = () => {
  const usuarios = useAppSelector((state) => state.usuario.usuarios) as Usuario[];
  return (
    <div className='rounded-md shadow border m-2 p-2'>
      <h1>Lista de usuarios</h1>
      <table className='rounded-md'>
        <thead>
          <tr className='bg-gradient-to-b from-sky-400 to-sky-600 text-white'>
            <th className='p-2 border rounded'>Id:</th>
            <th className='p-2 border rounded'>Nombre</th>
            <th className='p-2 border rounded'>Correo</th>
            <th className='p-2 border rounded'>Direccion de envio</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr className='even:bg-slate-50' key={usuario.id}>
              <td className='p-2'>{usuario.id}</td>
              <td className='p-2'>{usuario.nombre}</td>
              <td className='p-2'>{usuario.correo}</td>
              <td className='p-2'>{usuario.direccionEnvio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
