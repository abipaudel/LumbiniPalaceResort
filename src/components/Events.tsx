import React, { useState } from 'react';
import { Calendar, Users, MapPin, Clock, Star, Phone, Mail, CheckCircle } from 'lucide-react';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState('wedding');

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const eventTypes = [
    {
      id: 'wedding',
      title: 'Wedding Ceremonies',
      icon: <Star className="w-6 h-6" />,
      description: 'Sacred wedding ceremonies in the birthplace of Buddha',
      capacity: '200 guests',
      venues: ['Garden Pavilion', 'Lotus Hall', 'Sacred Grove'],
      features: ['Buddhist blessing ceremony', 'Traditional decorations', 'Professional photography', 'Catering services']
    },
    {
      id: 'corporate',
      title: 'Corporate Retreats',
      icon: <Users className="w-6 h-6" />,
      description: 'Peaceful environment for business meetings and team building',
      capacity: '150 participants',
      venues: ['Conference Hall', 'Meditation Room', 'Outdoor Pavilion'],
      features: ['AV equipment', 'High-speed WiFi', 'Business center', 'Team building activities']
    },
    {
      id: 'spiritual',
      title: 'Spiritual Gatherings',
      icon: <Calendar className="w-6 h-6" />,
      description: 'Meditation retreats and spiritual workshops',
      capacity: '100 participants',
      venues: ['Meditation Hall', 'Prayer Garden', 'Wisdom Pavilion'],
      features: ['Meditation guidance', 'Spiritual teachings', 'Peaceful ambiance', 'Vegetarian meals']
    }
  ];

  const venues = [
    {
      name: 'Lotus Hall',
      capacity: '200 guests',
      area: '500 sq.m',
      features: ['Air conditioning', 'Sound system', 'Stage area', 'Bridal suite'],
      image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Garden Pavilion',
      capacity: '150 guests',
      area: '400 sq.m',
      features: ['Open-air setting', 'Garden views', 'Natural lighting', 'Flexible seating'],
      image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Conference Hall',
      capacity: '100 guests',
      area: '300 sq.m',
      features: ['Projector & screen', 'WiFi', 'Whiteboard', 'Coffee station'],
      image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Events & <span className="text-emerald-600">Conferences</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create unforgettable moments in the sacred atmosphere of Lumbini. 
            Our versatile venues and expert planning services ensure your event is perfect.
          </p>
        </div>

        {/* Event Types */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {eventTypes.map((event) => (
              <button
                key={event.id}
                onClick={() => setSelectedEvent(event.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedEvent === event.id
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-emerald-50 border border-gray-200'
                }`}
              >
                {event.icon}
                <span className="font-medium">{event.title}</span>
              </button>
            ))}
          </div>

          {/* Selected Event Details */}
          {eventTypes.map((event) => (
            selectedEvent === event.id && (
              <div key={event.id} className="bg-white rounded-2xl shadow-xl p-8 mb-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{event.title}</h3>
                    <p className="text-gray-600 mb-6">{event.description}</p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-emerald-600" />
                        <span className="text-gray-700">Capacity: {event.capacity}</span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-emerald-600" />
                        <span className="text-gray-700">Venues: {event.venues.join(', ')}</span>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Included Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {event.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-emerald-600" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={scrollToBooking}
                      className="mt-8 bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 transition-colors duration-300 font-medium"
                    >
                      Plan Your Event
                    </button>
                  </div>

                  <div className="relative">
                    <img
                      src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt={event.title}
                      className="w-full h-80 object-cover rounded-xl shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>

        {/* Venues */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Event Venues</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {venues.map((venue, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{venue.name}</h4>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{venue.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{venue.area}</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    {venue.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-emerald-600" />
                        <span className="text-xs text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-emerald-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Plan Your Event?</h3>
          <p className="mb-6 opacity-90">
            Our experienced event coordinators are here to help you create the perfect celebration
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>+977-71-580-236</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>events@lumbinipalace.com</span>
            </div>
          </div>
          <button
            onClick={scrollToBooking}
            className="bg-white text-emerald-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300 font-medium"
          >
            Get Quote Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;
