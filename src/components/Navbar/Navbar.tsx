import { useEffect, useRef, useState } from 'react';
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {
  MdOutlineLogout,
  MdOutlineSpaceDashboard,
} from 'react-icons/md';
import { useLanguage } from '../../LanguageContext/LanguageContext';
import Logo from '../../assets/adoptree 1.png';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../store/features/userSlice';
import { RootState } from '../../types/types';
import { io } from 'socket.io-client';
import './Navbar.css';

export interface AnchorProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  style?: React.CSSProperties & { '--i'?: number };
}

const Navbar: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [notificationsModal, setNotificationsModal] = useState<boolean>(false);
  // const [notifications, setNotifications] = useState<any[]>([])

  const modalRef = useRef<HTMLDivElement | null>(null);
  const currentClickRef = useRef<EventTarget | null>(null);

  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { language } = useLanguage();

  const BACK_URL = import.meta.env.VITE_BACK_URL;

  const handleShowNotifications = (event: React.MouseEvent<HTMLElement>) => {
    currentClickRef.current = event.target;
    setNotificationsModal((prevShowNotification) => !prevShowNotification);
  };

  const handleCloseNotifications = () => {
    setNotificationsModal(false);
  };

  const handleShowModal = (event: React.MouseEvent<HTMLElement>) => {
    currentClickRef.current = event.target;
    setShowModal((prevShowModal) => !prevShowModal);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/auth/login');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current?.contains(event.target as Node) && // Operador de aserción de tipo as Node para asegurarnos de que event.target sea un nodo del DOM. Es necesario porque event.target puede ser null
        event.target !== currentClickRef.current
      ) {
        handleCloseModal();
        handleCloseNotifications();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const socket = io(`${BACK_URL}`, {
      withCredentials: true,
      query: { userId: user?.id }, // Enviar el userId al conectar el socket
    });

    socket.on('new_adoption', (adoption) => {
      console.log('Nueva adopción:', adoption);
      // Aquí puedes mostrar la notificación al usuario
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <header
      className={`header py-4 xl:px-[200px] 2xl:px-[130px] md:px-[60px] mobile:px-[30px] bg-white ${
        scrollPosition > 0 ? 'scrolled' : ''
      }`}
    >
      <div className="flex items-center">
        <div className="">
          <a href="/">
            <img
              className="w-[60px] 4xl:w-[80px]"
              src={Logo}
              alt="Logo de Adoptree"
            />
          </a>
        </div>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="icons">
          <i id="menu-icon" className="icon">
            &#9776;
          </i>
          <i id="close-icon" className="icon">
            &#10005;
          </i>
        </label>
        <nav className="navbar">
          <a
            className="text-sm 4xl:text-[20px]"
            href="/about"
            style={{ '--i': 1 } as AnchorProps}
          >
            {language === 'es' ? 'Sobre nosotros' : 'About Us'}
          </a>
          <a
            className="text-sm 4xl:text-[20px]"
            href="/adopta-un-arbol"
            style={{ '--i': 3 } as AnchorProps}
          >
            {language === 'es' ? 'Adoptar' : 'Adopt'}
          </a>
          <a
            className="text-sm 4xl:text-[20px]"
            href="/impacto-ambiental"
            style={{ '--i': 4 } as AnchorProps}
          >
            {language === 'es' ? 'Impacto' : 'Impact'}
          </a>
          <a
            className="text-sm 4xl:text-[20px]"
            href="/fincas"
            style={{ '--i': 4 } as AnchorProps}
          >
            {language === 'es' ? 'Fincas' : 'Farms'}
          </a>
        </nav>
      </div>
      <div className="flex items-center gap-3 text-sm">
        <div className="hidden md:flex md:items-center active:text-[#00bf62]">
          <div className="flex items-center gap-3">
            {!user && (
              <div className="flex items-center gap-[5px]">
                <LoginIcon className="text-[#05264ebf] text-base font-light" />
                <Link
                  to="/auth/login"
                  className="text-[#05264E] mobile:font-[500] mobile:text-[1.1rem] desktop:font-normal desktop:text-base 4xl:text-[20px]"
                >
                  {language === 'es' ? 'Inicia sesión' : 'Login'}
                </Link>
              </div>
            )}
            <button className="text-white bg-gradient-to-r from-green-500 to-green-600 rounded-[10px] shadow-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform">
              <a href="/adopta-un-arbol">
                {language === 'es' ? 'Adopta ahora' : 'Adopt now'}
              </a>
            </button>

            {user && (
              <div className="md:flex items-center mobile:hidden ">
                <div
                  onClick={handleShowModal}
                  className="p-[6px] bg-white border border-gray-300 rounded-full cursor-pointer"
                >
                  <PersonIcon className="text-[#4BAF47] text[20px]" />
                </div>
                <div
                  onClick={handleShowNotifications}
                  className="p-[6px] bg-white border border-gray-300 rounded-full ml-2 cursor-pointer"
                >
                  <NotificationsIcon className="text-[#4BAF47] text[20px]" />
                </div>

                {showModal && (
                  <div
                    className="absolute w-[11rem] md:top-[3.8rem] desktop:top-[4.1rem] bg-white gap-4 md:right-[96px] lg:right-[235px] 2xl:right-[166px] p-5 rounded shadow-md"
                    ref={modalRef}
                  >
                    <div>
                      <ul className="flex flex-col gap-3">
                        <li
                          onClick={handleCloseModal}
                          className="flex items-center gap-2"
                        >
                          <MdOutlineSpaceDashboard className="text-[#05264E] text-base" />
                          <Link to="/dashboard" className="text-[#05264E]">
                            {language === 'es'
                              ? 'Panel de control'
                              : 'Dashboard'}
                          </Link>
                        </li>
                        {user && (
                          <li
                            onClick={handleLogout}
                            className="flex items-center gap-2 cursor-pointer"
                          >
                            <MdOutlineLogout className="text-[#05264E] text-base" />
                            <span className="text-[#05264E]">
                              {language === 'es' ? 'Cerrar sesión' : 'Logout'}
                            </span>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                )}
                {notificationsModal && (
                  <div
                    className="absolute md:top-[3.8rem] desktop:top-[4.1rem] w-[14rem] bg-white gap-4 md:right-[50px] lg:right-[185px] 2xl:right-[122px] px-1 min-h-[7.8rem] rounded shadow-md"
                    ref={modalRef}
                  >
                    <div className="flex flex-col items-center">
                      <h5 className="text-base font-medium text-[#05264E] mt-5">
                        {language === 'es' ? 'Tus notificaciones' : 'Your Notifications'}
                      </h5>
                      {/* {notifications && (
                    <div className="w-full">
                      <ul>
                        {notifications.map((notification) => (
                          <></>
                        ))}
                      </ul>
                    </div>
                  )} */}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
