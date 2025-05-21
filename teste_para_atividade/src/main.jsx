import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Galeria from './components/Galeria.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Galeria />
  </StrictMode>,
)
