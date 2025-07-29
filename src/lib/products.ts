import type { Product } from './types';

const products: Product[] = [
  {
    id: 'TR-1000',
    name: 'AgriPower Pro Tractor',
    description: 'A versatile and powerful tractor for all your farming needs. Features a high-torque engine and comfortable cabin.',
    price: 75000,
    images: ['https://placehold.co/600x400', 'https://placehold.co/600x400'],
    category: 'Tractors',
    specs: {
      'Engine Power': '150 HP',
      'Transmission': '16F/16R PowerShift',
      'Hydraulic Flow': '30 GPM',
      'Weight': '12,000 lbs',
    },
  },
  {
    id: 'CH-2000',
    name: 'HarvestKing Combine',
    description: 'Maximize your grain yield with the HarvestKing Combine. Advanced threshing technology and a large grain tank.',
    price: 450000,
    images: ['https://placehold.co/600x400', 'https://placehold.co/600x400'],
    category: 'Harvesters',
    specs: {
      'Engine Power': '400 HP',
      'Grain Tank': '350 bu',
      'Header Width': '40 ft',
      'Unload Speed': '4.0 bu/sec',
    },
  },
  {
    id: 'PL-3000',
    name: 'SeedRight Planter',
    description: 'Precision planting for optimal crop emergence. Features individual row control and a high-capacity seed hopper.',
    price: 120000,
    images: ['https://placehold.co/600x400', 'https://placehold.co/600x400'],
    category: 'Planters',
    specs: {
      'Row Spacing': '30 in',
      'Number of Rows': '16',
      'Hopper Capacity': '100 bu',
      'Downforce System': 'Active Pneumatic',
    },
  },
  {
    id: 'IR-4000',
    name: 'HydroPivot Irrigation System',
    description: 'Efficiently water your crops with our center pivot irrigation system. Durable construction and remote management capabilities.',
    price: 95000,
    images: ['https://placehold.co/600x400', 'https://placehold.co/600x400'],
    category: 'Irrigation',
    specs: {
      'Length': '1320 ft (1/4 mile)',
      'Pipe Diameter': '6 5/8 in',
      'Control Panel': 'Digital with GPS',
      'Water Application': 'Low-pressure sprinklers',
    },
  },
  {
    id: 'TR-500',
    name: 'Compact Utility Tractor',
    description: 'Perfect for smaller farms and landscaping. Easy to maneuver with surprising power for its size.',
    price: 25000,
    images: ['https://placehold.co/600x400', 'https://placehold.co/600x400'],
    category: 'Tractors',
    specs: {
      'Engine Power': '45 HP',
      'Transmission': 'Hydrostatic',
      'Lift Capacity': '2,200 lbs',
      'Weight': '3,500 lbs',
    },
  },
  {
    id: 'SP-5000',
    name: 'CropGuard Sprayer',
    description: 'High-clearance self-propelled sprayer for effective crop protection. Features a large tank and adjustable boom.',
    price: 320000,
    images: ['https://placehold.co/600x400', 'https://placehold.co/600x400'],
    category: 'Sprayers',
    specs: {
      'Engine Power': '310 HP',
      'Tank Capacity': '1200 gal',
      'Boom Width': '120 ft',
      'Clearance': '72 in',
    },
  },
  {
    id: 'TL-6000',
    name: 'TerraDisc Tillage',
    description: 'A robust disc harrow for primary and secondary tillage. Breaks up soil effectively for seedbed preparation.',
    price: 65000,
    images: ['https://placehold.co/600x400', 'https://placehold.co/600x400'],
    category: 'Tillage',
    specs: {
      'Working Width': '25 ft',
      'Disc Diameter': '24 in',
      'Weight': '15,000 lbs',
      'Required Power': '250-300 HP',
    },
  },
  {
    id: 'BL-7000',
    name: 'HayMaster Baler',
    description: 'Create dense, perfectly shaped round bales with the HayMaster. Reliable and efficient for any hay operation.',
    price: 88000,
    images: ['https://placehold.co/600x400', 'https://placehold.co/600x400'],
    category: 'Hay & Forage',
    specs: {
      'Bale Size': '4x5 ft',
      'Pickup Width': '6 ft',
      'Bale Type': 'Round',
      'Wrapping': 'Net and Twine',
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
