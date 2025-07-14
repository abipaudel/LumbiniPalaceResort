import { Room } from '../types/booking';

export const roomsData: Room[] = [
  {
    id: 'deluxe-001',
    name: 'Deluxe Room',
    type: 'deluxe',
    basePrice: 120,
    maxGuests: 2,
    amenities: ['Free WiFi', 'Air Conditioning', 'Mini Bar', 'Garden View', 'Private Bathroom'],
    images: [
      'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    available: true,
    description: 'Elegant rooms with modern amenities and beautiful garden views.'
  },
  {
    id: 'pond-villa-001',
    name: 'Pond Villa',
    type: 'pond-villa',
    basePrice: 200,
    maxGuests: 3,
    amenities: ['Pond View', 'Private Terrace', 'Jacuzzi', 'Kitchenette', 'Premium Amenities'],
    images: [
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    available: true,
    description: 'Private villas with direct pond access and stunning water views.'
  },
  {
    id: 'pond-duplex-001',
    name: 'Pond Duplex',
    type: 'pond-duplex',
    basePrice: 300,
    maxGuests: 6,
    amenities: ['Two Levels', 'Pond View', 'Full Kitchen', 'Multiple Bedrooms', 'Family Friendly'],
    images: [
      'https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    available: true,
    description: 'Spacious two-level suites perfect for families and groups.'
  }
];

export const promoCodes = [
  {
    code: 'WELCOME10',
    discount: 10,
    type: 'percentage' as const,
    validFrom: new Date('2024-01-01'),
    validTo: new Date('2024-12-31'),
    active: true
  },
  {
    code: 'SPRING25',
    discount: 25,
    type: 'fixed' as const,
    validFrom: new Date('2024-03-01'),
    validTo: new Date('2024-05-31'),
    active: true
  },
  {
    code: 'FAMILY15',
    discount: 15,
    type: 'percentage' as const,
    validFrom: new Date('2024-01-01'),
    validTo: new Date('2024-12-31'),
    active: true
  }
];
