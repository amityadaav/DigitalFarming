/**
 * Format temperature to a readable string
 * @param {number} kelvin - Temperature in Kelvin from OpenWeather
 * @param {'C'|'F'} unit
 */
export function formatTemp(kelvin, unit = 'C') {
  const celsius = kelvin - 273.15
  if (unit === 'F') return `${Math.round(celsius * 9/5 + 32)}°F`
  return `${Math.round(celsius)}°C`
}

/**
 * Format price in INR
 */
export function formatINR(value) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value)
}

/**
 * Format date
 */
export function formatDate(dateStr, opts = {}) {
  const date = typeof dateStr === 'string' ? new Date(dateStr) : dateStr
  return date.toLocaleDateString('en-IN', {
    day: 'numeric', month: 'short', year: 'numeric', ...opts,
  })
}

/**
 * Format Unix timestamp to time string
 */
export function formatTime(unix) {
  return new Date(unix * 1000).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })
}

/**
 * Get wind direction label from degrees
 */
export function windDirection(deg) {
  const dirs = ['N','NE','E','SE','S','SW','W','NW']
  return dirs[Math.round(deg / 45) % 8]
}

/**
 * Debounce a function
 */
export function debounce(fn, delay = 300) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}

/**
 * Truncate text
 */
export function truncate(str, maxLen = 100) {
  if (!str || str.length <= maxLen) return str
  return str.slice(0, maxLen).trimEnd() + '…'
}

/**
 * Get CSS variable value
 */
export function cssVar(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim()
}

/**
 * Calculate price change percentage
 */
export function priceChange(current, previous) {
  if (!previous) return 0
  return ((current - previous) / previous * 100).toFixed(1)
}

/**
 * Get season from current month
 */
export function getCurrentSeason() {
  const m = new Date().getMonth() + 1
  if (m >= 6 && m <= 10) return 'Kharif'
  if (m >= 11 || m <= 3) return 'Rabi'
  return 'Zaid'
}

/**
 * Capitalize first letter
 */
export function capitalize(str) {
  if (!str) return ''
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * Generate unique id
 */
export function uid() {
  return Math.random().toString(36).slice(2, 9)
}