import { getServicioNosotros } from '@/utils/dataUtils.js'

import Hero from '@/components/commons/Hero.jsx'
import NosotrosData from '@/components/nosotros/NosotrosData.jsx'
import ContentCards from '@/components/commons/ContentCards.jsx'
import Formulario from '@/components/commons/Formulario.jsx'

import heroMobile from '@/assets/img/nosotros/hero-mobile.webp'
import heroDesktop from '@/assets/img/nosotros/hero-desktop.webp'
import barcoBackground from '@/assets/img/nosotros/barco-background.webp'

import './nosotros.css'

const Nosotros = () => {
  const cards = getServicioNosotros('items')
  return (
    <section className='nosotros'>
      <Hero
        imageMobile={heroMobile}
        imageDesktop={heroDesktop}
        title='Movemos mucho<br>más que cargas,<br>conectamos historias'
      />
      <NosotrosData />
      <ContentCards
        title='Para lograr esto, nos enfocamos en las siguientes metas:'
        imgBackground={barcoBackground}
        titleInferior='Gracias por elegir J Global Cargo'
        parrafoInferior='<p>En J Global Cargo, creemos que cada envío es más que una carga: es una conexión que une personas, negocios y destinos. Gracias a tu confianza, somos el puente que hace posible que tus productos lleguen con seguridad y a tiempo, fortaleciendo vínculos y oportunidades.<p>Nos apasiona ser parte de esa red de conexiones, ofreciendo soluciones logísticas que acercan lo que importa. Cada desafío es una oportunidad para acercarnos más a vos y a tus necesidades.<p>Gracias por conectar con nosotros y elegirnos como tu aliado en logística.'
        cards={cards}
        colorBackgroundCards='white'
        colorCards='black'
      />
      <Formulario title='Conectá con nosotros' />
    </section>
  )
}

export default Nosotros
