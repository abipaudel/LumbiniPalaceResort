import React, { createContext, useContext, useState, ReactNode } from 'react';

interface BookingState {
  checkIn: Date | null;
  checkOut: Date | null;
  guests: number;
  rooms: number;
  promoCode: string;
  selectedRoom: string;
}

interface BookingContextType {
  booking: BookingState;
  setBooking: (booking: Partial<BookingState>) => void;
  resetBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

const initialBookingState: BookingState = {
  checkIn: null,
  checkOut: null,
  guests: 2,
  rooms: 1,
  promoCode: '',
  selectedRoom: '',
};

export default function BookingProvider({ children }: { children: ReactNode }) {
  const [booking, setBookingState] = useState<BookingState>(initialBookingState);

  const setBooking = (updates: Partial<BookingState>) => {
    setBookingState(prev => ({ ...prev, ...updates }));
  };

  const resetBooking = () => {
    setBookingState(initialBookingState);
  };

  return (
    <BookingContext.Provider value={{ booking, setBooking, resetBooking }}>
      {children}
    </BookingContext.Provider>
  );
}

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
