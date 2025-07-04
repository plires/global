import CardServicios from '@/components/home/CardServicios.jsx'
import { getServicios } from '@/utils/dataUtils.js'

import './nuestros-servicios.css'

const NuestrosServicios = () => {
  const servicios = getServicios('items')
  return (
    <section data-aos='fade-up' className='nuestrosServicios'>
      <div className='container-fluid'>
        <div className='row'>
          {servicios.map(item => (
            <CardServicios key={item.id} col='col-sm-6 col-lg-3' item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default NuestrosServicios
