import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navegacao from './routes'
import './style/profissional.scss'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navegacao/>
  </StrictMode>
)
