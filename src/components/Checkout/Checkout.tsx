import LocalMallIcon from '@mui/icons-material/LocalMall';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentIcon from '@mui/icons-material/Payment';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import DeleteIcon from '@mui/icons-material/Delete';
import naranjas from '../../assets/naranjas.jpg'
import farmerGirl from '../../assets/farmer-girl.svg'

const Checkout = () => {
  return (
    <section className='my-[92px]'>
        <div className='flex gap-[40px] px-[200px] py-[20px] bg-[#f9fafa]'>
            <div className='flex items-center gap-[8px] text-[#4BAF47]'>
                <LocalMallIcon />
                Tu cesta
            </div>
            <KeyboardArrowRightIcon className='text-gray-500' />
            <div className='flex items-center gap-[8px] text-[#b7bec7]'>
                <LocalShippingIcon />
                Envío
            </div>
            <KeyboardArrowRightIcon className='text-gray-500' />
            <div className='flex items-center gap-[8px] text-[#b7bec7]'>
                <PaymentIcon />
                Método de pago
            </div>
        </div>

        <div className='flex justify-between px-[200px] mt-[50px]'>
            <div>
                <div className='flex gap-[32px]'>
                    <img className='w-[200px] h-[170px] rounded-[8px]' src={naranjas} alt="" />
                    <div>
                        <div className='flex justify-between bg-[#f9fafa] p-[20px] gap-[150px] items-center rounded-[4px] text-[#7e8591]'>
                            <div>
                                <p className='text-gray-700 font-[500]'>Adopción arbol de naranjas ecológicas</p>
                                <p>Nombre del árbol</p>
                            </div>

                            <DeleteIcon />
                        </div>
                        <p className='mt-4 mb-2'>Cantidad reservada</p>
                        <div className='flex items-center gap-[20px]'>
                            <button className='px-[14px] py-[4px] bg-[#e9ecf3] rounded-[4px] text-[#bfc1c4] font-[600]'>-</button>
                            <span className='text-[#4BAF47] font-[600]'>3</span>
                            <button className='px-[14px] py-[4px] bg-[#4BAF47] rounded-[4px] text-white font-[600]'>+</button>
                        </div>
                    </div>
                </div>
                <div className='flex justify-end mt-[20px]'>
            <div>
                <p className='flex justify-end mb-2 font-[600]'>$ 6000.00</p>
                <p className='text-sm text-gray-500'>Coste de envío: $ 2000.00</p>
            </div>
        </div>
        <hr className='my-[20px]' />
        <p className='text-gray-500'>Las fechas de envío pueden variar en función de variables climatológicas.</p>
            </div>
            
            <div className='p-[20px] shadow rounded-[4px]'>
                <h3 className='text-xl font-semibold'>Resumen</h3>

                <div className='mt-[20px] flex items-center gap-[150px]'>
                    <span>Precio final</span>
                    <span className='text-xl font-bold text-[#4BAF47]'>$ 6000.00</span>
                </div>

                <button className="rounded-[10px] bg-[#4BAF47] text-white hover:bg-[#3B8838] my-6 w-full">
                    Ir a pagar
                </button>

                <div className='flex justify-center'>
                    <a className='text-[#4BAF47] text-xl text-center'>Seguir comprando</a>
                </div>
            </div>
        </div>

        <div className='border border-gray-200 p-[30px] mt-[50px] ml-[200px] mr-[570px] rounded-[4px] flex items-center gap-[20px]'>
            <img className='w-[60px]' src={farmerGirl} alt="" />
            <div>
                <h2 className='text-[18px] font-semibold mb-1'>¿Sabías que...?</h2>
                <p>Nuestra comunidad apoya la transición de 3899 hectáreas de Argentina hacia una agricultura más sostenible, ya sea ecológica o regenerativa</p>
            </div>
        </div>
       
    </section>
  )
}

export default Checkout