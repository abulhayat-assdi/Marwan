import { Product, Review } from '@/src/types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    slug: 'horizon-chronograph',
    title: 'Horizon Chronograph',
    price: 1250,
    category: 'Watches',
    description: 'A masterpiece of precision and timeless design, featuring a sapphire crystal and automatic movement. The Horizon series represents the peak of our horological engineering.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1200',
    sizeOptions: ['40mm', '42mm', '44mm'],
    colorOptions: [{ name: 'Silver', hex: '#C0C0C0' }, { name: 'Midnight', hex: '#1A1A1A' }],
    isNew: true
  },
  {
    id: '2',
    slug: 'midnight-essence',
    title: 'Midnight Essence',
    price: 280,
    category: 'Fragrances',
    description: 'An alluring blend of oud, amber, and rare spices for the nocturnal connoisseur. Developed in partnership with master perfumers in Grasse.',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=1200',
    sizeOptions: ['50ml', '100ml'],
    colorOptions: [{ name: 'Obsidian', hex: '#0D0D0D' }],
  },
  {
    id: '3',
    slug: 'aurelian-cuff',
    title: 'Aurelian Cuff',
    price: 850,
    category: 'Jewelry',
    description: 'Hand-crafted 18k solid gold cuff with a minimalist brushed finish. Each piece is individually numbered and tracked for authenticity.',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1200',
    sizeOptions: ['Small', 'Medium', 'Large'],
    colorOptions: [{ name: 'Gold', hex: '#D4AF37' }, { name: 'Rose Gold', hex: '#B76E79' }],
  },
  {
    id: '4',
    slug: 'pure-silk-shirt',
    title: 'Pure Silk Shirt',
    price: 320,
    category: 'Clothing',
    description: 'Woven from 100% heavy mulberry silk, this shirt offers an unparalleled drape and natural temperature regulation.',
    image: 'https://images.unsplash.com/photo-1598032895397-b9472444bf93?auto=format&fit=crop&q=80&w=1200',
    sizeOptions: ['XS', 'S', 'M', 'L', 'XL'],
    colorOptions: [{ name: 'Pearl', hex: '#F5F5F5' }, { name: 'Navy', hex: '#000080' }],
    isNew: true
  },
  {
    id: '5',
    slug: 'architect-blazer',
    title: 'Architect Blazer',
    price: 680,
    category: 'Clothing',
    description: 'A structured blazer made from high-twist Italian wool. Minimalist silhouette with hidden horn buttons.',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=1200',
    sizeOptions: ['46', '48', '50', '52', '54'],
    colorOptions: [{ name: 'Charcoal', hex: '#36454F' }, { name: 'Black', hex: '#000000' }],
  },
  {
    id: '6',
    slug: 'obsidian-ring',
    title: 'Obsidian Ring',
    price: 420,
    category: 'Jewelry',
    description: 'A striking band of polished volcanic glass and carbon fiber. Indestructible beauty for the modern age.',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=1200',
    sizeOptions: ['9', '10', '11', '12'],
    colorOptions: [{ name: 'Black', hex: '#000000' }],
  },
  {
    id: '7',
    slug: 'cashmere-throw',
    title: 'Cashmere Throw',
    price: 550,
    category: 'Lifestyle',
    description: 'Hand-woven Mongolian cashmere. Softness that defies definition, in our signature oversized dimensions.',
    image: 'https://images.unsplash.com/photo-1528476513222-77732230198b?auto=format&fit=crop&q=80&w=1200',
    sizeOptions: ['One Size'],
    colorOptions: [{ name: 'Oatmeal', hex: '#EAE0C8' }, { name: 'Graphite', hex: '#383838' }],
  },
  {
    id: '8',
    slug: 'zenith-glasses',
    title: 'Zenith Glasses',
    price: 340,
    category: 'Accessories',
    description: 'Titanium frames with Zeiss precision lenses. Lightweight, durable, and aesthetically uncompromising.',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=1200',
    sizeOptions: ['Standard'],
    colorOptions: [{ name: 'Black', hex: '#000000' }, { name: 'Gold', hex: '#D4AF37' }],
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    user: 'Julian V.',
    rating: 5,
    comment: 'The quality of the silk shirt exceeded all my expectations. Truly a legacy piece.',
    avatar: 'https://i.pravatar.cc/150?u=r1'
  },
  {
    id: 'r2',
    user: 'Elena M.',
    rating: 5,
    comment: 'Obsessed with the Morning Essence. The complexity of the scent is unmatched.',
    avatar: 'https://i.pravatar.cc/150?u=r2'
  },
  {
    id: 'r3',
    user: 'Marcus K.',
    rating: 4,
    comment: 'The Horizon Chronograph is a statement of intent. Impeccable weighting and finish.',
    avatar: 'https://i.pravatar.cc/150?u=r3'
  }
];
