import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getImageURL } from '@/utils/dataUtils.js'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

import './card-servicios.css'

const CardServicios = ({ col, item }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768)
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className={`${col} p-0 cardServicios`}>
      <div
        onMouseEnter={isDesktop ? () => setIsOpen(true) : undefined}
        onMouseLeave={isDesktop ? () => setIsOpen(false) : undefined}
        className={`content transition ${isOpen ? 'open' : ''}`}
      >
        <img
          className='img-fluid'
          src={getImageURL(item.imgSrc)}
          alt='despachantes'
        />
        <div className='contentData'>
          {isOpen ? (
            <IoIosArrowDown
              onClick={() => setIsOpen(!isOpen)}
              className='transition flecha'
            />
          ) : (
            <IoIosArrowUp
              onClick={() => setIsOpen(!isOpen)}
              className={`flecha ${isDesktop ? '' : 'flechaAnimada'}`}
            />
          )}

          <p onClick={() => setIsOpen(!isOpen)} className='title transition'>
            {item.title}
          </p>
          <p className='description transition'>{item.description}</p>
          <Link className='transition' to='/servicios-soluciones'>
            ver más
          </Link>
        </div>
        <div
          className={`transition ${isOpen ? 'overlay open' : 'overlay'}`}
        ></div>
      </div>
    </div>
  )
}

export default CardServicios
