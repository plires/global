import servicios from '@/data/card-servicios.json'
import serviciosNosotros from '@/data/card-servicios-nosotros.json'
import serviciosSoluciones from '@/data/card-servicios-soluciones.json'
import accordionServicioSoluciones from '@/data/accordion-servicios-soluciones.json'
import cardsFeatured from '@/data/card-featured.json'

export const getServicios = key => servicios[key]
export const getServicioNosotros = key => serviciosNosotros[key]
export const getServicioSoluciones = key => serviciosSoluciones[key]
export const getAccordionServicioSoluciones = key =>
  accordionServicioSoluciones[key]
export const getCardsFeatured = key => cardsFeatured[key]

export const scrollToTop = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })
}

export const validation = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Ingresá un nombre'
  }
  if (!values.email) {
    errors.email = 'Ingresá tu email'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Ingresá un correo válido'
  }
  if (!values.phone) {
    errors.phone = 'Ingresá un teléfono'
  }
  if (!values.comments) {
    errors.comments = 'Enviá tu consulta'
  }
  return errors
}

export const getImageURL = name => {
  return new URL(`../assets/img/${name}`, import.meta.url).href
}
