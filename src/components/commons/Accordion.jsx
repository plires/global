import { Link } from 'react-router-dom'

import styles from './accordion.module.css'

let accordionIdCounter = 0

const Accordion = ({ items, parentId = '', subAcordion = false }) => {
  return (
    <div
      className={`accordion ${styles.acordion}`}
      id={`accordion-${parentId}`}
    >
      {items.map((item, index) => {
        const id = `${parentId}-${index}-${accordionIdCounter++}`
        const headingId = `heading-${id}`
        const collapseId = `collapse-${id}`

        const hasChildren =
          Array.isArray(item.children) && item.children.length > 0
        const anyChildHasChildren =
          hasChildren &&
          item.children.some(child => Array.isArray(child.children))

        return (
          <div
            className={`accordion-item ${styles.item} ${subAcordion ? styles.subAcordion : ''}`}
            key={id}
          >
            <h2 className={`accordion-header`} id={headingId}>
              <button
                className={`accordion-button collapsed transition ${styles.button} ${subAcordion ? styles.btnSubAcordion : ''}`}
                type='button'
                data-bs-toggle='collapse'
                data-bs-target={`#${collapseId}`}
                aria-expanded='false'
                aria-controls={collapseId}
              >
                {item.title}
              </button>
            </h2>

            <div
              id={collapseId}
              className={`accordion-collapse collapse`}
              aria-labelledby={headingId}
              data-bs-parent={`#accordion-${parentId}`}
            >
              <div className={`accordion-body ${styles.body} `}>
                {hasChildren ? (
                  anyChildHasChildren ? (
                    // 🔁 Subniveles: renderiza nuevo Accordion
                    <Accordion
                      items={item.children}
                      parentId={id}
                      subAcordion={true}
                    />
                  ) : (
                    <>
                      <div className='row'>
                        {/* 🧾 Subtítulo */}
                        {item.subtitulo && (
                          <div
                            className={`col-md-12 ${styles.contentSubtitle}`}
                          >
                            <h5 className={`${styles.subtitle}`}>
                              {item.subtitulo}
                            </h5>
                          </div>
                        )}

                        {/* 🟦 Columna izquierda */}
                        <div className='col-md-6'>
                          <ul className='mb-0'>
                            {item.children
                              .filter(child => child.col === 'izq')
                              .map((child, i) => (
                                <li key={`izq-${i}`}>{child.title}</li>
                              ))}
                          </ul>
                        </div>

                        {/* 🟥 Columna derecha */}
                        <div className='col-md-6'>
                          <ul className='mb-0'>
                            {item.children
                              .filter(child => child.col === 'der')
                              .map((child, i) => (
                                <li key={`der-${i}`}>{child.title}</li>
                              ))}
                          </ul>
                        </div>

                        {/* 🔗 Enlace opcional */}
                        {item.link && item.link.url && (
                          <div className='col-md-12 text-center mt-3'>
                            <Link
                              to={item.link.url}
                              className={`btn btn-primary ${styles.btnLink}`}
                            >
                              {item.link.text}
                            </Link>
                          </div>
                        )}
                      </div>
                    </>
                  )
                ) : (
                  <p>Sin contenido</p>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Accordion
