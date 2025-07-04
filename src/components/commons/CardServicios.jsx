import { getImageURL } from '@/utils/dataUtils.js'

import styles from './card-servicios.module.css'

const CardServiciosNosotros = ({
  item,
  col,
  colorBackgroundCards,
  colorCards,
}) => {
  return (
    <div data-aos='fade-up' className={`${col}`}>
      <div
        style={{ background: colorBackgroundCards, color: colorCards }}
        className={`${styles.contentCard}`}
      >
        <img
          className={`img-fluid ${styles.icon}`}
          src={getImageURL(item.imgSrc)}
          alt={item.title}
        />
        <h3 dangerouslySetInnerHTML={{ __html: item.title }} />
        <p>{item.description}</p>
      </div>
    </div>
  )
}
export default CardServiciosNosotros
