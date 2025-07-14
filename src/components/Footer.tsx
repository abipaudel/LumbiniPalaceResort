import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Music, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-deep-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Resort Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gold">Lumbini Palace Resort</h3>
            <p className="text-gray-300">
              Experience luxury and tranquility at the birthplace of Buddha. Your perfect getaway awaits.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                <Music className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/rooms" className="text-gray-300 hover:text-gold transition-colors">Rooms</Link></li>
              <li><Link to="/facilities" className="text-gray-300 hover:text-gold transition-colors">Facilities</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-gold transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-gold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Fine Dining Restaurant</span></li>
              <li><span className="text-gray-300">Fishing Activities</span></li>
              <li><span className="text-gray-300">Boating on Pond</span></li>
              <li><span className="text-gray-300">Spa & Wellness</span></li>
              <li><span className="text-gray-300">Conference Facilities</span></li>
              <li><span className="text-gray-300">Airport Transfer</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Lumbini Development Trust, Lumbini, Nepal</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold flex-shrink-0" />
                <span className="text-gray-300">+977-1-234-5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gold flex-shrink-0" />
                <span className="text-gray-300">info@lumbinipalaceresort.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2024 Lumbini Palace Resort. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/terms" className="text-gray-300 hover:text-gold text-sm transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-gold text-sm transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
