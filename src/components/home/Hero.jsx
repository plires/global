import heroMobile from '@/assets/img/home/hero-mobile.webp'
import heroDesktop from '@/assets/img/home/hero-desktop.webp'

import './hero.css'

const Hero = () => {
  return (
    <section data-aos='fade-up' className='heroHome'>
      <picture>
        <source media='(max-width: 767px)' srcSet={heroMobile} />
        <img className='img-fluid imgHero' src={heroDesktop} alt='Hero site' />
      </picture>
      <h1>
        Todo se <br />
        conecta
      </h1>
      <h2>Conocé todos nuestros servicios</h2>
    </section>
  )
}

export default Hero
