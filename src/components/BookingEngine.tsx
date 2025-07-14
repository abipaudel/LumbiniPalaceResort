import React, { useState } from 'react';
import { Calendar, Users, Tag, CreditCard, Check, AlertCircle, Loader } from 'lucide-react';
import { format, addDays } from 'date-fns';
import { useBooking } from '../hooks/useBooking';
import { roomsData } from '../data/rooms';
import { GuestInfo, PaymentInfo } from '../types/booking';

export default function BookingEngine() {
  const {
    bookingData,
    availableRooms,
    loading,
    error,
    checkAvailability,
    validateDates,
    validatePromoCode,
    updateBookingData,
    resetBooking
  } = useBooking();

  const [currentStep, setCurrentStep] = useState(1);
  const [guestInfo, setGuestInfo] = useState<GuestInfo>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    specialRequests: ''
  });
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
    billingAddress: {
      street: '',
      city: '',
      state: '',
      zipCode: '',
      country: ''
    }
  });
  const [promoError, setPromoError] = useState<string | null>(null);
  const [bookingComplete, setBookingComplete] = useState(false);

  const handleDateSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!bookingData.checkIn || !bookingData.checkOut) {
      return;
    }

    const dateError = validateDates(bookingData.checkIn, bookingData.checkOut);
    if (dateError) {
      alert(dateError);
      return;
    }

    await checkAvailability(bookingData.checkIn, bookingData.checkOut, bookingData.guests);
    if (availableRooms.length > 0) {
      setCurrentStep(2);
    }
  };

  const handleRoomSelection = (roomId: string) => {
    updateBookingData({ selectedRoom: roomId });
    setCurrentStep(3);
  };

  const handlePromoCode = () => {
    if (!bookingData.promoCode) {
      setPromoError('Please enter a promo code');
      return;
    }

    if (validatePromoCode(bookingData.promoCode)) {
      setPromoError(null);
      alert('Promo code applied successfully!');
    } else {
      setPromoError('Invalid or expired promo code');
    }
  };

  const handleGuestInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!guestInfo.firstName || !guestInfo.lastName || !guestInfo.email || !guestInfo.phone) {
      alert('Please fill in all required fields');
      return;
    }

    setCurrentStep(4);
  };

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate payment info
    if (!paymentInfo.cardNumber || !paymentInfo.expiryDate || !paymentInfo.cvv || !paymentInfo.cardholderName) {
      alert('Please fill in all payment details');
      return;
    }

    // Simulate payment processing
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setBookingComplete(true);
      setCurrentStep(5);
    } catch (error) {
      alert('Payment failed. Please try again.');
    }
  };

  const selectedRoom = roomsData.find(room => room.id === bookingData.selectedRoom);

  if (bookingComplete) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto text-center">
        <div className="mb-6">
          <Check className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-deep-green mb-2">Booking Confirmed!</h2>
          <p className="text-gray-600">Thank you for choosing Lumbini Palace Resort</p>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-4">Booking Details</h3>
          <div className="space-y-2 text-left">
            <p><strong>Guest:</strong> {guestInfo.firstName} {guestInfo.lastName}</p>
            <p><strong>Email:</strong> {guestInfo.email}</p>
            <p><strong>Room:</strong> {selectedRoom?.name}</p>
            <p><strong>Check-in:</strong> {bookingData.checkIn && format(bookingData.checkIn, 'MMM dd, yyyy')}</p>
            <p><strong>Check-out:</strong> {bookingData.checkOut && format(bookingData.checkOut, 'MMM dd, yyyy')}</p>
            <p><strong>Guests:</strong> {bookingData.guests}</p>
            <p><strong>Total Amount:</strong> ${bookingData.total.toFixed(2)}</p>
          </div>
        </div>
        
        <p className="text-sm text-gray-600 mb-4">
          A confirmation email has been sent to {guestInfo.email}
        </p>
        
        <button
          onClick={() => {
            resetBooking();
            setCurrentStep(1);
            setBookingComplete(false);
            setGuestInfo({
              firstName: '',
              lastName: '',
              email: '',
              phone: '',
              country: '',
              specialRequests: ''
            });
          }}
          className="bg-gold text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition-colors"
        >
          Make Another Booking
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
      {/* Progress Steps */}
      <div className="flex items-center justify-center mb-8">
        {[1, 2, 3, 4, 5].map((step) => (
          <div key={step} className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              step <= currentStep ? 'bg-gold text-white' : 'bg-gray-200 text-gray-600'
            }`}>
              {step}
            </div>
            {step < 5 && (
              <div className={`w-12 h-1 mx-2 ${
                step < currentStep ? 'bg-gold' : 'bg-gray-200'
              }`} />
            )}
          </div>
        ))}
      </div>

      {/* Step 1: Date Selection */}
      {currentStep === 1 && (
        <div>
          <h2 className="text-2xl font-bold text-deep-green mb-6">Select Your Dates</h2>
          <form onSubmit={handleDateSearch} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Calendar className="inline h-4 w-4 mr-1" />
                  Check-in
                </label>
                <input
                  type="date"
                  value={bookingData.checkIn ? format(bookingData.checkIn, 'yyyy-MM-dd') : ''}
                  min={format(new Date(), 'yyyy-MM-dd')}
                  max={format(addDays(new Date(), 365), 'yyyy-MM-dd')}
                  onChange={(e) => updateBookingData({ checkIn: new Date(e.target.value) })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Calendar className="inline h-4 w-4 mr-1" />
                  Check-out
                </label>
                <input
                  type="date"
                  value={bookingData.checkOut ? format(bookingData.checkOut, 'yyyy-MM-dd') : ''}
                  min={bookingData.checkIn ? format(addDays(bookingData.checkIn, 1), 'yyyy-MM-dd') : format(addDays(new Date(), 1), 'yyyy-MM-dd')}
                  max={format(addDays(new Date(), 365), 'yyyy-MM-dd')}
                  onChange={(e) => updateBookingData({ checkOut: new Date(e.target.value) })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Users className="inline h-4 w-4 mr-1" />
                  Guests
                </label>
                <select
                  value={bookingData.guests}
                  onChange={(e) => updateBookingData({ guests: parseInt(e.target.value) })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                >
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Rooms</label>
                <select
                  value={bookingData.rooms}
                  onChange={(e) => updateBookingData({ rooms: parseInt(e.target.value) })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                >
                  {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num}>{num} Room{num > 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>
            </div>

            {error && (
              <div className="flex items-center text-red-600 bg-red-50 p-3 rounded-md">
                <AlertCircle className="h-5 w-5 mr-2" />
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gold text-white py-3 rounded-md hover:bg-yellow-600 transition-colors font-medium flex items-center justify-center"
            >
              {loading ? (
                <>
                  <Loader className="animate-spin h-5 w-5 mr-2" />
                  Checking Availability...
                </>
              ) : (
                'Check Availability'
              )}
            </button>
          </form>
        </div>
      )}

      {/* Step 2: Room Selection */}
      {currentStep === 2 && (
        <div>
          <h2 className="text-2xl font-bold text-deep-green mb-6">Select Your Room</h2>
          <div className="space-y-4">
            {availableRooms.map((room) => (
              <div key={room.id} className="border border-gray-200 rounded-lg p-4 hover:border-gold transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-deep-green mb-2">{room.name}</h3>
                    <p className="text-gray-600 mb-2">{room.description}</p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {room.amenities.slice(0, 3).map((amenity, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                          {amenity}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">Max {room.maxGuests} guests</p>
                  </div>
                  <div className="text-right ml-4">
                    <div className="text-2xl font-bold text-gold">${room.basePrice}</div>
                    <div className="text-sm text-gray-600">per night</div>
                    <button
                      onClick={() => handleRoomSelection(room.id)}
                      className="mt-2 bg-gold text-white px-4 py-2 rounded hover:bg-yellow-600 transition-colors"
                    >
                      Select Room
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Step 3: Review & Promo Code */}
      {currentStep === 3 && selectedRoom && (
        <div>
          <h2 className="text-2xl font-bold text-deep-green mb-6">Review Your Booking</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold mb-4">Booking Summary</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Room:</span>
                    <span>{selectedRoom.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Check-in:</span>
                    <span>{bookingData.checkIn && format(bookingData.checkIn, 'MMM dd, yyyy')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Check-out:</span>
                    <span>{bookingData.checkOut && format(bookingData.checkOut, 'MMM dd, yyyy')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Nights:</span>
                    <span>{bookingData.totalNights}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Guests:</span>
                    <span>{bookingData.guests}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Rooms:</span>
                    <span>{bookingData.rooms}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Tag className="inline h-4 w-4 mr-1" />
                    Promo Code (Optional)
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      value={bookingData.promoCode}
                      onChange={(e) => {
                        updateBookingData({ promoCode: e.target.value.toUpperCase() });
                        setPromoError(null);
                      }}
                      placeholder="Enter promo code"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gold"
                    />
                    <button
                      type="button"
                      onClick={handlePromoCode}
                      className="bg-deep-green text-white px-4 py-2 rounded-r-md hover:bg-green-700 transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                  {promoError && (
                    <p className="text-red-600 text-sm mt-1">{promoError}</p>
                  )}
                  <div className="mt-2 text-sm text-gray-600">
                    <p>Try: WELCOME10, SPRING25, or FAMILY15</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-deep-green text-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Price Breakdown</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>${bookingData.subtotal.toFixed(2)}</span>
                  </div>
                  {bookingData.discount > 0 && (
                    <div className="flex justify-between text-green-300">
                      <span>Discount:</span>
                      <span>-${bookingData.discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Taxes & Fees:</span>
                    <span>${bookingData.taxes.toFixed(2)}</span>
                  </div>
                  <hr className="border-white/20" />
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total:</span>
                    <span>${bookingData.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setCurrentStep(4)}
                className="w-full mt-6 bg-gold text-white py-3 rounded-md hover:bg-yellow-600 transition-colors font-medium"
              >
                Continue to Guest Information
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Step 4: Guest Information */}
      {currentStep === 4 && (
        <div>
          <h2 className="text-2xl font-bold text-deep-green mb-6">Guest Information</h2>
          <form onSubmit={handleGuestInfoSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  value={guestInfo.firstName}
                  onChange={(e) => setGuestInfo(prev => ({ ...prev, firstName: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  value={guestInfo.lastName}
                  onChange={(e) => setGuestInfo(prev => ({ ...prev, lastName: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={guestInfo.email}
                  onChange={(e) => setGuestInfo(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={guestInfo.phone}
                  onChange={(e) => setGuestInfo(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Country
              </label>
              <select
                value={guestInfo.country}
                onChange={(e) => setGuestInfo(prev => ({ ...prev, country: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <option value="">Select Country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="UK">United Kingdom</option>
                <option value="AU">Australia</option>
                <option value="IN">India</option>
                <option value="NP">Nepal</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Special Requests (Optional)
              </label>
              <textarea
                value={guestInfo.specialRequests}
                onChange={(e) => setGuestInfo(prev => ({ ...prev, specialRequests: e.target.value }))}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                placeholder="Any special requests or requirements..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gold text-white py-3 rounded-md hover:bg-yellow-600 transition-colors font-medium"
            >
              Continue to Payment
            </button>
          </form>
        </div>
      )}

      {/* Step 5: Payment */}
      {currentStep === 5 && (
        <div>
          <h2 className="text-2xl font-bold text-deep-green mb-6">
            <CreditCard className="inline h-6 w-6 mr-2" />
            Payment Information
          </h2>
          <form onSubmit={handlePaymentSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Card Number *
              </label>
              <input
                type="text"
                value={paymentInfo.cardNumber}
                onChange={(e) => setPaymentInfo(prev => ({ ...prev, cardNumber: e.target.value }))}
                placeholder="1234 5678 9012 3456"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expiry Date *
                </label>
                <input
                  type="text"
                  value={paymentInfo.expiryDate}
                  onChange={(e) => setPaymentInfo(prev => ({ ...prev, expiryDate: e.target.value }))}
                  placeholder="MM/YY"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  CVV *
                </label>
                <input
                  type="text"
                  value={paymentInfo.cvv}
                  onChange={(e) => setPaymentInfo(prev => ({ ...prev, cvv: e.target.value }))}
                  placeholder="123"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cardholder Name *
                </label>
                <input
                  type="text"
                  value={paymentInfo.cardholderName}
                  onChange={(e) => setPaymentInfo(prev => ({ ...prev, cardholderName: e.target.value }))}
                  placeholder="John Doe"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                  required
                />
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Final Total: ${bookingData.total.toFixed(2)}</h3>
              <p className="text-sm text-gray-600">
                By completing this booking, you agree to our Terms & Conditions and Privacy Policy.
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-deep-green text-white py-3 rounded-md hover:bg-green-700 transition-colors font-medium"
            >
              Complete Booking
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
