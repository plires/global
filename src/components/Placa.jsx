import slideMobile from './../assets/img/background-mobile.webp'
import slideDesktop from './../assets/img/background-desktop.webp'
import logo from './../assets/img/logo.svg'

import './placa.css'

const Header = () => {
  return (
    <section data-aos='fade-up' className='header'>
      <picture>
        <source media='(max-width: 768px)' srcSet={slideMobile} />
        <img
          className='img-fluid back'
          src={slideDesktop}
          alt='header J Global'
        />
      </picture>
      <div className='content'>
        <img className='logo' src={logo} alt='logo J Global' />
        <a className='btn btn-primary' href='mailto:info@jglobal.com.ar'>
          CONTÁCTANOS
        </a>
      </div>
    </section>
  )
}

export default Header
