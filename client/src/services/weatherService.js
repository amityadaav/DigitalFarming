import axios from 'axios'
import { API_BASE_URL } from '../utils/constants'

const BASE = 'https://api.openweathermap.org/data/2.5'
const KEY  = import.meta.env.VITE_OPENWEATHER_KEY || ''

/**
 * Get current weather by city or coords
 */
export async function getCurrentWeather({ city, lat, lon } = {}) {
  try {
    const params = KEY
      ? { appid: KEY, ...(city ? { q: city } : { lat, lon }) }
      : null

    if (params) {
      const { data } = await axios.get(`${BASE}/weather`, { params })
      return data
    }

    // Fallback to our backend proxy
    const query = city ? `city=${encodeURIComponent(city)}` : `lat=${lat}&lon=${lon}`
    const { data } = await axios.get(`${API_BASE_URL}/weather/current?${query}`)
    return data
  } catch (err) {
    throw new Error(err.response?.data?.message || 'Failed to fetch weather')
  }
}

/**
 * Get 5-day forecast
 */
export async function getForecast({ city, lat, lon } = {}) {
  try {
    const params = KEY
      ? { appid: KEY, cnt: 40, ...(city ? { q: city } : { lat, lon }) }
      : null

    if (params) {
      const { data } = await axios.get(`${BASE}/forecast`, { params })
      return data
    }

    const query = city ? `city=${encodeURIComponent(city)}` : `lat=${lat}&lon=${lon}`
    const { data } = await axios.get(`${API_BASE_URL}/weather/forecast?${query}`)
    return data
  } catch (err) {
    throw new Error(err.response?.data?.message || 'Failed to fetch forecast')
  }
}

/**
 * Get AQI data
 */
export async function getAQI({ lat, lon }) {
  try {
    if (KEY) {
      const { data } = await axios.get(`${BASE}/air_pollution`, {
        params: { lat, lon, appid: KEY }
      })
      return data
    }
    const { data } = await axios.get(`${API_BASE_URL}/weather/aqi?lat=${lat}&lon=${lon}`)
    return data
  } catch {
    return null
  }
}

/**
 * Parse 5-day forecast into daily summary
 */
export function parseDailyForecast(forecastData) {
  if (!forecastData?.list) return []
  const days = {}

  forecastData.list.forEach(item => {
    const date = new Date(item.dt * 1000).toLocaleDateString('en-IN', { weekday: 'short', month: 'short', day: 'numeric' })
    if (!days[date]) {
      days[date] = { date, temps: [], icons: [], descriptions: [], rain: 0 }
    }
    days[date].temps.push(item.main.temp)
    days[date].icons.push(item.weather[0].icon)
    days[date].descriptions.push(item.weather[0].description)
    days[date].rain += item.rain?.['3h'] || 0
  })

  return Object.values(days).slice(0, 5).map(d => ({
    date: d.date,
    maxTemp: Math.max(...d.temps),
    minTemp: Math.min(...d.temps),
    icon: d.icons[Math.floor(d.icons.length / 2)],
    description: d.descriptions[Math.floor(d.descriptions.length / 2)],
    totalRain: d.rain.toFixed(1),
  }))
}

/**
 * Get farming advisory based on weather
 */
export function getFarmingAdvisory(weather) {
  const advisories = []
  if (!weather) return advisories

  const temp = weather.main?.temp - 273.15
  const humidity = weather.main?.humidity
  const windSpeed = weather.wind?.speed
  const condition = weather.weather?.[0]?.main?.toLowerCase()

  if (condition === 'rain') advisories.push({ type: 'warning', msg: 'Heavy rain expected – avoid field operations and ensure proper drainage.' })
  if (humidity > 80) advisories.push({ type: 'warning', msg: 'High humidity increases disease risk. Monitor crops for fungal infections.' })
  if (temp > 40) advisories.push({ type: 'alert', msg: 'Extreme heat – irrigate early morning or evening. Cover nursery seedlings.' })
  if (temp < 5)  advisories.push({ type: 'alert', msg: 'Frost risk – protect sensitive crops with covers or smoky fires.' })
  if (windSpeed > 10) advisories.push({ type: 'info', msg: 'Strong winds – postpone spraying operations to avoid spray drift.' })
  if (humidity < 30) advisories.push({ type: 'info', msg: 'Low humidity – increase irrigation frequency for water-sensitive crops.' })

  if (advisories.length === 0) {
    advisories.push({ type: 'success', msg: 'Weather conditions are favorable for regular farming activities.' })
  }

  return advisories
}