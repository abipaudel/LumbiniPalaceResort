import React from 'react';
import { Award, Users, MapPin, Heart } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Award className="h-12 w-12 text-amber-600" />,
      title: "Premium Service",
      description: "Award-winning hospitality with personalized attention to every guest"
    },
    {
      icon: <Users className="h-12 w-12 text-amber-600" />,
      title: "Expert Staff",
      description: "Professional multilingual staff dedicated to making your stay memorable"
    },
    {
      icon: <MapPin className="h-12 w-12 text-amber-600" />,
      title: "Sacred Location",
      description: "Located in the heart of Lumbini, the birthplace of Lord Buddha"
    },
    {
      icon: <Heart className="h-12 w-12 text-amber-600" />,
      title: "Peaceful Atmosphere",
      description: "Serene environment perfect for meditation and spiritual reflection"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About Lumbini Palace Resort
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nestled in the sacred lands of Lumbini, our resort offers a perfect blend of 
            luxury, spirituality, and authentic Nepali hospitality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              A Sanctuary of Peace and Luxury
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Lumbini Palace Resort stands as a beacon of tranquility in the birthplace of 
              Lord Buddha. Our carefully designed spaces honor the spiritual significance 
              of this sacred location while providing modern comfort and luxury.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Every aspect of our resort reflects our commitment to preserving the peaceful 
              atmosphere that makes Lumbini so special, while offering guests world-class 
              amenities and personalized service.
            </p>
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">50+</div>
                <div className="text-sm text-gray-600">Luxury Rooms</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">24/7</div>
                <div className="text-sm text-gray-600">Concierge Service</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
              alt="Resort Interior"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
