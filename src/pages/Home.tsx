import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Utensils, Fish, Waves, Wifi } from 'lucide-react';
import BookingEngine from '../components/BookingEngine';

export default function Home() {
  const features = [
    {
      icon: <Utensils className="h-8 w-8 text-gold" />,
      title: 'Fine Dining',
      description: 'Exquisite cuisine prepared by world-class chefs'
    },
    {
      icon: <Fish className="h-8 w-8 text-gold" />,
      title: 'Fishing',
      description: 'Peaceful fishing experiences on our pristine pond'
    },
    {
      icon: <Waves className="h-8 w-8 text-gold" />,
      title: 'Boating',
      description: 'Serene boat rides across our beautiful waters'
    },
    {
      icon: <Wifi className="h-8 w-8 text-gold" />,
      title: 'Modern Amenities',
      description: 'All the comfort and convenience you need'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      country: 'USA',
      rating: 5,
      comment: 'Absolutely breathtaking! The pond villa was perfect and the fishing was so relaxing.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      name: 'David Chen',
      country: 'Singapore',
      rating: 5,
      comment: 'The spiritual atmosphere combined with luxury amenities made this trip unforgettable.',
      image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      name: 'Maria Rodriguez',
      country: 'Spain',
      rating: 5,
      comment: 'Perfect retreat! The restaurant food was exceptional and the staff was incredibly welcoming.',
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ];

  return (
    <div className="bg-cream-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-10"></div>
        <img
          src="https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Lumbini Palace Resort"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Lumbini Palace Resort
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Experience luxury and tranquility at the birthplace of Buddha
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/rooms"
              className="bg-gold text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition-colors"
            >
              Book Your Stay
            </Link>
            <Link
              to="/about"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-deep-green transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Booking Widget */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BookingEngine />
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-deep-green mb-6">
                Welcome to Paradise
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Nestled in the sacred grounds of Lumbini, birthplace of Lord Buddha, 
                our resort offers an unparalleled blend of spiritual serenity and 
                modern luxury. Experience the perfect harmony of comfort and tranquility.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                From our elegant pond villas to our world-class dining, every detail 
                has been crafted to provide you with an unforgettable experience in 
                one of the world's most sacred destinations.
              </p>
              <Link
                to="/about"
                className="bg-gold text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
              >
                Discover More
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=500"
                alt="Resort exterior"
                className="rounded-lg shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=500"
                alt="Peaceful pond"
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-deep-green mb-4">
              Experience Our Premium Facilities
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Discover the perfect blend of luxury amenities and peaceful activities 
              designed to enhance your spiritual journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-deep-green mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-deep-green mb-4">
              Luxury Accommodations
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Choose from our carefully designed rooms and villas, each offering 
              unique views and premium amenities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <img
                src="https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Deluxe Room"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-deep-green mb-2">Deluxe Rooms</h3>
                <p className="text-gray-700 mb-4">
                  Elegant rooms with modern amenities and garden views.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gold">$120/night</span>
                  <Link
                    to="/rooms/deluxe"
                    className="bg-gold text-white px-4 py-2 rounded hover:bg-yellow-600 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <img
                src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Pond Villa"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-deep-green mb-2">Pond Villas</h3>
                <p className="text-gray-700 mb-4">
                  Private villas with direct pond access and serene water views.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gold">$200/night</span>
                  <Link
                    to="/rooms/pond-villa"
                    className="bg-gold text-white px-4 py-2 rounded hover:bg-yellow-600 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <img
                src="https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Pond Duplex"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-deep-green mb-2">Pond Duplexes</h3>
                <p className="text-gray-700 mb-4">
                  Spacious two-level suites perfect for families and groups.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gold">$300/night</span>
                  <Link
                    to="/rooms/pond-duplex"
                    className="bg-gold text-white px-4 py-2 rounded hover:bg-yellow-600 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-deep-green mb-4">
              What Our Guests Say
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Hear from our satisfied guests about their unforgettable experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-cream-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-deep-green">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.country}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gold fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-deep-green mb-6">
                <MapPin className="inline h-8 w-8 mr-2 text-gold" />
                Perfect Location
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Located in the heart of Lumbini, our resort provides easy access to 
                all major Buddhist sites and temples while maintaining a peaceful, 
                secluded atmosphere.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• 5 minutes walk to Maya Devi Temple</li>
                <li>• 10 minutes to Lumbini International Airport</li>
                <li>• Adjacent to the Sacred Garden</li>
                <li>• Easy access to monastic zones</li>
              </ul>
            </div>
            <div className="h-96 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.4!2d83.2765!3d27.4833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDI4JzU5LjkiTiA4M8KwMTYnMzUuNCJF!5e0!3m2!1sen!2snp!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
