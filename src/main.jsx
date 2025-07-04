import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'

import { GoogleReCaptchaProvider } from 'react19-google-recaptcha-v3'
import StoreProvider from './context/StoreProvider.jsx'

import 'normalize.css/normalize.css'
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/fonts.css'
import './assets/css/app.css'

import './assets/js/app.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <GoogleReCaptchaProvider
          reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY_V3}
        >
          <App />
        </GoogleReCaptchaProvider>
      </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
