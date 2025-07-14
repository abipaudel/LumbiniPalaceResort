import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Users, Wifi, Car, Coffee, Bath, Bed, Check } from 'lucide-react';

export default function RoomDetail() {
  const { roomType } = useParams();

  const roomData = {
    'deluxe': {
      name: 'Deluxe Rooms',
      price: 120,
      images: [
        'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      description: 'Our Deluxe Rooms offer the perfect blend of comfort and elegance. Each room features modern amenities, comfortable furnishings, and beautiful garden views that create a peaceful retreat after a day of exploring Lumbini.',
      features: [
        'Size: 32 square meters',
        'Garden or courtyard view',
        'King size bed or twin beds',
        'Air conditioning',
        'Mini bar and coffee maker',
        'Flat-screen TV with cable',
        'Work desk and chair',
        'Private bathroom with shower'
      ],
      amenities: [
        { icon: <Users className="h-5 w-5" />, text: 'Up to 2 guests' },
        { icon: <Wifi className="h-5 w-5" />, text: 'Free WiFi' },
        { icon: <Car className="h-5 w-5" />, text: 'Free Parking' },
        { icon: <Coffee className="h-5 w-5" />, text: 'Mini Bar' },
        { icon: <Bath className="h-5 w-5" />, text: 'Private Bathroom' },
        { icon: <Bed className="h-5 w-5" />, text: 'King/Twin Beds' }
      ],
      policies: [
        'Check-in: 3:00 PM',
        'Check-out: 12:00 PM',
        'Non-smoking rooms available',
        'Children welcome',
        'Pets not allowed',
        'Free cancellation up to 24 hours'
      ]
    },
    'pond-villa': {
      name: 'Pond Villas',
      price: 200,
      images: [
        'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      description: 'Experience ultimate luxury in our Pond Villas, featuring direct access to our serene pond. These spacious villas offer privacy, stunning water views, and premium amenities for an unforgettable stay.',
      features: [
        'Size: 50 square meters',
        'Direct pond access',
        'Private terrace with seating',
        'Jacuzzi bathroom',
        'Kitchenette with refrigerator',
        'King size bed',
        'Living area with sofa',
        'Premium toiletries'
      ],
      amenities: [
        { icon: <Users className="h-5 w-5" />, text: 'Up to 3 guests' },
        { icon: <Wifi className="h-5 w-5" />, text: 'Free WiFi' },
        { icon: <Car className="h-5 w-5" />, text: 'Free Parking' },
        { icon: <Coffee className="h-5 w-5" />, text: 'Kitchenette' },
        { icon: <Bath className="h-5 w-5" />, text: 'Jacuzzi' },
        { icon: <Bed className="h-5 w-5" />, text: 'King Bed' }
      ],
      policies: [
        'Check-in: 3:00 PM',
        'Check-out: 12:00 PM',
        'Non-smoking villas',
        'Children welcome',
        'Pets not allowed',
        'Free cancellation up to 48 hours'
      ]
    },
    'pond-duplex': {
      name: 'Pond Duplexes',
      price: 300,
      images: [
        'https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      description: 'Perfect for families and groups, our Pond Duplexes offer spacious two-level accommodation with stunning pond views. These luxurious suites provide all the space and amenities needed for a comfortable extended stay.',
      features: [
        'Size: 80 square meters',
        'Two levels with separate living areas',
        'Pond view from both levels',
        'Full kitchen with dining area',
        'Two bathrooms',
        'Multiple bedrooms',
        'Private balcony',
        'Separate entrance'
      ],
      amenities: [
        { icon: <Users className="h-5 w-5" />, text: 'Up to 6 guests' },
        { icon: <Wifi className="h-5 w-5" />, text: 'Free WiFi' },
        { icon: <Car className="h-5 w-5" />, text: 'Free Parking' },
        { icon: <Coffee className="h-5 w-5" />, text: 'Full Kitchen' },
        { icon: <Bath className="h-5 w-5" />, text: 'Two Bathrooms' },
        { icon: <Bed className="h-5 w-5" />, text: 'Multiple Beds' }
      ],
      policies: [
        'Check-in: 3:00 PM',
        'Check-out: 12:00 PM',
        'Non-smoking duplex',
        'Children welcome',
        'Pets not allowed',
        'Free cancellation up to 48 hours'
      ]
    }
  };

  const room = roomData[roomType as keyof typeof roomData];

  if (!room) {
    return (
      <div className="min-h-screen bg-cream-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-deep-green mb-4">Room Not Found</h1>
          <Link to="/rooms" className="bg-gold text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition-colors">
            Back to Rooms
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-cream-50">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-10"></div>
        <img
          src={room.images[0]}
          alt={room.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{room.name}</h1>
          <p className="text-xl md:text-2xl">
            Starting from ${room.price} per night
          </p>
        </div>
      </section>

      {/* Room Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Images */}
            <div>
              <div className="space-y-4">
                <img
                  src={room.images[0]}
                  alt={room.name}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
                <div className="grid grid-cols-2 gap-4">
                  {room.images.slice(1).map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${room.name} ${index + 2}`}
                      className="w-full h-48 object-cover rounded-lg shadow-lg"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Room Info */}
            <div>
              <h2 className="text-3xl font-bold text-deep-green mb-4">{room.name}</h2>
              <p className="text-lg text-gray-700 mb-6">{room.description}</p>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-deep-green mb-4">Room Features</h3>
                <div className="grid grid-cols-1 gap-2">
                  {room.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Check className="h-5 w-5 text-gold" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-deep-green mb-4">Amenities</h3>
                <div className="grid grid-cols-2 gap-3">
                  {room.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-2 text-gray-700">
                      <div className="text-gold">{amenity.icon}</div>
                      <span>{amenity.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Policies */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-deep-green mb-4">Policies</h3>
                <div className="space-y-2">
                  {room.policies.map((policy, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-gold" />
                      <span className="text-gray-700">{policy}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Booking */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-3xl font-bold text-gold">${room.price}</span>
                    <span className="text-gray-700 ml-2">per night</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    Taxes and fees not included
                  </div>
                </div>
                <Link
                  to="/"
                  className="w-full bg-gold text-white py-3 rounded-lg hover:bg-yellow-600 transition-colors font-medium text-center block"
                >
                  Book This Room
                </Link>
                <p className="text-sm text-gray-600 mt-2 text-center">
                  Free cancellation • No booking fees
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
