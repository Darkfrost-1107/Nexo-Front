import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './shared/styles/global/index.css'

import AppBuild from './app/build/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppBuild />
  </StrictMode>,
)
