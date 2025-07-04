import { useState, useEffect } from 'react'
import { getImageURL } from '@/utils/dataUtils.js'

import { LuEyeClosed } from 'react-icons/lu'
import { RxEyeOpen } from 'react-icons/rx'

import styles from './card-featured.module.css'

const CardFeatured = ({ item, col = 'col-md-6' }) => {
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
    <div
      onMouseEnter={isDesktop ? () => setIsOpen(true) : undefined}
      onMouseLeave={isDesktop ? () => setIsOpen(false) : undefined}
      className={`${col}`}
    >
      <div className={`${styles.card} ${isOpen ? 'open' : ''}`}>
        <h3
          className={`transition ${styles.title}`}
          dangerouslySetInnerHTML={{ __html: item.title }}
        />
        <img
          className={`img-fluid ${styles.imgBack}`}
          src={getImageURL(item.imgSrc)}
          alt='analitycs'
        />
        <div className={`transition ${styles.contentDescription}`}>
          {item.description}
        </div>
        <div className={`transition ${styles.contentViewMore}`}>
          {isOpen ? (
            <LuEyeClosed
              onClick={() => setIsOpen(!isOpen)}
              className='transition'
            />
          ) : (
            <RxEyeOpen
              onClick={() => setIsOpen(!isOpen)}
              className={`${isDesktop ? '' : ''}`}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default CardFeatured
