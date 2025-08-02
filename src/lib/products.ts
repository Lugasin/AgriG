import type { Product } from './types';
import { catalogProducts } from './catalog-products';

const products: Product[] = [
  {
    id: 'PROD-1001',
    name: 'GreenHarv 4000 Tractor',
    description: 'A robust and versatile tractor designed for medium to large-scale farms. Features a powerful engine and advanced GPS guidance.',
    price: 75000,
    images: ['/src/Assets/Newtractor.png', '/src/Assets/Newtractor1.png'],
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
    images: ['/src/Assets/Sprinklers.png', '/src/Assets/Sprinklers1.png'],
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
    images: ['/src/Assets/Harverster.jpg', '/src/Assets/Combine.jpg'],
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
    images: ['/src/Assets/Plough.png', '/src/Assets/Ploughs.png'],
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
    images: ['/src/Assets/Tractorsspraying.jpg.png', '/src/Assets/Tractorplouging1.png'],
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
    images: ['/src/Assets/Dronesprayer.png', '/src/Assets/Tractorsspraying.jpg.png'],
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
    images: ['/src/Assets/Dronesprayer.png', '/src/Assets/Sprinklers.png'],
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
    images: ['/src/Assets/close-up-seeder-attached-tractor-field.jpg', '/src/Assets/new-red-agricultural-seeder-close-up-view-background-combine.jpg'],
    category: 'Supplies',
    specs: {
      'Contains': 'Corn, Wheat, Soybean seeds',
      'Quantity': 'Sufficient for 1 acre each',
      'Germination Rate': '> 95%',
      'Type': 'Non-GMO',
    },
  },
];

const allProducts = [...products, ...catalogProducts];

export function getProducts(category?: string): Product[] {
  if (category) {
    return allProducts.filter((p) => p.category === category);
  }
  return allProducts;
}

export function getProductById(id: string): Product | undefined {
  return allProducts.find((p) => p.id === id);
}
