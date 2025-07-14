import React from 'react';
import { Shield, Check, AlertCircle } from 'lucide-react';

export default function Terms() {
  return (
    <div className="bg-cream-50">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-10"></div>
        <img
          src="https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Terms & Conditions"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Your guide to our policies and procedures
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-gold mr-3" />
                <h2 className="text-3xl font-bold text-deep-green">Terms & Conditions</h2>
              </div>
              <p className="text-gray-700">
                Last updated: March 2024
              </p>
            </div>

            <div className="space-y-8">
              {/* Booking Policy */}
              <div>
                <h3 className="text-2xl font-semibold text-deep-green mb-4 flex items-center">
                  <Check className="h-6 w-6 text-gold mr-2" />
                  Booking Policy
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p>• All bookings are subject to availability and confirmation by Lumbini Palace Resort.</p>
                  <p>• A valid credit card is required to secure your reservation.</p>
                  <p>• Rates are per room, per night, and are subject to change without notice.</p>
                  <p>• All rates are quoted in USD and are subject to applicable taxes.</p>
                  <p>• Special rates and packages may have additional terms and conditions.</p>
                </div>
              </div>

              {/* Check-in & Check-out */}
              <div>
                <h3 className="text-2xl font-semibold text-deep-green mb-4 flex items-center">
                  <Check className="h-6 w-6 text-gold mr-2" />
                  Check-in & Check-out
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p>• Check-in time is 3:00 PM and check-out time is 12:00 PM.</p>
                  <p>• Early check-in and late check-out may be available upon request, subject to availability.</p>
                  <p>• Government-issued photo identification is required at check-in.</p>
                  <p>• Guests must be at least 18 years old to check in.</p>
                  <p>• All guests must register at the front desk upon arrival.</p>
                </div>
              </div>

              {/* Cancellation Policy */}
              <div>
                <h3 className="text-2xl font-semibold text-deep-green mb-4 flex items-center">
                  <AlertCircle className="h-6 w-6 text-gold mr-2" />
                  Cancellation Policy
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p>• Standard reservations may be cancelled up to 24 hours before arrival without penalty.</p>
                  <p>• Cancellations made within 24 hours of arrival will incur a one-night room charge.</p>
                  <p>• No-show reservations will be charged the full amount of the reservation.</p>
                  <p>• Special rates and packages may have different cancellation policies.</p>
                  <p>• Group bookings (10+ rooms) have special cancellation terms.</p>
                </div>
              </div>

              {/* Payment Terms */}
              <div>
                <h3 className="text-2xl font-semibold text-deep-green mb-4 flex items-center">
                  <Check className="h-6 w-6 text-gold mr-2" />
                  Payment Terms
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p>• Payment is due at the time of booking or check-in.</p>
                  <p>• We accept major credit cards, debit cards, and cash.</p>
                  <p>• Additional charges may apply for services such as spa treatments, dining, and activities.</p>
                  <p>• All prices are subject to applicable local taxes and service charges.</p>
                  <p>• Currency exchange is available at the front desk.</p>
                </div>
              </div>

              {/* Guest Responsibilities */}
              <div>
                <h3 className="text-2xl font-semibold text-deep-green mb-4 flex items-center">
                  <Check className="h-6 w-6 text-gold mr-2" />
                  Guest Responsibilities
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p>• Guests are responsible for any damage to hotel property during their stay.</p>
                  <p>• Smoking is prohibited in all rooms and indoor areas.</p>
                  <p>• Quiet hours are observed from 10:00 PM to 7:00 AM.</p>
                  <p>• Maximum occupancy limits must be observed for all rooms.</p>
                  <p>• Guests must respect the spiritual nature of the location and other guests.</p>
                </div>
              </div>

              {/* Amenities & Services */}
              <div>
                <h3 className="text-2xl font-semibold text-deep-green mb-4 flex items-center">
                  <Check className="h-6 w-6 text-gold mr-2" />
                  Amenities & Services
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p>• All amenities and services are subject to availability and may have seasonal variations.</p>
                  <p>• The resort reserves the right to modify or discontinue services without notice.</p>
                  <p>• Additional charges may apply for certain services and activities.</p>
                  <p>• Pool and spa facilities have specific operating hours and rules.</p>
                  <p>• Food and beverage services are subject to availability and seasonal menus.</p>
                </div>
              </div>

              {/* Liability */}
              <div>
                <h3 className="text-2xl font-semibold text-deep-green mb-4 flex items-center">
                  <AlertCircle className="h-6 w-6 text-gold mr-2" />
                  Liability
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p>• The resort is not responsible for loss or damage to personal belongings.</p>
                  <p>• Guests participate in activities at their own risk.</p>
                  <p>• The resort is not liable for injuries sustained during recreational activities.</p>
                  <p>• Travel insurance is recommended for all guests.</p>
                  <p>• The resort reserves the right to refuse service to any guest.</p>
                </div>
              </div>

              {/* Privacy Policy */}
              <div>
                <h3 className="text-2xl font-semibold text-deep-green mb-4 flex items-center">
                  <Shield className="h-6 w-6 text-gold mr-2" />
                  Privacy Policy
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p>• Guest information is collected and used in accordance with our Privacy Policy.</p>
                  <p>• Personal information is protected and not shared with third parties without consent.</p>
                  <p>• Security cameras are installed in public areas for safety purposes.</p>
                  <p>• Guest consent is required for photography and marketing materials.</p>
                  <p>• Data retention policies are in place to protect guest information.</p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mt-12 p-6 bg-cream-50 rounded-lg">
                <h3 className="text-xl font-semibold text-deep-green mb-4">Questions About Our Terms?</h3>
                <p className="text-gray-700 mb-4">
                  If you have any questions about these Terms & Conditions, please don't hesitate to contact us:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p>• Phone: +977-1-234-5678</p>
                  <p>• Email: info@lumbinipalaceresort.com</p>
                  <p>• Address: Lumbini Development Trust, Lumbini, Rupandehi, Nepal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
