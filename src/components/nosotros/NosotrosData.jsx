import figuraDer from '@/assets/img/nosotros/rayas-der.webp'
import container from '@/assets/img/nosotros/nosotros-container.webp'

import './nosotros-data.css'

const NosotrosData = () => {
  return (
    <section data-aos='fade-up' className='nosotrosData'>
      <img
        className='img-fluid figuraDer'
        src={figuraDer}
        alt='figura derecha'
      />

      <div className='container'>
        <div className='row'>
          <div className='col-md-6 contentData'>
            <h2 data-aos='fade-up'>Nosotros</h2>
            <p data-aos='fade-up'>
              J Global Cargo nace con el respaldo de una sólida trayectoria en
              el sector logístico. Somos una empresa con profundo conocimiento
              del rubro y una clara misión: ofrecer soluciones integrales,
              eficientes y personalizadas para cada cliente.
            </p>
            <p data-aos='fade-up'>
              Creemos en la importancia de la innovación tecnológica, el
              seguimiento preciso y el acompañamiento constante en cada etapa
              del servicio. Nuestra mirada está puesta en construir relaciones
              duraderas y confiables, tanto a nivel nacional como internacional.
            </p>
            <p data-aos='fade-up'>
              Aspiramos a consolidarnos como un referente en la industria
              logística, creciendo junto a quienes confían en nosotros y
              adaptándonos a un entorno dinámico, ágil y cada vez más conectado.
            </p>
          </div>
          <div className='col-md-6 contentImg'>
            <img
              data-aos='fade-up'
              className='img-fluid containerImg'
              src={container}
              alt='container nosotros'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default NosotrosData
