import React from 'react';
import './Footer.css';
import twitter from '../../assets/twitter.svg';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import pinterest from '../../assets/pinterest.svg';
import Logo from '../../assets/adoptree 1.png';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="section-container">
            <div className="section-content">
              <div className="logo-container">
                <img className="logo-image" src={Logo} alt="Adoptree Logo" />
                <h2>Adoptree</h2>
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
                    <img src={twitter} alt="Twitter Icon" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={instagram} alt="Instagram Icon" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={facebook} alt="Facebook Icon" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.pinterest.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={pinterest} alt="Pinterest Icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-section">
          <div className="section-container">
            <div className="section-content">
              <h2>Explora</h2>
              <ul>
                <li> <a href="#">• Sobre nosotros</a></li>
                <li><a href="#">• Adoptar</a></li>
                <li><a href="#">• Árboles</a></li>
                <li><a href="#">• Comprar</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-section">
          <div className="section-container">
            <div className="section-content">
              <h2>Contacto</h2>
              <p>(+54) 46648585</p>
              <p>info@adoptree.com</p>
              <p>Entre Ríos</p>
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
