import type { Product } from './types';

const products: Product[] = [
  {
    id: 'PROD-1000',
    name: 'SynergyPower Workstation',
    description: 'A versatile and powerful workstation for all your business needs. Features a high-performance processor and ergonomic design.',
    price: 2500,
    images: ['https://placehold.co/600x400', 'https://placehold.co/600x400'],
    category: 'Office Hardware',
    specs: {
      'Processor': 'Intel Core i9',
      'RAM': '64GB DDR5',
      'Storage': '2TB NVMe SSD',
      'Graphics': 'NVIDIA RTX 4070',
    },
  },
  {
    id: 'PROD-2000',
    name: 'ConnectSphere Router',
    description: 'Maximize your network uptime with the ConnectSphere enterprise router. Advanced security features and high-throughput.',
    price: 800,
    images: ['https://placehold.co/600x400', 'https://placehold.co/600x400'],
    category: 'Networking',
    specs: {
      'Speed': 'Wi-Fi 6E (802.11ax)',
      'Ports': '8 x 2.5GbE LAN',
      'Security': 'WPA3, VPN, Firewall',
      'Management': 'Cloud-based dashboard',
    },
  },
  {
    id: 'PROD-3000',
    name: 'InnovateHub Projector',
    description: 'Precision projection for crystal-clear presentations. Features 4K resolution and wireless connectivity.',
    price: 1500,
    images: ['https://placehold.co/600x400', 'https://placehold.co/600x400'],
    category: 'AV Equipment',
    specs: {
      'Resolution': '4K UHD (3840x2160)',
      'Brightness': '5000 Lumens',
      'Connectivity': 'HDMI, USB-C, Wi-Fi',
      'Lamp Life': '20,000 hours (Eco Mode)',
    },
  },
  {
    id: 'PROD-4000',
    name: 'DataSafe Backup System',
    description: 'Reliably protect your critical data with our automated backup solution. Scalable and secure.',
    price: 3000,
    images: ['https://placehold.co/600x400', 'https://placehold.co/600x400'],
    category: 'Data Storage',
    specs: {
      'Capacity': '24TB (Expandable)',
      'Interface': '10GbE Ethernet',
      'RAID Levels': '0, 1, 5, 6, 10',
      'Software': 'Cross-platform backup agents',
    },
  },
  {
    id: 'PROD-500',
    name: 'AgilePro Wireless Mouse',
    description: 'Perfect for mobile professionals and clean desk setups. Ergonomic and precise.',
    price: 80,
    images: ['https://placehold.co/600x400', 'https://placehold.co/600x400'],
    category: 'Peripherals',
    specs: {
      'Connectivity': 'Bluetooth 5.2, 2.4GHz RF',
      'DPI': '4000',
      'Battery Life': '70 days',
      'Buttons': '6 (Programmable)',
    },
  },
  {
    id: 'PROD-6000',
    name: 'SecureScan Office Printer',
    description: 'High-speed multifunction printer with advanced security features to protect your documents.',
    price: 1200,
    images: ['https://placehold.co/600x400', 'https://placehold.co/600x400'],
    category: 'Office Hardware',
    specs: {
      'Functions': 'Print, Scan, Copy, Fax',
      'Print Speed': '45 ppm (B&W)',
      'Connectivity': 'Ethernet, Wi-Fi, NFC',
      'Security': 'Secure Print, Badge Release',
    },
  },
  {
    id: 'PROD-7000',
    name: 'CloudFlow SaaS Suite',
    description: 'A robust suite of cloud-based applications for project management, CRM, and collaboration.',
    price: 99,
    images: ['https://placehold.co/600x400', 'https://placehold.co/600x400'],
    category: 'Software',
    specs: {
      'Billing': 'Per User / Per Month',
      'Modules': 'CRM, Projects, HR, Finance',
      'Integration': 'API Access, Zapier',
      'Support': '24/7 Priority Support',
    },
  },
  {
    id: 'PROD-8000',
    name: 'TelePresence Conference Cam',
    description: 'Create an immersive meeting experience with our AI-powered 4K conference camera.',
    price: 950,
    images: ['https://placehold.co/600x400', 'https://placehold.co/600x400'],
    category: 'AV Equipment',
    specs: {
      'Resolution': '4K Ultra HD',
      'Field of View': '120 degrees',
      'Features': 'Auto-framing, Speaker tracking',
      'Microphone': 'Beamforming array (5m range)',
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
