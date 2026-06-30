import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleReCaptchaProvider reCaptchaKey="6LdHTT4tAAAAANe7VOujO3TmGonO9CLVyglAVLa5">
      <App />
    </GoogleReCaptchaProvider>
  </StrictMode>,
)