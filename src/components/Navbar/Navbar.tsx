import { useEffect, useState } from 'react';
import LoginIcon from '@mui/icons-material/Login';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
// import NotificationsIcon from '@mui/icons-material/Notifications';

import Logo from '../../assets/adoptree 1.png';

import './Navbar.css';

export interface AnchorProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  style?: React.CSSProperties & { '--i'?: number };
}

const Navbar: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  // const [showModal, setShowModal] = useState<boolean>(false);
  // const [notificationsModal, setNotificationsModal] = useState<boolean>(false);
  // const modalRef = useRef<HTMLDivElement | null>(null);
  // const currentClickRef = useRef<EventTarget | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // const styles = {
  //   '--i': 5,
  //   display: window.innerWidth < 780 ? 'block' : 'none',
  // };

  return (
    <header
      className={`header py-4 xl:px-[200px] md:px-[60px] mobile:px-[30px] bg-white ${
        scrollPosition > 0 ? 'scrolled' : ''
      }`}
    >
      <div className="flex items-center">
        <div className="">
          <a href="/">
            <img className="w-[60px]" src={Logo}></img>
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
            className="text-sm"
            href="/users"
            style={{ '--i': 1 } as AnchorProps}
          >
            Sobre nosotros
          </a>
          <a
            className="text-sm"
            href="/blog"
            style={{ '--i': 3 } as AnchorProps}
          >
            Adoptar
          </a>
          <a
            className="text-sm"
            href="/contact"
            style={{ '--i': 4 } as AnchorProps}
          >
            Árboles
          </a>
          <a
            className="text-sm"
            href="/contact"
            style={{ '--i': 4 } as AnchorProps}
          >
            Contacto
          </a>
        </nav>
      </div>
      <div className="flex items-center gap-3 text-sm">
        <div className="hidden md:flex md:items-center active:text-[#00bf62]">
          <div className="flex items-center gap-3">
            <LoginIcon className="text-[#05264ebf] text-base font-light" />

            <a
              href="/api/auth/login"
              style={{ '--i': 6, margin: 0 } as AnchorProps}
              className="text-[#05264E] mobile:font-[500] mobile:text-[1.1rem] desktop:font-normal desktop:text-base"
            >
              Login
            </a>
            <button className="rounded-[10px] bg-[#4BAF47] text-white hover:bg-[#3B8838]">
              Adopta ahora
            </button>
          </div>
        </div>

        {/* <div className="md:flex items-center mobile:hidden ">
          <AccountCircleIcon />
          <CircleNotificationsIcon />
        </div> */}
      </div>
    </header>
  );
};

export default Navbar;
