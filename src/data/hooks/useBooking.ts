import { useState, useEffect } from 'react';
import { BookingData, Room, GuestInfo, PaymentInfo } from '../types/booking';
import { roomsData, promoCodes } from '../data/rooms';
import { differenceInDays, isAfter, isBefore, addDays } from 'date-fns';

export const useBooking = () => {
  const [bookingData, setBookingData] = useState<BookingData>({
    checkIn: null,
    checkOut: null,
    guests: 2,
    rooms: 1,
    selectedRoom: '',
    promoCode: '',
    totalNights: 0,
    subtotal: 0,
    discount: 0,
    taxes: 0,
    total: 0
  });

  const [availableRooms, setAvailableRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Calculate pricing whenever booking data changes
  useEffect(() => {
    if (bookingData.checkIn && bookingData.checkOut && bookingData.selectedRoom) {
      calculatePricing();
    }
  }, [bookingData.checkIn, bookingData.checkOut, bookingData.selectedRoom, bookingData.rooms, bookingData.promoCode]);

  const calculatePricing = () => {
    if (!bookingData.checkIn || !bookingData.checkOut || !bookingData.selectedRoom) return;

    const selectedRoom = roomsData.find(room => room.id === bookingData.selectedRoom);
    if (!selectedRoom) return;

    const nights = differenceInDays(bookingData.checkOut, bookingData.checkIn);
    const subtotal = selectedRoom.basePrice * nights * bookingData.rooms;
    
    let discount = 0;
    if (bookingData.promoCode) {
      const promo = promoCodes.find(p => 
        p.code === bookingData.promoCode && 
        p.active &&
        isAfter(new Date(), p.validFrom) &&
        isBefore(new Date(), p.validTo)
      );
      
      if (promo) {
        discount = promo.type === 'percentage' 
          ? (subtotal * promo.discount) / 100
          : promo.discount;
      }
    }

    const taxRate = 0.13; // 13% tax
    const taxes = (subtotal - discount) * taxRate;
    const total = subtotal - discount + taxes;

    setBookingData(prev => ({
      ...prev,
      totalNights: nights,
      subtotal,
      discount,
      taxes,
      total
    }));
  };

  const checkAvailability = async (checkIn: Date, checkOut: Date, guests: number) => {
    setLoading(true);
    setError(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Filter rooms based on availability and guest capacity
      const available = roomsData.filter(room => 
        room.available && room.maxGuests >= guests
      );

      setAvailableRooms(available);
      
      if (available.length === 0) {
        setError('No rooms available for the selected dates and guest count.');
      }
    } catch (err) {
      setError('Failed to check availability. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const validateDates = (checkIn: Date, checkOut: Date): string | null => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (isBefore(checkIn, today)) {
      return 'Check-in date cannot be in the past.';
    }

    if (isBefore(checkOut, addDays(checkIn, 1))) {
      return 'Check-out date must be at least one day after check-in.';
    }

    const maxAdvanceBooking = addDays(today, 365); // 1 year advance booking
    if (isAfter(checkIn, maxAdvanceBooking)) {
      return 'Bookings can only be made up to 1 year in advance.';
    }

    return null;
  };

  const validatePromoCode = (code: string): boolean => {
    const promo = promoCodes.find(p => 
      p.code === code && 
      p.active &&
      isAfter(new Date(), p.validFrom) &&
      isBefore(new Date(), p.validTo)
    );
    return !!promo;
  };

  const updateBookingData = (updates: Partial<BookingData>) => {
    setBookingData(prev => ({ ...prev, ...updates }));
  };

  const resetBooking = () => {
    setBookingData({
      checkIn: null,
      checkOut: null,
      guests: 2,
      rooms: 1,
      selectedRoom: '',
      promoCode: '',
      totalNights: 0,
      subtotal: 0,
      discount: 0,
      taxes: 0,
      total: 0
    });
    setAvailableRooms([]);
    setError(null);
  };

  return {
    bookingData,
    availableRooms,
    loading,
    error,
    checkAvailability,
    validateDates,
    validatePromoCode,
    updateBookingData,
    resetBooking,
    calculatePricing
  };
};
