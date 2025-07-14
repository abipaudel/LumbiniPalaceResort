import React from 'react';
import { MapPin, Clock, Star, Users, Camera, Heart } from 'lucide-react';

const Attractions = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const attractions = [
    {
      id: 1,
      name: "Maya Devi Temple",
      description: "The sacred birthplace of Lord Buddha, marked by the ancient Maya Devi Temple. Experience the spiritual energy of this UNESCO World Heritage Site.",
      image: "https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=800",
      distance: "2 km",
      duration: "2-3 hours",
      rating: 4.9,
      highlights: ["Sacred Birthplace", "UNESCO Site", "Ancient Ruins", "Meditation Area"]
    },
    {
      id: 2,
      name: "Lumbini Sacred Garden",
      description: "Peaceful gardens surrounding the Maya Devi Temple with meditation areas, ancient ruins, and the sacred Puskarni Pond.",
      image: "https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=800",
      distance: "1.5 km",
      duration: "3-4 hours",
      rating: 4.8,
      highlights: ["Sacred Pond", "Meditation Gardens", "Ancient Stupas", "Prayer Wheels"]
    },
    {
      id: 3,
      name: "World Peace Pagoda",
      description: "A magnificent white pagoda built by Japanese Buddhists, offering panoramic views and a serene atmosphere for contemplation.",
      image: "https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg?auto=compress&cs=tinysrgb&w=800",
      distance: "5 km",
      duration: "2 hours",
      rating: 4.7,
      highlights: ["Panoramic Views", "Japanese Architecture", "Peace Symbol", "Sunset Views"]
    },
    {
      id: 4,
      name: "Lumbini Museum",
      description: "Discover the rich history and cultural heritage of Buddhism through ancient artifacts, sculptures, and interactive exhibitions.",
      image: "https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=800",
      distance: "3 km",
      duration: "1-2 hours",
      rating: 4.6,
      highlights: ["Ancient Artifacts", "Buddhist Art", "Historical Exhibits", "Cultural Heritage"]
    },
    {
      id: 5,
      name: "Monastic Zone",
      description: "Visit monasteries from different Buddhist countries, each showcasing unique architectural styles and cultural traditions.",
      image: "https://images.pexels.com/photos/8728426/pexels-photo-8728426.jpeg?auto=compress&cs=tinysrgb&w=800",
      distance: "4 km",
      duration: "4-5 hours",
      rating: 4.8,
      highlights: ["International Monasteries", "Cultural Diversity", "Architecture Tour", "Monk Interactions"]
    },
    {
      id: 6,
      name: "Kapilvastu Archaeological Site",
      description: "Explore the ancient ruins of Kapilvastu, the childhood home of Prince Siddhartha (Buddha), with guided archaeological tours.",
      image: "https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&w=800",
      distance: "25 km",
      duration: "Half Day",
      rating: 4.5,
      highlights: ["Archaeological Ruins", "Buddha's Childhood Home", "Ancient Palace", "Historical Significance"]
    }
  ];

  const tourPackages = [
    {
      name: "Sacred Sites Full Day Tour",
      price: "$45",
      duration: "8 hours",
      includes: ["All major sites", "Professional guide", "Transportation", "Lunch"],
      popular: true
    },
    {
      name: "Spiritual Meditation Tour",
      price: "$35",
      duration: "6 hours",
      includes: ["Maya Devi Temple", "Meditation session", "Sacred Garden", "Light refreshments"]
    },
    {
      name: "Cultural Heritage Tour",
      price: "$55",
      duration: "Full Day",
      includes: ["Museum visit", "Monastic zone", "Cultural performances", "Traditional meal"]
    }
  ];

  return (
    <section id="attractions" className="py-20 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6">
            Sacred Sites & Attractions
          </h2>
          <p className="text-xl text-emerald-700 max-w-3xl mx-auto leading-relaxed">
            Discover the spiritual heart of Buddhism and explore the sacred sites that have drawn pilgrims 
            from around the world for over 2,500 years.
          </p>
        </div>

        {/* Main Attractions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {attractions.map((attraction, index) => (
            <div 
              key={attraction.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={attraction.image} 
                  alt={attraction.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {attraction.distance} away
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <Heart className="w-5 h-5 text-emerald-600 hover:fill-current cursor-pointer transition-colors" />
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-emerald-900">{attraction.name}</h3>
                  <div className="flex items-center text-amber-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm font-semibold">{attraction.rating}</span>
                  </div>
                </div>
                
                <p className="text-emerald-700 mb-4 leading-relaxed">{attraction.description}</p>
                
                <div className="flex items-center text-emerald-600 mb-4 space-x-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="text-sm">{attraction.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{attraction.distance}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {attraction.highlights.map((highlight, idx) => (
                      <span 
                        key={idx}
                        className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button 
                  onClick={scrollToBooking}
                  className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-3 rounded-xl font-semibold hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Book Tour Package
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Tour Packages Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-emerald-900 mb-4">Guided Tour Packages</h3>
            <p className="text-emerald-700 text-lg">
              Choose from our carefully curated tour packages with expert local guides
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tourPackages.map((pkg, index) => (
              <div 
                key={index}
                className={`relative p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg ${
                  pkg.popular 
                    ? 'border-amber-400 bg-gradient-to-br from-amber-50 to-emerald-50' 
                    : 'border-emerald-200 hover:border-emerald-300'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-amber-400 text-amber-900 px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-emerald-900 mb-2">{pkg.name}</h4>
                  <div className="text-3xl font-bold text-emerald-600 mb-1">{pkg.price}</div>
                  <div className="text-emerald-700 flex items-center justify-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {pkg.duration}
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {pkg.includes.map((item, idx) => (
                    <li key={idx} className="flex items-center text-emerald-700">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={scrollToBooking}
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700 shadow-lg hover:shadow-xl'
                      : 'bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:from-emerald-700 hover:to-emerald-800 shadow-lg hover:shadow-xl'
                  }`}
                >
                  Book This Package
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-3xl p-8 md:p-12 text-white">
            <Users className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h3 className="text-3xl font-bold mb-4">Experience the Sacred Journey</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let our expert guides take you on a transformative journey through the birthplace of Buddhism. 
              Book your spiritual adventure today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={scrollToBooking}
                className="bg-white text-emerald-700 px-8 py-4 rounded-xl font-bold hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Book Your Tour Now
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-emerald-700 transition-all duration-300 transform hover:scale-105">
                <Camera className="w-5 h-5 inline mr-2" />
                View Photo Gallery
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Attractions;
