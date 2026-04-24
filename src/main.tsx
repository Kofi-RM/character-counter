import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CharacterCounter } from './components/CharacterCounter/CharacterCounter'
import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <CharacterCounter></CharacterCounter>
    
  </StrictMode>,
)
