import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './shared/styles/global/index.css'

import AppRouter from './app/router/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
)
