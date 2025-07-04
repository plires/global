import { Link } from 'react-router-dom'

import './imagen-texto.css'

const Tracking = ({ imgSrc, title, description, link, dir = true }) => {
  const contentImg = (
    <div className='col-lg-6 contentImg'>
      <img
        data-aos='fade-up'
        className='compu img-fluid'
        src={imgSrc}
        alt='computadora tracking'
      />
    </div>
  )

  const contentData = (
    <div className='col-lg-6 contentData'>
      <div className='content'>
        <h3 dangerouslySetInnerHTML={{ __html: title }} />
        <p data-aos='fade-up'>{description}</p>
        <Link data-aos='fade-up' className='transition' to={link}>
          Ver más
        </Link>
      </div>
    </div>
  )

  return (
    <section className='imagenTexto'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-10 offset-lg-1'>
            <div className='row'>
              {dir ? (
                <>
                  {contentImg}
                  {contentData}
                </>
              ) : (
                <>
                  {contentData}
                  {contentImg}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tracking
