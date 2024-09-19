import React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import Logo from '../../assets/adoptree 1.png';
import PinterestIcon from '@mui/icons-material/Pinterest';
import GrassIcon from '@mui/icons-material/Grass';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="section-container">
            <div className="section-content">
              <div className="logo-container">
                <img className="logo-image" src={Logo} alt="Adoptree Logo" />
                <h2 className="text-[22px] font-[700]">Adoptree</h2>
              </div>
              <p>
                Adopta un árbol cítrico y sé parte de la agricultura sostenible.
                Recibe fruta fresca en tu casa mientras ayudas a regenerar
                nuestros ecosistemas.
              </p>
              <div className="social-icons">
                <div>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <XIcon />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FacebookOutlinedIcon />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.pinterest.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PinterestIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-section">
          <div className="section-container">
            <div className="section-content">
              <h2 className="font-semibold">Explora</h2>
              <div className="flex items-center gap-1 mt-[5px] mb-[15px]">
                <div className="w-[45px] h-[4px] bg-[#4BAF47] rounded-[2px]"></div>
                <div className="w-[4px] h-[4px] rounded-[2px] bg-[#4BAF47]"></div>
              </div>
              <ul>
                <li>
                  {' '}
                  <a href="#" className="flex items-center gap-2">
                    <GrassIcon /> Sobre nosotros
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2">
                    <GrassIcon /> Adoptar
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2">
                    <GrassIcon /> Árboles
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2">
                    <GrassIcon /> Comprar
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-section">
          <div className="section-container">
            <div className="section-content">
              <h2 className="font-semibold">Contacto</h2>
              <div className="flex items-center gap-1 mt-[5px] mb-[15px]">
                <div className="w-[45px] h-[4px] bg-[#4BAF47] rounded-[2px]"></div>
                <div className="w-[4px] h-[4px] rounded-[2px] bg-[#4BAF47]"></div>
              </div>
              <p className="flex items-center gap-2">
                <LocalPhoneIcon />
                (+54) 46648585
              </p>
              <p className="flex items-center gap-2">
                <EmailIcon />
                info@adoptree.com
              </p>
              <p className="flex items-center gap-2">
                <FmdGoodIcon />
                Entre Ríos
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Adoptree 2024 - Todos los derechos reservados</p>
        <p>
          <a href="#">Términos de uso</a> |{' '}
          <a href="#">Política de privacidad</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
