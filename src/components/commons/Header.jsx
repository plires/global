import { useEffect, useRef, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

import logoLarge from '@/assets/img/logo-large.svg'
import logoSmall from '@/assets/img/logo-small.svg'
import IconHumberguer from '@/components/commons/IconHumberguer'
import CloseHumberguer from '@/components/commons/CloseHumberguer'

import '@/components/commons/header.css'

const Header = () => {
  const headerElement = useRef()
  const navElement = useRef()

  const [isNavMobileOpen, setIsNavMobileOpen] = useState(false)
  const [navMobile, setNavMobile] = useState(IconHumberguer)
  const [logo, setLogo] = useState(logoLarge)

  const changeIconMobile = () => {
    if (isNavMobileOpen) {
      setNavMobile(IconHumberguer)
      setIsNavMobileOpen(false)
      navElement.current.classList.remove('open')
    } else {
      setNavMobile(CloseHumberguer)
      setIsNavMobileOpen(true)
      navElement.current.classList.add('open')
    }
  }

  const closeNavMobile = () => {
    setIsNavMobileOpen(false)
    setNavMobile(IconHumberguer)
    navElement.current.classList.remove('open')
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY

      if (scrollPosition > 100) {
        headerElement.current.classList.add('fixed')
        setLogo(logoSmall)
      } else {
        headerElement.current.classList.remove('fixed')
        setLogo(logoLarge)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className='transition' ref={headerElement}>
      <section className='content_logo'>
        <Link to='/' onClick={() => closeNavMobile()}>
          <img
            className='logo transition img-fluid'
            src={logo}
            alt='logo app'
          />
        </Link>
      </section>
      <nav className='transition' ref={navElement}>
        <ul>
          <li>
            <NavLink
              className='transition'
              to='/'
              onClick={() => changeIconMobile()}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className='transition'
              to='/nosotros'
              onClick={() => changeIconMobile()}
            >
              Nosotros
            </NavLink>
          </li>
          <li>
            <NavLink
              className='transition'
              to='/servicios-soluciones'
              onClick={() => changeIconMobile()}
            >
              Servicios y Soluciones
            </NavLink>
          </li>
          <li>
            <NavLink
              className='transition'
              to='/tecnologia'
              onClick={() => changeIconMobile()}
            >
              Tecnologia
            </NavLink>
          </li>
          <li>
            <NavLink
              className='transition'
              to='/contacto'
              onClick={() => changeIconMobile()}
            >
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
      <span onClick={() => changeIconMobile()}>{navMobile}</span>
    </header>
  )
}

export default Header
