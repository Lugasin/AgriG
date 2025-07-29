import type { Product } from './types';

const products: Product[] = [
  {
    id: 'PROD-1001',
    name: 'GreenHarv 4000 Tractor',
    description: 'A robust and versatile tractor designed for medium to large-scale farms. Features a powerful engine and advanced GPS guidance.',
    price: 75000,
    images: ['https://placehold.co/600x400', 'https://placehold.co/600x400'],
    category: 'Heavy Machinery',
    specs: {
      'Engine Power': '150 HP',
      'Transmission': '16-Speed PowerShift',
      'Lift Capacity': '5,000 kg',
      'GPS': 'Sub-inch Accuracy',
    },
  },
  {
    id: 'PROD-2001',
    name: 'AquaFlow Drip Irrigation Kit',
    description: 'Maximize water efficiency with this complete drip irrigation system for a 1-acre plot. Easy to install and maintain.',
    price: 1200,
    images: ['https://placehold.co/600x400', 'https://placehold.co/600x400'],
    category: 'Irrigation',
    specs: {
      'Coverage': '1 Acre',
      'Tubing Length': '500 meters',
      'Emitter Spacing': '30 cm',
      'Filter': '120-Mesh Disc Filter',
    },
  },
  {
    id: 'PROD-3001',
    name: 'YieldMax Combine Harvester',
    description: 'High-capacity combine harvester that delivers exceptional grain quality with minimal loss. Suitable for various crops.',
    price: 250000,
    images: ['https://placehold.co/600x400', 'https://placehold.co/600x400'],
    category: 'Harvesting Equipment',
    specs: {
      'Header Width': '7.5 meters',
      'Grain Tank': '10,000 Liters',
      'Engine Power': '350 HP',
      'Threshing System': 'Rotary Separator',
    },
  },
  {
    id: 'PROD-4001',
    name: 'SoilGuard Precision Planter',
    description: 'Achieve perfect seed placement and spacing with our advanced planter. Reduces seed waste and improves germination rates.',
    price: 45000,
    images: ['https://placehold.co/600x400', 'https://placehold.co/600x400'],
    category: 'Planting Equipment',
    specs: {
      'Row Units': '8-Row',
      'Row Spacing': 'Adjustable (15-30 inches)',
      'Hopper Capacity': '50 Liters per row',
      'Control System': 'ISOBUS compatible',
    },
  },
  {
    id: 'PROD-5001',
    name: 'Agri-Boost Organic Fertilizer',
    description: 'A nutrient-rich organic fertilizer that improves soil health and boosts crop yields. Certified for organic farming.',
    price: 50,
    images: ['https://placehold.co/600x400', 'https://placehold.co/600x400'],
    category: 'Supplies',
    specs: {
      'Package Size': '20 kg Bag',
      'N-P-K Ratio': '5-3-3',
      'Organic Matter': '> 60%',
      'Application': 'Broadcast or Banded',
    },
  },
  {
    id: 'PROD-6001',
    name: 'PestAway Eco-Friendly Insecticide',
    description: 'Control a wide range of pests without harming beneficial insects or the environment. Safe for use up to harvest day.',
    price: 75,
    images: ['https://placehold.co/600x400', 'https://placehold.co/600x400'],
    category: 'Supplies',
    specs: {
      'Volume': '1 Liter Concentrate',
      'Active Ingredient': 'Neem Oil Extract',
      'Target Pests': 'Aphids, Mites, Whiteflies',
      'Certification': 'OMRI Listed',
    },
  },
  {
    id: 'PROD-7001',
    name: 'CropHealth Drone Sprayer',
    description: 'Apply treatments with precision using this autonomous drone sprayer. Covers large areas quickly and efficiently.',
    price: 15000,
    images: ['https://placehold.co/600x400', 'https://placehold.co/600x400'],
    category: 'Precision Ag',
    specs: {
      'Tank Capacity': '10 Liters',
      'Flight Time': '15-20 minutes',
      'Spray Width': '4-6 meters',
      'Features': 'Obstacle Avoidance, RTK Positioning',
    },
  },
  {
    id: 'PROD-8001',
    name: 'Multi-Crop Seed Pack',
    description: 'A variety pack of high-yield, disease-resistant seeds for staple crops like corn, wheat, and soybeans.',
    price: 120,
    images: ['https://placehold.co/600x400', 'https://placehold.co/600x400'],
    category: 'Supplies',
    specs: {
      'Contains': 'Corn, Wheat, Soybean seeds',
      'Quantity': 'Sufficient for 1 acre each',
      'Germination Rate': '> 95%',
      'Type': 'Non-GMO',
    },
  },
];

export function getProducts(category?: string): Product[] {
  if (category) {
    return products.filter((p) => p.category === category);
  }
  return products;
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
