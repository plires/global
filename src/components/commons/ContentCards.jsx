import CardServicios from '@/components/commons/CardServicios.jsx'

import figuraIzq from '@/assets/img/rayas-izq.webp'

import './content-cards.css'

const ContentCards = ({
  title = null,
  cards,
  titleInferior,
  imgBackground,
  parrafoInferior,
  colorBackgroundCards,
  colorCards,
}) => {
  return (
    <section data-aos='fade-up' className='sectionContentCards'>
      <img
        className='img-fluid figuraIzq'
        src={figuraIzq}
        alt='figura izquierda'
      />

      <div className='container contentFrase'>
        <div className='row'>
          <div className='col-md-12'>
            {title && <p className='frase'>{title}</p>}
          </div>
          {cards.map(item => (
            <CardServicios
              key={item.id}
              item={item}
              col='col-md-4'
              colorBackgroundCards={colorBackgroundCards}
              colorCards={colorCards}
            />
          ))}
        </div>
      </div>

      <div className='container-fluid contentImg'>
        <div className='row'>
          <div className='col-md-12 p-0'>
            <img
              className='img-fluid barcoImg'
              src={imgBackground}
              alt='barco background'
            />
          </div>
        </div>
      </div>

      <div className='container contentData'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='data'>
              <h2>{titleInferior}</h2>
              <div dangerouslySetInnerHTML={{ __html: parrafoInferior }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContentCards
