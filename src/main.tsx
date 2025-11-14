import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/main.css'
import './assets/styles/shared.css'
import App from './App.tsx'

import './i18n/i18next.js';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
)
