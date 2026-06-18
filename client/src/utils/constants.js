export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api'

export const OPENWEATHER_KEY = import.meta.env.VITE_OPENWEATHER_KEY || ''

export const CROPS = [
  { id: 'wheat',    name: 'Wheat',    icon: '🌾', season: 'Rabi',    hindi: 'गेहूँ' },
  { id: 'rice',     name: 'Rice',     icon: '🌾', season: 'Kharif',  hindi: 'चावल' },
  { id: 'maize',    name: 'Maize',    icon: '🌽', season: 'Kharif',  hindi: 'मक्का' },
  { id: 'cotton',   name: 'Cotton',   icon: '☁️', season: 'Kharif',  hindi: 'कपास' },
  { id: 'sugarcane',name: 'Sugarcane',icon: '🎋', season: 'Annual',  hindi: 'गन्ना' },
  { id: 'soybean',  name: 'Soybean',  icon: '🫘', season: 'Kharif',  hindi: 'सोयाबीन' },
  { id: 'mustard',  name: 'Mustard',  icon: '🌿', season: 'Rabi',    hindi: 'सरसों' },
  { id: 'potato',   name: 'Potato',   icon: '🥔', season: 'Rabi',    hindi: 'आलू' },
  { id: 'tomato',   name: 'Tomato',   icon: '🍅', season: 'All',     hindi: 'टमाटर' },
  { id: 'onion',    name: 'Onion',    icon: '🧅', season: 'Rabi',    hindi: 'प्याज' },
  { id: 'chickpea', name: 'Chickpea', icon: '🫘', season: 'Rabi',    hindi: 'चना' },
  { id: 'groundnut',name: 'Groundnut',icon: '🥜', season: 'Kharif',  hindi: 'मूंगफली' },
]

export const STATES = [
  'Andhra Pradesh', 'Bihar', 'Gujarat', 'Haryana', 'Karnataka',
  'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Odisha', 'Punjab',
  'Rajasthan', 'Tamil Nadu', 'Telangana', 'Uttar Pradesh', 'West Bengal',
]

export const SOIL_TYPES = ['Alluvial', 'Black', 'Red', 'Laterite', 'Desert', 'Mountain', 'Peaty', 'Saline']

export const SEASONS = ['Kharif', 'Rabi', 'Zaid', 'Annual']

export const NAV_LINKS = [
  { path: '/',                  label: 'Home' },
  { path: '/weather',          label: 'Weather' },
  { path: '/crop-guide',       label: 'Crop Guide' },
  { path: '/disease-detection',label: 'Disease Detection' },
  { path: '/market-price',     label: 'Market Prices' },
  { path: '/ai-assistant',     label: 'AI Assistant' },
  { path: '/contact',          label: 'Contact' },
]

export const WEATHER_ICONS = {
  '01d': '☀️', '01n': '🌙', '02d': '⛅', '02n': '☁️',
  '03d': '☁️', '03n': '☁️', '04d': '☁️', '04n': '☁️',
  '09d': '🌧️', '09n': '🌧️', '10d': '🌦️', '10n': '🌧️',
  '11d': '⛈️', '11n': '⛈️', '13d': '❄️', '13n': '❄️',
  '50d': '🌫️', '50n': '🌫️',
}