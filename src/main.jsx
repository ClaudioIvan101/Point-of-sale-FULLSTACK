import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { AuthContextProvider } from './context/AuthContext.jsx'

const queryClient = new QueryClient();


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
