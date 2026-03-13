import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext'
import { NotificationProvider } from './context/NotificationContext'
import NotificationViewport from './components/ui/NotificationViewport'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <NotificationProvider>
        <App />
        <NotificationViewport />
      </NotificationProvider>
    </ThemeProvider>
  </StrictMode>,
)

