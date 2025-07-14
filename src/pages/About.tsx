import React from 'react';
import { Heart, Users, Award, Leaf } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-gold" />,
      title: 'Spiritual Hospitality',
      description: 'We blend the sacred traditions of Lumbini with modern luxury to create meaningful experiences.'
    },
    {
      icon: <Users className="h-8 w-8 text-gold" />,
      title: 'Cultural Heritage',
      description: 'Our resort celebrates the rich Buddhist heritage while providing world-class amenities.'
    },
    {
      icon: <Award className="h-8 w-8 text-gold" />,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our service, from accommodation to dining.'
    },
    {
      icon: <Leaf className="h-8 w-8 text-gold" />,
      title: 'Sustainability',
      description: 'We are committed to preserving the natural beauty and cultural significance of Lumbini.'
    }
  ];

  return (
    <div className="bg-cream-50">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-10"></div>
        <img
          src="https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="About Lumbini Palace Resort"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Discover the story behind Lumbini Palace Resort
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-deep-green mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                Lumbini Palace Resort was born from a vision to create a sanctuary where 
                the sacred meets the luxurious. Established in 2020, we recognized the 
                need for a world-class hospitality experience in the birthplace of Lord Buddha.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our resort stands as a testament to the harmony between spiritual 
                enlightenment and modern comfort, offering guests an opportunity to 
                connect with their inner peace while enjoying premium amenities.
              </p>
              <p className="text-lg text-gray-700">
                Every corner of our resort has been designed with respect for the 
                sacred nature of Lumbini, creating spaces that inspire contemplation 
                and rejuvenation.
              </p>
            </div>
            <div className="space-y-4">
              <img
                src="https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Resort history"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-deep-green mb-4">Our Values</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              These core values guide everything we do at Lumbini Palace Resort
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-deep-green mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <img
                src="https://images.pexels.com/photos/1483880/pexels-photo-1483880.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Our mission"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-deep-green mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                To provide an exceptional hospitality experience that honors the 
                spiritual significance of Lumbini while offering world-class comfort 
                and luxury to pilgrims and travelers from around the globe.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We are committed to:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Creating memorable experiences that nourish the soul</li>
                <li>• Preserving and celebrating Buddhist heritage</li>
                <li>• Providing exceptional service with genuine care</li>
                <li>• Supporting sustainable tourism practices</li>
                <li>• Contributing to the local community</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-deep-green mb-4">Recognition & Awards</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="mb-4">
                <Award className="h-12 w-12 text-gold mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-deep-green mb-2">
                Best Luxury Resort 2023
              </h3>
              <p className="text-gray-700">Nepal Tourism Board</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="mb-4">
                <Award className="h-12 w-12 text-gold mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-deep-green mb-2">
                Excellence in Hospitality
              </h3>
              <p className="text-gray-700">Asian Hotel Awards</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="mb-4">
                <Award className="h-12 w-12 text-gold mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-deep-green mb-2">
                Sustainable Tourism Award
              </h3>
              <p className="text-gray-700">Global Travel Foundation</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
