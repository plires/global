import Hero from '@/components/home/Hero.jsx'
import NuestrosServicios from '@/components/home/NuestrosServicios.jsx'
import Conectamos from '@/components/home/Conectamos.jsx'
import ImagenTexto from '@/components/home/ImagenTexto.jsx'
import Faja from '@/components/commons/Faja.jsx'
import Formulario from '@/components/commons/Formulario.jsx'

import footerDesktop from '@/assets/img/home/footerDesktop.webp'
import footerMobile from '@/assets/img/home/footerMobile.webp'

import compu from '@/assets/img/home/tracking.webp'
import barco from '@/assets/img/home/barco.webp'

import './home.css'

const Home = () => {
  return (
    <section className='home'>
      <Hero />
      <NuestrosServicios />
      <Conectamos />
      <ImagenTexto
        imgSrc={compu}
        title='Tracking de envios'
        description='Con nuestra tecnología de avanzada, seguí tu envío al instante y conocé su estado en cada etapa del recorrido.'
        link='#'
      />

      <ImagenTexto
        imgSrc={barco}
        title='Arribos en<br />tiempo real'
        description='Información de carga para planicar y coordinar sus operaciones eficientemente.'
        link='#'
        dir={false}
      />
      <Faja
        title='Unimos distancias'
        colorTitle='white'
        background='linear-gradient(to right, #b31218 0%, #ad1218 60%, #1a171b 100%)'
      />
      <Formulario title='Conectá con nosotros' />
      <section className='bottom'>
        <picture>
          <source media='(max-width: 576px)' srcSet={footerMobile} />
          <img className='img-fluid' src={footerDesktop} alt='imagen bottom' />
        </picture>
      </section>
    </section>
  )
}

export default Home
