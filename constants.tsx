
import { LogisticsService, Advantage } from './types';

export const SERVICES: LogisticsService[] = [
  {
    id: 'fruit-mangosteen',
    name: 'Mangosteen',
    type: 'PREMIUM FRUIT',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=1200',
    startingPrice: 'SEASONAL',
    tags: ['Tropical', 'Queen of Fruits', 'Fresh']
  },
  {
    id: 'fruit-mango',
    name: 'Harumanis Mango',
    type: 'PREMIUM FRUIT',
    image: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&q=80&w=1200',
    startingPrice: 'SEASONAL',
    tags: ['Sweet', 'Aromatic', 'Juicy']
  },
  {
    id: 'spice-vanilla',
    name: 'Planifolia Vanilla',
    type: 'SPICES',
    image: 'https://images.unsplash.com/photo-1606132766345-565451e5e054?auto=format&fit=crop&q=80&w=1200',
    startingPrice: 'DRIED / BEANS',
    tags: ['Aromatic', 'Baking', 'Premium']
  },
  {
    id: 'veg-ginger',
    name: 'Elephant Ginger',
    type: 'VEGETABLES',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=1200',
    startingPrice: 'FRESH / WASHED',
    tags: ['Medicinal', 'Spicy', 'Root']
  }
];

export const ADVANTAGES: Advantage[] = [
  {
    title: 'Trust',
    description: 'Building lasting relationships through transparent and reliable export practices.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: 'Quality',
    description: 'GACC registered packaging house ensuring global standards.',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=1000'
  }
];

export const TESTIMONIALS = [
  {
    quote: "BKK consistently delivers the freshest mangosteens we have received in Shanghai.",
    author: "Chen Wei",
    position: "Shanghai Import Co.",
    avatar: "https://i.pravatar.cc/150?u=chen"
  },
  {
    quote: "Professional handling and excellent quality control for our vanilla shipments.",
    author: "Sarah Jenkins",
    position: "Global Spices UK",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  }
];
