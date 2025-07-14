import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-gold" />,
      title: 'Address',
      details: 'Lumbini Development Trust, Lumbini, Rupandehi, Nepal'
    },
    {
      icon: <Phone className="h-6 w-6 text-gold" />,
      title: 'Phone',
      details: '+977-1-234-5678'
    },
    {
      icon: <Mail className="h-6 w-6 text-gold" />,
      title: 'Email',
      details: 'info@lumbinipalaceresort.com'
    },
    {
      icon: <Clock className="h-6 w-6 text-gold" />,
      title: 'Check-in / Check-out',
      details: '3:00 PM / 12:00 PM'
    }
  ];

  return (
    <div className="bg-cream-50">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-10"></div>
        <img
          src="https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Contact Us"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Get in touch with our team
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-deep-green mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold">
                    <option>General Inquiry</option>
                    <option>Booking Information</option>
                    <option>Special Requests</option>
                    <option>Feedback</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="Please share your message or inquiry..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gold text-white py-3 rounded-lg hover:bg-yellow-600 transition-colors font-medium flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-deep-green mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-700 mb-8">
                We're here to help make your stay at Lumbini Palace Resort unforgettable. 
                Contact us for reservations, inquiries, or any assistance you may need.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-cream-100 rounded-lg flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-deep-green mb-1">{item.title}</h3>
                      <p className="text-gray-700">{item.details}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-deep-green mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Reception:</span>
                    <span>24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Restaurant:</span>
                    <span>6:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Spa:</span>
                    <span>9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Activities:</span>
                    <span>7:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-deep-green mb-4">Our Location</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Find us in the heart of Lumbini, just minutes away from the sacred Maya Devi Temple
            </p>
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
      </section>
    </div>
  );
}
