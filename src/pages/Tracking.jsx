import { useState } from 'react'
import './traking.css'

const TOKEN = import.meta.env.VITE_TOKEN_TRACKING
console.log('Token de tracking:', TOKEN)

const Tracking = () => {
  const [code, setCode] = useState('')
  const [trackingUrl, setTrackingUrl] = useState('')
  const [modalOpen, setModalOpen] = useState(false)

  const handleSearch = (e) => {
    e.preventDefault()
    if (!code.trim()) return
    setTrackingUrl(
      `https://shipping.driv.in/tracking?token=${TOKEN}&code=${code.trim()}`
    )
    setModalOpen(true)
  }

  const handleClose = () => {
    setModalOpen(false)
    setTrackingUrl('')
  }

  return (
    <section className='traking'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 text-center'>
            <h1>Tracking</h1>
            <h2>Revisá el estado de tu pedido</h2>
            <form onSubmit={handleSearch} className='traking__form'>
              <div className='traking__input-group'>
                <input
                  type='text'
                  className='traking__input'
                  placeholder='Ingresá tu código de seguimiento'
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                />
                <button type='submit' className='traking__btn'>
                  Buscar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className='traking__overlay' onClick={handleClose}>
          <div
            className='traking__modal'
            onClick={(e) => e.stopPropagation()}
          >
            <div className='traking__modal-header'>
              <span className='traking__modal-title'>Estado de tu pedido</span>
              <button
                className='traking__modal-close'
                onClick={handleClose}
                aria-label='Cerrar'
              >
                &times;
              </button>
            </div>
            <div className='traking__modal-body'>
              <iframe
                src={trackingUrl}
                title='Seguimiento de pedido'
                className='traking__iframe'
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Tracking
