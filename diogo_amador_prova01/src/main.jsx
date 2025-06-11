import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ContadorClicks from './components/ContadorClicks.jsx'
import ListarCarros from './components/ListarCarros.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContadorClicks />
    <ListarCarros />
  </StrictMode>,
)
