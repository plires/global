import { NavLink, Link } from 'react-router'

import { FiMail } from 'react-icons/fi'
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa'

import logo from '@/assets/img/logo-vertical.svg'

import './footer.css'

const Footer = () => {
  return (
    <footer className='container-fluid'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 content'>
            <img
              className='img-fluid logoFooter'
              src={logo}
              alt='logo footer'
            />
            <ul className='navFooter'>
              <li>
                <NavLink className='transition' to='/'>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className='transition' to='/nosotros'>
                  Nosotros
                </NavLink>
              </li>
              <li>
                <NavLink className='transition' to='/servicios-soluciones'>
                  Servicios y Soluciones
                </NavLink>
              </li>
              <li>
                <NavLink className='transition' to='/tecnologia'>
                  Tecnologia
                </NavLink>
              </li>
              <li>
                <NavLink className='transition' to='/contacto'>
                  Contacto
                </NavLink>
              </li>
            </ul>
            <div className='contentSocial'>
              <Link
                className='transition'
                to={`mailto: ${import.meta.env.VITE_EMAIL_RECIPENT}`}
                target='_blank'
                rel='noopener'
              >
                <FiMail />
              </Link>
              {/* <Link
                className='transition'
                to={import.meta.env.VITE_FACEBOOK}
                target='_blank'
                rel='noopener'
              >
                <FaWhatsapp />
              </Link> */}
              <Link
                className='transition'
                to={import.meta.env.VITE_FACEBOOK}
                target='_blank'
                rel='noopener'
              >
                <FaFacebook />
              </Link>

              <Link
                className='transition'
                to={import.meta.env.VITE_INSTAGRAM}
                target='_blank'
                rel='noopener'
              >
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
