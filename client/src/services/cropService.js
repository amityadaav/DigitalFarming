import axios from 'axios'
import { API_BASE_URL, CROPS } from '../utils/constants'

const CROP_DATA = {
  wheat: {
    name: 'Wheat', icon: '🌾', season: 'Rabi',
    sowingMonths: 'October – December',
    harvestMonths: 'March – April',
    waterReq: 'Moderate (400–500 mm)',
    soilType: 'Well-drained loamy soil',
    fertilizers: ['Urea (N)', 'DAP (P)', 'MOP (K)'],
    pH: '6.0 – 7.5',
    yield: '3–5 tonnes/hectare',
    msp: 2275,
    stages: ['Land Preparation', 'Sowing', 'Crown Root Initiation', 'Tillering', 'Jointing', 'Heading', 'Grain Filling', 'Maturity'],
    diseases: ['Yellow Rust', 'Brown Rust', 'Loose Smut', 'Karnal Bunt'],
    pests: ['Aphids', 'Termites', 'Pink Stem Borer'],
    tips: [
      'Use certified seeds for better germination and disease resistance.',
      'Apply basal dose of fertilizer at sowing time.',
      'First irrigation at Crown Root Initiation (20-25 days) is critical.',
      'Harvest when grain moisture is around 12-14%.',
    ],
  },
  rice: {
    name: 'Rice', icon: '🍚', season: 'Kharif',
    sowingMonths: 'June – July',
    harvestMonths: 'October – November',
    waterReq: 'High (1200–1600 mm)',
    soilType: 'Clay loam or silty loam with good water retention',
    fertilizers: ['Urea (N)', 'SSP (P)', 'MOP (K)', 'Zinc Sulphate'],
    pH: '5.5 – 6.5',
    yield: '4–7 tonnes/hectare',
    msp: 2300,
    stages: ['Nursery', 'Land Preparation', 'Transplanting', 'Tillering', 'Panicle Initiation', 'Flowering', 'Grain Filling', 'Harvest'],
    diseases: ['Blast', 'Brown Spot', 'Sheath Blight', 'Bacterial Leaf Blight'],
    pests: ['Brown Plant Hopper', 'Stem Borer', 'Leaf Folder', 'Gall Midge'],
    tips: [
      'Maintain 2-3 cm flood water level during transplanting.',
      'Use SRI (System of Rice Intensification) for higher yields.',
      'Apply zinc if leaves show interveinal chlorosis.',
      'Drain field 10-15 days before harvest.',
    ],
  },
  maize: {
    name: 'Maize', icon: '🌽', season: 'Kharif',
    sowingMonths: 'June – July',
    harvestMonths: 'September – October',
    waterReq: 'Moderate (500–800 mm)',
    soilType: 'Well-drained sandy loam to loam',
    fertilizers: ['Urea (N)', 'DAP (P)', 'MOP (K)'],
    pH: '5.8 – 7.0',
    yield: '5–8 tonnes/hectare',
    msp: 2090,
    stages: ['Germination', 'Seedling', 'Vegetative', 'Tasseling', 'Silking', 'Blister', 'Dough', 'Dent', 'Maturity'],
    diseases: ['Turcicum Leaf Blight', 'Common Rust', 'Downy Mildew', 'Stalk Rot'],
    pests: ['Fall Armyworm', 'Stem Borer', 'Shoot Fly'],
    tips: [
      'Seed treatment with fungicide before sowing.',
      'Earthing up and top dressing at knee-high stage.',
      'Critical irrigation at tasseling and silking stages.',
      'Monitor for Fall Armyworm attack in whorls.',
    ],
  },
  cotton: {
    name: 'Cotton', icon: '☁️', season: 'Kharif',
    sowingMonths: 'May – June',
    harvestMonths: 'October – January',
    waterReq: 'Moderate (700–1200 mm)',
    soilType: 'Black soil (Regur) with good moisture retention',
    fertilizers: ['Urea (N)', 'SSP (P)', 'MOP (K)', 'Boron'],
    pH: '6.0 – 8.0',
    yield: '2–4 bales/hectare',
    msp: 7121,
    stages: ['Germination', 'Seedling', 'Square Formation', 'Flowering', 'Boll Development', 'Boll Opening', 'Picking'],
    diseases: ['Bacterial Blight', 'Fusarium Wilt', 'Leaf Curl Virus'],
    pests: ['Bollworm', 'Whitefly', 'Jassids', 'Thrips', 'Aphids'],
    tips: [
      'Use Bt Cotton seeds for bollworm management.',
      'Spray Neem-based pesticides for sucking pests.',
      'Avoid excess nitrogen to prevent vegetative growth.',
      'Pick cotton in dry weather to maintain fiber quality.',
    ],
  },
  potato: {
    name: 'Potato', icon: '🥔', season: 'Rabi',
    sowingMonths: 'October – November',
    harvestMonths: 'January – March',
    waterReq: 'Moderate (500–700 mm)',
    soilType: 'Sandy loam to loam soil',
    fertilizers: ['Urea (N)', 'SSP (P)', 'MOP (K)', 'Calcium'],
    pH: '5.0 – 6.0',
    yield: '20–35 tonnes/hectare',
    msp: null,
    stages: ['Planting', 'Emergence', 'Vegetative', 'Tuber Initiation', 'Tuber Bulking', 'Maturity'],
    diseases: ['Late Blight', 'Early Blight', 'Common Scab', 'Blackleg'],
    pests: ['Aphids', 'Colorado Beetle', 'Cut Worm'],
    tips: [
      'Use certified disease-free seed tubers.',
      'Ridge planting for better tuber development.',
      'Earth up 3-4 weeks after planting.',
      'Stop irrigation 2 weeks before harvest.',
    ],
  },
  tomato: {
    name: 'Tomato', icon: '🍅', season: 'All Year',
    sowingMonths: 'June–July, Oct–Nov, Jan–Feb',
    harvestMonths: '70–80 days after transplanting',
    waterReq: 'Moderate (600–900 mm)',
    soilType: 'Well-drained sandy loam rich in organic matter',
    fertilizers: ['Urea (N)', 'SSP (P)', 'MOP (K)', 'Calcium Nitrate', 'Boron'],
    pH: '6.0 – 7.0',
    yield: '20–30 tonnes/hectare',
    msp: null,
    stages: ['Nursery', 'Transplanting', 'Vegetative Growth', 'Flowering', 'Fruiting', 'Harvest'],
    diseases: ['Early Blight', 'Late Blight', 'Leaf Curl', 'Wilt'],
    pests: ['Fruit Borer', 'Whitefly', 'Spider Mite', 'Leaf Miner'],
    tips: [
      'Stake plants for support and air circulation.',
      'Drip irrigation reduces disease incidence.',
      'Spray calcium to prevent blossom end rot.',
      'Harvest at breaker stage for transport; red stage for local market.',
    ],
  },
}

export function getAllCrops() {
  return CROPS
}

export function getCropDetails(cropId) {
  return CROP_DATA[cropId] || null
}

export async function getCropRecommendation({ soil, season, state, rainfall }) {
  try {
    const { data } = await axios.post(`${API_BASE_URL}/crops/recommend`, { soil, season, state, rainfall })
    return data
  } catch {
    // Offline fallback
    const seasonCrops = Object.entries(CROP_DATA)
      .filter(([, v]) => v.season === season || v.season === 'All Year')
      .map(([id, v]) => ({ id, ...v, suitability: Math.floor(60 + Math.random() * 35) }))
    return { recommendations: seasonCrops.slice(0, 4) }
  }
}

export async function getCropCalendar(cropId) {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/crops/${cropId}/calendar`)
    return data
  } catch {
    const crop = CROP_DATA[cropId]
    return crop ? { cropId, ...crop } : null
  }
}