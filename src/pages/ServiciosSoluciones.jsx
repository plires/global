import {
  getServicioSoluciones,
  getAccordionServicioSoluciones,
} from '@/utils/dataUtils.js'

import Hero from '@/components/commons/Hero.jsx'
import Faja from '@/components/commons/Faja.jsx'
import ContentCards from '@/components/commons/ContentCards.jsx'
import Formulario from '@/components/commons/Formulario.jsx'

import Accordion from '@/components/commons/Accordion.jsx'

import heroMobile from '@/assets/img/servicios-soluciones/hero-mobile.webp'
import heroDesktop from '@/assets/img/servicios-soluciones/hero-desktop.webp'
import containerBackground from '@/assets/img/servicios-soluciones/container-background.webp'
import figura from '@/assets/img/servicios-soluciones/figura-der.webp'

import 'bootstrap/dist/js/bootstrap.js'

import './servicios-soluciones.css'

const ServiciosSoluciones = () => {
  const cards = getServicioSoluciones('items')
  const items = getAccordionServicioSoluciones('items')

  return (
    <section className='serviciosSoluciones'>
      <Hero
        imageMobile={heroMobile}
        imageDesktop={heroDesktop}
        title='Un servicio integral<br />que conecta personas,<br />procesos y tecnología'
      />

      <Faja
        description='Brindamos soluciones integrales que conectan tecnología, procesos y personas. Adaptamos cada operación a las necesidades de nuestros clientes para lograr <span>eficiencia, control y un crecimiento sostenido.</span>'
        colorDescription='var(--secondary-color)'
        background='var(--neutral-color)'
      />

      <section data-aos='fade-up' className='contentAcordion'>
        <img className='figura' src={figura} alt='figura derecha' />
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 col-xl-10 offset-xl-1'>
              <h2 className='h2'>Nuestros Servicios</h2>
              <Accordion items={items} />
            </div>
          </div>
        </div>
      </section>

      <ContentCards
        imgBackground={containerBackground}
        titleInferior='SOLUCIONES FULLCOMMERCE'
        parrafoInferior='<p>En J Global Cargo nos destacamos por implementar tecnología innovadora que mejora y agiliza las operaciones de nuestros clientes. Esto nos permite aumentar la eficiencia, reducir costos y potenciar el crecimiento de sus negocios.</p>'
        cards={cards}
        colorBackgroundCards='var(--secondary-color)'
        colorCards='white'
      />
      <Formulario title='Conectá con nosotros' />
    </section>
  )
}

export default ServiciosSoluciones
