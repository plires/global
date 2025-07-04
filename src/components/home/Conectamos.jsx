import ConectamosCard from '@/components/home/ConectamosCard.jsx'

import figuraDer from '@/assets/img/home/figuras-der.webp'
import figuraIzq from '@/assets/img/home/figuras-izq.webp'
import valores from '@/assets/img/valores.webp'
import informes from '@/assets/img/informes.webp'
import acompaniamiento from '@/assets/img/acompaniamiento.webp'
import tecnologia from '@/assets/img/tecnologia.webp'

import './conectamos.css'

const Conectamos = () => {
  return (
    <section data-aos='fade-up' className='conectamos'>
      <img
        className='img-fluid figuraIzq'
        src={figuraIzq}
        alt='figura izquierda'
      />
      <img
        className='img-fluid figuraDer'
        src={figuraDer}
        alt='figura derecha'
      />
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 contetTitle'>
            <h2 data-aos='fade-up'>Conectamos tu mundo</h2>
          </div>
          <div className='col-md-6'>
            <div className='row'>
              <ConectamosCard
                col={'col-6'}
                img={valores}
                altImg={'valores'}
                title={'Valores<br />Competitivos'}
              />
              <ConectamosCard
                col={'col-6'}
                img={informes}
                altImg={'informes'}
                title={'Informes<br />diarios'}
              />
              <ConectamosCard
                col={'col-6'}
                img={acompaniamiento}
                altImg={'acompaniamiento'}
                title={'Acompañamiento<br />personalizado'}
              />

              <ConectamosCard
                col={'col-6'}
                img={tecnologia}
                altImg={'tecnologia'}
                title={'Tecnología<br />de vanguardia'}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Conectamos
