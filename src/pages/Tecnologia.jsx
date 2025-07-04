import { getCardsFeatured } from '@/utils/dataUtils.js'

import Hero from '@/components/commons/Hero.jsx'
import Faja from '@/components/commons/Faja.jsx'
import CardFeatured from '@/components/commons/CardFeatured.jsx'
import Formulario from '@/components/commons/Formulario.jsx'

import heroMobile from '@/assets/img/tecnologia/hero-mobile.webp'
import heroDesktop from '@/assets/img/tecnologia/hero-desktop.webp'

import './tecnologia.css'

const Tecnologia = () => {
  const cards = getCardsFeatured('items')
  return (
    <section className='tecnologia'>
      <Hero
        imageMobile={heroMobile}
        imageDesktop={heroDesktop}
        title='Logística potenciada<br />con tecnología de<br />última generación'
      />

      <Faja
        description='<span>Contamos con tecnología líder en la industria</span> que permite diseñar y desarrollar procesos eficientes, mejorando notablemente la productividad y la calidad del servicio. Nuestra solución es ideal para simplificar y optimizar la gestión logística de cualquier organización.'
        colorDescription='var(--secondary-color)'
        background='var(--neutral-color)'
      />

      <section className='contentCardsFeatures'>
        <div className='container'>
          <div className='row'>
            {cards.map(item => (
              <CardFeatured key={item.id} item={item} col='col-md-6' />
            ))}
          </div>
        </div>
      </section>
      <section className='formGlobal'>
        <Formulario
          preTitle='¿Estás buscando un servicio de envío confiable y eficiente para tus productos?'
          title='Conectá con nosotros'
        />
      </section>
    </section>
  )
}

export default Tecnologia
