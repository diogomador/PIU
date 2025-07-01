import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Tarefa from './components/Tarefa.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Tarefa />
  </StrictMode>,
)
