import React from 'react';
import { Utensils, Fish, Waves, Dumbbell, Wifi, Car, Coffee, Bath } from 'lucide-react';

export default function Facilities() {
  const facilities = [
    {
      icon: <Utensils className="h-12 w-12 text-gold" />,
      title: 'Fine Dining Restaurant',
      description: 'Experience culinary excellence with our world-class restaurant featuring international and local Nepali cuisine.',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['International cuisine', 'Local specialties', 'Vegetarian options', 'Private dining', 'Room service']
    },
    {
      icon: <Fish className="h-12 w-12 text-gold" />,
      title: 'Fishing Activities',
      description: 'Enjoy peaceful fishing experiences on our pristine pond surrounded by beautiful gardens.',
      image: 'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Equipment provided', 'Guided fishing', 'Catch and release', 'Peaceful environment', 'All skill levels']
    },
    {
      icon: <Waves className="h-12 w-12 text-gold" />,
      title: 'Boating on Pond',
      description: 'Take serene boat rides across our beautiful pond and enjoy the tranquil waters.',
      image: 'https://images.pexels.com/photos/1578662/pexels-photo-1578662.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Pedal boats', 'Rowboats', 'Sunset cruises', 'Photography tours', 'Romantic rides']
    },
    {
      icon: <Dumbbell className="h-12 w-12 text-gold" />,
      title: 'Fitness Center',
      description: 'Stay active with our modern fitness center equipped with state-of-the-art equipment.',
      image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Modern equipment', 'Personal trainers', 'Group classes', 'Yoga sessions', '24/7 access']
    },
    {
      icon: <Bath className="h-12 w-12 text-gold" />,
      title: 'Spa & Wellness',
      description: 'Rejuvenate your mind and body with our comprehensive spa treatments and wellness services.',
      image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Massage therapy', 'Ayurvedic treatments', 'Meditation sessions', 'Aromatherapy', 'Couples treatments']
    },
    {
      icon: <Coffee className="h-12 w-12 text-gold" />,
      title: 'Conference Facilities',
      description: 'Host successful meetings and events with our modern conference facilities and professional services.',
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Meeting rooms', 'Audio/visual equipment', 'Catering services', 'Event planning', 'Business center']
    }
  ];

  const amenities = [
    { icon: <Wifi className="h-6 w-6 text-gold" />, text: 'Free WiFi throughout resort' },
    { icon: <Car className="h-6 w-6 text-gold" />, text: 'Free parking for all guests' },
    { icon: <Coffee className="h-6 w-6 text-gold" />, text: '24/7 room service' },
    { icon: <Bath className="h-6 w-6 text-gold" />, text: 'Laundry and dry cleaning' }
  ];

  return (
    <div className="bg-cream-50">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-10"></div>
        <img
          src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Resort Facilities"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Facilities & Activities</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Discover our world-class amenities and activities
          </p>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-deep-green mb-4">
              Premium Facilities
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Experience luxury and convenience with our comprehensive range of facilities 
              designed to enhance your stay.
            </p>
          </div>

          <div className="space-y-16">
            {facilities.map((facility, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="mb-4">
                    {facility.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-deep-green mb-4">{facility.title}</h3>
                  <p className="text-lg text-gray-700 mb-6">{facility.description}</p>
                  
                  <div className="space-y-2">
                    {facility.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gold rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Amenities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-deep-green mb-4">
              Additional Amenities
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Enjoy these complimentary services and amenities during your stay
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="mb-4 flex justify-center">
                  {amenity.icon}
                </div>
                <p className="text-gray-700 font-medium">{amenity.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-deep-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Experience Our Facilities?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your stay today and enjoy access to all our premium facilities and activities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className="bg-gold text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition-colors"
            >
              Book Now
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-deep-green transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
