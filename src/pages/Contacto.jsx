import { Link } from 'react-router-dom'

import HeroContacto from '@/components/contacto/HeroContacto'
import Formulario from '@/components/commons/Formulario.jsx'
import Datos from '@/components/contacto/Datos.jsx'
import Mapa from '@/components/contacto/Mapa.jsx'

import './contacto.css'

const Contacto = () => {
  return (
    <section className='contacto'>
      <HeroContacto />
      <Formulario />
      <Datos />
      <Mapa />
    </section>
  )
}

export default Contacto
