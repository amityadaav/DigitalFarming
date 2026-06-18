import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import CropGuide from '../pages/CropGuide/CropGuide'
import Weather from '../pages/Weather/Weather'
import DiseaseDetection from '../pages/DiseaseDetection/DiseaseDetection'
import MarketPrice from '../pages/MarketPrice/MarketPrice'
import AIAssistant from '../pages/AIAssistant/AIAssistant'
import Contact from '../pages/Contact/Contact'

function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '6rem 2rem' }}>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '4rem', color: 'var(--wheat)' }}>404</h1>
      <p style={{ fontSize: '1.2rem', color: 'var(--bark)', marginTop: '1rem' }}>Page not found</p>
      <a href="/" className="btn btn-primary" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>Go Home</a>
    </div>
  )
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/"                 element={<Home />} />
      <Route path="/crop-guide"       element={<CropGuide />} />
      <Route path="/weather"          element={<Weather />} />
      <Route path="/disease-detection" element={<DiseaseDetection />} />
      <Route path="/market-price"     element={<MarketPrice />} />
      <Route path="/ai-assistant"     element={<AIAssistant />} />
      <Route path="/contact"          element={<Contact />} />
      <Route path="*"                 element={<NotFound />} />
    </Routes>
  )
}