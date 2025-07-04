import styles from './faja.module.css'

const Faja = ({
  title = null,
  description = null,
  background = 'white',
  colorTitle = 'black',
  colorDescription = 'black',
}) => {
  return (
    <section
      style={{ background: background, color: colorTitle }}
      data-aos='fade-up'
      className={`${styles.faja} fajaGlobal`}
    >
      <div className='container-fluid p-0'>
        <div className='row'>
          <div className='col-md-8 offset-md-2 col-xl-6 offset-xl-3'>
            {title && <h2 style={{ color: colorTitle }}>{title}</h2>}
            {description && (
              <p
                dangerouslySetInnerHTML={{ __html: description }}
                style={{ color: colorDescription }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faja
