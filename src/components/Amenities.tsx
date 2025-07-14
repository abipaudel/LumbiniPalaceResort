import React from 'react';
import { Utensils, Wifi, Car, Dumbbell, Waves, Flower2, Space as Spa, Shield } from 'lucide-react';

const Amenities = () => {
  const amenities = [
    {
      icon: <Utensils className="h-8 w-8" />,
      title: "Fine Dining",
      description: "Multiple restaurants serving authentic Nepali and international cuisine"
    },
    {
      icon: <Spa className="h-8 w-8" />,
      title: "Spa & Wellness",
      description: "Full-service spa with traditional Ayurvedic treatments and meditation"
    },
    {
      icon: <Waves className="h-8 w-8" />,
      title: "Swimming Pool",
      description: "Outdoor infinity pool with panoramic views of the gardens"
    },
    {
      icon: <Dumbbell className="h-8 w-8" />,
      title: "Fitness Center",
      description: "State-of-the-art fitness equipment and personal training services"
    },
    {
      icon: <Wifi className="h-8 w-8" />,
      title: "Free WiFi",
      description: "High-speed internet access throughout the resort"
    },
    {
      icon: <Car className="h-8 w-8" />,
      title: "Parking",
      description: "Complimentary valet parking for all guests"
    },
    {
      icon: <Flower2 className="h-8 w-8" />,
      title: "Gardens",
      description: "Beautifully landscaped gardens perfect for meditation walks"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "24/7 Security",
      description: "Round-the-clock security and concierge services"
    }
  ];

  return (
    <section id="amenities" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Resort Amenities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of facilities designed to enhance 
            your stay and provide the ultimate in comfort and convenience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4 text-amber-600">
                {amenity.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {amenity.title}
              </h3>
              <p className="text-gray-600">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Conference & Events
              </h3>
              <p className="text-gray-600 mb-6">
                Host your special events in our elegant banquet halls and outdoor venues. 
                Perfect for weddings, corporate meetings, and spiritual gatherings.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  Multiple event spaces for up to 300 guests
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  Professional event planning services
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  Audio-visual equipment and technical support
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  Customized catering menus
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Event Space"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
