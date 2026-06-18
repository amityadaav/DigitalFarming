import React, { createContext, useContext, useState, useEffect } from 'react'

const FarmerContext = createContext(null)

export function FarmerProvider({ children }) {
  const [location, setLocation] = useState(
    () => JSON.parse(localStorage.getItem('farmer_location') || 'null') || { city: 'Delhi', lat: 28.6139, lon: 77.2090 }
  )
  const [selectedCrops, setSelectedCrops] = useState(
    () => JSON.parse(localStorage.getItem('farmer_crops') || '[]')
  )
  const [language, setLanguage] = useState(
    () => localStorage.getItem('farmer_lang') || 'en'
  )
  const [notifications, setNotifications] = useState([])

  useEffect(() => {
    localStorage.setItem('farmer_location', JSON.stringify(location))
  }, [location])

  useEffect(() => {
    localStorage.setItem('farmer_crops', JSON.stringify(selectedCrops))
  }, [selectedCrops])

  useEffect(() => {
    localStorage.setItem('farmer_lang', language)
  }, [language])

  const addNotification = (msg, type = 'info') => {
    const id = Date.now()
    setNotifications(prev => [...prev, { id, msg, type }])
    setTimeout(() => removeNotification(id), 4000)
  }

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id))
  }

  const toggleCrop = (crop) => {
    setSelectedCrops(prev =>
      prev.includes(crop) ? prev.filter(c => c !== crop) : [...prev, crop]
    )
  }

  return (
    <FarmerContext.Provider value={{
      location, setLocation,
      selectedCrops, toggleCrop,
      language, setLanguage,
      notifications, addNotification, removeNotification,
    }}>
      {children}

      {/* Global notifications */}
      <div className="notifications-container" style={{
        position: 'fixed', bottom: '1.5rem', right: '1.5rem',
        zIndex: 9999, display: 'flex', flexDirection: 'column', gap: '0.5rem',
      }}>
        {notifications.map(n => (
          <div key={n.id} className={`notification notification-${n.type}`} style={{
            background: n.type === 'error' ? '#FDECEA' : n.type === 'success' ? '#E8F5EB' : 'white',
            border: `1px solid ${n.type === 'error' ? '#C0392B' : n.type === 'success' ? '#27AE60' : '#ddd'}`,
            padding: '0.75rem 1rem', borderRadius: '8px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
            fontSize: '0.875rem', maxWidth: '300px',
            animation: 'slideIn 0.3s ease',
          }}>
            {n.msg}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to   { transform: translateX(0);    opacity: 1; }
        }
      `}</style>
    </FarmerContext.Provider>
  )
}

export function useFarmer() {
  const ctx = useContext(FarmerContext)
  if (!ctx) throw new Error('useFarmer must be used within FarmerProvider')
  return ctx
}

export default FarmerContext