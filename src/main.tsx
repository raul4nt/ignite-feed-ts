import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.js'

// Document Object Model = DOM

createRoot(document.getElementById('root')!).render(
  // esse ! diz pro typescript tipo "confia em mim, esse elemento vai estar em tela"
  // nao é a melhor pratica de programaçao, mas funciona pro ts parar de dar erro
  <StrictMode>
    <App />
  </StrictMode>,
)
