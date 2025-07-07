import { BrowserRouter as Router, Routes, Route } from 'react-router'
import ScrollToTop from '@/utils/scrollToTop'

import { ToastContainer } from 'react-toastify'

import Header from '@/components/commons/Header'
import Footer from '@/components/commons/Footer'

import Home from '@/pages/Home'
import Nosotros from '@/pages/Nosotros'
import ServiciosSoluciones from '@/pages/ServiciosSoluciones.jsx'
import Tecnologia from '@/pages/Tecnologia.jsx'
import Contacto from '@/pages/Contacto.jsx'
import NotFound from '@/pages/NotFound'

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className='page'>
          <ToastContainer autoClose={false} />
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/nosotros' element={<Nosotros />} />
            <Route
              path='/servicios-soluciones'
              element={<ServiciosSoluciones />}
            />
            <Route path='/tecnologia' element={<Tecnologia />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  )
}

export default App
