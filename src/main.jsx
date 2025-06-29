import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeProvider from './ThemeProvider/ThemeProvider.jsx'
import { RouterProvider } from 'react-router'
import { Router } from './Router/Router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={Router}></RouterProvider>
    </ThemeProvider>
  </StrictMode>,
)
