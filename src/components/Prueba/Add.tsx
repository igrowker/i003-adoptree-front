import { useRef } from 'react'
import { useAppDispatch } from '../../store/store';
import { setUser } from '../../store/features/userSlice';

const Add = () => {
    const nombre = useRef<string>(''); 
    const correo = useRef<string>(''); 
    const direccion = useRef<string>(''); 
    const dispatch = useAppDispatch();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(setUser({nombre: nombre.current, correo: correo.current, direccionEnvio: direccion.current}));
    }
    
  return (
    <form className='border rounded-md p-2 shadow-md m-2' onSubmit={handleSubmit}>
        <label htmlFor="">Nombre usuario:</label>
        <input className='border rounded-md p-2 mx-2' type="text"  onChange={e=>nombre.current=e.target.value}/>
        <label htmlFor="">Correo usuario:</label>
        <input className='border rounded-md p-2 mx-2' type="text"  onChange={e=>correo.current=e.target.value}/>
        <label htmlFor="">Direccion de envio:</label>
        <input className='border rounded-md p-2 mx-2' type="text"  onChange={e=>direccion.current=e.target.value}/>
        <button 
        className='bg-violet-500 text-white rounded-md px-4 py-2 cursor-pointer hover:bg-violet-600 active:bg-violet-700' 
        type='submit'>Enviar</button>
        
    </form>
  )
}

export default Add