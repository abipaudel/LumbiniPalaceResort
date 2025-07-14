import React from 'react';
import { Bed, Wifi, Car, Coffee, Utensils, Waves, Mountain, Users, Star, ArrowRight } from 'lucide-react';

const Accommodation = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const rooms = [
    {
      id: 1,
      name: "Deluxe Garden View",
      image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
      price: "$120",
      originalPrice: "$150",
      size: "35 m²",
      guests: "2 Adults",
      description: "Spacious room with beautiful garden views and modern amenities",
      amenities: ["Free WiFi", "Air Conditioning", "Mini Bar", "Garden View", "Room Service"],
      features: [
        { icon: Bed, text: "King Size Bed" },
        { icon: Wifi, text: "Free WiFi" },
        { icon: Coffee, text: "Coffee Maker" },
        { icon: Car, text: "Free Parking" }
      ]
    },
    {
      id: 2,
      name: "Premium Suite",
      image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
      price: "$200",
      originalPrice: "$250",
      size: "55 m²",
      guests: "2-3 Adults",
      description: "Luxurious suite with separate living area and premium facilities",
      amenities: ["Free WiFi", "Jacuzzi", "Mini Bar", "City View", "Butler Service"],
      features: [
        { icon: Bed, text: "King Suite" },
        { icon: Waves, text: "Jacuzzi" },
        { icon: Utensils, text: "Kitchenette" },
        { icon: Users, text: "Living Area" }
      ]
    },
    {
      id: 3,
      name: "Royal Villa",
      image: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg",
      price: "$350",
      originalPrice: "$400",
      size: "85 m²",
      guests: "4-6 Adults",
      description: "Private villa with mountain views and exclusive amenities",
      amenities: ["Private Pool", "Mountain View", "Personal Chef", "Spa Services", "Private Garden"],
      features: [
        { icon: Mountain, text: "Mountain View" },
        { icon: Waves, text: "Private Pool" },
        { icon: Utensils, text: "Private Chef" },
        { icon: Users, text: "Family Suite" }
      ]
    }
  ];

  return (
    <section id="accommodation" className="py-20 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
            <Bed className="w-8 h-8 text-emerald-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Luxury <span className="text-emerald-600">Accommodation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience unparalleled comfort in our thoughtfully designed rooms and suites, 
            each offering a perfect blend of modern luxury and spiritual tranquility.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {rooms.map((room, index) => (
            <div 
              key={room.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Room Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Best Value
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold">4.8</span>
                  </div>
                </div>
              </div>

              {/* Room Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{room.name}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span>{room.size}</span>
                      <span>•</span>
                      <span>{room.guests}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg text-gray-400 line-through">{room.originalPrice}</span>
                      <span className="text-2xl font-bold text-emerald-600">{room.price}</span>
                    </div>
                    <span className="text-sm text-gray-600">per night</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{room.description}</p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {room.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                      <feature.icon className="w-4 h-4 text-emerald-600" />
                      <span>{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* Amenities */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Amenities</h4>
                  <div className="flex flex-wrap gap-2">
                    {room.amenities.slice(0, 3).map((amenity, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-medium"
                      >
                        {amenity}
                      </span>
                    ))}
                    {room.amenities.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                        +{room.amenities.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Book Now Button */}
                <button 
                  onClick={scrollToBooking}
                  className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-3 px-6 rounded-xl font-semibold hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 group"
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Need Help Choosing the Perfect Room?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our hospitality experts are here to help you find the ideal accommodation 
            for your spiritual journey and luxury retreat in Lumbini.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToBooking}
              className="bg-emerald-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors duration-300"
            >
              Book Your Stay
            </button>
            <button className="border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-xl font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accommodation;
