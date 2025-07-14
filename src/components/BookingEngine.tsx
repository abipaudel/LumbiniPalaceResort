import React, { useState } from 'react';
import { Calendar, Users, MapPin, Phone, Mail, Clock, CreditCard, Building, CheckCircle, AlertCircle, Star } from 'lucide-react';

const BookingEngine = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '2',
    rooms: '1',
    roomType: 'deluxe',
    name: '',
    email: '',
    phone: '',
    nationality: 'Nepali',
    paymentMethod: 'bank-transfer',
    specialRequests: '',
    emergencyContact: '',
    dietaryRequirements: ''
  });

  const [bookingStatus, setBookingStatus] = useState<'idle' | 'processing' | 'confirmed' | 'error'>('idle');
  const [bookingReference, setBookingReference] = useState('');

  const roomTypes = [
    { 
      id: 'deluxe', 
      name: 'Deluxe Garden View', 
      price: 8500, 
      description: 'Comfortable room with garden views',
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    { 
      id: 'suite', 
      name: 'Premium Suite', 
      price: 15000, 
      description: 'Spacious suite with living area',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    { 
      id: 'villa', 
      name: 'Royal Villa', 
      price: 25000, 
      description: 'Luxury villa with private amenities',
      image: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const paymentMethods = [
    { id: 'bank-transfer', name: 'Bank Transfer (NEFT/RTGS)', popular: true },
    { id: 'esewa', name: 'eSewa', popular: true },
    { id: 'khalti', name: 'Khalti', popular: true },
    { id: 'ime-pay', name: 'IME Pay', popular: false },
    { id: 'fonepay', name: 'FonePay', popular: false },
    { id: 'cash', name: 'Cash on Arrival', popular: false },
    { id: 'card', name: 'Credit/Debit Card', popular: false }
  ];

  const calculateTotal = () => {
    const selectedRoom = roomTypes.find(room => room.id === formData.roomType);
    const basePrice = selectedRoom ? selectedRoom.price : 0;
    const nights = formData.checkIn && formData.checkOut ? 
      Math.ceil((new Date(formData.checkOut).getTime() - new Date(formData.checkIn).getTime()) / (1000 * 60 * 60 * 24)) : 1;
    const roomsCount = parseInt(formData.rooms);
    const subtotal = basePrice * nights * roomsCount;
    const tax = subtotal * 0.13; // 13% VAT in Nepal
    const serviceCharge = subtotal * 0.10; // 10% service charge
    return {
      subtotal,
      tax,
      serviceCharge,
      total: subtotal + tax + serviceCharge,
      nights
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBookingStatus('processing');
    
    // Simulate booking process
    setTimeout(() => {
      const reference = 'LPR' + Date.now().toString().slice(-6);
      setBookingReference(reference);
      setBookingStatus('confirmed');
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const pricing = calculateTotal();
  const selectedRoom = roomTypes.find(room => room.id === formData.roomType);

  if (bookingStatus === 'confirmed') {
    return (
      <section id="booking" className="py-20 bg-gradient-to-br from-emerald-50 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Booking Confirmed!</h2>
            <p className="text-xl text-gray-600 mb-6">
              Your reservation has been successfully submitted.
            </p>
            
            <div className="bg-emerald-50 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-emerald-900 mb-4">Booking Details</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div>
                  <p><strong>Reference:</strong> {bookingReference}</p>
                  <p><strong>Guest:</strong> {formData.name}</p>
                  <p><strong>Room:</strong> {selectedRoom?.name}</p>
                  <p><strong>Check-in:</strong> {new Date(formData.checkIn).toLocaleDateString()}</p>
                </div>
                <div>
                  <p><strong>Check-out:</strong> {new Date(formData.checkOut).toLocaleDateString()}</p>
                  <p><strong>Guests:</strong> {formData.guests}</p>
                  <p><strong>Total Amount:</strong> NPR {pricing.total.toLocaleString()}</p>
                  <p><strong>Payment:</strong> {paymentMethods.find(p => p.id === formData.paymentMethod)?.name}</p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-amber-900 mb-4">Next Steps</h3>
              <div className="text-left space-y-2">
                <p>✓ Confirmation email sent to {formData.email}</p>
                <p>✓ SMS confirmation sent to {formData.phone}</p>
                <p>✓ Our team will contact you within 2 hours</p>
                <p>✓ Payment instructions will be provided via phone/email</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  setBookingStatus('idle');
                  setCurrentStep(1);
                  setFormData({
                    checkIn: '',
                    checkOut: '',
                    guests: '2',
                    rooms: '1',
                    roomType: 'deluxe',
                    name: '',
                    email: '',
                    phone: '',
                    nationality: 'Nepali',
                    paymentMethod: 'bank-transfer',
                    specialRequests: '',
                    emergencyContact: '',
                    dietaryRequirements: ''
                  });
                }}
                className="bg-emerald-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors"
              >
                Make Another Booking
              </button>
              <button className="border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-xl font-semibold hover:bg-emerald-600 hover:text-white transition-all">
                Download Confirmation
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-emerald-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-emerald-900 mb-4">
            Book Your Sacred Stay
          </h2>
          <p className="text-xl text-emerald-700 max-w-3xl mx-auto">
            Experience luxury and spirituality in the birthplace of Buddha. 
            Complete your reservation in just a few simple steps.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  currentStep >= step 
                    ? 'bg-emerald-600 text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {step}
                </div>
                {step < 3 && (
                  <div className={`w-16 h-1 mx-2 ${
                    currentStep > step ? 'bg-emerald-600' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <form onSubmit={handleSubmit}>
                {/* Step 1: Room & Dates */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-emerald-900 mb-6">
                      Select Room & Dates
                    </h3>

                    {/* Room Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-4">
                        Choose Your Room
                      </label>
                      <div className="grid gap-4">
                        {roomTypes.map((room) => (
                          <div 
                            key={room.id}
                            className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                              formData.roomType === room.id 
                                ? 'border-emerald-600 bg-emerald-50' 
                                : 'border-gray-200 hover:border-emerald-300'
                            }`}
                            onClick={() => setFormData({...formData, roomType: room.id})}
                          >
                            <div className="flex items-center space-x-4">
                              <img 
                                src={room.image} 
                                alt={room.name}
                                className="w-20 h-16 object-cover rounded-lg"
                              />
                              <div className="flex-1">
                                <h4 className="font-semibold text-gray-900">{room.name}</h4>
                                <p className="text-gray-600 text-sm">{room.description}</p>
                                <p className="text-emerald-600 font-bold">NPR {room.price.toLocaleString()}/night</p>
                              </div>
                              <input
                                type="radio"
                                name="roomType"
                                value={room.id}
                                checked={formData.roomType === room.id}
                                onChange={handleChange}
                                className="text-emerald-600"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Date Selection */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Check-in Date
                        </label>
                        <input
                          type="date"
                          name="checkIn"
                          value={formData.checkIn}
                          onChange={handleChange}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Check-out Date
                        </label>
                        <input
                          type="date"
                          name="checkOut"
                          value={formData.checkOut}
                          onChange={handleChange}
                          min={formData.checkIn || new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>

                    {/* Guests & Rooms */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Number of Guests
                        </label>
                        <select
                          name="guests"
                          value={formData.guests}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                        >
                          <option value="1">1 Guest</option>
                          <option value="2">2 Guests</option>
                          <option value="3">3 Guests</option>
                          <option value="4">4 Guests</option>
                          <option value="5">5+ Guests</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Number of Rooms
                        </label>
                        <select
                          name="rooms"
                          value={formData.rooms}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                        >
                          <option value="1">1 Room</option>
                          <option value="2">2 Rooms</option>
                          <option value="3">3 Rooms</option>
                          <option value="4">4+ Rooms</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Guest Information */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-emerald-900 mb-6">
                      Guest Information
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nationality
                        </label>
                        <select
                          name="nationality"
                          value={formData.nationality}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                        >
                          <option value="Nepali">Nepali</option>
                          <option value="Indian">Indian</option>
                          <option value="Chinese">Chinese</option>
                          <option value="American">American</option>
                          <option value="British">British</option>
                          <option value="German">German</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+977-9841234567"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Emergency Contact
                      </label>
                      <input
                        type="text"
                        name="emergencyContact"
                        value={formData.emergencyContact}
                        onChange={handleChange}
                        placeholder="Name and phone number"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Dietary Requirements
                      </label>
                      <input
                        type="text"
                        name="dietaryRequirements"
                        value={formData.dietaryRequirements}
                        onChange={handleChange}
                        placeholder="Vegetarian, Vegan, Allergies, etc."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Special Requests
                      </label>
                      <textarea
                        name="specialRequests"
                        value={formData.specialRequests}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Airport pickup, room preferences, celebration arrangements, etc."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Payment Method */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-emerald-900 mb-6">
                      Payment Method
                    </h3>

                    <div className="grid gap-3">
                      {paymentMethods.map((method) => (
                        <div 
                          key={method.id}
                          className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                            formData.paymentMethod === method.id 
                              ? 'border-emerald-600 bg-emerald-50' 
                              : 'border-gray-200 hover:border-emerald-300'
                          }`}
                          onClick={() => setFormData({...formData, paymentMethod: method.id})}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <input
                                type="radio"
                                name="paymentMethod"
                                value={method.id}
                                checked={formData.paymentMethod === method.id}
                                onChange={handleChange}
                                className="text-emerald-600"
                              />
                              <span className="font-medium">{method.name}</span>
                              {method.popular && (
                                <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs font-semibold">
                                  Popular
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-blue-50 rounded-xl p-4">
                      <div className="flex items-start space-x-3">
                        <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                        <div className="text-sm text-blue-800">
                          <p className="font-semibold mb-1">Payment Information:</p>
                          <ul className="space-y-1">
                            <li>• 50% advance payment required to confirm booking</li>
                            <li>• Remaining amount can be paid on arrival</li>
                            <li>• Payment instructions will be sent via SMS/Email</li>
                            <li>• Free cancellation up to 48 hours before check-in</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-6 py-3 border-2 border-emerald-600 text-emerald-600 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-all"
                    >
                      Previous
                    </button>
                  )}
                  
                  {currentStep < 3 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      disabled={
                        (currentStep === 1 && (!formData.checkIn || !formData.checkOut)) ||
                        (currentStep === 2 && (!formData.name || !formData.email || !formData.phone))
                      }
                      className="ml-auto px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Next Step
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={bookingStatus === 'processing'}
                      className="ml-auto px-8 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-lg font-semibold hover:from-emerald-700 hover:to-emerald-800 transition-all disabled:opacity-50 flex items-center space-x-2"
                    >
                      {bookingStatus === 'processing' ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                          <span>Processing...</span>
                        </>
                      ) : (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          <span>Confirm Booking</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-8">
              <h3 className="text-xl font-bold text-emerald-900 mb-6">Booking Summary</h3>
              
              {selectedRoom && (
                <div className="mb-6">
                  <img 
                    src={selectedRoom.image} 
                    alt={selectedRoom.name}
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                  <h4 className="font-semibold text-gray-900">{selectedRoom.name}</h4>
                  <p className="text-gray-600 text-sm">{selectedRoom.description}</p>
                </div>
              )}

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Check-in:</span>
                  <span className="font-medium">
                    {formData.checkIn ? new Date(formData.checkIn).toLocaleDateString() : 'Not selected'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Check-out:</span>
                  <span className="font-medium">
                    {formData.checkOut ? new Date(formData.checkOut).toLocaleDateString() : 'Not selected'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Nights:</span>
                  <span className="font-medium">{pricing.nights}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Guests:</span>
                  <span className="font-medium">{formData.guests}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Rooms:</span>
                  <span className="font-medium">{formData.rooms}</span>
                </div>
              </div>

              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal:</span>
                  <span>NPR {pricing.subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Service Charge (10%):</span>
                  <span>NPR {pricing.serviceCharge.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">VAT (13%):</span>
                  <span>NPR {pricing.tax.toLocaleString()}</span>
                </div>
                <div className="border-t pt-2 flex justify-between font-bold text-lg">
                  <span>Total:</span>
                  <span className="text-emerald-600">NPR {pricing.total.toLocaleString()}</span>
                </div>
              </div>

              <div className="mt-6 bg-emerald-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Star className="w-4 h-4 text-amber-500 fill-current" />
                  <span className="font-semibold text-emerald-900">Includes:</span>
                </div>
                <ul className="text-sm text-emerald-800 space-y-1">
                  <li>• Complimentary breakfast</li>
                  <li>• Free WiFi</li>
                  <li>• Airport pickup (on request)</li>
                  <li>• 24/7 concierge service</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingEngine;
