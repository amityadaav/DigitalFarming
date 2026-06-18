import axios from 'axios'
import { API_BASE_URL } from '../utils/constants'

// Realistic mock MSP and market price data
const MOCK_PRICES = {
  wheat:     { msp: 2275, modal: 2310, min: 2200, max: 2450, unit: 'Quintal' },
  rice:      { msp: 2300, modal: 2380, min: 2250, max: 2500, unit: 'Quintal' },
  maize:     { msp: 2090, modal: 2150, min: 1980, max: 2300, unit: 'Quintal' },
  cotton:    { msp: 7121, modal: 7250, min: 6800, max: 7600, unit: 'Quintal' },
  soybean:   { msp: 4600, modal: 4750, min: 4400, max: 5100, unit: 'Quintal' },
  mustard:   { msp: 5650, modal: 5800, min: 5500, max: 6100, unit: 'Quintal' },
  chickpea:  { msp: 5440, modal: 5600, min: 5200, max: 5900, unit: 'Quintal' },
  groundnut: { msp: 6783, modal: 6900, min: 6500, max: 7200, unit: 'Quintal' },
  sugarcane: { msp: 340,  modal: 345,  min: 330,  max: 360,  unit: 'Quintal' },
  potato:    { msp: null, modal: 1200, min: 800,  max: 1600, unit: 'Quintal' },
  tomato:    { msp: null, modal: 2500, min: 500,  max: 6000, unit: 'Quintal' },
  onion:     { msp: null, modal: 1800, min: 600,  max: 4000, unit: 'Quintal' },
}

function addNoise(base, pct = 0.05) {
  return Math.round(base * (1 + (Math.random() - 0.5) * pct))
}

function generateHistory(modal, days = 30) {
  const history = []
  let price = modal
  const now = Date.now()
  for (let i = days; i >= 0; i--) {
    price = Math.round(price * (1 + (Math.random() - 0.5) * 0.03))
    history.push({
      date: new Date(now - i * 86400000).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }),
      price,
    })
  }
  return history
}

export async function getMarketPrices({ state, commodity } = {}) {
  try {
    const params = {}
    if (state) params.state = state
    if (commodity) params.commodity = commodity
    const { data } = await axios.get(`${API_BASE_URL}/market/prices`, { params })
    return data
  } catch {
    // Offline fallback
    const commodities = commodity
      ? [commodity]
      : Object.keys(MOCK_PRICES)

    return commodities.map(id => {
      const base = MOCK_PRICES[id]
      if (!base) return null
      return {
        commodity: id,
        modal:  addNoise(base.modal),
        min:    addNoise(base.min),
        max:    addNoise(base.max),
        msp:    base.msp,
        unit:   base.unit,
        state:  state || 'National Average',
        market: 'APMC',
        date:   new Date().toLocaleDateString('en-IN'),
        change: (Math.random() * 6 - 3).toFixed(1),
      }
    }).filter(Boolean)
  }
}

export async function getPriceHistory(commodity, days = 30) {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/market/history/${commodity}?days=${days}`)
    return data
  } catch {
    const base = MOCK_PRICES[commodity]
    if (!base) return []
    return generateHistory(base.modal, days)
  }
}

export async function getMSPList() {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/market/msp`)
    return data
  } catch {
    return Object.entries(MOCK_PRICES)
      .filter(([, v]) => v.msp)
      .map(([id, v]) => ({ commodity: id, msp: v.msp, unit: v.unit, year: '2024-25' }))
  }
}

export async function getNearbyMandis({ lat, lon, radius = 50 } = {}) {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/market/mandis?lat=${lat}&lon=${lon}&radius=${radius}`)
    return data
  } catch {
    return [
      { name: 'District APMC Market', distance: 12, address: 'Market Yard, Near Bus Stand', timing: '6 AM – 2 PM', days: 'Mon–Sat' },
      { name: 'Wholesale Mandi',      distance: 28, address: 'NH-8, Industrial Area',       timing: '5 AM – 12 PM', days: 'Daily' },
      { name: 'Kisan Bazaar',         distance: 35, address: 'Old City Road, Market Area',   timing: '8 AM – 4 PM', days: 'Tue, Fri' },
    ]
  }
}