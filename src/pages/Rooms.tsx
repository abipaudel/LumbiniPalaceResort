import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Wifi, Car, Coffee, Bath, Bed } from 'lucide-react';

export default function Rooms() {
  const rooms = [
    {
      id: 'deluxe',
      name: 'Deluxe Rooms',
      price: 120,
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Elegant and comfortable rooms with modern amenities and garden views.',
      features: ['32 sqm', 'Garden View', 'King/Twin Beds', 'Free WiFi', 'Mini Bar', 'AC'],
      amenities: [
        { icon: <Users className="h-5 w-5" />, text: 'Up to 2 guests' },
        { icon: <Wifi className="h-5 w-5" />, text: 'Free WiFi' },
        { icon: <Car className="h-5 w-5" />, text: 'Free Parking' },
        { icon: <Coffee className="h-5 w-5" />, text: 'Mini Bar' },
        { icon: <Bath className="h-5 w-5" />, text: 'Private Bathroom' },
        { icon: <Bed className="h-5 w-5" />, text: 'King/Twin Beds' }
      ]
    },
    {
      id: 'pond-villa',
      name: 'Pond Villas',
      price: 200,
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Private villas with direct pond access and stunning water views.',
      features: ['50 sqm', 'Pond View', 'Private Terrace', 'Jacuzzi', 'Kitchenette', 'Premium Amenities'],
      amenities: [
        { icon: <Users className="h-5 w-5" />, text: 'Up to 3 guests' },
        { icon: <Wifi className="h-5 w-5" />, text: 'Free WiFi' },
        { icon: <Car className="h-5 w-5" />, text: 'Free Parking' },
        { icon: <Coffee className="h-5 w-5" />, text: 'Kitchenette' },
        { icon: <Bath className="h-5 w-5" />, text: 'Jacuzzi' },
        { icon: <Bed className="h-5 w-5" />, text: 'King Bed' }
      ]
    },
    {
      id: 'pond-duplex',
      name: 'Pond Duplexes',
      price: 300,
      image: 'https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Spacious two-level suites perfect for families and groups.',
      features: ['80 sqm', 'Two Levels', 'Pond View', 'Living Area', 'Two Bathrooms', 'Family Friendly'],
      amenities: [
        { icon: <Users className="h-5 w-5" />, text: 'Up to 6 guests' },
        { icon: <Wifi className="h-5 w-5" />, text: 'Free WiFi' },
        { icon: <Car className="h-5 w-5" />, text: 'Free Parking' },
        { icon: <Coffee className="h-5 w-5" />, text: 'Full Kitchen' },
        { icon: <Bath className="h-5 w-5" />, text: 'Two Bathrooms' },
        { icon: <Bed className="h-5 w-5" />, text: 'Multiple Beds' }
      ]
    }
  ];

  return (
    <div className="bg-cream-50">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-10"></div>
        <img
          src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Luxury Accommodations"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Rooms</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Luxury accommodations with breathtaking views
          </p>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-deep-green mb-4">
              Choose Your Perfect Stay
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Each accommodation option offers unique features designed to enhance your 
              experience at Lumbini Palace Resort.
            </p>
          </div>

          <div className="space-y-16">
            {rooms.map((room, index) => (
              <div key={room.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <h3 className="text-3xl font-bold text-deep-green mb-4">{room.name}</h3>
                  <p className="text-lg text-gray-700 mb-6">{room.description}</p>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-deep-green mb-3">Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {room.features.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-gold rounded-full"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-deep-green mb-3">Amenities</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {room.amenities.map((amenity, i) => (
                        <div key={i} className="flex items-center space-x-2 text-gray-700">
                          <div className="text-gold">{amenity.icon}</div>
                          <span>{amenity.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-3xl font-bold text-gold">${room.price}</span>
                      <span className="text-gray-700 ml-2">per night</span>
                    </div>
                    <div className="space-x-4">
                      <Link
                        to={`/rooms/${room.id}`}
                        className="bg-deep-green text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                      >
                        View Details
                      </Link>
                      <Link
                        to="/"
                        className="bg-gold text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition-colors"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
