import { Link } from 'react-router-dom'

import styles from './datos.module.css'

const Datos = () => {
  return (
    <section className={`datosGlobal`}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-10 offset-lg-1'>
            <div className='row'>
              <div data-aos='fade-up' className='col-md-4'>
                <div className={`${styles.cardDato}`}>
                  <Link
                    rel='noopener'
                    target='_blank'
                    className='transition'
                    to={import.meta.env.VITE_GOOGLE_MAPS}
                  >
                    Polo industrial spegazzini
                  </Link>
                </div>
              </div>
              <div data-aos='fade-up' className='col-md-4'>
                <div className={`${styles.cardDato}`}>
                  <Link
                    rel='noopener'
                    target='_blank'
                    className='transition'
                    to={`tel:${import.meta.env.VITE_PHONE_LINK}`}
                  >
                    {import.meta.env.VITE_PHONE_LINK_TO_SHOW}
                  </Link>
                </div>
              </div>
              <div data-aos='fade-up' className='col-md-4'>
                <div className={`${styles.cardDato}`}>
                  <Link
                    rel='noopener'
                    target='_blank'
                    className='transition'
                    to={`mailto:${import.meta.env.VITE_EMAIL_RECIPENT}`}
                  >
                    info@jglobal.com.ar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Datos
