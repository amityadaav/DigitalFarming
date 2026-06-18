import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { FarmerProvider } from './context/FarmerContext'
import AppRoutes from './routes/AppRoutes'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <FarmerProvider>
        <div className="app-wrapper">
          <Navbar />
          <main className="main-content">
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </FarmerProvider>
    </BrowserRouter>
  )
}

export default App